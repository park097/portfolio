import Footer from "@/components/Footer";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "mailto:minhee.park@example.com", label: "Email", icon: Mail },
  { href: "https://github.com/example", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/example", label: "LinkedIn", icon: Linkedin },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section pt-16 md:pt-24">
        <div className="container max-w-4xl space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/80">Contact</p>
          <h1 className="text-3xl font-light md:text-5xl">협업 제안을 기다리고 있습니다.</h1>
          <p className="text-zinc-300">
            아래 폼은 UI 예시이며, 실제 백엔드 연동 없이 인터페이스만 제공합니다.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-card space-y-4 p-6 md:p-8" aria-label="연락 폼">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-zinc-300">
                이름
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-zinc-300">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-white/15 bg-black/20 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500"
                placeholder="name@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-zinc-300">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
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
            <h2 className="text-xl font-medium">Direct Links</h2>
            <p className="mt-2 text-sm text-zinc-400">빠른 연락은 아래 채널을 이용해 주세요.</p>
            <div className="mt-5 space-y-3">
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon size={16} />
                      {item.label}
                    </span>
                    <span aria-hidden>↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
