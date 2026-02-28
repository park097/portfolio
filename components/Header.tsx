"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("home");
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (sectionIds.includes(hash)) {
      setActiveSection(hash);
    }

    let observer: IntersectionObserver | null = null;
    let rafId: number | null = null;
    let attempts = 0;
    const maxAttempts = 30;

    const setupObserver = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (!sections.length) {
        attempts += 1;
        if (attempts < maxAttempts) {
          rafId = window.requestAnimationFrame(setupObserver);
        }
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible?.target.id) {
            setActiveSection(visible.target.id);
          }
        },
        {
          root: null,
          rootMargin: "-42% 0px -45% 0px",
          threshold: [0.12, 0.25, 0.45, 0.65],
        }
      );

      sections.forEach((section) => observer?.observe(section));
    };

    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (sectionIds.includes(id)) {
        setActiveSection(id);
      }
    };

    setupObserver();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      observer?.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, sectionIds]);

  const getHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-bg/82 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-[0.24em] text-primary">
          MINHEE.P
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === "/" ? activeSection === item.id : false;
            return (
              <Link
                key={item.id}
                href={getHref(item.id)}
                className={`text-sm transition ${
                  isActive ? "text-primary drop-shadow-[0_0_10px_rgba(224,195,108,0.45)]" : "text-white/78 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-white/15 p-2 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#121216] md:hidden">
          <nav className="container flex flex-col py-3">
            {navItems.map((item) => {
              const isActive = pathname === "/" ? activeSection === item.id : false;
              return (
                <Link
                  key={item.id}
                  href={getHref(item.id)}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm ${
                    isActive ? "bg-primary/10 text-primary" : "text-white/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
