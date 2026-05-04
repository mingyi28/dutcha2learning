<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { BookOpen, RotateCcw, Calendar, GraduationCap } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

// 记住用户最后访问的课程相关路径
const lastCoursePath = ref('/courses');

// 监听路由变化，记录课程相关页面路径
watch(() => route.path, (newPath) => {
  if (newPath.startsWith('/course') || newPath.startsWith('/thema')) {
    lastCoursePath.value = newPath;
  }
}, { immediate: true });

// 课程学习tab点击处理：如果已在课程相关页面则不跳转，否则恢复到上次的课程页面
const handleCoursesClick = () => {
  if (!(route.path.startsWith('/course') || route.path.startsWith('/thema'))) {
    router.replace(lastCoursePath.value);
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative">
    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-4 pb-24">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <!-- Bottom Navigation -->
    <nav class="bg-white border-t border-gray-100 fixed bottom-0 w-full max-w-md z-50 pb-safe">
      <div class="flex justify-around items-center h-16">
        <div 
          @click="handleCoursesClick"
          class="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors cursor-pointer"
          :class="(route.path.startsWith('/course') || route.path.startsWith('/thema')) ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'"
        >
          <GraduationCap class="w-6 h-6" />
          <span class="text-xs font-medium">课程学习</span>
        </div>

        <router-link 
          to="/learn" 
          replace
          class="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors"
          :class="route.path === '/learn' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'"
        >
          <BookOpen class="w-6 h-6" />
          <span class="text-xs font-medium">单词学习</span>
        </router-link>
        
        <router-link 
          to="/review" 
          replace
          class="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors"
          :class="route.path === '/review' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'"
        >
          <RotateCcw class="w-6 h-6" />
          <span class="text-xs font-medium">复习</span>
        </router-link>

        <router-link 
          to="/history" 
          replace
          class="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors"
          :class="route.path === '/history' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'"
        >
          <Calendar class="w-6 h-6" />
          <span class="text-xs font-medium">打卡记录</span>
        </router-link>
      </div>
    </nav>
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

/* Safe area for iPhone X+ */
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>