export type ProjectCategory = "web" | "app";
export type ProjectType = "Company" | "Personal";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problemSolving: string[];
  stack: string[];
  category: ProjectCategory;
  type: ProjectType;
  thumbnail: string;
  secondaryThumbnail?: string;
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "operations-dashboard",
    title: "Operations Dashboard",
    description: "실시간 운영 지표와 알림을 통합한 내부 대시보드",
    longDescription:
      "React 기반 UI와 API 게이트웨이를 결합해 운영팀이 업무 시스템 상태를 한 화면에서 모니터링할 수 있도록 설계했습니다.",
    problemSolving: [
      "렌더링 병목을 줄이기 위해 차트 데이터를 배치 요청으로 전환",
      "알림 노이즈를 줄이기 위해 심각도 기반 필터링 로직 적용",
      "권한별 메뉴 노출 규칙을 공통 훅으로 통합해 유지보수 비용 절감",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    category: "web",
    type: "Company",
    thumbnail: "/projects/cws.png",
    githubUrl: "https://github.com/example/operations-dashboard",
    demoUrl: "https://demo.example.com/operations-dashboard",
  },
  {
    slug: "workflow-api",
    title: "Workflow API",
    description: "업무 요청 승인 흐름을 담당하는 Spring Boot 서비스",
    longDescription:
      "복수 단계 승인과 이력 추적이 필요한 업무 프로세스를 API 단위로 모듈화하고, 사내 시스템과 안정적으로 연동했습니다.",
    problemSolving: [
      "트랜잭션 경계를 재정의해 동시성 충돌 케이스 감소",
      "배치 처리 큐를 도입해 피크 시간대 타임아웃 해소",
      "통합 테스트 시나리오를 분리해 배포 전 회귀 검증 강화",
    ],
    stack: ["Spring Boot", "Java", "PostgreSQL", "Redis"],
    category: "web",
    type: "Company",
    thumbnail: "/projects/workflow-api.svg",
    githubUrl: "https://github.com/tablet1.png",
    demoUrl: "https://demo.example.com/workflow-api",
  },
  {
    slug: "onprem-deploy-pipeline",
    title: "On-Prem Deploy Pipeline",
    description: "온프레미스 서버 배포 자동화 파이프라인",
    longDescription:
      "수동으로 진행되던 배포 과정을 스크립트와 CI 파이프라인으로 표준화해 운영 안정성과 배포 속도를 동시에 개선했습니다.",
    problemSolving: [
      "환경 변수 관리 정책을 분리해 배포 오류 원인 축소",
      "롤백 시나리오를 자동화해 장애 대응 시간 단축",
      "배포 로그 수집 체계를 정비해 사후 분석 정확도 향상",
    ],
    stack: ["Jenkins", "Docker", "Nginx", "Bash"],
    category: "app",
    type: "Company",
    thumbnail: "/projects/pda.png",
    secondaryThumbnail: "/projects/pda2.png",
    githubUrl: "https://github.com/example/onprem-deploy-pipeline",
    demoUrl: "https://demo.example.com/onprem-deploy-pipeline",
  },
  {
    slug: "knowledge-center",
    title: "Knowledge Center",
    description: "사내 문서 검색과 공유를 위한 협업 플랫폼",
    longDescription:
      "팀별 문서를 통합 검색하고 버전을 추적할 수 있는 협업 페이지를 구축해 정보 접근 속도를 높였습니다.",
    problemSolving: [
      "검색 정확도 향상을 위해 키워드 가중치 정책 적용",
      "문서 변경 이력 UI를 컴포넌트화해 확장성 확보",
      "비정상 요청을 조기 차단하는 서버 검증 체계 도입",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    category: "web",
    type: "Personal",
    thumbnail: "/projects/monitor.png",
    githubUrl: "https://github.com/example/knowledge-center",
    demoUrl: "https://demo.example.com/knowledge-center",
  },
];

export const projectFilters: Array<"All" | ProjectCategory> = ["All", "web", "app"];
