"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#simulator", id: "simulator", label: "Work & iOS Apps" },
  { href: "#engine-room", id: "engine-room", label: "Architecture & SDUI" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#arsenal", id: "arsenal", label: "Tech Stack" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("simulator");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-surface/75 shadow-[0_1px_16px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-space-md px-6 lg:px-12">
        <a href="#top" className="flex items-center gap-space-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container-high shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <span className="font-label-code text-label-code font-bold tracking-tight text-primary">BJ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-body-md font-semibold leading-tight text-on-surface">
              Bharat Juneja
            </span>
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted">
              SDE 3
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-space-xs rounded-full bg-surface-container-lowest/60 p-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-full px-space-md py-1.5 font-body-sm text-body-sm transition-all ${
                active === link.id
                  ? "bg-primary-container text-on-primary-container shadow-[0_0_12px_rgba(0,113,227,0.35)]"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            href="#connect"
            className="hidden items-center justify-center rounded-full bg-primary-container px-space-md py-2 font-body-sm text-body-sm font-semibold text-on-primary-container shadow-[0_0_20px_rgba(0,113,227,0.35)] transition-all hover:bg-primary-container/90 hover:shadow-[0_0_28px_rgba(0,113,227,0.5)] sm:inline-flex"
          >
            Book Intro Call
          </a>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary md:pointer-events-none"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined text-[18px] md:hidden">{open ? "close" : "menu"}</span>
            <span className="material-symbols-outlined hidden text-[18px] md:inline">person</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/5 bg-surface/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 font-body-md text-body-md text-on-surface hover:bg-surface-container-high"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-primary-container px-3 py-2 text-center font-body-sm text-body-sm font-semibold text-on-primary-container"
            >
              Book Intro Call
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
