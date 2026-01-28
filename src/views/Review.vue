<script setup lang="ts">
import { ref, onMounted, computed, watch, onActivated } from 'vue';
import { Word } from '../types';
import { 
  getDifficultWords, 
  toggleDifficultWord, 
  isDifficultWord, 
  markWordAsMastered, 
  getReviewHistory,
  getLearnedWordsByDate,
  setDailyReviewStatus
} from '../utils/storage';
import WordCard from '../components/WordCard.vue';
import SpellingCard from '../components/SpellingCard.vue';
import { 
  RefreshCw, 
  ArrowRight, 
  BookMarked, 
  CheckCircle, 
  BookOpen, 
  Shuffle,
  ChevronLeft,
  Calendar,
  List,
  Keyboard,
  Eye
} from 'lucide-vue-next';
import { format, parseISO } from 'date-fns';

const view = ref<'list' | 'session'>('list');
const mode = ref<'daily' | 'difficult'>('daily');
const sessionStage = ref<'reading' | 'spelling'>('reading');
const selectedDate = ref<string>('');
const historyList = ref<{ date: string; count: number; reviewed: boolean }[]>([]);

const words = ref<Word[]>([]);
const currentIndex = ref(0);
const isCurrentDifficult = ref(false);

// Load history for list view
const loadHistory = () => {
  historyList.value = getReviewHistory(7);
};

const difficultCount = computed(() => getDifficultWords().length);

const startDailyReview = (date: string) => {
  selectedDate.value = date;
  mode.value = 'daily';
  view.value = 'session';
  sessionStage.value = 'reading';
  loadWords();
};

const startDifficultReview = () => {
  mode.value = 'difficult';
  view.value = 'session';
  sessionStage.value = 'reading';
  loadWords();
};

const backToList = () => {
  view.value = 'list';
  loadHistory();
};

const updateDifficultStatus = () => {
  if (words.value[currentIndex.value]) {
    isCurrentDifficult.value = isDifficultWord(words.value[currentIndex.value].id);
  }
};

const loadWords = () => {
  if (mode.value === 'daily') {
    words.value = getLearnedWordsByDate(selectedDate.value);
  } else {
    words.value = getDifficultWords();
  }
  currentIndex.value = 0;
  updateDifficultStatus();
};

onMounted(() => {
  loadHistory();
});

onActivated(() => {
  if (view.value === 'list') {
    loadHistory();
  }
});

const currentWord = computed(() => words.value[currentIndex.value]);

watch(currentIndex, () => {
  updateDifficultStatus();
});

const nextWord = () => {
  if (currentIndex.value < words.value.length - 1) {
    currentIndex.value++;
  } else {
    // 当前阶段完成
    if (sessionStage.value === 'reading') {
      // 进入拼写阶段
      sessionStage.value = 'spelling';
      currentIndex.value = 0;
      // 可以选择在这里打乱顺序，增加难度
      // words.value = [...words.value].sort(() => 0.5 - Math.random());
    } else {
      // 全部完成
      finishSession();
    }
  }
};

const handleSpellingComplete = () => {
  nextWord();
};

const finishSession = () => {
  if (mode.value === 'daily') {
    setDailyReviewStatus(selectedDate.value, true);
  }
  backToList();
};

const toggleDifficult = () => {
  if (currentWord.value) {
    toggleDifficultWord(currentWord.value.id);
    isCurrentDifficult.value = !isCurrentDifficult.value;
  }
};

const markMastered = () => {
  if (currentWord.value) {
    markWordAsMastered(currentWord.value.id);
    // 如果在生词本模式，移除当前词
    if (mode.value === 'difficult') {
      words.value.splice(currentIndex.value, 1);
      if (currentIndex.value >= words.value.length) {
        // 如果是最后一个，且删除了，那么结束或者显示空
        if (words.value.length === 0) {
           backToList();
           return;
        }
        currentIndex.value = Math.max(0, words.value.length - 1);
      }
      updateDifficultStatus();
    } else {
      nextWord();
    }
  }
};

const shuffleWords = () => {
  words.value = [...words.value].sort(() => 0.5 - Math.random());
  currentIndex.value = 0;
  updateDifficultStatus();
};

const formatDate = (dateStr: string) => {
  return format(parseISO(dateStr), 'MM月dd日');
};
</script>

