<script setup lang="ts">
import { ref, onMounted, nextTick, onActivated } from 'vue';
import { getProgress } from '../utils/storage';
import { format, eachDayOfInterval, startOfMonth, endOfMonth, getDay, addMonths, isToday } from 'date-fns';
import { words } from '../data/words';
import { Word } from '../types';
import { X } from 'lucide-vue-next';

const progress = ref(getProgress());
const checkInHistory = ref(new Set(progress.value.checkInHistory || []));
const masteredCount = ref(progress.value.masteredWordIds?.length || 0);

// Generate months
const months = ref<Date[]>([]);

const initMonths = () => {
  const today = new Date();
  // Only show current month and next month
  for (let i = 0; i <= 1; i++) {
    months.value.push(addMonths(today, i));
  }
  months.value.sort((a, b) => a.getTime() - b.getTime());
};

const getDaysInMonth = (date: Date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  return eachDayOfInterval({ start, end });
};

const getDayOffset = (date: Date) => {
  // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  // We want Monday as start
  const day = getDay(startOfMonth(date));
  // if day is 0 (Sunday), offset is 6.
  // if day is 1 (Monday), offset is 0.
  return day === 0 ? 6 : day - 1;
};

const isCheckedIn = (date: Date) => {
  const dateStr = format(date, 'yyyy-MM-dd');
  // Requirement 6: Only show check-ins from current month onwards
  const currentMonthStart = startOfMonth(new Date());
  if (date.getTime() < currentMonthStart.getTime()) {
    return false;
  }
  return checkInHistory.value.has(dateStr);
};

// Detail Modal Logic
const showDetailModal = ref(false);
const selectedDate = ref<Date | null>(null);
const dailyWords = ref<Word[]>([]);

const handleDateClick = (date: Date) => {
  if (!isCheckedIn(date)) return;
  
  selectedDate.value = date;
  const dateStr = format(date, 'yyyy-MM-dd');
  const wordIds = progress.value.dailyLearningRecords?.[dateStr] || [];
  
  dailyWords.value = words.filter(w => wordIds.includes(w.id));
  showDetailModal.value = true;
};

const closeModal = () => {
  showDetailModal.value = false;
};

onActivated(() => {
  progress.value = getProgress();
  checkInHistory.value = new Set(progress.value.checkInHistory || []);
});

onMounted(() => {
  initMonths();
  nextTick(() => {
    const el = document.getElementById('today-marker');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
</script>

<template>
  <div class="flex flex-col h-full bg-white">
    <div class="p-4 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm flex justify-between items-center">
      <h2 class="text-xl font-bold text-gray-800">打卡记录</h2>
      <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">已掌握 {{ masteredCount }} 词</span>
    </div>
    
    <div class="flex-1 overflow-y-auto p-4 space-y-8 pb-24">
      <div v-for="month in months" :key="month.toISOString()" class="month-container">
        <h3 class="text-lg font-bold text-gray-700 mb-4 sticky top-14 bg-white/95 backdrop-blur-sm py-2 z-10">
          {{ format(month, 'yyyy年MM月') }}
        </h3>
        
        <div class="grid grid-cols-7 gap-2 text-center mb-2">
          <div v-for="day in ['一', '二', '三', '四', '五', '六', '日']" :key="day" class="text-xs text-gray-400 font-medium">
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7 gap-2">
          <!-- Empty cells for offset -->
          <div v-for="i in getDayOffset(month)" :key="`empty-${i}`"></div>
          
          <!-- Days -->
          <div 
            v-for="day in getDaysInMonth(month)" 
            :key="day.toISOString()"
            class="aspect-square flex items-center justify-center rounded-full text-sm relative transition-all cursor-pointer"
            :class="[
              isCheckedIn(day) ? 'bg-green-500 text-white font-bold shadow-md transform scale-105 hover:bg-green-600' : 'text-gray-700 bg-gray-50',
              isToday(day) ? 'ring-2 ring-blue-400 ring-offset-2' : ''
            ]"
            :id="isToday(day) ? 'today-marker' : undefined"
            @click="handleDateClick(day)"
          >
            {{ format(day, 'd') }}
            <div v-if="isCheckedIn(day)" class="absolute -bottom-1 w-1 h-1 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Detail Modal -->
    <div v-if="showDetailModal" class="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80%] flex flex-col overflow-hidden animate-pop-in">
        <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 class="font-bold text-gray-800">
            {{ selectedDate ? format(selectedDate, 'yyyy年MM月dd日') : '' }} 学习记录
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>
        
        <div class="flex-1 overflow-y-auto p-4">
          <div v-if="dailyWords.length > 0" class="space-y-3">
            <div v-for="word in dailyWords" :key="word.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p class="font-bold text-blue-600">{{ word.dutch }}</p>
                <p class="text-xs text-gray-500">{{ word.english }}</p>
              </div>
              <p class="text-sm text-gray-700 font-medium">{{ word.chinese }}</p>
            </div>
          </div>
          <div v-else class="text-center py-8 text-gray-400">
            <p>暂无详细记录</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pop-in {
  animation: popIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>