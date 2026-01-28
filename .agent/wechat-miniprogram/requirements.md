# 需求文档

## 引言
本阶段的目标是将现有的 Vue 3 网页应用迁移至 **Uni-app** 跨端框架。通过此次迁移，我们将实现“一套代码，多端运行”，既保留现有的 H5 网页版，又能编译生成微信小程序代码，从而满足发布到微信小程序的需求。

## 需求

### 需求 1：框架迁移与工程改造

**用户故事：** 作为一名开发者，我希望将项目架构从原生 Vite+Vue3 转换为 Uni-app 架构，以便支持小程序编译。

#### 验收标准
1. **WHEN** 安装 Uni-app 相关依赖（`@dcloudio/vite-plugin-uni` 等），**THEN** 项目应当能通过 `uni` 命令启动。
2. **IF** 检查项目结构，**THEN** 应当包含 `pages.json` 配置文件，且 `index.html` 入口被适配为 Uni-app 格式。
3. **WHEN** 运行 `npm run dev:mp-weixin`，**THEN** 应当在 `dist/dev/mp-weixin` 目录下生成微信小程序代码。

### 需求 2：路由系统重构

**用户故事：** 作为一名开发者，我希望将 `vue-router` 替换为 Uni-app 的原生路由系统，以适配小程序的页面栈管理。

#### 验收标准
1. **WHEN** 移除 `vue-router` 依赖及配置。
2. **IF** 配置 `pages.json`，**THEN** 应当包含“今日学习”、“复习”、“打卡记录”等核心页面路径。
3. **WHEN** 在代码中进行页面跳转，**THEN** 应当使用 `uni.navigateTo`、`uni.switchTab` 等 API 替代 `router.push`。
4. **IF** 使用底部导航栏，**THEN** 应当在 `pages.json` 中配置原生的 `tabBar`。

### 需求 3：数据存储与 API 适配

**用户故事：** 作为一名用户，我希望我的学习进度在小程序中也能正常保存和读取。

#### 验收标准
1. **WHEN** 调用存储方法时，**THEN** 系统应当判断当前环境。
2. **IF** 是小程序环境，**THEN** 使用 `uni.setStorageSync` / `uni.getStorageSync`。
3. **IF** 是 H5 环境，**THEN** 继续使用 `localStorage` 或统一使用 `uni` 的存储 API（Uni-app 会自动适配 H5 的 localStorage）。

### 需求 4：样式与 Tailwind CSS 适配

**用户故事：** 作为一名开发者，我希望保留现有的 Tailwind CSS 样式，而不需要重写所有 CSS。

#### 验收标准
1. **WHEN** 编译小程序时，**THEN** Tailwind CSS 的类名应当被正确处理并生成 `wxss` 可识别的样式。
2. **Note**: 需要引入适配小程序的 Tailwind 插件（如 `weapp-tailwindcss`），并处理小程序不支持的特定 CSS 选择器（如 `*` 通配符）。

### 需求 5：特定功能适配（DOM 与 语音）

**用户故事：** 作为一名用户，我希望小程序版本的功能尽可能与网页版一致，同时对不支持的功能有合理降级。

#### 验收标准
1. **IF** 代码中包含 `document` 或 `window` 等浏览器特有对象的操作（如 `scrollIntoView`），**THEN** 应当替换为 Uni-app 的 `uni.createSelectorQuery` 或 `scroll-view` 组件。
2. **IF** 涉及语音朗读（`speechSynthesis`），**THEN** 在小程序环境中应当暂时隐藏朗读按钮或提示“小程序端暂不支持朗读”，或者接入微信同声传译插件（视复杂度而定，优先选择降级处理）。
