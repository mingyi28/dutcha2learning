<script setup lang="ts">
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';
import { Word } from '../types';
import { initTodayWords, markWordAsLearned, getProgress, checkIn } from '../utils/storage';
import WordCard from '../components/WordCard.vue';
import CheckIn from '../components/CheckIn.vue';
import { CheckCircle, ArrowRight, BookOpen, Loader2 } from 'lucide-vue-next';

const emit = defineEmits(['complete']);

const words = ref<Word[]>([]);
const currentIndex = ref(0);
const isCompleted = ref(false);
const isLoading = ref(true);
const loadingError = ref<string | null>(null);

onMounted(async () => {
  try {
    // 确保单词数据已加载
    await new Promise(resolve => setTimeout(resolve, 100)); // 给initWords一点时间
    
    words.value = initTodayWords();
    
    // 检查是否成功加载了足够的单词
    if (words.value.length < 10) {
      console.warn('单词数量不足，可能数据未完全加载');
    }
    
    // Restore progress
    const progress = getProgress();
    const todayLearned = new Set(progress.todayLearnedIds || []);
    
    // Find the first unlearned word index
    const firstUnlearnedIndex = words.value.findIndex(w => !todayLearned.has(w.id));
    
    if (firstUnlearnedIndex > -1) {
      currentIndex.value = firstUnlearnedIndex;
    } else if (words.value.length > 0 && todayLearned.size >= words.value.length) {
      // All learned
      isCompleted.value = true;
      emit('complete');
    }
  } catch (error) {
    console.error('加载单词失败:', error);
    loadingError.value = '加载单词时出错，请稍后重试。';
  } finally {
    isLoading.value = false;
  }
});

const currentWord = computed(() => words.value[currentIndex.value]);
const progress = computed(() => {
  if (words.value.length === 0) return 100;
  return ((currentIndex.value) / words.value.length) * 100;
});

const nextWord = () => {
  if (currentWord.value) {
    markWordAsLearned(currentWord.value.id);
  }
  
  if (currentIndex.value < words.value.length - 1) {
    currentIndex.value++;
  } else {
    // 学习完成，自动打卡
    checkIn();
    isCompleted.value = true;
    emit('complete');
  }
};

const handleNextGroup = () => {
  words.value = initTodayWords(true);
  currentIndex.value = 0;
  isCompleted.value = false;
};

const handleRelearn = () => {
  // 重新学习当前这组单词
  currentIndex.value = 0;
  isCompleted.value = false;
};

const retryLoading = async () => {
  isLoading.value = true;
  loadingError.value = null;
  
  // 重新执行mounted逻辑
  try {
    words.value = await initTodayWords();
    
    // Restore progress
    const progress = getProgress();
    const todayLearned = new Set(progress.todayLearnedIds || []);
    
    // Find the first unlearned word index
    const firstUnlearnedIndex = words.value.findIndex(w => !todayLearned.has(w.id));
    
    if (firstUnlearnedIndex > -1) {
      currentIndex.value = firstUnlearnedIndex;
    } else if (words.value.length > 0 && todayLearned.size >= words.value.length) {
      // All learned
      isCompleted.value = true;
      emit('complete');
    }
  } catch (error) {
    console.error('重试加载失败:', error);
    loadingError.value = '加载失败，请刷新页面重试';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6" v-if="!isCompleted">
      <h2 class="text-xl font-bold text-gray-800">今日新词</h2>
      <span class="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        {{ currentIndex + 1 }} / {{ words.length }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col items-center justify-center w-full">
      <div v-if="isLoading" class="text-center space-y-6 animate-fade-in w-full py-10">
        <Loader2 class="w-16 h-16 text-gray-400 animate-spin" />
        <p class="text-gray-600">正在加载单词...</p>
      </div>

      <div v-else-if="loadingError" class="text-center space-y-6 animate-fade-in w-full py-10">
        <p class="text-red-600">{{ loadingError }}</p>
        <button 
          @click="retryLoading()"
          class="w-full py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
        >
          重试
        </button>
      </div>

      <div v-else-if="!isCompleted && currentWord" class="w-full space-y-6">
        <!-- Progress Bar -->
        <div class="w-full bg-gray-100 rounded-full h-2">
          <div class="bg-blue-500 h-2 rounded-full transition-all duration-300" :style="{ width: `${progress}%` }"></div>
        </div>

        <WordCard :word="currentWord" :key="currentWord.id" :initialShowTranslation="true" />

        <button 
          @click="nextWord"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2 mt-8"
        >
          <span>下一个</span>
          <ArrowRight class="w-5 h-5" />
        </button>
      </div>

      <div v-else class="text-center space-y-6 animate-fade-in w-full py-10">
        <div class="bg-green-100 p-6 rounded-full inline-block mb-4">
          <CheckCircle class="w-16 h-16 text-green-600" />
        </div>
        <h2 class="text-2xl font-bold text-gray-800">太棒了！</h2>
        <p class="text-gray-600">你已经完成了今天的学习任务。</p>
        
        <!-- 显示打卡统计信息 -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full">
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-orange-50 rounded-xl p-4 text-center">
              <div class="flex justify-center text-orange-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <p class="text-2xl font-bold text-gray-800">{{ getProgress().consecutiveDays }}</p>
              <p class="text-xs text-gray-500">连续打卡(天)</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 text-center">
              <div class="flex justify-center text-blue-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <p class="text-2xl font-bold text-gray-800">{{ getProgress().totalLearned }}</p>
              <p class="text-xs text-gray-500">已学单词(个)</p>
            </div>
          </div>

          <div class="w-full bg-green-50 text-green-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 border border-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>今天已打卡</span>
          </div>
        </div>

        <div class="w-full mt-8 flex gap-4">
          <button 
            @click="handleRelearn"
            class="flex-1 flex items-center justify-center p-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
            <span class="font-medium">再次学习</span>
          </button>
          
          <button 
            @click="handleNextGroup"
            class="flex-1 flex items-center justify-center p-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors gap-2"
          >
            <BookOpen class="w-6 h-6" />
            <span class="font-medium">学习下一组</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>