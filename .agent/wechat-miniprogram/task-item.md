# 实施计划

- [ ] 1. 依赖安装与环境配置
   - 安装 `@dcloudio/vite-plugin-uni` 及相关核心依赖
   - 安装 `weapp-tailwindcss` 及 `postcss-wechat` 等适配插件
   - 修改 `vite.config.ts` 以集成 Uni-app 和 Tailwind 适配插件
   - _需求：1, 4_

- [ ] 2. 项目结构与入口改造
   - 创建 `pages.json` 配置文件，定义页面路由和 TabBar
   - 改造 `src/main.ts` 为 Uni-app 的 SSR 启动模式
   - 修改 `index.html` 适配 Uni-app 格式
   - 将 `src/views` 目录重命名为 `src/pages` 以符合 Uni-app 规范
   - _需求：1, 2_

- [ ] 3. 路由系统替换
   - 移除 `vue-router` 相关代码和依赖
   - 修改 `App.vue`，移除 `<router-view>` 和自定义底部导航，改用原生 TabBar
   - 检查并替换所有 `router.push` / `useRoute` 为 `uni.navigateTo` / `onLoad` 等 API
   - _需求：2_

- [ ] 4. 数据存储与工具库适配
   - 修改 `src/utils/storage.ts`，使用 `uni.setStorageSync` / `uni.getStorageSync` 替代 `localStorage`
   - 确保 API 在 H5 和小程序端均可正常工作
   - _需求：3_

- [ ] 5. 组件功能与 DOM 适配
   - 修改 `History.vue`，移除 `document.getElementById` 和 `scrollIntoView`，改用 `<scroll-view>` 组件和 `scroll-into-view` 属性
   - 修改 `WordCard.vue`，对 `speechSynthesis` 进行环境判断，小程序端进行降级处理（如提示不支持）
   - 适配 `SpellingCard.vue` 中的输入框事件
   - _需求：5_

- [ ] 6. 样式构建配置
   - 配置 `postcss.config.js` 和 `tailwind.config.js` 以适配微信小程序（处理单位转换和选择器）
   - 验证 Tailwind 类名在小程序端的编译结果
   - _需求：4_
