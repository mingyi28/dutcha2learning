# 实施计划

- [ ] 1. 数据模型与存储工具增强
   - 检查并更新 `src/types/index.ts` 中的 `UserProgress` 接口，确保包含 `dailyReviewStatus` 等字段
   - 修改 `src/utils/storage.ts` 中的 `getProgress` 方法，实现数据结构自动补全（Migration）逻辑，防止旧数据导致崩溃
   - 确保 `initTodayWords` 和 `markWordAsLearned` 操作后立即触发 `saveProgress`
   - _需求：1, 3, 4_

- [ ] 2. 每日学习页面状态恢复
   - 修改 `src/views/DailyLearn.vue`
   - 在 `onMounted` 中，根据 `todayTargetIds` 和 `todayLearnedIds` 计算当前应该显示的单词索引
   - 确保刷新页面后，用户能从中断的地方继续学习，而不是从头开始
   - _需求：1_

- [ ] 3. 复习功能持久化
   - 在 `src/utils/storage.ts` 中添加 `saveReviewStatus` 相关方法
   - 修改 `src/views/Review.vue`，在完成一组复习后记录状态
   - 确保复习进度（如今日是否已复习）能被持久化保存
   - _需求：4_

- [ ] 4. 打卡记录验证与优化
   - 审查 `src/utils/storage.ts` 中的 `checkIn` 方法，确保 `checkInHistory` 数组正确更新并去重
   - 验证 `src/components/CheckIn.vue` 在页面刷新后能正确显示“今日已打卡”状态
   - _需求：2_
