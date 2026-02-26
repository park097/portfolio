import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="section pt-16 md:pt-24">
        <div className="container space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Projects</p>
          <h1 className="text-3xl font-light md:text-5xl">실무 중심 프로젝트 아카이브</h1>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
            프론트엔드, 백엔드, 인프라 전 영역에서 직접 설계하고 운영한 프로젝트를 정리했습니다.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
