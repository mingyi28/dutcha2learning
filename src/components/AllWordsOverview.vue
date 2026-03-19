<script setup lang="ts">
import { ref, onMounted, nextTick, computed, onActivated } from 'vue';
import { Word } from '../types';
import { 
  getAllWordGroups, 
  getLearningOverview,
  type WordGroup 
} from '../utils/storage';
import WordCard from './WordCard.vue';
import SpellingCard from './SpellingCard.vue';
import { 
  ChevronLeft, 
  ChevronDown, 
  ChevronRight,
  CheckCircle, 
  Clock, 
  BookOpen, 
  Lock,
  ArrowRight,
  Keyboard,
  Eye,
  Shuffle,
  Calendar
} from 'lucide-vue-next';
import { format, parseISO } from 'date-fns';

const emit = defineEmits(['back', 'goToLearn']);

// 视图状态
const view = ref<'overview' | 'review'>('overview');
const groups = ref<WordGroup[]>([]);
const overview = ref(getLearningOverview());

// 展开状态管理
const expandedGroups = ref<Set<number>>(new Set());

// 复习相关状态
const reviewWords = ref<Word[]>([]);
const reviewGroupIndex = ref(-1);
const reviewIndex = ref(0);
const reviewStage = ref<'reading' | 'spelling'>('reading');
const reviewGroupDate = ref('');

// 加载数据
const loadData = () => {
  groups.value = getAllWordGroups();
  overview.value = getLearningOverview();
  
  // 默认展开策略：今日组和最近2个计划组展开，已完成组折叠
  expandedGroups.value.clear();
  let plannedExpanded = 0;
  for (const group of groups.value) {
    if (group.status === 'today') {
      expandedGroups.value.add(group.groupIndex);
    } else if (group.status === 'planned' && plannedExpanded < 2) {
      expandedGroups.value.add(group.groupIndex);
      plannedExpanded++;
    }
  }
};

const toggleGroup = (index: number) => {
  if (expandedGroups.value.has(index)) {
    expandedGroups.value.delete(index);
  } else {
    expandedGroups.value.add(index);
  }
};

const isExpanded = (index: number) => expandedGroups.value.has(index);

// 格式化日期
const formatGroupDate = (dateStr: string) => {
  if (!dateStr) return '未知';
  try {
    const date = parseISO(dateStr);
    const today = new Date();
    const todayStr = format(today, 'yyyy-MM-dd');
    
    if (dateStr === todayStr) return '今天';
    
    // 昨天
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (dateStr === format(yesterday, 'yyyy-MM-dd')) return '昨天';
    
    // 明天
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (dateStr === format(tomorrow, 'yyyy-MM-dd')) return '明天';
    
    return format(date, 'MM月dd日');
  } catch {
    return dateStr;
  }
};

// 状态标签样式
const getStatusStyle = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-700';
    case 'today':
      return 'bg-blue-100 text-blue-700';
    case 'planned':
      return 'bg-gray-100 text-gray-500';
    default:
      return 'bg-gray-100 text-gray-500';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed': return '已完成';
    case 'today': return '今日学习';
    case 'planned': return '计划中';
    default: return '未知';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle;
    case 'today': return BookOpen;
    case 'planned': return Clock;
    default: return Clock;
  }
};

// 快速跳转复习
const startReview = (group: WordGroup) => {
  if (group.status === 'planned') return; // 未解锁不能复习
  
  if (group.status === 'today') {
    // 跳转到今日学习
    emit('goToLearn');
    return;
  }
  
  // 已完成的组进入复习模式
  reviewWords.value = [...group.words];
  reviewGroupIndex.value = group.groupIndex;
  reviewGroupDate.value = group.date;
  reviewIndex.value = 0;
  reviewStage.value = 'reading';
  view.value = 'review';
};

const currentReviewWord = computed(() => reviewWords.value[reviewIndex.value]);

