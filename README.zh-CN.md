# Axi Sports Management App（`axi-sports-app`）

Axi Sports Management Application — 基于 Quasar + Vue 3 + TypeScript 的多端
体育管理应用骨架，覆盖体育场地 / 课程 / 会员等管理场景，并附带 Capacitor
Android 壳层。本仓库是 Web 客户端与 Capacitor 包装的规范化根目录；
`backend/` 子目录目前为占位骨架。

- **负责人**：单人 owner（`1208136885@qq.com`）
- **规范化路径**：`/Volumes/code/workspace/projects/axi-sports-management-app`
- **工作区分区**：`projects/axi-*`（带 Axi 前缀的 Axi 项目）
- **产品名**：`Axi Sports`（`package.json#productName`）

## 技术栈

- Quasar 2（`@quasar/app-vite`）+ Vue 3 + TypeScript
- Pinia 状态管理、Vue Router、Vue I18n
- ESLint flat config + Prettier
- Capacitor 6 Android 壳层（`src-capacitor/`）

## 目录结构

```text
src/                   # Quasar 入口（App.vue、boot、components、pages、router、stores、i18n、layouts）
src/i18n/              # Vue I18n 资源；目前仅 en-US
src-capacitor/         # Capacitor Android 壳层
backend/               # 后端占位（骨架）
frontend/              # 早期 public/ 静态资源，与 src/ 并存
docs/                  # 项目文档与 project-docs.manifest.json
public/                # 公共静态资源
quasar.config.ts       # Quasar 构建/启动/CSS 配置
eslint.config.js       # Flat ESLint 配置
package.json           # 脚本：dev / build / lint / format
```

## 安装

```bash
pnpm install   # 或：yarn / npm install
```

## 运行

```bash
pnpm dev       # quasar dev
```

## 构建

```bash
pnpm build     # quasar build
```

## Lint / 格式化

```bash
pnpm lint
pnpm format
```

## 验证

```bash
pnpm install
pnpm lint
pnpm build
pnpm exec vue-tsc --noEmit   # 可选
```

## 文档地图

根级文档地图见 `INDEX.md`；根级 agent 规则、边界与本地文档阅读顺序见
`AGENTS.md`。产品与测试范围见 `PRD.md` 与 `TDD.md`。任务与里程碑见
`TODO.md`、`MILESTONE.md`，历史见 `CHANGELOG.md`。
