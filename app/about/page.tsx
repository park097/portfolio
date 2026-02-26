import Footer from "@/components/Footer";
import { Check, Sparkles } from "lucide-react";

const strengths = [
  "운영 환경 기준으로 안정성과 성능을 함께 고려하는 설계",
  "기능 개발부터 장애 분석까지 이어지는 문제 해결 흐름",
  "프론트엔드-백엔드-인프라 간 커뮤니케이션 중심의 협업",
];

const timeline = [
  { year: "2022", title: "사내 업무 시스템 프론트엔드 고도화", detail: "React UI 구조 개선 및 페이지 성능 최적화" },
  { year: "2023", title: "승인 워크플로우 백엔드 리뉴얼", detail: "Spring Boot API 모듈화, 배치 안정성 개선" },
  { year: "2024", title: "온프레미스 배포 자동화 체계 구축", detail: "CI/CD 표준화와 운영 로그 수집 체계 정비" },
  { year: "2025", title: "운영 관제 대시보드 확장", detail: "실시간 알림 및 권한 모델 재설계" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="section pt-16 md:pt-24">
        <div className="container max-w-4xl space-y-5">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/80">About</p>
          <h1 className="text-3xl font-light md:text-5xl">도메인 맥락을 이해하는 개발자</h1>
          <p className="text-zinc-300 md:text-lg">
            단순히 기능을 완성하는 데서 끝나지 않고, 운영 단계에서 어떤 문제가 생길지까지 고려해 개발합니다.
            복잡한 업무 흐름을 사용자 관점으로 재해석해 서비스 품질로 연결하는 데 강점이 있습니다.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-medium">강점</h2>
            <ul className="mt-4 space-y-3">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300">
                  <Check size={17} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8">
            <h2 className="inline-flex items-center gap-2 text-xl font-medium">
              <Sparkles size={17} className="text-primary" />
              학습 방향
            </h2>
            <p className="mt-4 text-zinc-300">
              실무 중심 시스템 설계 역량을 더 강화하기 위해 도메인 이벤트, 관측성(Observability), 테스트 자동화
              영역을 꾸준히 학습하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-8">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-light md:text-3xl">학습/경험 타임라인</h2>
          <div className="mt-7 space-y-4">
            {timeline.map((item) => (
              <div key={item.year + item.title} className="glass-card grid gap-3 p-5 md:grid-cols-[110px_1fr] md:items-center">
                <p className="text-sm font-medium text-primary">{item.year}</p>
                <div>
                  <p className="text-white">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
