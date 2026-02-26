# Developer Portfolio (Next.js)

다크 테마 기반의 개발자 포트폴리오 사이트입니다.  
넓은 여백, 골드 포인트 컬러, 미니멀 인터랙션을 중심으로 구성했습니다.

## 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide-react

## 설치 및 실행

```bash
npm install
npm run dev
```

- 개발 서버: `http://localhost:3000`

## 주요 페이지

- `/` 메인(섹션형): `#home`, `#projects`, `#about`, `#contact`
- 고정 Header + Scroll Spy: 현재 viewport 섹션 메뉴 강조
- Hero Scroll Down: 클릭 시 `#projects`로 부드러운 이동
- `/projects`: 프로젝트 목록 + 카테고리 필터(Frontend / Backend / Infra)
- `/projects/[slug]`: 프로젝트 상세, 기술 스택, 문제 해결 포인트, 링크
- `/about`: 자기소개, 강점, 학습/경험 타임라인
- `/contact`: 연락 폼 UI + 외부 링크

## 구현 포인트

- `IntersectionObserver` 기반 Scroll Spy로 active 메뉴 관리
- `scroll-behavior: smooth` + 해시 링크로 섹션 스크롤 이동
- Hero 하단 Scroll Down 반복 애니메이션(Framer Motion)
- Hero 배경 Canvas 파티클 네트워크(`requestAnimationFrame`, 마우스 반응)
- 다크 톤 + 골드 포인트 + 미세 glow hover 효과

## 폴더 구조

```text
app/
  about/page.tsx
  contact/page.tsx
  layout.tsx
  page.tsx
  projects/
    page.tsx
    [slug]/page.tsx
components/
  Footer.tsx
  Header.tsx
  Hero.tsx
  PageTransition.tsx
  ScrollDown.tsx
  ProjectCard.tsx
  ProjectsGrid.tsx
  TechStack.tsx
data/
  projects.ts
public/
  projects/*.svg
```

## 배포 방법 (Vercel)

1. GitHub 저장소에 푸시
2. Vercel에서 `New Project`로 저장소 연결
3. Framework Preset을 Next.js로 확인 후 배포
4. 필요 시 도메인 연결

## 커스터마이징 방법

- 개인 정보 수정: `components/Hero.tsx`, `components/Footer.tsx`
- 프로젝트 데이터 수정: `data/projects.ts`
- 색상/분위기 조정: `app/globals.css`, `tailwind.config.ts`
- 섹션 구성 변경: `app/page.tsx`