<template>
  <div class="flex flex-col h-full bg-gray-50">
    <!-- List View -->
    <div v-if="view === 'list'" class="flex flex-col h-full p-4 space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-800">复习中心</h2>
      </div>

      <!-- Difficult Words Card -->
      <div 
        @click="startDifficultReview"
        class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:shadow-md transition-all active:scale-95"
      >
        <div class="flex items-center gap-4">
          <div class="bg-orange-100 p-3 rounded-full text-orange-600">
            <BookMarked class="w-6 h-6" />
          </div>
          <div>
            <h3 class="font-bold text-gray-800">生词本</h3>
            <p class="text-sm text-gray-500">{{ difficultCount }} 个单词待复习</p>
          </div>
        </div>
        <ArrowRight class="w-5 h-5 text-gray-300" />
      </div>

      <!-- History List -->
      <div class="flex-1 overflow-hidden flex flex-col">
        <h3 class="font-bold text-gray-700 mb-3 flex items-center gap-2">
          <Calendar class="w-4 h-4" />
          近一周学习记录
        </h3>
        
        <div class="flex-1 overflow-y-auto space-y-3">
          <div 
            v-for="item in historyList" 
            :key="item.date"
            @click="startDailyReview(item.date)"
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-blue-200 transition-all active:scale-95"
          >
            <div class="flex items-center gap-4">
              <div 
                class="w-2 h-12 rounded-full"
                :class="item.reviewed ? 'bg-green-500' : 'bg-blue-500'"
              ></div>
              <div>
                <h4 class="font-bold text-gray-800">{{ formatDate(item.date) }}</h4>
                <p class="text-xs text-gray-500">{{ item.count }} 个单词</p>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <span 
                class="text-xs px-2 py-1 rounded-full font-medium"
                :class="item.reviewed ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'"
              >
                {{ item.reviewed ? '已完成' : '未复习' }}
              </span>
              <ArrowRight class="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <div v-if="historyList.length === 0" class="text-center py-8 text-gray-400">
            <p>暂无学习记录</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Session View -->
    <div v-else class="flex flex-col h-full">
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-100 bg-white">
        <button @click="backToList" class="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft class="w-6 h-6" />
        </button>
        <div class="flex flex-col items-center">
          <span class="font-bold text-gray-800">
            {{ mode === 'difficult' ? '生词本复习' : `${formatDate(selectedDate)} 复习` }}
          </span>
          <span class="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1">
            {{ sessionStage === 'reading' ? '认读模式' : '拼写模式' }} {{ currentIndex + 1 }}/{{ words.length }}
          </span>
        </div>
        <button @click="shuffleWords" class="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50" title="打乱顺序">
          <Shuffle class="w-5 h-5" />
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col items-center justify-center w-full p-4" v-if="words.length > 0">
        <div class="w-full max-w-md relative">
          <transition name="fade" mode="out-in">
            <!-- Reading Mode -->
            <div v-if="sessionStage === 'reading'" key="reading" class="w-full">
              <WordCard :word="currentWord" :key="currentWord.id" />
              
              <!-- Action Bar -->
              <div class="flex justify-between items-center mt-6 px-2">
                <button 
                  @click="toggleDifficult"
                  class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                  :class="isCurrentDifficult ? 'text-orange-500 bg-orange-50' : 'text-gray-400 hover:bg-gray-100'"
                >
                  <BookMarked class="w-5 h-5" :class="{ 'fill-current': isCurrentDifficult }" />
                  <span class="text-sm font-medium">{{ isCurrentDifficult ? '已在生词本' : '加入生词本' }}</span>
                </button>

                <button 
                  v-if="mode === 'difficult'"
                  @click="markMastered"
                  class="flex items-center gap-2 px-4 py-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <CheckCircle class="w-5 h-5" />
                  <span class="text-sm font-medium">已掌握</span>
                </button>
              </div>

              <div class="flex gap-3 mt-8">
                <button 
                  @click="sessionStage = 'spelling'"
                  class="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <Keyboard class="w-5 h-5" />
                  <span>拼写</span>
                </button>

                <button 
                  @click="nextWord"
                  class="flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  <span>{{ currentIndex < words.length - 1 ? '下一个' : '进入拼写测试' }}</span>
                  <ArrowRight class="w-5 h-5" />
                </button>
              </div>
            </div>

            <!-- Spelling Mode -->
            <div v-else key="spelling" class="w-full">
              <SpellingCard :word="currentWord" @complete="handleSpellingComplete" />
              
              <div class="flex gap-3 mt-6">
                <button 
                  @click="sessionStage = 'reading'"
                  class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Eye class="w-5 h-5" />
                  <span>认读模式</span>
                </button>
              </div>

              <div class="text-center mt-4">
                <p class="text-xs text-gray-400">完成拼写以继续</p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div v-else class="flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-500">
        <div class="bg-gray-100 p-4 rounded-full mb-4">
          <BookMarked class="w-8 h-8 text-gray-400" />
        </div>
        <p class="text-lg font-medium text-gray-700">生词本为空</p>
        <button @click="backToList" class="mt-4 text-blue-600 font-medium hover:underline">
          返回列表
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>