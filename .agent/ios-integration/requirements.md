# 需求文档

## 引言
本阶段的目标是将现有的 Vue 3 荷兰语学习 Web 应用转换为原生的 iOS 应用程序。我们将采用 **Capacitor** 框架来实现这一目标。Capacitor 允许我们将 Web 应用包装在原生容器中，从而在 iOS 设备上作为原生 App 运行，同时保留现有的 Web 开发工作流。

由于 iOS App 的最终编译和签名必须在 macOS 环境下使用 Xcode 完成，本阶段主要侧重于**代码层面的准备、框架集成、UI 适配以及生成 iOS 工程源代码**。

## 需求

### 需求 1：集成 Capacitor 框架

**用户故事：** 作为一名开发者，我希望在现有项目中集成 Capacitor，以便将 Web 代码构建为原生 App。

#### 验收标准
1. **WHEN** 安装依赖后，**THEN** 项目中应包含 `@capacitor/core`、`@capacitor/cli` 和 `@capacitor/ios`。
2. **WHEN** 初始化配置后，**THEN** 项目根目录下应存在 `capacitor.config.ts` 文件。
3. **IF** 检查配置，**THEN** App ID 应设置为 `com.dutch.learning.app` (或类似唯一标识)，应用名称应为 "Dutch Learning"。

### 需求 2：iOS 界面适配 (Safe Area)

**用户故事：** 作为一名 iOS 用户，我希望应用能完美适配我的 iPhone 屏幕，包括刘海屏和底部手势区域，内容不被遮挡。

#### 验收标准
1. **WHEN** 在 iOS 设备上运行应用，**THEN** 顶部状态栏和底部 Home Indicator 区域应有适当的内边距（Padding）。
2. **IF** 检查 `index.html`，**THEN** `viewport` meta 标签应包含 `viewport-fit=cover`。
3. **IF** 检查 CSS，**THEN** 底部导航栏和顶部标题栏应使用 `env(safe-area-inset-top)` 和 `env(safe-area-inset-bottom)` 进行适配。

### 需求 3：生成 iOS 工程源代码

**用户故事：** 作为一名开发者，我希望自动生成 iOS 项目的源代码结构，以便我后续可以在 Xcode 中打开并编译。

#### 验收标准
1. **WHEN** 执行构建命令后，**THEN** 项目根目录下应生成一个名为 `ios` 的文件夹。
2. **IF** 检查 `ios` 文件夹，**THEN** 应包含标准的 Xcode 项目结构（`.xcodeproj` 或 `.xcworkspace`）。
3. **WHEN** Web 代码更新后，**THEN** 应能通过命令将最新的 Web 资源同步到 `ios` 目录中。

### 需求 4：iOS 开发指南文档

**用户故事：** 作为一名开发者（可能不熟悉 iOS 开发），我希望有一份详细的指南，告诉我在生成代码后如何进行编译、模拟器运行和真机调试。

#### 验收标准
1. **WHEN** 完成所有代码工作后，**THEN** 项目根目录下应创建一个名为 `IOS_GUIDE.md` 的文件。
2. **IF** 阅读该文档，**THEN** 应能找到关于“环境要求”、“如何打开 Xcode”、“如何配置签名”以及“如何运行应用”的详细步骤。