const nextReviewWord = () => {
  if (reviewIndex.value < reviewWords.value.length - 1) {
    reviewIndex.value++;
  } else {
    if (reviewStage.value === 'reading') {
      reviewStage.value = 'spelling';
      reviewIndex.value = 0;
    } else {
      // 完成复习
      view.value = 'overview';
    }
  }
};

const handleSpellingComplete = () => {
  nextReviewWord();
};

const shuffleReviewWords = () => {
  reviewWords.value = [...reviewWords.value].sort(() => 0.5 - Math.random());
  reviewIndex.value = 0;
};

const backToOverview = () => {
  view.value = 'overview';
};

// 自动滚动到当前进度
const scrollToToday = () => {
  nextTick(() => {
    const el = document.getElementById('group-today');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
};

onMounted(() => {
  loadData();
  scrollToToday();
});

onActivated(() => {
  loadData();
});

// 预计完成日期格式化
const formattedEndDate = computed(() => {
  if (!overview.value.estimatedEndDate) return '未知';
  try {
    return format(parseISO(overview.value.estimatedEndDate), 'yyyy年MM月dd日');
  } catch {
    return overview.value.estimatedEndDate;
  }
});
</script>

<template>
  <div class="flex flex-col h-full bg-gray-50">
    <!-- ====== 总览视图 ====== -->
    <div v-if="view === 'overview'" class="flex flex-col h-full">
      <!-- 顶部导航 -->
      <div class="flex items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
        <button @click="$emit('back')" class="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 mr-3">
          <ChevronLeft class="w-6 h-6" />
        </button>
        <h2 class="text-lg font-bold text-gray-800">所有单词总览</h2>
      </div>

      <!-- 进度概览卡片 -->
      <div class="mx-4 mt-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
        <div class="flex justify-between items-start mb-4">
          <div>
            <p class="text-sm text-blue-100 mb-1">学习进度</p>
            <p class="text-3xl font-bold">{{ overview.learnedCount }} <span class="text-lg font-normal text-blue-200">/ {{ overview.totalWords }}</span></p>
          </div>
          <div class="bg-white/20 rounded-xl px-3 py-2 text-center">
            <p class="text-2xl font-bold">{{ overview.progressPercent }}%</p>
          </div>
        </div>
        
        <!-- 进度条 -->
        <div class="w-full bg-white/20 rounded-full h-2.5 mb-4">
          <div 
            class="bg-white h-2.5 rounded-full transition-all duration-500" 
            :style="{ width: `${overview.progressPercent}%` }"
          ></div>
        </div>
        
        <div class="flex justify-between text-sm">
          <span class="text-blue-100">
            <Calendar class="w-3.5 h-3.5 inline mr-1" />
            还剩 {{ overview.remainingDays }} 天
          </span>
          <span class="text-blue-100">预计 {{ formattedEndDate }} 学完</span>
        </div>
      </div>

      <!-- 分组列表 -->
      <div class="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-24">
        <div 
          v-for="group in groups" 
          :key="group.groupIndex"
          :id="group.status === 'today' ? 'group-today' : undefined"
          class="bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200"
          :class="{
            'border-green-200': group.status === 'completed',
            'border-blue-300 ring-2 ring-blue-100': group.status === 'today',
            'border-gray-100': group.status === 'planned',
          }"
        >
          <!-- 组头部 -->
          <div 
            class="flex items-center justify-between p-4 cursor-pointer select-none"
            :class="{
              'bg-green-50/50': group.status === 'completed',
              'bg-blue-50': group.status === 'today',
              'bg-gray-50/50': group.status === 'planned',
            }"
            @click="toggleGroup(group.groupIndex)"
          >
            <div class="flex items-center gap-3">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                :class="{
                  'bg-green-500 text-white': group.status === 'completed',
                  'bg-blue-500 text-white': group.status === 'today',
                  'bg-gray-200 text-gray-500': group.status === 'planned',
                }"
              >
                {{ group.groupIndex + 1 }}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-gray-800 text-sm">第 {{ group.groupIndex + 1 }} 组</span>
                  <span 
                    class="text-xs px-2 py-0.5 rounded-full font-medium"
                    :class="getStatusStyle(group.status)"
                  >
                    {{ getStatusText(group.status) }}
                  </span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">
                  {{ formatGroupDate(group.date) }} · {{ group.words.length }} 个单词
                </p>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <!-- 复习按钮 -->
              <button 
                v-if="group.status === 'completed'"
                @click.stop="startReview(group)"
                class="text-xs px-3 py-1.5 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors"
              >
                复习
              </button>
              <button 
                v-else-if="group.status === 'today'"
                @click.stop="startReview(group)"
                class="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                去学习
              </button>
              <button 
                v-else
                disabled
                class="text-xs px-3 py-1.5 bg-gray-50 text-gray-300 rounded-lg font-medium cursor-not-allowed"
              >
                <Lock class="w-3 h-3 inline" /> 未解锁
              </button>
              
              <component 
                :is="isExpanded(group.groupIndex) ? ChevronDown : ChevronRight" 
                class="w-5 h-5 text-gray-400 transition-transform" 
              />
            </div>
          </div>

          <!-- 展开的单词列表 -->
          <transition name="expand">
            <div v-if="isExpanded(group.groupIndex)" class="border-t border-gray-100">
              <div class="divide-y divide-gray-50">
                <div 
                  v-for="word in group.words" 
                  :key="word.id"
                  class="flex items-center justify-between px-4 py-3 hover:bg-gray-50/50 transition-colors"
                >
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-blue-600 text-sm">{{ word.dutch }}</span>
                      <span v-if="word.pronunciation" class="text-xs text-gray-400 font-mono truncate">{{ word.pronunciation }}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-gray-700">{{ word.chinese }}</span>
                    <span class="text-gray-400 text-xs hidden">{{ word.english }}</span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- ====== 复习视图 ====== -->
    <div v-else-if="view === 'review'" class="flex flex-col h-full">
      <!-- 复习头部 -->
      <div class="flex justify-between items-center p-4 border-b border-gray-100 bg-white">
        <button @click="backToOverview" class="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft class="w-6 h-6" />
        </button>
        <div class="flex flex-col items-center">
          <span class="font-bold text-gray-800">
            第 {{ reviewGroupIndex + 1 }} 组复习
          </span>
          <span class="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1">
            {{ reviewStage === 'reading' ? '认读模式' : '拼写模式' }} {{ reviewIndex + 1 }}/{{ reviewWords.length }}
          </span>
        </div>
        <button @click="shuffleReviewWords" class="text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50" title="打乱顺序">
          <Shuffle class="w-5 h-5" />
        </button>
      </div>

      <!-- 复习内容 -->
      <div class="flex-1 flex flex-col items-center justify-center w-full p-4" v-if="reviewWords.length > 0 && currentReviewWord">
        <div class="w-full max-w-md relative">
          <transition name="fade" mode="out-in">
            <!-- 认读模式 -->
            <div v-if="reviewStage === 'reading'" key="reading" class="w-full">
              <WordCard :word="currentReviewWord" :key="currentReviewWord.id" />
              
              <div class="flex gap-3 mt-8">
                <button 
                  @click="reviewStage = 'spelling'"
                  class="flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <Keyboard class="w-5 h-5" />
                  <span>拼写</span>
                </button>

                <button 
                  @click="nextReviewWord"
                  class="flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  <span>{{ reviewIndex < reviewWords.length - 1 ? '下一个' : '进入拼写测试' }}</span>
                  <ArrowRight class="w-5 h-5" />
                </button>
              </div>
            </div>

            <!-- 拼写模式 -->
            <div v-else key="spelling" class="w-full">
              <SpellingCard :word="currentReviewWord" @complete="handleSpellingComplete" />
              
              <div class="flex gap-3 mt-6">
                <button 
                  @click="reviewStage = 'reading'"
                  class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Eye class="w-5 h-5" />
                  <span>认读模式</span>
                </button>
              </div>
              <div class="text-center mt-4">
                <p class="text-xs text-gray-400">完成拼写以继续</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
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

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
