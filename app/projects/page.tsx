import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const companyProjects = projects.filter((project) => project.type === "Company");
  const personalProjects = projects.filter((project) => project.type === "Personal");

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
        <div className="container space-y-14">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Company</p>
              <h2 className="mt-2 text-2xl font-medium">Company Projects</h2>
            </div>
            <ProjectsGrid projects={companyProjects} />
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Personal</p>
              <h2 className="mt-2 text-2xl font-medium">Personal Projects</h2>
            </div>
            <ProjectsGrid projects={personalProjects} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
