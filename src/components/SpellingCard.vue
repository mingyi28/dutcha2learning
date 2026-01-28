<script setup lang="ts">
import { ref, watch } from 'vue';
import { Word } from '../types';
import { Check, X, HelpCircle } from 'lucide-vue-next';

const props = defineProps<{
  word: Word;
}>();

const emit = defineEmits(['complete']);

const input = ref('');
const isCorrect = ref<boolean | null>(null);
const showHint = ref(false);

// Reset state when word changes
watch(() => props.word, () => {
  input.value = '';
  isCorrect.value = null;
  showHint.value = false;
});

const checkSpelling = () => {
  if (input.value.trim().toLowerCase() === props.word.dutch.toLowerCase()) {
    isCorrect.value = true;
    setTimeout(() => {
      emit('complete');
    }, 1000);
  } else {
    isCorrect.value = false;
  }
};

const giveHint = () => {
  showHint.value = true;
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
    <div class="text-center mb-8">
      <p class="text-sm text-gray-400 uppercase tracking-wider mb-2">请拼写荷兰语</p>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ word.chinese }}</h3>
      <p class="text-gray-500">{{ word.english }}</p>
    </div>

    <div class="space-y-4">
      <div class="relative">
        <input 
          v-model="input"
          @keyup.enter="checkSpelling"
          type="text"
          class="w-full px-4 py-3 text-lg text-center border-2 rounded-xl focus:outline-none transition-colors"
          :class="{
            'border-gray-200 focus:border-blue-500': isCorrect === null,
            'border-green-500 bg-green-50 text-green-700': isCorrect === true,
            'border-red-500 bg-red-50 text-red-700': isCorrect === false
          }"
          placeholder="输入荷兰语单词..."
          autofocus
        />
        <div v-if="isCorrect === true" class="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
          <Check class="w-6 h-6" />
        </div>
        <div v-if="isCorrect === false" class="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
          <X class="w-6 h-6" />
        </div>
      </div>

      <div v-if="showHint" class="text-center text-blue-600 font-medium animate-fade-in">
        提示: {{ word.dutch }}
      </div>

      <div class="flex gap-3">
        <button 
          @click="giveHint"
          class="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <HelpCircle class="w-5 h-5" />
          <span>提示</span>
        </button>
        <button 
          @click="checkSpelling"
          class="flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          :disabled="isCorrect === true"
        >
          检查
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
