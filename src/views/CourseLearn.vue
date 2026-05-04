<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getCourseById } from '../data/courses';
import { getThemaByCourseId } from '../data/courses';
import { Word } from '../types';
import WordCard from '../components/WordCard.vue';
import { ArrowLeft, List, ChevronLeft, ChevronRight, CheckCircle, RotateCcw, Shuffle } from 'lucide-vue-next';
import { markCourseCompleted, markCourseWordLearned, isCourseCompleted, incrementCourseReviewCount, getCourseReviewCount } from '../utils/storage';

const route = useRoute();
const router = useRouter();

const courseId = computed(() => route.params.id as string);
const course = computed(() => getCourseById(courseId.value));
const words = computed<Word[]>(() => course.value?.words || []);

const currentIndex = ref(0);
const isCompleted = ref(false);
const isReviewMode = ref(false);
const reviewWords = ref<Word[]>([]);
const reviewCount = ref(0);

const displayWords = computed(() => isReviewMode.value ? reviewWords.value : words.value);
const currentWord = computed(() => displayWords.value[currentIndex.value]);
const progress = computed(() => {
  if (displayWords.value.length === 0) return 0;
  return ((currentIndex.value + 1) / displayWords.value.length) * 100;
});

const goNext = () => {
  if (currentIndex.value < displayWords.value.length - 1) {
    // 记录当前单词已学习
    if (!isReviewMode.value) {
      markCourseWordLearned(courseId.value, currentIndex.value);
    }
    currentIndex.value++;
  } else {
    // 到达最后一个单词，标记为完成
    if (!isReviewMode.value) {
      markCourseWordLearned(courseId.value, currentIndex.value);
      markCourseCompleted(courseId.value);
    } else {
      // 复习模式完成，记录复习次数
      incrementCourseReviewCount(courseId.value);
      reviewCount.value = getCourseReviewCount(courseId.value);
    }
    isCompleted.value = true;
  }
};

const goPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goBack = () => {
  const thema = getThemaByCourseId(courseId.value);
  if (thema) {
    router.push(`/thema/${thema.id}`);
  } else {
    router.push('/courses');
  }
};

const restartLearn = () => {
  currentIndex.value = 0;
  isCompleted.value = false;
  isReviewMode.value = false;
};

// 进入复习模式（打乱顺序）
const startReview = () => {
  const shuffled = [...words.value].sort(() => Math.random() - 0.5);
  reviewWords.value = shuffled;
  currentIndex.value = 0;
  isCompleted.value = false;
  isReviewMode.value = true;
};

const goToWordList = () => {
  router.push(`/course/${courseId.value}/list?current=${currentIndex.value}`);
};

// 从query参数恢复索引
onMounted(() => {
  if (!course.value) {
    router.push('/courses');
    return;
  }
  reviewCount.value = getCourseReviewCount(courseId.value);
  
  // 如果课程已完成且没有指定index，直接显示完成状态
  const idx = route.query.index;
  if (idx !== undefined) {
    const num = Number(idx);
    if (!isNaN(num) && num >= 0 && num < words.value.length) {
      currentIndex.value = num;
    }
  } else if (isCourseCompleted(courseId.value)) {
    isCompleted.value = true;
  }
});

// 监听路由query变化（从列表页返回时）
watch(() => route.query.index, (newIdx) => {
  if (newIdx !== undefined) {
    const num = Number(newIdx);
    if (!isNaN(num) && num >= 0 && num < words.value.length) {
      currentIndex.value = num;
      isCompleted.value = false;
      isReviewMode.value = false;
    }
  }
});
</script>

<template>
  <div class="flex flex-col h-full -m-4 -mb-24" v-if="course">
    <!-- 顶部导航栏 -->
    <div class="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <button @click="goBack" class="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
        <ArrowLeft class="w-5 h-5" />
        <span class="text-sm">返回</span>
      </button>
      <h2 class="text-base font-bold text-gray-800 truncate max-w-[50%]">
        {{ isReviewMode ? '复习模式' : (getThemaByCourseId(courseId) ? getThemaByCourseId(courseId)!.name + ' - ' + course.name : course.name) }}
      </h2>
      <button 
        @click="goToWordList" 
        class="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
      >
        <List class="w-5 h-5" />
      </button>
    </div>

    <!-- 进度条 -->
    <div v-if="!isCompleted" class="px-4 pt-5">
      <div class="flex items-center justify-between text-xs text-gray-500 mb-1.5">
        <span>{{ isReviewMode ? '复习进度' : '学习进度' }}</span>
        <span>{{ currentIndex + 1 }} / {{ displayWords.length }}</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          class="bg-gradient-to-r h-2 rounded-full transition-all duration-300"
          :class="isReviewMode ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-indigo-500'"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>

    <!-- 学习完成状态 -->
    <div v-if="isCompleted" class="flex-1 flex flex-col items-center justify-center px-6 py-8">
      <div class="bg-green-50 rounded-full p-6 mb-6">
        <CheckCircle class="w-16 h-16 text-green-500" />
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">
        {{ isReviewMode ? '复习完成！🎉' : '学习完成！🎉' }}
      </h3>
      <p class="text-gray-500 text-center mb-2">
        你已完成「{{ course.name }}」的全部 {{ words.length }} 个单词{{ isReviewMode ? '复习' : '学习' }}
      </p>
      <p v-if="reviewCount > 0" class="text-xs text-gray-400 mb-8">
        已复习 {{ reviewCount }} 次
      </p>
      <p v-else class="mb-8"></p>
      
      <div class="flex flex-col gap-3 w-full max-w-xs">
        <button 
          @click="startReview"
          class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200 hover:shadow-xl active:scale-95 transition-all duration-200"
        >
          <Shuffle class="w-5 h-5" />
          <span>打乱复习</span>
        </button>
        <button 
          @click="restartLearn"
          class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl active:scale-95 transition-all duration-200"
        >
          <RotateCcw class="w-5 h-5" />
          <span>按顺序再学一遍</span>
        </button>
        <button 
          @click="goToWordList"
          class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <List class="w-5 h-5" />
          <span>查看单词列表</span>
        </button>
        <button 
          @click="goBack"
          class="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <ArrowLeft class="w-5 h-5" />
          <span>返回课程</span>
        </button>
      </div>
    </div>

    <!-- 单词卡片区域 -->
    <div v-else class="flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto">
      <WordCard v-if="currentWord" :word="currentWord" :initialShowTranslation="true" />
    </div>

    <!-- 底部导航按钮 -->
    <div v-if="!isCompleted" class="px-4 pb-6 flex items-center justify-between gap-4">
      <button 
        @click="goPrev"
        :disabled="currentIndex === 0"
        class="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200"
        :class="currentIndex === 0 
          ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95'"
      >
        <ChevronLeft class="w-5 h-5" />
        <span>上一个</span>
      </button>
      <button 
        @click="goNext"
        class="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl active:scale-95"
      >
        <span>{{ currentIndex === displayWords.length - 1 ? '完成' : '下一个' }}</span>
        <ChevronRight class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>