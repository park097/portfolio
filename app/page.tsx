import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import { projects } from "@/data/projects";
import { Github, Linkedin, Mail } from "lucide-react";
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
            <form
              className="glass-card space-y-4 p-6 md:p-8"
              aria-label="contact form"
              action="mailto:qkralsgml24@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="space-y-2">
                <label htmlFor="home-name" className="text-sm text-zinc-300">
                  Name
                </label>
                <input
                  id="home-name"
                  type="text"
                  className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="home-email" className="text-sm text-zinc-300">
                  Email
                </label>
                <input
                  id="home-email"
                  type="email"
                  className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                  placeholder="name@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="home-message" className="text-sm text-zinc-300">
                  Message
                </label>
                <textarea
                  id="home-message"
                  rows={5}
                  className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                  placeholder="Type your message"
                />
              </div>
              <button
                type="submit"
                className="rounded-md border border-primary/60 bg-primary/10 px-5 py-2 text-sm text-primary transition hover:shadow-glow"
              >
                Send Message
              </button>
            </form>

            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-medium">Contact Channels</h2>
              <p className="mt-2 text-sm text-zinc-400">원하시는 채널로 연락하실 수 있습니다.</p>
              <div className="mt-5 space-y-3">
                <Link
                  href="mailto:minhee.park@example.com"
                  className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail size={16} />
                    Email
                  </span>
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="https://github.com/example"
                  className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </span>
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/example"
                  className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin size={16} />
                    LinkedIn
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
