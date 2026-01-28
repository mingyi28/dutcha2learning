# 实施计划

- [ ] 1. 创建测试框架基础与环境隔离
   - 创建 `src/utils/test-runner.ts`，实现轻量级的测试工具函数（`describe`, `it`, `expect`）
   - 在 `test-runner.ts` 中实现 `setupTestEnv` 和 `teardownTestEnv`，用于在测试运行时切换 `STORAGE_KEY` 或备份/恢复 `localStorage` 数据，确保不污染用户真实数据
   - _需求：3_

- [ ] 2. 编写核心业务逻辑测试套件
   - 创建 `src/tests/storage.test.ts`，引入 `test-runner` 工具
   - 编写测试用例验证 `initTodayWords`：确保新的一天生成10个新单词
   - 编写测试用例验证 `markWordAsLearned`：确保 `learnedWordIds` 和 `dailyLearningRecords` 正确更新
   - 编写测试用例验证 `checkIn`：确保打卡日期、连续天数和历史记录正确更新
   - _需求：2_

- [ ] 3. 实现测试运行器页面
   - 创建 `src/views/TestRunner.vue` 页面组件
   - 在组件挂载时调用测试套件，并将测试结果（通过/失败、错误信息）响应式地展示在界面上
   - 界面应清晰区分测试套件（Suite）和测试用例（Case），失败的用例应显示红色并展示错误原因
   - _需求：1_

- [ ] 4. 配置测试路由
   - 修改 `src/router/index.ts`，添加 `/test` 路由，指向 `TestRunner.vue`
   - (可选) 在开发环境下或通过特定入口链接到测试页面
   - _需求：1_
