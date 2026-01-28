<script setup lang="ts">
import { useRoute } from 'vue-router';
import { BookOpen, RotateCcw, Calendar } from 'lucide-vue-next';

const route = useRoute();
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
        <router-link 
          to="/learn" 
          class="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors"
          :class="route.path === '/learn' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'"
        >
          <BookOpen class="w-6 h-6" />
          <span class="text-xs font-medium">今日学习</span>
        </router-link>
        
        <router-link 
          to="/review" 
          class="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors"
          :class="route.path === '/review' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'"
        >
          <RotateCcw class="w-6 h-6" />
          <span class="text-xs font-medium">复习</span>
        </router-link>

        <router-link 
          to="/history" 
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