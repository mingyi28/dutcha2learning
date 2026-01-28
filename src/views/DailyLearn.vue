<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Word } from '../types';
import { initTodayWords, markWordAsLearned, getAllTodayLearnedWords, getRelearnWords, getProgress } from '../utils/storage';
import WordCard from '../components/WordCard.vue';
import CheckIn from '../components/CheckIn.vue';
import { CheckCircle, ArrowRight, RefreshCw, BookOpen, Settings2 } from 'lucide-vue-next';

const emit = defineEmits(['complete']);

const words = ref<Word[]>([]);
const currentIndex = ref(0);
const isCompleted = ref(false);

// Relearn options
const relearnOptions = ref({
  shuffle: false,
  skipMastered: false
});
const showRelearnOptions = ref(false);

onMounted(() => {
  words.value = initTodayWords();
  
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
    isCompleted.value = true;
    emit('complete');
  }
};

const handleRelearn = () => {
  // Load words based on options
  words.value = getRelearnWords({
    shuffle: relearnOptions.value.shuffle,
    skipMastered: relearnOptions.value.skipMastered
  });
  
  if (words.value.length === 0) {
    alert('没有符合条件的单词（可能都已掌握）');
    return;
  }
  
  currentIndex.value = 0;
  isCompleted.value = false;
  showRelearnOptions.value = false;
};

const handleNextGroup = () => {
  words.value = initTodayWords(true);
  currentIndex.value = 0;
  isCompleted.value = false;
  showRelearnOptions.value = false;
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
      <div v-if="!isCompleted && currentWord" class="w-full space-y-6">
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
        
        <CheckIn :canCheckIn="true" />

        <div class="w-full mt-8 space-y-4">
          <!-- Relearn Options Toggle -->
          <div v-if="showRelearnOptions" class="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3 animate-fade-in">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">打乱顺序</span>
              <button 
                @click="relearnOptions.shuffle = !relearnOptions.shuffle"
                class="w-12 h-6 rounded-full transition-colors relative"
                :class="relearnOptions.shuffle ? 'bg-blue-500' : 'bg-gray-300'"
              >
                <div class="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform" :class="{ 'translate-x-6': relearnOptions.shuffle }"></div>
              </button>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">跳过已掌握</span>
              <button 
                @click="relearnOptions.skipMastered = !relearnOptions.skipMastered"
                class="w-12 h-6 rounded-full transition-colors relative"
                :class="relearnOptions.skipMastered ? 'bg-blue-500' : 'bg-gray-300'"
              >
                <div class="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform" :class="{ 'translate-x-6': relearnOptions.skipMastered }"></div>
              </button>
            </div>
            
            <button 
              @click="handleRelearn"
              class="w-full py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
            >
              开始复习
            </button>
          </div>

          <div class="grid grid-cols-2 gap-4" v-else>
            <button 
              @click="showRelearnOptions = true"
              class="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-colors gap-2"
            >
              <Settings2 class="w-6 h-6 text-blue-500" />
              <span class="font-medium text-gray-700">再次学习</span>
            </button>
            
            <button 
              @click="handleNextGroup"
              class="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-colors gap-2"
            >
              <BookOpen class="w-6 h-6 text-indigo-500" />
              <span class="font-medium text-gray-700">学习下一组</span>
            </button>
          </div>
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