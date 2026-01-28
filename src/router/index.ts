import { createRouter, createWebHistory } from 'vue-router';
import DailyLearn from '../views/DailyLearn.vue';
import Review from '../views/Review.vue';
import History from '../views/History.vue';
import TestRunner from '../views/TestRunner.vue';

const routes = [
  { path: '/', redirect: '/learn' },
  { path: '/learn', component: DailyLearn },
  { path: '/review', component: Review },
  { path: '/history', component: History },
  { path: '/test', component: TestRunner },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;