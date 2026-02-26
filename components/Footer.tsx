import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "mailto:minhee.park@example.com", label: "Email", icon: Mail },
  { href: "https://github.com/example", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/example", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col items-start justify-between gap-5 text-sm text-zinc-400 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} 박민희. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-zinc-300 transition hover:text-primary"
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
