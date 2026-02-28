import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import ContactChannels from "@/components/ContactChannels";
import FeedbackModal from "@/components/FeedbackModal";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import { projects } from "@/data/projects";

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
            <p className="mt-2 text-sm text-zinc-400">
              주요 프로젝트를 빠르게 확인할 수 있으며, 프로젝트를 누르면 더 자세히 보실 수 있습니다.
            </p>
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
            <ContactChannels />
          </div>
        </div>
      </section>

      <FeedbackModal />
      <Footer />
    </main>
  );
}
