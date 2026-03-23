import { Word } from '../types';
import pronunciationJson from './words_pronunciation.json';
import dutchRaw from './words_dutch.txt?raw';
import chineseRaw from './words_chinese.txt?raw';
import englishRaw from './words_english.txt?raw';

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
      const word = parts.slice(1).join('|').trim(); // 用slice(1).join('|')防止内容本身含有|
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
];

// 发音数据库缓存
let pronunciationCache: Map<number, string> | null = null;

// 加载发音数据（直接使用import导入的JSON）
function loadPronunciationData(): Map<number, string> {
  if (pronunciationCache) {
    return pronunciationCache;
  }
  
  try {
    const pronunciationMap = new Map<number, string>();
    
    // 将发音数据转换为Map格式
    const pronunciations = (pronunciationJson as any).pronunciations;
    if (pronunciations) {
      Object.keys(pronunciations).forEach(key => {
        const id = parseInt(key, 10);
        const pronunciation = pronunciations[key];
        if (!isNaN(id) && pronunciation) {
          pronunciationMap.set(id, pronunciation);
        }
      });
    }
    
    pronunciationCache = pronunciationMap;
    console.log(`Loaded pronunciation data for ${pronunciationMap.size} words`);
    return pronunciationMap;
  } catch (error) {
    console.error('Error loading pronunciation data:', error);
    return new Map();
  }
}

// 生成简单的例句
function generateExample(dutch: string, chinese: string): { example: string; example_cn: string } {
  // 基于单词生成简单的例句模板
  const templates = [
    { nl: `Ik gebruik ${dutch}.`, cn: `我使用${chinese}。` },
    { nl: `Dit is ${dutch}.`, cn: `这是${chinese}。` },
    { nl: `Ik heb ${dutch} nodig.`, cn: `我需要${chinese}。` },
    { nl: `Dat is een ${dutch}.`, cn: `那是一个${chinese}。` },
    { nl: `Ik ken ${dutch}.`, cn: `我认识${chinese}。` },
  ];
  const t = templates[Math.abs(hashCode(dutch)) % templates.length];
  return { example: t.nl, example_cn: t.cn };
}

// 简单的哈希函数用于一致性选择模板
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return hash;
}

// 从三个txt文件加载真实单词数据（使用Vite ?raw导入）
async function loadWordsFromFiles(): Promise<Word[]> {
  try {
    console.log('正在从纯文本文件加载单词数据...');
    
    // 直接使用已导入的原始文本和发音数据
    const pronunciations = loadPronunciationData();
    
    const dutchMap = readWordFile(dutchRaw);
    const chineseMap = readWordFile(chineseRaw);
    const englishMap = readWordFile(englishRaw);
    
    console.log(`加载完成: 荷兰语 ${dutchMap.size} 个, 中文 ${chineseMap.size} 个, 英文 ${englishMap.size} 个`);
    
    if (dutchMap.size === 0) {
      throw new Error('荷兰语单词文件为空');
    }
    
    // 以荷兰语文件的ID为基准，合并三种语言
    const words: Word[] = [];
    const sortedIds = Array.from(dutchMap.keys()).sort((a, b) => a - b);
    
    for (const id of sortedIds) {
      const dutch = dutchMap.get(id) || '';
      const chinese = chineseMap.get(id) || '';
      const english = englishMap.get(id) || '';
      const pronunciation = pronunciations.get(id) || '';
      
      if (!dutch) continue;
      
      // 生成例句
      const { example, example_cn } = generateExample(dutch, chinese || english);
      
      words.push({
        id,
        dutch,
        chinese,
        english,
        example,
        example_cn,
        pronunciation,
      });
    }
    
    console.log(`成功加载 ${words.length} 个单词`);
    return words;
    
  } catch (error) {
    console.error('从文件加载单词数据失败，使用回退数据:', error);
    return fallbackWords;
  }
}

// 主导出：异步加载的单词数据
let wordsData: Word[] | null = null;

export async function getWords(): Promise<Word[]> {
  if (!wordsData) {
    wordsData = await loadWordsFromFiles();
  }
  return wordsData;
}

// 导出示例数据用于初始渲染
export const exampleWords: Word[] = fallbackWords;

// 用于同步获取函数（数据已加载后使用）
export function getWordsSync(): Word[] {
  if (wordsData) {
    return wordsData;
  }
  return exampleWords;
}

// 初始化函数 - 在应用启动时调用
export async function initWords(): Promise<void> {
  if (!wordsData) {
    wordsData = await loadWordsFromFiles();
  }
}