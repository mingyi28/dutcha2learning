<script setup lang="ts">
import { ref, watch } from 'vue';
import { Word } from '../types';
import { Volume2 } from 'lucide-vue-next';

const props = defineProps<{
  word: Word;
  initialShowTranslation?: boolean;
}>();

const showTranslation = ref(false);

watch(() => props.word, () => {
  showTranslation.value = props.initialShowTranslation || false;
}, { immediate: true });

const toggleTranslation = () => {
  showTranslation.value = !showTranslation.value;
};

// 简单的语音合成（如果浏览器支持）
const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL'; // 荷兰语
    window.speechSynthesis.speak(utterance);
  }
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto transition-all duration-300" @click="toggleTranslation">
    <div class="text-center mb-6">
      <h2 class="text-4xl font-bold text-blue-600 mb-2">{{ word.dutch }}</h2>
      <p v-if="word.pronunciation" class="text-gray-500 text-lg mb-2 font-mono">{{ word.pronunciation }}</p>
      <button @click.stop="speak(word.dutch)" class="inline-flex items-center justify-center p-2 text-gray-500 hover:text-blue-500 transition-colors">
        <Volume2 class="w-6 h-6" />
      </button>
    </div>

    <div v-if="showTranslation" class="space-y-4 animate-fade-in">
      <div class="grid grid-cols-2 gap-4 text-center border-t border-b border-gray-100 py-4">
        <div>
          <p class="text-xs text-gray-400 uppercase tracking-wider">中文</p>
          <p class="text-lg font-medium text-gray-800">{{ word.chinese }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-400 uppercase tracking-wider">English</p>
          <p class="text-lg font-medium text-gray-800">{{ word.english }}</p>
        </div>
      </div>

      <div class="bg-blue-50 rounded-lg p-4 mt-4">
        <p class="text-sm text-blue-800 font-medium mb-1">Example:</p>
        <p class="text-lg text-gray-800 mb-1">{{ word.example }}</p>
        <p class="text-sm text-gray-500">{{ word.example_cn }}</p>
        <button @click.stop="speak(word.example)" class="mt-2 text-blue-400 hover:text-blue-600">
          <Volume2 class="w-4 h-4" />
        </button>
      </div>
    </div>
    
    <div v-else class="text-center py-8 text-gray-400">
      <p>点击卡片查看释义</p>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
