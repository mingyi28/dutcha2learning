<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getThemas } from '../data/courses';
import { ChevronRight, BookOpen } from 'lucide-vue-next';

const router = useRouter();
const themas = ref(getThemas());

const enterThema = (themaId: string) => {
  router.push(`/thema/${themaId}`);
};

// 计算主题总单词数
const getTotalWords = (thema: typeof themas.value[0]) => {
  return thema.courses.reduce((sum, c) => sum + c.words.length, 0);
};
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-64px)] -m-4">
    <!-- 页面标题 -->
    <div class="text-center pt-4 pb-3 bg-white border-b border-gray-100 flex-shrink-0">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <BookOpen class="w-6 h-6 text-blue-600" />
        课程学习
      </h1>
    </div>

    <!-- 主题列表（可滚动） -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain">
      <div
        v-for="thema in themas"
        :key="thema.id"
        @click="enterThema(thema.id)"
        class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md"
      >
        <div class="flex items-center gap-4">
          <!-- 主题图标 -->
          <div
            class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br shadow-sm flex-shrink-0"
            :class="thema.color"
          >
            <span class="drop-shadow-sm">{{ thema.icon }}</span>
          </div>

          <!-- 主题信息 -->
          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-bold text-gray-800">{{ thema.name }}</h3>
            <p class="text-sm text-gray-500 mt-0.5">{{ thema.description }}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                {{ thema.courses.length }} 个课程
              </span>
              <span class="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">
                {{ getTotalWords(thema) }} 个单词
              </span>
            </div>
          </div>

          <!-- 箭头 -->
          <ChevronRight class="w-5 h-5 text-gray-300 flex-shrink-0" />
        </div>
      </div>

      <!-- 底部提示 -->
      <div class="text-center pb-4 pt-2">
        <p class="text-xs text-gray-400">更多主题持续更新中...</p>
      </div>
    </div>
  </div>
</template>