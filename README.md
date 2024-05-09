# ゆめみパスポート フロントエンドコーディング試験

[![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://yumemi-passport-frontend-2024.r4ai.dev/storybook/?path=/docs/ui-button--docs)
[![codecov](https://codecov.io/gh/r4ai/yumemi-passport-frontend/graph/badge.svg?token=H2JGBR3MTY)](https://codecov.io/gh/r4ai/yumemi-passport-frontend)
[![CI](https://github.com/r4ai/yumemi-passport-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/r4ai/yumemi-passport-frontend/actions/workflows/ci.yml)
[![Publish to Cloudflare Pages](https://github.com/r4ai/yumemi-passport-frontend/actions/workflows/publish-to-cloudflare-pages.yml/badge.svg)](https://github.com/r4ai/yumemi-passport-frontend/actions/workflows/publish-to-cloudflare-pages.yml)

- ウェブサイト：https://yumemi-passport-frontend-2024.r4ai.dev/
- Storybook：https://yumemi-passport-frontend-2024.r4ai.dev/storybook/
- テストカバレッジ：https://app.codecov.io/gh/r4ai/yumemi-passport-frontend

## 🤖 Tech Stack

- **Build tool**: [Vite](https://vitejs.dev/)
- **UI Framework**: [React](https://react.dev/)
- **Styling**: [Panda CSS](https://panda-css.com/)
- **Routing**: [TanStack Router](https://tanstack.com/router/latest)
- **Data fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Charting**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Testing**:
  - [Storybook](https://storybook.js.org/)
  - [Vitest](https://vitest.dev/)

## 💻 Development

| コマンド                  | 説明                                      |
| ------------------------- | ----------------------------------------- |
| `bun install`             | 依存関係のインストール                    |
| `bun run dev`             | 開発サーバーの起動                        |
| `bun run build`           | ビルド                                    |
| `bun run preview`         | ビルド結果のプレビュー                    |
| `bun run storybook`       | Storybookの起動                           |
| `bun run storybook:build` | Storybookのビルド                         |
| `bun run storybook:test`  | Storybookによるコンポーネントテストの実行 |
| `bun run vitest`          | Vitestによる単体テストの実行              |
| `bun run format`          | Prettierによるコードフォーマットの実行    |
| `bun run lint:fix`        | ESLintによるコードのリントを実行          |
