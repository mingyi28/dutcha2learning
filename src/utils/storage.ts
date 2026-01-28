import { UserProgress, Word } from '../types';
import { words } from '../data/words';
import { format, isSameDay, parseISO, subDays } from 'date-fns';

const STORAGE_KEY = 'dutch_app_progress';

const INITIAL_PROGRESS: UserProgress = {
  lastCheckInDate: null,
  consecutiveDays: 0,
  totalLearned: 0,
  learnedWordIds: [],
  todayLearnedIds: [],
  todayTargetIds: [],
  lastLearnDate: null,
  checkInHistory: [],
  dailyLearningRecords: {},
  dailyReviewStatus: {},
  masteredWordIds: [],
  difficultWordIds: [],
  lastReviewDate: null,
  todayReviewTargetIds: [],
  todayReviewedWordIds: []
};

export const getProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Migration: merge with INITIAL_PROGRESS to ensure all fields exist
      return { ...INITIAL_PROGRESS, ...parsed };
    } catch (e) {
      console.error('Failed to parse progress', e);
      return { ...INITIAL_PROGRESS };
    }
  }
  return { ...INITIAL_PROGRESS };
};

export const saveProgress = (progress: UserProgress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const initTodayWords = (forceNew: boolean = false): Word[] => {
  const progress = getProgress();
  const today = format(new Date(), 'yyyy-MM-dd');

  // 如果不是强制刷新，且已经是今天，且有目标，直接返回目标单词
  if (!forceNew && progress.lastLearnDate === today && progress.todayTargetIds.length > 0) {
    return words.filter(w => progress.todayTargetIds.includes(w.id));
  }

  // 如果是新的一天，或者还没有目标，或者强制刷新
  // 1. 重置今日已学
  progress.todayLearnedIds = [];
  progress.lastLearnDate = today;

  // 2. 选择新单词
  const learnedSet = new Set(progress.learnedWordIds);
  let availableWords = words.filter(w => !learnedSet.has(w.id));
  
  // 如果所有单词都学完了，从头开始复习（或者随机选）
  if (availableWords.length === 0) {
    availableWords = words;
  }
  
  // 选取前10个
  const newTargetIds = availableWords.slice(0, 10).map(w => w.id);
  progress.todayTargetIds = newTargetIds;

  saveProgress(progress);
  
  return words.filter(w => newTargetIds.includes(w.id));
};

export const markWordAsLearned = (wordId: number) => {
  const progress = getProgress();
  const today = format(new Date(), 'yyyy-MM-dd');

  if (!progress.learnedWordIds.includes(wordId)) {
    progress.learnedWordIds.push(wordId);
    progress.totalLearned = progress.learnedWordIds.length;
  }
  if (!progress.todayLearnedIds.includes(wordId)) {
    progress.todayLearnedIds.push(wordId);
  }

  // Record daily learning
  if (!progress.dailyLearningRecords) {
    progress.dailyLearningRecords = {};
  }
  if (!progress.dailyLearningRecords[today]) {
    progress.dailyLearningRecords[today] = [];
  }
  if (!progress.dailyLearningRecords[today].includes(wordId)) {
    progress.dailyLearningRecords[today].push(wordId);
  }

  saveProgress(progress);
};

export const checkIn = (): boolean => {
  const progress = getProgress();
  const today = format(new Date(), 'yyyy-MM-dd');

  if (progress.lastCheckInDate === today) {
    return false; // 已经打卡
  }

  // 检查连续打卡
  if (progress.lastCheckInDate) {
    const lastDate = parseISO(progress.lastCheckInDate);
    const yesterday = subDays(new Date(), 1);
    if (isSameDay(lastDate, yesterday)) {
      progress.consecutiveDays += 1;
    } else {
      progress.consecutiveDays = 1;
    }
  } else {
    progress.consecutiveDays = 1;
  }

  progress.lastCheckInDate = today;
  
  // 记录打卡历史
  if (!progress.checkInHistory) {
    progress.checkInHistory = [];
  }
  if (!progress.checkInHistory.includes(today)) {
    progress.checkInHistory.push(today);
  }

  saveProgress(progress);
  return true;
};

export const getReviewWords = (count: number = 10, forceRefresh: boolean = false): Word[] => {
  const progress = getProgress();
  const today = format(new Date(), 'yyyy-MM-dd');
  
  // Check if we need to generate new review words
  const isNewDay = progress.lastReviewDate !== today;
  const hasNoTarget = !progress.todayReviewTargetIds || progress.todayReviewTargetIds.length === 0;
  
  if (forceRefresh || isNewDay || hasNoTarget) {
    // Reset for new day or refresh
    progress.lastReviewDate = today;
    progress.todayReviewedWordIds = [];
    
    const learnedIds = progress.learnedWordIds;
    const masteredSet = new Set(progress.masteredWordIds || []);
    
    // Filter out mastered words from review candidates
    const candidates = learnedIds.filter(id => !masteredSet.has(id));
    
    if (candidates.length === 0) {
      progress.todayReviewTargetIds = [];
      saveProgress(progress);
      return [];
    }

    // Shuffle and pick
    const shuffled = [...candidates].sort(() => 0.5 - Math.random());
    const selectedIds = shuffled.slice(0, count);
    
    progress.todayReviewTargetIds = selectedIds;
    saveProgress(progress);
  }
  
  // Return words based on stored IDs
  const targetIds = progress.todayReviewTargetIds || [];
  // We want to return all target words, but maybe sort them so unreviewed come first?
  // Or just return them as is, and let the UI handle "next".
  // The UI iterates through the list.
  
  // Let's return them in the stored order.
  // But wait, if we want to support "shuffle in daily learning group", we might need to shuffle this list in place?
  // The user said "in daily learning group can shuffle".
  // If this refers to the review list, we can just shuffle the targetIds when generating.
  
  return words.filter(w => targetIds.includes(w.id)).sort((a, b) => {
    return targetIds.indexOf(a.id) - targetIds.indexOf(b.id);
  });
};

export const markWordAsReviewed = (wordId: number) => {
  const progress = getProgress();
  if (!progress.todayReviewedWordIds) {
    progress.todayReviewedWordIds = [];
  }
  if (!progress.todayReviewedWordIds.includes(wordId)) {
    progress.todayReviewedWordIds.push(wordId);
    saveProgress(progress);
  }
};

export const shuffleCurrentReviewWords = () => {
  const progress = getProgress();
  if (progress.todayReviewTargetIds && progress.todayReviewTargetIds.length > 0) {
    // Only shuffle unreviewed words? Or all?
    // Usually shuffle all remaining or just shuffle the whole list order.
    // Let's shuffle the whole list order.
    progress.todayReviewTargetIds.sort(() => 0.5 - Math.random());
    saveProgress(progress);
  }
};

export const getDailyReviewStatus = (date: string): boolean => {
  const progress = getProgress();
  return progress.dailyReviewStatus?.[date] || false;
};

export const setDailyReviewStatus = (date: string, status: boolean) => {
  const progress = getProgress();
  if (!progress.dailyReviewStatus) {
    progress.dailyReviewStatus = {};
  }
  progress.dailyReviewStatus[date] = status;
  saveProgress(progress);
};

export const toggleDifficultWord = (wordId: number) => {
  const progress = getProgress();
  if (!progress.difficultWordIds) {
    progress.difficultWordIds = [];
  }
  
  const index = progress.difficultWordIds.indexOf(wordId);
  if (index > -1) {
    progress.difficultWordIds.splice(index, 1);
  } else {
    progress.difficultWordIds.push(wordId);
  }
  saveProgress(progress);
};

export const isDifficultWord = (wordId: number): boolean => {
  const progress = getProgress();
  return progress.difficultWordIds?.includes(wordId) || false;
};

export const markWordAsMastered = (wordId: number) => {
  const progress = getProgress();
  if (!progress.masteredWordIds) {
    progress.masteredWordIds = [];
  }
  
  if (!progress.masteredWordIds.includes(wordId)) {
    progress.masteredWordIds.push(wordId);
  }
  
  // 如果在生词本中，移除
  if (progress.difficultWordIds) {
    const index = progress.difficultWordIds.indexOf(wordId);
    if (index > -1) {
      progress.difficultWordIds.splice(index, 1);
    }
  }
  
  saveProgress(progress);
};

export const isMasteredWord = (wordId: number): boolean => {
  const progress = getProgress();
  return progress.masteredWordIds?.includes(wordId) || false;
};

export const getDifficultWords = (): Word[] => {
  const progress = getProgress();
  const ids = progress.difficultWordIds || [];
  return words.filter(w => ids.includes(w.id));
};

export const getRelearnWords = (options: { shuffle: boolean; skipMastered: boolean }): Word[] => {
  const today = format(new Date(), 'yyyy-MM-dd');
  let wordList = getLearnedWordsByDate(today);
  
  if (options.skipMastered) {
    const progress = getProgress();
    const masteredSet = new Set(progress.masteredWordIds || []);
    wordList = wordList.filter(w => !masteredSet.has(w.id));
  }
  
  if (options.shuffle) {
    wordList = [...wordList].sort(() => 0.5 - Math.random());
  }
  
  return wordList;
};

export const getLearnedWordsByDate = (date: string): Word[] => {
  const progress = getProgress();
  const ids = progress.dailyLearningRecords?.[date] || [];
  return words.filter(w => ids.includes(w.id));
};

export const getReviewHistory = (days: number = 7): { date: string; count: number; reviewed: boolean }[] => {
  const progress = getProgress();
  const history: { date: string; count: number; reviewed: boolean }[] = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = subDays(today, i);
    const dateStr = format(date, 'yyyy-MM-dd');
    const count = progress.dailyLearningRecords?.[dateStr]?.length || 0;
    
    if (count > 0) {
      history.push({
        date: dateStr,
        count,
        reviewed: getDailyReviewStatus(dateStr)
      });
    }
  }
  return history;
};

export const getAllTodayLearnedWords = (): Word[] => {
  const today = format(new Date(), 'yyyy-MM-dd');
  return getLearnedWordsByDate(today);
};