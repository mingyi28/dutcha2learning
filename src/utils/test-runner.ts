import { reactive } from 'vue';

export interface TestCase {
  name: string;
  fn: () => void | Promise<void>;
  status: 'pending' | 'passed' | 'failed';
  error?: any;
}

export interface TestSuite {
  name: string;
  cases: TestCase[];
}

export const testSuites = reactive<TestSuite[]>([]);

let currentSuite: TestSuite | null = null;

export function describe(name: string, fn: () => void) {
  const suite: TestSuite = { name, cases: [] };
  currentSuite = suite;
  testSuites.push(suite);
  fn();
  currentSuite = null;
}

export function it(name: string, fn: () => void | Promise<void>) {
  if (!currentSuite) {
    throw new Error('it must be called inside describe');
  }
  currentSuite.cases.push({
    name,
    fn,
    status: 'pending'
  });
}

export function expect(actual: any) {
  return {
    toBe(expected: any) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toEqual(expected: any) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
      }
    },
    toBeTruthy() {
      if (!actual) {
        throw new Error(`Expected ${actual} to be truthy`);
      }
    },
    toBeFalsy() {
      if (actual) {
        throw new Error(`Expected ${actual} to be falsy`);
      }
    },
    toBeGreaterThan(expected: number) {
      if (actual <= expected) {
        throw new Error(`Expected ${actual} to be greater than ${expected}`);
      }
    },
    toContain(item: any) {
      if (Array.isArray(actual)) {
        if (!actual.includes(item)) {
           throw new Error(`Expected array to contain ${item}`);
        }
      } else if (actual instanceof Set) {
         if (!actual.has(item)) {
           throw new Error(`Expected Set to contain ${item}`);
         }
      } else if (typeof actual === 'string') {
        if (!actual.includes(item)) {
          throw new Error(`Expected string to contain ${item}`);
        }
      } else {
         throw new Error(`Expected ${actual} to be an Array, Set or String`);
      }
    },
    toBeDefined() {
      if (actual === undefined) {
        throw new Error('Expected value to be defined');
      }
    }
  };
}

const STORAGE_KEY = 'dutch_app_progress';
let backupData: string | null = null;

export function setupTestEnv() {
  backupData = localStorage.getItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_KEY);
}

export function teardownTestEnv() {
  if (backupData) {
    localStorage.setItem(STORAGE_KEY, backupData);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export async function runTests() {
  // Clear previous results
  // Note: We don't clear testSuites array because describe() calls populate it.
  // But we should reset status if we re-run.
  for (const suite of testSuites) {
    for (const testCase of suite.cases) {
      testCase.status = 'pending';
      testCase.error = undefined;
    }
  }

  setupTestEnv();
  try {
    for (const suite of testSuites) {
      for (const testCase of suite.cases) {
        try {
          await testCase.fn();
          testCase.status = 'passed';
        } catch (e) {
          testCase.status = 'failed';
          testCase.error = e;
          console.error(`Test failed: ${suite.name} - ${testCase.name}`, e);
        }
      }
    }
  } finally {
    teardownTestEnv();
  }
}
