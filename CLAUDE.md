# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses pnpm as the package manager:

- **Development server**: `pnpm dev` (runs on http://localhost:5173)
- **Build**: `pnpm build` (TypeScript compilation + Vite build)
- **Lint**: `pnpm lint` (ESLint with TypeScript support)
- **Preview**: `pnpm preview` (preview production build)

Note: There are no test scripts configured in this project.

## Architecture Overview

This is a modern React application built with:
- **Vite** as the build tool with React plugin
- **React 19** with TypeScript for type safety
- **Zustand** for lightweight state management
- **shadcn/ui** component library with Tailwind CSS v4
- **Path aliases** configured (`@/` points to `./src`)

### Key Structure
- `src/components/ui/` - shadcn/ui components (Button, Card, Input)
- `src/store/` - Zustand stores (currently contains useCounterStore)
- `src/lib/utils.ts` - Utility functions (follows shadcn/ui convention)
- `components.json` - shadcn/ui configuration (New York style, Lucide icons)

### State Management
Uses Zustand with a simple counter store pattern. New stores should follow the same interface pattern with typed state and actions.

### UI Components
Uses shadcn/ui components with "new-york" style variant. Components are configured to use CSS variables for theming and are located in `@/components/ui`.

### Styling
- Tailwind CSS v4 with the Vite plugin
- CSS variables enabled for theming
- Base styles in `src/index.css`
- Neutral base color scheme

## Configuration Files
- `vite.config.ts` - Vite configuration with React and Tailwind plugins
- `eslint.config.js` - Flat config format with TypeScript, React hooks, and refresh plugins
- `components.json` - shadcn/ui configuration
- Multiple TypeScript configs: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`

# 워크플로우
- 일련의 코드 변경을 완료했을 때 타입체크 실행
- 성능상 전체 테스트 스위트가 아닌 단일 테스트 실행 선호
- 테스트 작성 후 커밋, 그리고 코딩 