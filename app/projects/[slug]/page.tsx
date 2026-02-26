import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="section pt-16 md:pt-24">
        <div className="container grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80">{project.category}</p>
            <h1 className="text-3xl font-light md:text-5xl">{project.title}</h1>
            <p className="text-zinc-300">{project.longDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={project.githubUrl}
                className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/12 px-5 py-2 text-sm text-primary transition hover:shadow-glow"
              >
                <Github size={15} />
                GitHub
              </Link>
              <Link
                href={project.demoUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
              >
                Demo
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="glass-card relative min-h-72 overflow-hidden border border-white/10">
            <Image
              src={project.thumbnail}
              alt={`${project.title} 상세 썸네일`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="glass-card max-w-4xl p-6 md:p-8">
            <h2 className="text-2xl font-light">문제 해결 포인트</h2>
            <ul className="mt-5 space-y-3">
              {project.problemSolving.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
