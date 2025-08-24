# Vite + React + TypeScript + Zustand + shadcn/ui 프로젝트

이 프로젝트는 다음 기술 스택을 사용하여 구축되었습니다:

## 🚀 기술 스택

- **Vite** - 빠른 빌드 도구
- **React 19** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안전성
- **Zustand** - 상태 관리
- **shadcn/ui** - UI 컴포넌트 라이브러리
- **Tailwind CSS 4** - 유틸리티 우선 CSS 프레임워크

## 📦 설치

```bash
pnpm install
```

## 🛠️ 개발 서버 실행

```bash
pnpm dev
```

개발 서버는 `http://localhost:5173`에서 실행됩니다.

## 🏗️ 빌드

```bash
pnpm build
```

## 📁 프로젝트 구조

```
src/
├── components/
│   └── ui/           # shadcn/ui 컴포넌트들
├── store/            # Zustand 스토어
├── lib/              # 유틸리티 함수들
├── App.tsx           # 메인 앱 컴포넌트
└── main.tsx          # 앱 진입점
```

## ✨ 기능

- ✅ Vite + React + TypeScript 설정
- ✅ Zustand를 사용한 상태 관리
- ✅ shadcn/ui 컴포넌트 (Button, Card, Input)
- ✅ Tailwind CSS 4 스타일링
- ✅ TypeScript 타입 안전성
- ✅ Hot Module Replacement (HMR)

## 🎯 테스트 기능

앱에서 다음 기능들을 테스트할 수 있습니다:

1. **Zustand 카운터**: 증가, 감소, 리셋 버튼으로 상태 관리 테스트
2. **Input 컴포넌트**: shadcn/ui Input 컴포넌트 테스트
3. **반응형 디자인**: Tailwind CSS를 사용한 반응형 레이아웃

## 🔧 설정 파일

- `vite.config.ts` - Vite 설정
- `tsconfig.json` - TypeScript 설정
- `components.json` - shadcn/ui 설정
- `tailwind.config.js` - Tailwind CSS 설정 (자동 생성됨)
