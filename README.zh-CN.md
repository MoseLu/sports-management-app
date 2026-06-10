# Axi Sports Management App（`axi-sports-app`）

Axi Sports Management Application — 基于 Vite + React 18 + TypeScript 的多端
体育场馆/课程/会员管理骨架项目，并附带可选的 Capacitor Android 壳。
本仓库是 Web 客户端和 Capacitor 包装的规范来源；后端位于 `backend/`，目前
仅为占位。

- **Owner**: solo owner（`1208136885@qq.com`）
- **Canonical path**: `/Volumes/code/workspace/projects/axi-sports-management-app`
- **Workspace position**: `projects/axi-*`（Axi 前缀项目）
- **Product name**: `Axi Sports`（`package.json#productName`）

## 技术栈

- Vite 5 + React 18 + TypeScript 5
- React Router v6（Capacitor WebView 默认使用 `createHashRouter`；通过
  `VITE_USE_BROWSER_ROUTER=1` 切换到 `createBrowserRouter`）
- Ant Design 5 + `@ant-design/icons`
- Zustand 4 状态管理
- i18next + react-i18next + `i18next-browser-languagedetector`
- ESLint flat config + Prettier
- Capacitor 7 Android 壳，位于 `src-capacitor/`
- axios HTTP 客户端

## 目录结构

```text
src/                   # Vite + React 入口（main.tsx、App.tsx、components、pages、layouts、router、stores、i18n、lib、styles、types）
src/i18n/              # i18next 资源；目前仅 en-US
src/lib/               # 横切模块（axios 客户端）
src/types/             # 共享 TypeScript 类型
src-capacitor/         # Capacitor Android 壳
backend/               # 后端占位（仅骨架）
frontend/              # 历史 public/ 静态资源，与 src/ 并存
docs/                  # 项目文档与 project-docs.manifest.json
public/                # 公共静态资源
vite.config.ts         # Vite 构建/开发配置
eslint.config.js       # Flat ESLint 配置
tsconfig.json          # TypeScript 应用配置（references 指向 tsconfig.node.json）
package.json           # 脚本：dev / build / preview / lint / format / typecheck
```

## 安装

```bash
pnpm install   # 也可：yarn / npm install
```

## 运行

```bash
pnpm dev       # vite dev server（http://localhost:9000）
pnpm preview   # 预览生产构建
```

## 构建

```bash
pnpm build     # tsc -b && vite build，产物在 dist/
```

## Lint / format

```bash
pnpm lint
pnpm format
```

## 验证

```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

## Capacitor（Android）

```bash
# 一次性初始化
cd src-capacitor && pnpm install

# 构建 Web 包并同步到 Android 壳
pnpm build && pnpm cap:sync

# 在 Android Studio 中打开 Android 工程
pnpm cap:open:android
```

Capacitor `webDir`（`../dist`）相对 `src-capacitor/` 解析，指向仓库根
Vite 构建产物。

## 文档地图

规范的文档目录请见 `INDEX.md`，根 agent 规则与边界请见 `AGENTS.md`。
`PRD.md` 和 `TDD.md` 定义产品和测试范围。`TODO.md`、`MILESTONES.md`、
`CHANGELOG.md` 跟踪任务与历史。
