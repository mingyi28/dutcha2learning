# 实施计划

- [ ] 1. 数据结构升级与历史记录存储
   - 修改 `UserProgress` 接口，增加 `dailyLearningRecords` 字段（`Record<string, number[]>`），用于记录每日学习的单词ID
   - 更新 `storage.ts` 中的相关逻辑，确保在完成今日学习或打卡时，将今日学习的单词ID列表保存到 `dailyLearningRecords` 中
   - _需求：7_

- [ ] 2. 日历展示范围调整
   - 修改 `History.vue` 中的 `initMonths` 逻辑，仅生成当前月份和下个月份的数据（共2个月）
   - 移除之前加载过去11个月的逻辑
   - _需求：6_

- [ ] 3. 日历交互与详情展示
   - 在 `History.vue` 中实现点击日期事件处理
   - 创建一个弹窗组件（或在 `History.vue` 内部实现模态框），用于展示选中日期的学习单词列表
   - 如果该日期没有详细记录，显示友好提示
   - _需求：7_

- [ ] 4. 页面状态保持 (KeepAlive)
   - 修改 `App.vue`，在 `<router-view>` 中使用 `<KeepAlive>` 包裹组件
   - 验证在“今日学习”、“复习”和“打卡记录”之间切换时，页面状态（如当前单词进度）是否得到保留
   - _需求：8_
