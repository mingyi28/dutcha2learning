import { createRouter, createWebHistory } from 'vue-router';
import DailyLearn from '../views/DailyLearn.vue';
import Review from '../views/Review.vue';
import History from '../views/History.vue';
import TestRunner from '../views/TestRunner.vue';
import CourseList from '../views/CourseList.vue';
import ThemaDetail from '../views/ThemaDetail.vue';
import CourseLearn from '../views/CourseLearn.vue';
import CourseWordList from '../views/CourseWordList.vue';

const routes = [
  { path: '/', redirect: '/courses' },
  { path: '/learn', component: DailyLearn },
  { path: '/review', component: Review },
  { path: '/history', component: History },
  { path: '/test', component: TestRunner },
  { path: '/courses', component: CourseList },
  { path: '/thema/:id', component: ThemaDetail },
  { path: '/course/:id', component: CourseLearn },
  { path: '/course/:id/list', component: CourseWordList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;