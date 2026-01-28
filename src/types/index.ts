export interface Word {
  id: number;
  dutch: string;
  chinese: string;
  english: string;
  example: string;
  example_cn: string;
  pronunciation?: string;
}

export interface UserProgress {
  lastCheckInDate: string | null; // YYYY-MM-DD
  consecutiveDays: number;
  totalLearned: number;
  learnedWordIds: number[];
  todayLearnedIds: number[]; // IDs learned today
  todayTargetIds: number[]; // IDs to learn today
  lastLearnDate: string | null; // YYYY-MM-DD
  checkInHistory: string[]; // Array of YYYY-MM-DD strings
  dailyLearningRecords?: Record<string, number[]>; // Date (YYYY-MM-DD) -> Word IDs
  dailyReviewStatus?: Record<string, boolean>; // Date (YYYY-MM-DD) -> isReviewed
  masteredWordIds?: number[]; // IDs of mastered words
  difficultWordIds?: number[]; // IDs of difficult words
  
  // New fields for review persistence
  lastReviewDate?: string | null; // YYYY-MM-DD
  todayReviewTargetIds?: number[]; // IDs to review today
  todayReviewedWordIds?: number[]; // IDs already reviewed today
}