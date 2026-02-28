"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prevPathnameRef = useRef(pathname);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const cameFromDifferentPage = prevPathnameRef.current !== "/" && pathname === "/";
    if (cameFromDifferentPage && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      setActiveSection("home");
    }
    prevPathnameRef.current = pathname;

    if (pathname !== "/") {
      setActiveSection("home");
      return;
    }

    let rafId: number | null = null;

    const updateActiveByScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
        return;
      }

      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .sort((a, b) => a.offsetTop - b.offsetTop);

      if (!sections.length) {
        return;
      }

      const marker = window.scrollY + 140;
      let current = "home";
      for (const section of sections) {
        if (marker >= section.offsetTop) {
          current = section.id;
        } else {
          break;
        }
      }
      setActiveSection(current);
    };

    const handleHashChange = () => {
      updateActiveByScroll();
    };

    updateActiveByScroll();
    rafId = window.requestAnimationFrame(updateActiveByScroll);
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    window.addEventListener("resize", updateActiveByScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", updateActiveByScroll);
      window.removeEventListener("resize", updateActiveByScroll);
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
