<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Word } from '../types';
import { Volume2 } from 'lucide-vue-next';

const props = defineProps<{
  word: Word;
  initialShowTranslation?: boolean;
}>();

// 翻译始终显示
const showTranslation = ref(true);
const isSpeaking = ref(false);

// 检查浏览器是否支持语音合成
const isSpeechSupported = ref(false);

onMounted(() => {
  isSpeechSupported.value = 'speechSynthesis' in window;
});

// 改进的语音合成功能
const speak = async (text: string, type: 'dutch' | 'example' = 'dutch') => {
  if (!isSpeechSupported.value) {
    alert('您的浏览器不支持语音播放功能');
    return;
  }

  // 停止当前播放
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  if (type === 'dutch') {
    utterance.lang = 'nl-NL'; // 荷兰语
    utterance.rate = 0.8; // 稍微放慢语速
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
  } else {
    utterance.lang = 'nl-NL'; // 例句也是荷兰语
    utterance.rate = 0.7; // 例句更慢一些
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
  }
  
  // 尝试设置荷兰语语音
  const voices = window.speechSynthesis.getVoices();
  const dutchVoice = voices.find(voice => 
    voice.lang.includes('nl') || voice.lang.includes('NL')
  );
  
  if (dutchVoice) {
    utterance.voice = dutchVoice;
  }
  
  utterance.onstart = () => {
    isSpeaking.value = true;
  };
  
  utterance.onend = () => {
    isSpeaking.value = false;
  };
  
  utterance.onerror = () => {
    isSpeaking.value = false;
    console.error('语音播放出错');
  };
  
  window.speechSynthesis.speak(utterance);
};

// 停止语音播放
const stopSpeaking = () => {
  if (isSpeechSupported.value) {
    window.speechSynthesis.cancel();
    isSpeaking.value = false;
  }
};

// 确保语音数据存在
const hasPronunciation = (word: Word) => {
  return word.pronunciation && word.pronunciation.trim() !== '';
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto transition-all duration-300">
    <div class="text-center mb-6">
      <h2 class="text-4xl font-bold text-blue-600 mb-2">{{ word.dutch }}</h2>
      
      <!-- 发音标注 - 始终显示 -->
      <div class="flex items-center justify-center gap-2 mb-3">
        <p v-if="hasPronunciation(word)" class="text-gray-500 text-lg font-mono bg-gray-50 px-3 py-1 rounded-md">
          {{ word.pronunciation }}
        </p>
        <p v-else class="text-gray-400 text-sm font-mono bg-yellow-50 px-2 py-1 rounded-md">
          发音加载中...
        </p>
      </div>
      
      <!-- 语音播放按钮组 -->
      <div class="flex justify-center items-center gap-3">
        <button 
          @click.stop="speak(word.dutch)" 
          :disabled="!isSpeechSupported || isSpeaking"
          class="inline-flex items-center justify-center p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95"
          :class="{ 'animate-pulse': isSpeaking }"
        >
          <Volume2 class="w-6 h-6" />
        </button>
        
        <button 
          v-if="isSpeechSupported && isSpeaking"
          @click.stop="stopSpeaking"
          class="inline-flex items-center justify-center p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-200 transform hover:scale-105"
        >
          <span class="text-xs font-bold">停止</span>
        </button>
      </div>
      
      <!-- 语音支持提示 -->
      <p v-if="!isSpeechSupported" class="text-xs text-red-500 mt-2">
        ⚠️ 您的浏览器不支持语音播放
      </p>
    </div>

    <div class="space-y-4 animate-fade-in">
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
        
        <!-- 例句语音播放 -->
        <div class="flex items-center gap-2 mt-3 pt-3 border-t border-blue-200">
          <button 
            @click.stop="speak(word.example, 'example')" 
            :disabled="!isSpeechSupported || isSpeaking"
            class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-blue-50 disabled:bg-gray-100 disabled:text-gray-400 rounded-full transition-colors"
          >
            <Volume2 class="w-4 h-4" />
            <span>播放例句</span>
          </button>
        </div>
      </div>
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