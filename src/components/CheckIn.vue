<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { checkIn, getProgress } from '../utils/storage';
import { Calendar, Trophy, Flame } from 'lucide-vue-next';
import { format } from 'date-fns';

defineProps<{
  canCheckIn: boolean;
}>();

const progress = ref(getProgress());
const isCheckedIn = ref(false);

const handleCheckIn = () => {
  const success = checkIn();
  if (success) {
    isCheckedIn.value = true;
    progress.value = getProgress();
  }
};

onMounted(() => {
  // 检查今天是否已打卡
  const today = format(new Date(), 'yyyy-MM-dd');
  if (progress.value.lastCheckInDate === today) {
    isCheckedIn.value = true;
  }
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full">
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-orange-50 rounded-xl p-4 text-center">
        <div class="flex justify-center text-orange-500 mb-2">
          <Flame class="w-6 h-6" />
        </div>
        <p class="text-2xl font-bold text-gray-800">{{ progress.consecutiveDays }}</p>
        <p class="text-xs text-gray-500">连续打卡(天)</p>
      </div>
      <div class="bg-blue-50 rounded-xl p-4 text-center">
        <div class="flex justify-center text-blue-500 mb-2">
          <Trophy class="w-6 h-6" />
        </div>
        <p class="text-2xl font-bold text-gray-800">{{ progress.totalLearned }}</p>
        <p class="text-xs text-gray-500">已学单词(个)</p>
      </div>
    </div>

    <button 
      v-if="!isCheckedIn && canCheckIn"
      @click="handleCheckIn"
      class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2"
    >
      <Calendar class="w-5 h-5" />
      <span>立即打卡</span>
    </button>

    <div v-else-if="isCheckedIn" class="w-full bg-green-50 text-green-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 border border-green-100">
      <Calendar class="w-5 h-5" />
      <span>今日已打卡</span>
    </div>
    
    <div v-else class="w-full bg-gray-100 text-gray-400 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
      <Calendar class="w-5 h-5" />
      <span>完成今日学习后打卡</span>
    </div>
  </div>
</template>