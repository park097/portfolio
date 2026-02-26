import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import { projects } from "@/data/projects";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="projects" className="section min-h-[100svh] scroll-mt-24">
        <div className="container space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-medium md:text-3xl">Featured Projects</h2>
              <p className="mt-2 text-sm text-zinc-400">운영 환경에서 검증하며 개선한 프로젝트 일부를 소개합니다.</p>
            </div>
            <Link href="/projects" className="text-sm text-primary transition hover:text-[#f4d98f]">
              전체 보기
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* <section id="about" className="section min-h-[100svh] scroll-mt-24">
        <div className="container">
          <div className="glass-card max-w-4xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary/80">About</p>
            <h2 className="mt-3 text-2xl font-light md:text-3xl">문제를 구조적으로 파악하고 끝까지 해결합니다.</h2>
            <p className="mt-4 text-zinc-300">
              업무 시스템에서 가장 중요한 건 화려한 기술보다 안정적인 동작이라고 생각합니다. 기능 구현부터
              운영 이슈 분석까지 전체 흐름을 이해하며, 사용자와 운영팀 모두에게 예측 가능한 경험을 만드는 데
              집중합니다.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-sm text-primary transition hover:shadow-glow"
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </section> */}

      <section id="contact" className="section min-h-[100svh] scroll-mt-24 pt-4">
        <div className="container space-y-6">
          <div>
            <h2 className="text-2xl font-medium md:text-3xl">Contact</h2>
            <p className="mt-2 text-sm text-zinc-400">협업 제안이나 문의는 아래 폼 또는 채널로 보내주세요.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-card space-y-4 p-6 md:p-8" aria-label="연락 폼">
            <div className="space-y-2">
              <label htmlFor="home-name" className="text-sm text-zinc-300">
                이름
              </label>
              <input
                id="home-name"
                type="text"
                className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="home-email" className="text-sm text-zinc-300">
                이메일
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
                메시지
              </label>
              <textarea
                id="home-message"
                rows={5}
                className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                placeholder="메시지를 입력하세요"
              />
            </div>
            <button
              type="button"
              className="rounded-md border border-primary/60 bg-primary/10 px-5 py-2 text-sm text-primary transition hover:shadow-glow"
            >
              Send Message
            </button>
          </form>

          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-medium">Contact Channels</h2>
            <p className="mt-2 text-sm text-zinc-400">아래 채널로도 연락하실 수 있습니다.</p>
            <div className="mt-5 space-y-3">
              <Link
                href="mailto:minhee.park@example.com"
                className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </span>
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="https://github.com/example"
                className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
              >
                <span className="inline-flex items-center gap-2">
                  <Github size={16} />
                  GitHub
                </span>
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="https://linkedin.com/in/example"
                className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={16} />
                  LinkedIn
                </span>
                <span aria-hidden>↗</span>
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
