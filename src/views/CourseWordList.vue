<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getCourseById } from '../data/courses';
import { Word } from '../types';
import { ArrowLeft, Play } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const courseId = computed(() => route.params.id as string);
const course = computed(() => getCourseById(courseId.value));
const words = computed<Word[]>(() => course.value?.words || []);

// 从query参数获取当前学习索引（用于高亮显示）
const currentLearnIndex = computed(() => {
  const idx = route.query.current;
  return idx !== undefined ? Number(idx) : -1;
});

const goBack = () => {
  // 返回课程学习页面
  if (currentLearnIndex.value >= 0) {
    router.push(`/course/${courseId.value}?index=${currentLearnIndex.value}`);
  } else {
    router.push(`/course/${courseId.value}`);
  }
};

const goToWord = (index: number) => {
  // 跳转到课程学习页面并定位到指定单词
  router.push(`/course/${courseId.value}?index=${index}`);
};

onMounted(() => {
  if (!course.value) {
    router.push('/courses');
  }
});
</script>

<template>
  <div class="absolute inset-0 flex flex-col bg-gray-50 z-20" v-if="course">
    <!-- 顶部导航栏 -->
    <div class="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <button @click="goBack" class="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
        <ArrowLeft class="w-5 h-5" />
        <span class="text-sm">返回</span>
      </button>
      <h2 class="text-base font-bold text-gray-800 truncate max-w-[60%]">{{ course.name }} - 单词列表</h2>
      <div class="w-16"></div>
    </div>

    <!-- 课程信息概览 -->
    <div class="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
      <div class="flex items-center gap-3">
        <span class="text-2xl">{{ course.icon }}</span>
        <div>
          <p class="text-sm font-medium text-gray-700">{{ course.description }}</p>
          <p class="text-xs text-gray-500 mt-0.5">共 {{ words.length }} 个单词</p>
        </div>
      </div>
    </div>

    <!-- 单词列表 -->
    <div class="flex-1 overflow-y-auto p-4 space-y-2">
      <div
        v-for="(word, index) in words"
        :key="word.id"
        @click="goToWord(index)"
        class="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98]"
        :class="index === currentLearnIndex 
          ? 'bg-blue-50 border-2 border-blue-300 shadow-sm' 
          : 'bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm'"
      >
        <!-- 序号 -->
        <div 
          class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          :class="index === currentLearnIndex 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-600'"
        >
          {{ index + 1 }}
        </div>

        <!-- 单词信息 -->
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-base">{{ word.dutch }}</p>
          <p class="text-sm text-gray-500 mt-0.5">{{ word.chinese }} · {{ word.english }}</p>
        </div>

        <!-- 当前标记或播放按钮 -->
        <div v-if="index === currentLearnIndex" class="flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full flex-shrink-0">
          <Play class="w-3 h-3" />
          当前
        </div>
      </div>
    </div>
  </div>
</template>