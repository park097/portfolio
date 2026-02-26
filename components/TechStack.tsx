"use client";

import { motion } from "framer-motion";
import { CloudCog, Database, LayoutPanelTop, Server, ShieldCheck, Workflow } from "lucide-react";

const items = [
  { name: "Next.js / React", icon: LayoutPanelTop },
  { name: "TypeScript", icon: ShieldCheck },
  { name: "Spring Boot", icon: Server },
  { name: "PostgreSQL / Redis", icon: Database },
  { name: "Docker / Nginx", icon: CloudCog },
  { name: "CI/CD Workflow", icon: Workflow },
];

export default function TechStack() {
  return (
    <section className="section flex min-h-[100svh] items-center">
      <div className="container space-y-5">
        <div>
          <h2 className="text-2xl font-medium md:text-3xl">Tech Stack</h2>
          <p className="mt-2 text-sm text-zinc-400">운영 환경에서 검증하며 개선한 프로젝트 일부를 소개합니다.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card flex items-center gap-3 p-4"
              >
                <div className="rounded-lg border border-primary/35 bg-primary/8 p-2 text-primary">
                  <Icon size={18} />
                </div>
                <span className="text-sm text-zinc-200">{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
