"use client";

import { useState } from "react";

const email = "Juneja.bharat8@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="connect" className="relative w-full bg-surface px-6 py-20 lg:px-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[32px] bg-gradient-to-b from-surface-container-high via-surface-container to-surface-container-lowest p-8 text-center shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] lg:p-12">
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
          <span className="font-label-code text-label-code font-semibold uppercase tracking-wider text-tertiary">
            Staff • Lead Mobile Roles
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
          Let&apos;s Build Exceptional iOS Experiences
        </h2>
        <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          I am always eager to talk through high-concurrency client architectures, server-driven UI designs, and
          leadership opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary-container px-6 py-3.5 font-body-md text-body-md font-semibold text-on-primary-container shadow-[0_0_24px_rgba(0,113,227,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(0,113,227,0.65)] active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            {email}
          </a>
          <a
            href="tel:+919034496886"
            className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-6 py-3.5 font-body-md text-body-md font-medium text-on-surface transition-all hover:bg-surface-bright"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            +91 903-449-6886
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-3.5 font-body-sm text-body-sm font-semibold text-primary transition-all hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined text-[18px]">{copied ? "check" : "content_copy"}</span>
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 font-label-code text-label-code text-text-muted">
          <span>Location: India (Remote / Hybrid)</span>
          <span>•</span>
          <span>Notice: Standard Staff Transition</span>
        </div>
      </div>
    </section>
  );
}
