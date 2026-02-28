"use client";

import { motion } from "framer-motion";
import { CloudCog, Database, LayoutPanelTop, Server, ShieldCheck, Workflow } from "lucide-react";

const stackGroups = [
  {
    title: "Frontend",
    icon: LayoutPanelTop,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "HTML5", "CSS", "Vite",],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Java 17", "Spring Boot", "JPA (Hibernate)", "PHP", "Node.js", "JWT"],
  },
  {
    title: "Mobile",
    icon: ShieldCheck,
    items: ["Flutter", "Dart", "Riverpod"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MSSQL", "MySQL", "Firebase"],
  },
  {
    title: "Infra & DevOps",
    icon: CloudCog,
    items: ["Nginx", "Ubuntu"],
  },
  {
    title: "Tools & Collaboration",
    icon: Workflow,
    items: ["Postman", "Git", "GitHub", "Slack", "Notion"],
  },
];

export default function TechStack() {
  return (
    <section className="section flex min-h-[72svh] items-center md:min-h-[78svh]">
      <div className="container space-y-5">
        <div>
          <h2 className="text-2xl font-medium md:text-3xl">Tech Stack</h2>
          <p className="mt-2 text-sm text-zinc-400">프로젝트에서 실제 사용한 기술 스택을 중심으로 구성했습니다.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card space-y-3 p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg border border-primary/35 bg-primary/8 p-2 text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-medium text-zinc-100">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
