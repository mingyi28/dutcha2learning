<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { testSuites, runTests } from '../utils/test-runner';
import '../tests/storage.test'; // Import to register tests

const isRunning = ref(false);

onMounted(async () => {
  isRunning.value = true;
  // Small delay to show loading state
  setTimeout(async () => {
    await runTests();
    isRunning.value = false;
  }, 500);
});

const reRun = async () => {
  isRunning.value = true;
  await runTests();
  isRunning.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-6 border-b border-gray-100 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-800">测试运行器</h1>
        <button 
          @click="reRun" 
          class="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
          :disabled="isRunning"
        >
          {{ isRunning ? '运行中...' : '重新运行' }}
        </button>
      </div>

      <div class="p-6 space-y-6">
        <div v-for="(suite, index) in testSuites" :key="index" class="space-y-3">
          <h2 class="font-bold text-gray-700 border-b border-gray-100 pb-2">{{ suite.name }}</h2>
          
          <div class="space-y-2">
            <div 
              v-for="(testCase, cIndex) in suite.cases" 
              :key="cIndex"
              class="flex items-start gap-3 p-3 rounded-lg transition-colors"
              :class="{
                'bg-gray-50': testCase.status === 'pending',
                'bg-green-50': testCase.status === 'passed',
                'bg-red-50': testCase.status === 'failed'
              }"
            >
              <div class="mt-1">
                <div v-if="testCase.status === 'pending'" class="w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"></div>
                <div v-else-if="testCase.status === 'passed'" class="w-4 h-4 text-green-500">✓</div>
                <div v-else class="w-4 h-4 text-red-500">✗</div>
              </div>
              
              <div class="flex-1">
                <p class="text-sm font-medium" :class="{
                  'text-gray-600': testCase.status === 'pending',
                  'text-green-800': testCase.status === 'passed',
                  'text-red-800': testCase.status === 'failed'
                }">{{ testCase.name }}</p>
                
                <div v-if="testCase.error" class="mt-2 text-xs text-red-600 bg-red-100 p-2 rounded overflow-x-auto font-mono">
                  {{ testCase.error.message || testCase.error }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="testSuites.length === 0" class="text-center text-gray-500 py-8">
          没有找到测试套件
        </div>
      </div>
    </div>
  </div>
</template>
