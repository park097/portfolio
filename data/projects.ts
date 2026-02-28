export type ProjectCategory = "web" | "app";
export type ProjectType = "Company" | "Personal";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  majorFeatures: string[];
  stack: string[];
  category: ProjectCategory;
  type: ProjectType;
  thumbnail: string;
  secondaryThumbnail?: string;
  imageHeight?: number;
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
    {
    slug: "daou-tablet",
    title: "다우정밀 Tablet",
    description: "태블릿 기반 생산 실적·불량·설비 점검 등록 시스템",
    longDescription:
      "태블릿을 활용하여 웹에서 생성된 작업지시를 기반으로 생산 실적 및 불량을 등록하고, PLC 기반 설비와 연동하여 자동 생산 수량을 실시간으로 표시하는 현장 작업 지원 시스템입니다. 또한 설비 일상점검 결과 등록과 공정이동표 발행을 통해 생산 흐름을 통합 관리하도록 설계되었습니다.",
    majorFeatures: [
      "작업 시작/중지 상태 제어 및 실시간 작업 시간·생산수량 집계",
      "라벨 스캔 기반 생산 실적 등록 및 공정이동표 발행",
      "잔량 조정 및 잔량 태그 발행을 통한 재고 흐름 관리"
    ],
    stack: ["PHP", "MSSQL", "Flutter", "Dart"],
    category: "app",
    type: "Company",
    imageHeight: 350,
    thumbnail: "/projects/tabletMain.png",
    githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=23ad112469dd8141b3a0d5404e046c4d&pm=c",
    demoUrl: ""
  },
  {
    slug: "daou-pda",
    title: "다우정밀 PDA",
    description: "QR/바코드 스캔 기반 실시간 자재·공정 관리 시스템",
    longDescription:
      "생산 및 입출고 공정에서 발생하는 자재 흐름을 모바일 단말에서 즉시 처리할 수 있도록 구현한 업무용 앱/백엔드 연동 프로젝트입니다.",
    majorFeatures: [
      "QR/바코드 스캔으로 품목 식별과 입출고 처리 자동화",
      "작업 이력 조회 및 상태 변경 기능으로 현장 처리 속도 개선",
      "서버 API 연동으로 모바일 입력 데이터의 실시간 반영",
    ],
    stack: ["PHP", "MSSQL", "Flutter", "Dart"],
    category: "app",
    type: "Company",
    imageHeight: 350,
    thumbnail: "/projects/pdaMain.png",
    githubUrl:
      "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=310d112469dd80a88553f14dabefeac4&pm=c",
    demoUrl: "",
  },
  {
    slug: "daou-monitoring",
    title: "다우정밀 Monitoring",
    description: "생산 데이터 실시간 수집 및 통합 모니터링 대시보드",
    longDescription:
      "현장 설비/작업 데이터를 서버로 수집하고, 대시보드에서 상태를 한눈에 확인할 수 있도록 구성한 모니터링 시스템입니다.",
    majorFeatures: [
      "생산량, 설비 상태, 작업 진행률을 실시간으로 시각화",
      "설비 상태(ON/PAUSE)와 주요 지표를 색상 기반으로 즉시 파악 가능",
      "라인/설비 단위 상세 조회로 현장 이슈 대응 시간 단축",
    ],
    stack: ["PHP", "MSSQL", "Flutter", "Dart"],
    category: "app",
    type: "Company",
    imageHeight: 350,
    thumbnail: "/projects/monitorMain.png",
    githubUrl:
      "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=310d112469dd80a29de9e96c210514d0&pm=c",
    demoUrl: "",
  },
    {
    slug: "cools-groupware",
    title: "쿨스 종합건설 그룹웨어",
    description: "건설 현장의 계약·자금·공정 관리를 통합한 웹 기반 그룹웨어 시스템",
    longDescription:
      "신규 그룹웨어 시스템 구축 프로젝트로, 건설 현장의 계약·공정·자금 관리를 통합 관리할 수 있도록 본사–현장–단말기 간 실시간 데이터 흐름을 중심으로 설계되었습니다. 기준정보를 설정하면 각 현장에서 공정, 계약, 기성 조서까지 연결되며, 건설 공사 및 인력·자금 관리를 하나의 웹 시스템에서 운영할 수 있도록 구현했습니다.",
    majorFeatures: [
      "하도급 업체 견적 비교 및 품의서 작성·등록 기능 구현",
      "경비 사용 내역 등록 및 월별 조회·관리 기능 제공",
      "현장별·월별 경비 자동 집계 및 총액 계산 기능 구현",
      "공종별 월간 공정 계획 수립 및 전월/금월 비교 관리 기능"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vue.js","PHP", "MSSQL"],
    category: "web",
    type: "Company",
    imageHeight: 250,
    thumbnail: "/projects/cws.png",
    githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=23ad112469dd81d7831fc9d7d3f649c8&pm=c",
    demoUrl: ""
  },
    {
    slug: "steel-korea-mes",
    title: "스틸코리아 MES",
    description: "생산 기준정보 관리 및 작업 실적 통합 관리를 위한 MES 구축 프로젝트",
    longDescription:
      "스틸코리아 생산 현장에 MES 시스템을 구축하여 작업 지시, 생산 정보 등록, 설비 가동 정보 수집을 통합 관리하도록 설계한 프로젝트입니다. 현장 작업자가 직접 생산 정보를 등록하고, 터닝 2호기의 가동/비가동 데이터를 수집하여 실적과 연계되도록 구현했습니다. 또한 공정·제품별 라우팅 및 Cycle Time 등 생산 기준정보를 시스템에서 관리하고, 이를 생산계획 수립에 활용할 수 있도록 구성했습니다.",
    majorFeatures: [
      "일,주,월별 작업실적 조회기능",
      "생산성적서 조회, 출력기능",
    ],
    stack: ["JavaScript", "PHP", "MSSQL"],
    category: "web",
    type: "Company",
    imageHeight: 250,
    thumbnail: "/projects/steel.png",
    githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=23ad112469dd819d9793ef59ac9a4d05&pm=c",
    demoUrl: ""
  },
  {
  slug: "mh-delivery",
  title: "배달 앱 만들기 (MH DELIVERY)",
  description: "Firebase 기반 음식 배달 서비스 앱 (Flutter + 상태관리 중심 설계)",
  longDescription:
    "MH DELIVERY는 Firebase 기반의 음식 배달 서비스 앱으로 Flutter 프레임워크를 활용해 개발한 개인 프로젝트입니다. 로그인 상태 유지, 데이터 캐싱, 실시간 UI 반영 등 실제 서비스 구조를 고려하여 구현하였으며, 사용자 경험을 중심으로 UX 흐름과 상태 관리 구조를 설계했습니다.",
  majorFeatures: [
    "토큰 유효성 검증 기반 자동 로그인 및 go_router 조건 분기 처리",
    "20개 단위 Pagination 및 무한 스크롤 방식 목록 조회 구현",
    "Skeleton UI + Cache 적용으로 로딩 최적화",
    "Riverpod 기반 장바구니 상태 관리 및 금액 자동 계산",
    "리뷰 시스템 구현 및 상태 변화에 따른 UI 자동 갱신"
  ],
  stack: [ "Flutter","Riverpod","Firebase","Node.js", "Swagger", "Postman", "JWT",],
  category: "app",
  type: "Personal",
  imageHeight: 350,
  thumbnail: "/projects/appProject1.png",
  githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=23ad112469dd81fcaf9bc8d39566a607&pm=c",
  demoUrl: ""
 },
  {
  slug: "webtoon-clone",
  title: "웹툰 클론코딩",
  description: "Flutter 기반 웹툰 서비스 클론 프로젝트 (상태관리·UI 구조 설계 중심)",
  longDescription:
    "웹툰 플랫폼을 Flutter로 구현한 클론 프로젝트입니다. 로그인 흐름, 정렬 기능, 관심작품 관리, 별점 및 댓글 기능, 결제 연동까지 실제 서비스 구조를 기반으로 구현했습니다. Riverpod을 활용한 상태관리와 Sliver 기반 고급 스크롤 UI 구조 설계에 중점을 두었습니다.",
  majorFeatures: [
    "Splash → 로그인 → 자동 로그인 분기 처리 및 토큰 기반 인증 흐름 구현",
    "CustomScrollView + SliverAppBar + SliverGrid 기반 고급 스크롤 UI 구성",
    "관심작가·최근 본 웹툰·회차 캐싱 및 상태 분기 처리",
    "별점 평가 및 댓글 정렬·삭제 기능 구현",
  ],
  stack: ["Flutter", "Riverpod", "HTML5", "Spring Boot", "MySQL", "GitHub", "Git", "Slack", "Notion"],
  category: "app",
  type: "Personal",
  imageHeight: 350,
  thumbnail: "/projects/appProject2.png",
  githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=23ad112469dd81d6ba63de182929eb00&pm=c",
  demoUrl: ""
},
  {
    slug: "wedding",
    title: "Wedding Invitation",
    description: "모바일 중심 청첩장 웹앱",
    longDescription:
      "모바일 사용성을 중심으로 일정/장소/갤러리/방명록 등 필요한 기능을 구성한 청첩장 웹앱 프로젝트입니다.",
    majorFeatures: [
      "일정/장소/계좌/연락 등 핵심 정보 섹션화",
      "갤러리 및 방명록 인터랙션 구성",
      "모바일 화면 비율 최적화 및 성능 고려한 이미지 구성",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    type: "Personal",
    imageHeight: 250,
    thumbnail: "/projects/weddingMain.png",
    githubUrl: "https://github.com/weddingMain.png",
    demoUrl: "https://wedding.co.kr",
  },
   {
    slug: "portfolio",
    title: "Developer Portfolio",
    description: "프로젝트 중심으로 경험을 보여주는 개인 포트폴리오 웹사이트",
    longDescription:
      "Next.js 기반으로 포트폴리오를 설계하고, 프로젝트 목록/상세, 인터랙션 UI, 반응형 레이아웃까지 직접 구현했습니다. 또한 온프레미스 서버를 구축해 도메인 연결 후 실제 서비스 형태로 배포했습니다.",
    majorFeatures: [
      "프로젝트 카드 필터링, 상세 페이지 라우팅, 썸네일 구성 등 포트폴리오 핵심 기능 구현",
      "Hero 인터랙션, 스크롤 유도, 섹션 전환 애니메이션 등 사용자 경험 중심 UI 구성",
      "온프레미스 서버 구축 후 Nginx 리버스 프록시와 도메인 연결로 외부 접근 가능한 형태로 배포",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Nginx"],
    category: "web",
    type: "Personal",
    imageHeight: 250,
    thumbnail: "/projects/portMain.png",
    githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=313d112469dd80febebfdd611eb67446&pm=c",
    demoUrl: "https://mhdev.co.kr",
  },
  {
  slug: "mini-mes-system",
  title: "Mini MES System",
  description: "품목·재고·생산을 통합 관리하는 자동차 부품 시나리오 기반 MES 웹 시스템",
  longDescription:
    "Spring Boot와 React(TypeScript)로 인증/권한, 품목 마스터, 재고 입출고, 생산지시 관리 기능을 end-to-end로 구현했습니다. 생산 완료 시 재고 자동 반영 로직을 적용해 도메인 간 데이터 흐름을 연결했고, 온프레미스 Ubuntu 서버에 Nginx 리버스 프록시 구성으로 실제 운영 형태까지 배포했습니다.",
  majorFeatures: [
    "JWT 인증과 ADMIN/USER 권한 분리, Protected Route 기반 접근 제어로 업무 화면 보안 구성",
    "품목 CRUD + 안전재고 관리, 재고 입출고/현재고/이력 조회 및 LOT 메모 기반 추적 기능 구현",
    "생산지시 생성/진행/완료 처리와 완료 시 재고 IN 자동 반영, 대시보드 KPI·D-Day·재고리스크 시각화 제공",
  ],
  stack: ["Java 17","Spring Boot","Spring Security","JPA (Hibernate)","MySQL","React","TypeScript", "Vite","MUI","Nginx", "Ubuntu", ],
  category: "web",
  type: "Personal",
  imageHeight: 250,
  thumbnail: "/projects/mesMain.png",
  githubUrl: "https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b?p=310d112469dd8061abecd6b840d1148b&pm=c",
  demoUrl: "https://mes.mhdev.co.kr",
}
];

export const projectFilters: Array<"All" | ProjectCategory> = ["All", "web", "app"];
