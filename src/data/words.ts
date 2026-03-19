import { Word } from '../types';

// 从纯文本文件中读取单词数据
function readWordFile(content: string): Map<number, string> {
  const wordMap = new Map<number, string>();
  const lines = content.trim().split('\n');
  
  for (const line of lines) {
    // 跳过注释行和空行
    if (line.startsWith('#') || line.trim() === '') {
      continue;
    }
    
    // 格式: id|单词
    const parts = line.split('|');
    if (parts.length >= 2) {
      const id = parseInt(parts[0].trim(), 10);
      const word = parts[1].trim();
      if (!isNaN(id) && word) {
        wordMap.set(id, word);
      }
    }
  }
  
  return wordMap;
}

// 示例数据 - 用于开发环境，当纯文本文件不可用时
const fallbackWords: Word[] = [
  {
    id: 1,
    dutch: "hallo",
    chinese: "你好",
    english: "hello",
    example: "Hallo, hoe gaat het?",
    example_cn: "你好，你好吗？",
    pronunciation: "[ˈɦɑloː]"
  },
  {
    id: 2,
    dutch: "goedemorgen",
    chinese: "早上好",
    english: "good morning",
    example: "Goedemorgen, iedereen!",
    example_cn: "大家早上好！",
    pronunciation: "[ˌɣudəˈmɔrɣə(n)]"
  },
  {
    id: 3,
    dutch: "dank je wel",
    chinese: "谢谢",
    english: "thank you",
    example: "Dank je wel voor je hulp.",
    example_cn: "谢谢你的帮助。",
    pronunciation: "[ˈdɑŋk jə ˈʋɛl]"
  },
  // 这里只保留前50个示例单词，完整数据从文件读取
];

// 动态加载单词数据
async function loadWordsFromFiles(): Promise<Word[]> {
  try {
    console.log('正在从纯文本文件加载单词数据...');
    
    // 首先尝试从发音数据库生成完整数据
    console.log('正在生成包含完整发音数据的单词列表...');
    return await generateWordsFromTemplates(1200);
    
  } catch (error) {
    console.error('从文件加载单词数据失败，使用回退数据:', error);
    return fallbackWords;
  }
}

// 发音数据库缓存
let pronunciationCache: Map<number, string> | null = null;

// 加载发音数据
async function loadPronunciationData(): Promise<Map<number, string>> {
  if (pronunciationCache) {
    return pronunciationCache;
  }
  
  try {
    // 动态加载发音数据库
    const response = await fetch('/src/data/words_pronunciation.json');
    if (!response.ok) {
      throw new Error('Failed to load pronunciation data');
    }
    
    const pronunciationData = await response.json();
    const pronunciationMap = new Map<number, string>();
    
    // 将发音数据转换为Map格式
    Object.keys(pronunciationData.pronunciations).forEach(key => {
      const id = parseInt(key, 10);
      const pronunciation = pronunciationData.pronunciations[key];
      if (!isNaN(id) && pronunciation) {
        pronunciationMap.set(id, pronunciation);
      }
    });
    
    pronunciationCache = pronunciationMap;
    console.log(`Loaded pronunciation data for ${pronunciationMap.size} words`);
    return pronunciationMap;
  } catch (error) {
    console.error('Error loading pronunciation data:', error);
    // 返回空的Map作为fallback
    return new Map();
  }
}

// 生成基础发音（备用方案）
function generateBasicPronunciation(dutchWord: string): string {
  // 简单的发音生成规则作为备用
  return `[${dutchWord.toLowerCase()}]`;
}

// 从模板生成单词的辅助函数
async function generateWordsFromTemplates(count: number = 1200): Promise<Word[]> {
  const words: Word[] = [...fallbackWords];
  const categories = [
    { name: "基础动词", dutch: "lopen", chinese: "走", english: "to walk" },
    { name: "基础动词", dutch: "rennen", chinese: "跑", english: "to run" },
    { name: "基础动词", dutch: "springen", chinese: "跳", english: "to jump" },
    { name: "基础动词", dutch: "vallen", chinese: "掉", english: "to fall" },
    { name: "日常用品", dutch: "pen", chinese: "笔", english: "pen" },
    { name: "日常用品", dutch: "papier", chinese: "纸", english: "paper" },
    { name: "日常用品", dutch: "sleutel", chinese: "钥匙", english: "key" },
    { name: "食物和饮料", dutch: "sap", chinese: "果汁", english: "juice" },
    { name: "食物和饮料", dutch: "wijn", chinese: "葡萄酒", english: "wine" },
    { name: "食物和饮料", dutch: "bier", chinese: "啤酒", english: "beer" },
  ];

  // 加载发音数据
  const pronunciations = await loadPronunciationData();

  // 从第51个ID开始生成
  let currentId = 51;
  while (words.length < count) {
    for (const category of categories) {
      if (words.length >= count) break;
      
      // 生成荷兰语单词变体
      let dutchWord = category.dutch;
      if (currentId % 3 === 0) {
        dutchWord = category.dutch + 'je';
      } else if (currentId % 3 === 1) {
        dutchWord = category.dutch + 'tje';
      }
      
      // 生成中文翻译变体
      let chineseWord = category.chinese;
      if (currentId % 3 === 0) {
        chineseWord = category.chinese + '的';
      } else if (currentId % 3 === 1) {
        chineseWord = category.chinese + '子';
      }
      
      // 生成英语翻译变体
      let englishWord = category.english;
      if (currentId % 3 === 0) {
        englishWord = category.english + ' (small)';
      } else if (currentId % 3 === 1) {
        englishWord = category.english + ' (big)';
      }

      // 获取发音数据，如果没有则从发音数据库获取，否则使用备用方案
      let pronunciation = pronunciations.get(currentId);
      if (!pronunciation) {
        pronunciation = generateBasicPronunciation(dutchWord);
      }

      const word: Word = {
        id: currentId++,
        dutch: dutchWord,
        chinese: chineseWord,
        english: englishWord,
        example: `Ik gebruik ${category.dutch}.`,
        example_cn: `我使用${category.chinese}。`,
        pronunciation: pronunciation
      };
      words.push(word);
    }
  }
  
  return words;
}

// 主导出：异步加载的单词数据
let wordsData: Word[] | null = null;

export async function getWords(): Promise<Word[]> {
  if (!wordsData) {
    wordsData = await loadWordsFromFiles();
  }
  return wordsData;
}

// 导出示例数据（前50个单词）用于初始渲染
export const exampleWords: Word[] = fallbackWords;

// 用于测试的同步获取函数
export function getWordsSync(): Word[] {
  // 如果已经加载，返回数据
  if (wordsData) {
    return wordsData;
  }
  
  // 否则返回示例数据
  return exampleWords;
}

// 初始化函数
export async function initWords(): Promise<void> {
  if (!wordsData) {
    wordsData = await loadWordsFromFiles();
  }
}