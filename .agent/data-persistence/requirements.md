# 需求文档

## 引言
本项目需要确保用户的学习进度、打卡记录和复习状态能够持久化保存到本地存储（LocalStorage）中。这样，当用户刷新页面或重新打开应用时，能够恢复到之前的学习状态，避免数据丢失。

## 需求

### 需求 1：核心学习数据持久化

**用户故事：** 作为一名用户，我希望我的学习进度（已学单词、今日目标）能够自动保存，以便我随时中断并继续学习。

#### 验收标准
1. **WHEN** 用户完成一个单词的学习（点击“下一个”），**THEN** 系统应当立即将该单词 ID 添加到 `learnedWordIds` 和 `todayLearnedIds` 并保存到 LocalStorage。
2. **WHEN** 系统初始化今日学习目标时（`initTodayWords`），**THEN** 应当将生成的 `todayTargetIds` 保存到 LocalStorage。
3. **IF** 用户刷新页面，**THEN** 系统应当从 LocalStorage 读取 `todayTargetIds` 和 `todayLearnedIds`，并恢复当前的学习进度（例如显示剩余未学的单词）。

### 需求 2：打卡记录持久化

**用户故事：** 作为一名用户，我希望我的打卡记录（连续天数、历史打卡日期）能够永久保存，以便我查看我的学习成就。

#### 验收标准
1. **WHEN** 用户点击“打卡”按钮成功打卡后，**THEN** 系统应当立即更新 `lastCheckInDate`、`consecutiveDays` 和 `checkInHistory` 并保存到 LocalStorage。
2. **IF** 用户第二天打开应用，**THEN** 系统应当能正确读取 `lastCheckInDate` 并判断是否断签，从而重置或累加 `consecutiveDays`。

### 需求 3：数据完整性与初始化

**用户故事：** 作为一名新用户，我希望第一次打开应用时能正确初始化数据，不会因为缺少字段而报错。

#### 验收标准
1. **IF** LocalStorage 中没有数据（新用户），**THEN** 系统应当使用包含所有必要字段（包括 `checkInHistory` 等）的默认初始值进行初始化。
2. **IF** LocalStorage 中的数据结构过时（缺少新字段），**THEN** 系统应当在读取时自动补全缺失字段，防止应用崩溃。

### 需求 4：复习状态持久化

**用户故事：** 作为一名用户，我希望我的复习进度也能被记录，避免重复复习同一组单词。

#### 验收标准
1. **WHEN** 用户在复习模式下完成一组单词，**THEN** 系统应当记录复习状态（如更新 `lastReviewDate` 或 `dailyReviewStatus`）。
