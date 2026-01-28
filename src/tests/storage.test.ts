import { describe, it, expect } from '../utils/test-runner';
import { initTodayWords, markWordAsLearned, checkIn, getProgress, saveProgress } from '../utils/storage';
import { format, subDays } from 'date-fns';

describe('Storage Utils', () => {
  it('initTodayWords should generate 10 new words', () => {
    const words = initTodayWords(true);
    expect(words.length).toBe(10);
    
    const progress = getProgress();
    expect(progress.todayTargetIds.length).toBe(10);
    expect(progress.lastLearnDate).toBe(format(new Date(), 'yyyy-MM-dd'));
  });

  it('markWordAsLearned should update learned words and daily records', () => {
    // Setup: ensure we have some words
    const words = initTodayWords(true);
    const wordId = words[0].id;
    
    markWordAsLearned(wordId);
    
    const progress = getProgress();
    expect(progress.learnedWordIds).toContain(wordId);
    expect(progress.todayLearnedIds).toContain(wordId);
    
    const today = format(new Date(), 'yyyy-MM-dd');
    expect(progress.dailyLearningRecords).toBeDefined();
    if (progress.dailyLearningRecords) {
        expect(progress.dailyLearningRecords[today]).toBeDefined();
        expect(progress.dailyLearningRecords[today]).toContain(wordId);
    }
  });

  it('checkIn should update check-in history', () => {
    // Reset progress for clean state
    saveProgress({
      lastCheckInDate: null,
      consecutiveDays: 0,
      totalLearned: 0,
      learnedWordIds: [],
      todayLearnedIds: [],
      todayTargetIds: [],
      lastLearnDate: null,
      checkInHistory: [],
      dailyLearningRecords: {}
    });

    const success = checkIn();
    expect(success).toBe(true);
    
    const progress = getProgress();
    const today = format(new Date(), 'yyyy-MM-dd');
    
    expect(progress.lastCheckInDate).toBe(today);
    expect(progress.consecutiveDays).toBe(1);
    expect(progress.checkInHistory).toContain(today);
    
    // Check in again should return false
    const success2 = checkIn();
    expect(success2).toBe(false);
  });

  it('checkIn should increment consecutiveDays if checked in yesterday', () => {
    const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');
    
    saveProgress({
      lastCheckInDate: yesterday,
      consecutiveDays: 5,
      totalLearned: 0,
      learnedWordIds: [],
      todayLearnedIds: [],
      todayTargetIds: [],
      lastLearnDate: null,
      checkInHistory: [yesterday],
      dailyLearningRecords: {}
    });

    const success = checkIn();
    expect(success).toBe(true);
    
    const progress = getProgress();
    expect(progress.consecutiveDays).toBe(6);
  });

  it('checkIn should reset consecutiveDays if missed a day', () => {
    const twoDaysAgo = format(subDays(new Date(), 2), 'yyyy-MM-dd');
    
    saveProgress({
      lastCheckInDate: twoDaysAgo,
      consecutiveDays: 5,
      totalLearned: 0,
      learnedWordIds: [],
      todayLearnedIds: [],
      todayTargetIds: [],
      lastLearnDate: null,
      checkInHistory: [twoDaysAgo],
      dailyLearningRecords: {}
    });

    const success = checkIn();
    expect(success).toBe(true);
    
    const progress = getProgress();
    expect(progress.consecutiveDays).toBe(1);
  });
});
