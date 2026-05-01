<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getThemaById } from '../data/courses';
import { isCourseCompleted, getCourseLearnedCount } from '../utils/storage';
import { ArrowLeft, ChevronRight, BookOpen, CheckCircle } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const themaId = computed(() => route.params.id as string);
const thema = computed(() => getThemaById(themaId.value));

// 强制刷新用的key
const refreshKey = ref(0);

const goBack = () => {
  router.push('/courses');
};

const enterCourse = (courseId: string) => {
  router.push(`/course/${courseId}`);
};

// 获取课程完成状态
const isCompleted = (courseId: string) => {
  refreshKey.value; // 依赖refreshKey触发响应式更新
  return isCourseCompleted(courseId);
};

// 获取课程学习进度
const getLearnedCount = (courseId: string) => {
  refreshKey.value;
  return getCourseLearnedCount(courseId);
};

onMounted(() => {
  if (!thema.value) {
    router.push('/courses');
  }
  // 每次进入页面刷新状态
  refreshKey.value++;
});
</script>

<template>
  <div class="flex flex-col h-[calc(100vh-64px)] -m-4" v-if="thema">
    <!-- 顶部导航栏 -->
    <div class="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10 flex-shrink-0">
      <button @click="goBack" class="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors">
        <ArrowLeft class="w-5 h-5" />
        <span class="text-sm">返回</span>
      </button>
      <h2 class="text-base font-bold text-gray-800">{{ thema.name }}</h2>
      <div class="w-16"></div>
    </div>

    <!-- 课程列表（可滚动） -->
    <div class="flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain">
      <div
        v-for="(course, index) in thema.courses"
        :key="course.id"
        @click="enterCourse(course.id)"
        class="bg-white rounded-2xl shadow-sm border p-4 flex items-center gap-4 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md"
        :class="isCompleted(course.id) ? 'border-green-200 bg-green-50/30' : 'border-gray-100'"
      >
        <!-- 课程图标 -->
        <div
          class="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br shadow-sm flex-shrink-0 relative"
          :class="course.color"
        >
          <span class="drop-shadow-sm">{{ course.icon }}</span>
          <!-- 完成标记 -->
          <div v-if="isCompleted(course.id)" class="absolute -top-1 -right-1 bg-white rounded-full">
            <CheckCircle class="w-5 h-5 text-green-500" />
          </div>
        </div>

        <!-- 课程信息 -->
        <div class="flex-1 min-w-0">
          <h3 class="text-base font-bold text-gray-800 truncate">{{ course.name }}</h3>
          <p class="text-sm text-gray-500 mt-0.5 truncate">{{ course.description }}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <span class="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
              {{ course.words.length }} 个单词
            </span>
            <!-- 学习进度 -->
            <span v-if="isCompleted(course.id)" class="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">
              ✅ 已完成
            </span>
            <span v-else-if="getLearnedCount(course.id) > 0" class="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium">
              学习中 {{ getLearnedCount(course.id) }}/{{ course.words.length }}
            </span>
          </div>
        </div>

        <!-- 箭头 -->
        <ChevronRight class="w-5 h-5 text-gray-300 flex-shrink-0" />
      </div>
    </div>
  </div>
</template>