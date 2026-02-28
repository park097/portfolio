import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import { projects } from "@/data/projects";
import { FileText, Github, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const companyProjects = projects.filter((project) => project.type === "Company");
  const personalProjects = projects.filter((project) => project.type === "Personal");

  return (
    <main>
      <Hero />

      <AboutSection />

      <section id="projects" className="section min-h-[90svh] scroll-mt-24 md:min-h-[96svh]">
        <div className="container space-y-6">
          <div>
            <h2 className="text-2xl font-medium md:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-sm text-zinc-400">주요 프로젝트를 필터로 빠르게 확인할 수 있습니다.</p>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Company</p>
                <h3 className="mt-2 text-xl font-medium text-zinc-100 md:text-2xl">Company Projects</h3>
              </div>
              <ProjectsGrid projects={companyProjects} />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Personal</p>
                <h3 className="mt-2 text-xl font-medium text-zinc-100 md:text-2xl">Personal Projects</h3>
              </div>
              <ProjectsGrid projects={personalProjects} />
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      <section id="contact" className="section min-h-[76svh] scroll-mt-24 pt-4 md:min-h-[84svh]">
        <div className="container space-y-6">
          <div>
            <h2 className="text-2xl font-medium md:text-3xl">Contact</h2>
            <p className="mt-2 text-sm text-zinc-400">아래 채널을 통해 연락하실 수 있습니다.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-medium">Contact Channels</h2>
              <p className="mt-2 text-sm text-zinc-400">원하시는 채널로 연락하실 수 있습니다.</p>
              <div className="mt-5 space-y-3">
                <Link
                  href="https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b"
                  className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <FileText size={16} />
                    Notion
                  </span>
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="https://github.com/park097"
                  className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </span>
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="tel:01087422845"
                  className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone size={16} />
                    010-8742-2845
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
