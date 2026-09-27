import { Constellation } from "@/components/Constellation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PhoneSimulator } from "@/components/PhoneSimulator";

const stages = [
  {
    stage: "STAGE 01",
    icon: "cloud_sync",
    iconClass: "text-primary",
    title: "JSON Spec",
    body: "Backend dynamically generates layout metadata, widget hierarchies, styling rules, and telemetry hooks.",
    chip: "Codable Schema",
    chipClass: "bg-primary/10 text-primary",
  },
  {
    stage: "STAGE 02",
    icon: "code_blocks",
    iconClass: "text-secondary",
    title: "Native Parser",
    body: "Zero-allocation Swift deserializer with recursive fallback mechanisms for unknown schema versions.",
    chip: "Type-Safe Decode",
    chipClass: "bg-secondary/10 text-secondary",
  },
  {
    stage: "STAGE 03",
    icon: "view_quilt",
    iconClass: "text-tertiary",
    title: "Layout Engine",
    body: "Calculates intrinsic aspect ratios and layout attributes on background GCD queues before UI delivery.",
    chip: "Precomputed Calc",
    chipClass: "bg-tertiary/10 text-tertiary",
  },
  {
    stage: "STAGE 04",
    icon: "alt_route",
    iconClass: "text-primary-fixed-dim",
    title: "Diffable Source",
    body: "UICollectionViewDiffableDataSource applies surgical snapshots preventing expensive UI reloads.",
    chip: "Myers Diffing",
    chipClass: "bg-primary/10 text-primary-fixed-dim",
  },
  {
    stage: "STAGE 05",
    icon: "speed",
    iconClass: "text-tertiary",
    title: "60 FPS Render",
    body: "Fluid smooth scrolling, micro-cached cell bindings, zero main-thread stutters even on high load.",
    chip: "16.6ms Target",
    chipClass: "bg-tertiary/10 text-tertiary",
  },
];

const guarantees = [
  {
    icon: "view_in_ar",
    iconClass: "text-primary",
    meta: "RUNTIME CORE",
    metaClass: "text-tertiary",
    title: "Runtime Widget Orchestration",
    body: "Dynamic tree synthesis allows multi-vendor marketing widgets and product grids to construct synchronously inside decoupled off-screen contexts without stalling main thread drawing passes.",
  },
  {
    icon: "rocket_launch",
    iconClass: "text-tertiary",
    meta: "CONTINUOUS DELIVERY",
    metaClass: "text-primary",
    title: "Zero-Binary Deployment Guarantees",
    body: "Eliminates App Store submission cycles for seasonal campaigns and A/B layouts. Codable schema versioning guarantees graceful fallback to stable widget primitives on legacy client builds.",
  },
  {
    icon: "cached",
    iconClass: "text-secondary",
    meta: "DATA INTEGRITY",
    metaClass: "text-secondary",
    title: "Cache Invalidation Strategies",
    body: "Multi-tier memory and disk caching powered by HTTP ETag reconciliation and microsecond Myers diffing ensures lightning-quick rehydration and instantaneous offline recovery.",
  },
];

const roles = [
  {
    badge: "Current Impact",
    company: "Nykaa",
    title: "SDE 3",
    titleClass: "text-primary",
    checkClass: "text-primary",
    dates: "Jan 2023 — Present",
    summary: (
      <>
        Owned the flagship iOS Display Network SDK powering homepage discovery experiences across{" "}
        <strong className="text-on-surface">Nykaa Beauty, Nykaa Fashion, and Nykaa Man</strong> apps, driving core
        revenue-generating touchpoints.
      </>
    ),
    points: [
      "Architected server-driven UI enabling runtime ad rendering and accelerated marketing campaigns without App Store version releases.",
      "Led modularization, SDK boundary containment, and performance optimization, significantly reducing binary footprints and cold launch latencies.",
      "Acted as iOS Architecture Reviewer for cross-team client integrations, mentoring engineering peers across multiple application pods.",
    ],
    tags: [
      ["Swift", "text-primary"],
      ["UIKit", "text-primary"],
      ["Server-Driven UI", "text-tertiary"],
      ["CoreData", "text-primary"],
      ["Modular SDK", "text-primary"],
      ["MVVM", "text-secondary"],
    ],
    metricLabel: "Scale Metric",
    metric: "3 Production Apps",
    metricClass: "text-tertiary",
    metricNote: "Unified SDK Core",
  },
  {
    company: "Byju's",
    title: "SDE 2",
    titleClass: "text-secondary",
    checkClass: "text-secondary",
    dates: "May 2021 — Jan 2023",
    summary:
      "Designed and scaled a mission-critical shared DRM video playback framework adopted universally across multiple apps in the Byju's ecosystem.",
    points: [
      "Optimized Apple FairPlay DRM video pipelines and scrub buffers, improving playback reliability for high-concurrency educational streams.",
      "Engineered interactive synchronized video overlay tools (in-video quizzes, timelines), boosting average student session duration.",
      "Maintained unit test suites via XCTest and automated regressions, safeguarding core player components during frequent deployments.",
    ],
    tags: [
      ["AVKit", "text-secondary"],
      ["DRM Streaming", "text-secondary"],
      ["Swift", "text-primary"],
      ["Protocol-Oriented", "text-tertiary"],
      ["XCTest", "text-secondary"],
    ],
    metricLabel: "Stability Target",
    metric: "99.8% Play Rate",
    metricClass: "text-secondary",
    metricNote: "Zero-stall streaming",
  },
  {
    company: "VVDN Technologies",
    title: "Senior Software Engineer",
    titleClass: "text-tertiary",
    checkClass: "text-tertiary",
    dates: "Apr 2016 — May 2021",
    summary: (
      <>
        Spearheaded native iOS architecture and application development for enterprise IoT products, including the{" "}
        <strong className="text-on-surface">Netgear Insight</strong> networking ecosystem (managing Access Points,
        Switches, and ReadyNAS).
      </>
    ),
    points: [
      "Crafted high-performance multi-threaded I/O pipelines handling real-time IoT hardware telemetry, charting, and network device topology.",
      "Architected CoreData caching and Grand Central Dispatch (GCD) worker pools for offline-first telemetry persistence.",
    ],
    tags: [
      ["Objective-C", "text-tertiary"],
      ["Swift", "text-tertiary"],
      ["GCD / Queues", "text-primary"],
      ["CoreData", "text-tertiary"],
      ["IoT Protocols", "text-secondary"],
    ],
    metricLabel: "Tenure Depth",
    metric: "5 Years",
    metricClass: "text-tertiary",
    metricNote: "IoT Firmware Systems",
  },
];

const arsenal = [
  {
    icon: "terminal",
    iconWrap: "bg-primary-container/20 text-primary",
    title: "Core & UI Systems",
    subtitle: "Native Interface",
    chips: [
      { label: "Swift (95%)", className: "bg-surface-container-high text-primary font-medium" },
      { label: "UIKit (95%)", className: "bg-surface-container-high text-on-surface" },
      { label: "Server-Driven UI (90%)", className: "bg-primary-container text-on-primary-container font-semibold" },
      { label: "Combine (75%)", className: "bg-surface-container-high text-on-surface" },
      { label: "SwiftUI", className: "bg-surface-container-high text-on-surface" },
      { label: "Objective-C (85%)", className: "bg-surface-container-high text-on-surface" },
    ],
  },
  {
    icon: "bolt",
    iconWrap: "bg-secondary-container/30 text-secondary",
    title: "Performance & AV",
    subtitle: "Low-Level Streams",
    chips: [
      { label: "AVKit (85%)", className: "bg-surface-container-high text-secondary font-medium" },
      { label: "DRM Video Streaming (80%)", className: "bg-secondary-container text-on-secondary-container font-semibold" },
      { label: "GCD / Multithreading (80%)", className: "bg-surface-container-high text-on-surface" },
      { label: "Instruments & Leaks", className: "bg-surface-container-high text-on-surface" },
      { label: "FairPlay Key Handshake", className: "bg-surface-container-high text-on-surface" },
      { label: "CoreMedia TimeSync", className: "bg-surface-container-high text-on-surface" },
    ],
  },
  {
    icon: "architecture",
    iconWrap: "bg-tertiary-container/30 text-tertiary",
    title: "Architecture & Quality",
    subtitle: "Resilient Patterns",
    chips: [
      { label: "Modular Architecture (90%)", className: "bg-surface-container-high text-tertiary font-medium" },
      { label: "MVVM & MVVM-C (90%)", className: "bg-surface-container-high text-on-surface" },
      { label: "Protocol-Oriented (85%)", className: "bg-surface-container-high text-on-surface" },
      { label: "CoreData (85%)", className: "bg-surface-container-high text-on-surface" },
      { label: "XCTest (80%)", className: "bg-surface-container-high text-on-surface" },
      { label: "REST & WebSockets", className: "bg-surface-container-high text-on-surface" },
    ],
  },
];

const metrics = [
  { value: "9+", label: "Years Craft", valueClass: "text-on-surface" },
  { value: "10+", label: "Apps Shipped", valueClass: "text-primary" },
  { value: "160M+", label: "Users Impacted", valueClass: "text-tertiary" },
  { value: "3", label: "Core Domains", valueClass: "text-secondary" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top" className="w-full bg-surface pt-16">
        <section className="relative w-full overflow-hidden px-6 pb-20 pt-6 lg:px-12">
          <Constellation />
          <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[680px] w-[680px] rounded-full bg-electric-blue/10 blur-[140px]" />
          <div className="pointer-events-none absolute right-10 top-48 -z-10 h-[540px] w-[540px] rounded-full bg-ios-purple/15 blur-[160px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="z-10 flex flex-col gap-6 lg:col-span-5">
                <div className="inline-flex w-fit items-center gap-2.5 rounded-full bg-surface-container/80 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
                  </span>
                  <span className="font-label-code text-label-code uppercase tracking-wide text-on-surface">
                    Available for Staff / Lead iOS Roles
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-display text-display-mobile tracking-tight text-on-surface md:text-display md:leading-[1.08]">
                    Architecting{" "}
                    <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                      iOS at Scale.
                    </span>
                  </h1>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-label-code text-label-code font-semibold uppercase tracking-widest text-primary">
                      9+ Years Craft
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
                    <span className="font-label-code text-label-code font-semibold uppercase tracking-widest text-tertiary">
                      160M+ Impacted
                    </span>
                  </div>
                </div>

                <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                  SDE 3 specializing in Server-Driven UI, Modular Frameworks, and High-Concurrency UIKit/Combine
                  pipelines. Currently leading the flagship{" "}
                  <strong className="font-semibold text-on-surface">Display Network SDK at Nykaa</strong> powering core
                  consumer discovery flows across millions of daily active devices.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#simulator"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-container px-6 py-3 font-body-md text-body-md font-semibold text-on-primary-container shadow-[0_0_24px_rgba(0,113,227,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(0,113,227,0.65)] active:scale-[0.98]"
                  >
                    <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                    Interact with Demo Device
                  </a>
                  <a
                    href="#engine-room"
                    className="inline-flex items-center gap-2 rounded-full bg-surface-container-high/70 px-6 py-3 font-body-md text-body-md font-medium text-on-surface shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-surface-container-high active:scale-[0.98]"
                  >
                    <span className="material-symbols-outlined text-[20px]">layers</span>
                    Explore Architecture
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 sm:grid-cols-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col rounded-xl bg-surface-container/60 p-3.5 shadow-sm backdrop-blur-lg"
                    >
                      <span className={`font-headline-md text-headline-md font-bold ${metric.valueClass}`}>
                        {metric.value}
                      </span>
                      <span className="mt-0.5 font-label-badge text-label-badge uppercase tracking-wider text-text-muted">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <PhoneSimulator />
            </div>
          </div>
        </section>

        <section id="engine-room" className="relative w-full bg-surface-container-lowest/50 px-6 py-24 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="font-label-code text-label-code font-semibold uppercase tracking-wider text-primary">
                    Architecture Deep-Dive
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
                  In the Engine Room: Nykaa SDUI
                </h2>
                <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                  A battle-tested Server-Driven UI architecture decoupling release cycles from App Store review
                  pipelines. Runtime dynamic ad widgets mapped to high-efficiency CocoaTouch layouts.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-col rounded-xl bg-surface-container px-4 py-2.5 backdrop-blur-md">
                  <span className="font-label-code text-label-code font-bold text-tertiary">-42% Binary Size</span>
                  <span className="font-label-badge text-label-badge uppercase text-text-muted">Modular Frameworks</span>
                </div>
                <div className="flex flex-col rounded-xl bg-surface-container px-4 py-2.5 backdrop-blur-md">
                  <span className="font-label-code text-label-code font-bold text-primary">120ms Warm Launch</span>
                  <span className="font-label-badge text-label-badge uppercase text-text-muted">Cold Pipeline Opt</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              {stages.map((stage) => (
                <div
                  key={stage.stage}
                  className="flex flex-col gap-3 rounded-2xl bg-surface-container/70 p-6 backdrop-blur-md transition-all hover:bg-surface-container"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-label-badge font-bold uppercase tracking-widest text-text-muted">
                      {stage.stage}
                    </span>
                    <span className={`material-symbols-outlined text-[20px] ${stage.iconClass}`}>{stage.icon}</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">{stage.title}</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{stage.body}</p>
                  <div className="mt-auto pt-4">
                    <span className={`rounded px-2 py-1 font-label-code text-label-code ${stage.chipClass}`}>
                      {stage.chip}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col gap-6 rounded-3xl border border-white/5 bg-surface-container/60 p-8 shadow-md backdrop-blur-xl">
              <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/30 pb-4 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container/20 text-primary">
                    <span className="material-symbols-outlined text-[24px]">account_tree</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      System Architecture & Delivery Guarantees
                    </h3>
                    <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted">
                      High-Concurrency Orchestration Engine
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-badge text-label-badge font-semibold uppercase tracking-wider text-primary">
                    Zero-Binary Overhead
                  </span>
                  <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-badge text-label-badge font-semibold uppercase tracking-wider text-tertiary">
                    Sub-Millisecond Diffing
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {guarantees.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2.5 rounded-2xl bg-surface-container-high/40 p-5">
                    <div className="flex items-center justify-between">
                      <span className={`material-symbols-outlined text-[22px] ${item.iconClass}`}>{item.icon}</span>
                      <span className={`font-label-code text-[11px] font-semibold ${item.metaClass}`}>{item.meta}</span>
                    </div>
                    <h4 className="font-headline-sm text-body-lg font-bold text-on-surface">{item.title}</h4>
                    <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full bg-surface px-6 py-24 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-code text-label-code font-semibold uppercase tracking-wider text-tertiary">
                Track Record
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
                Where I&apos;ve Architected
              </h2>
              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                From cutting-edge IoT multi-threading to enterprise-scale DRM video and multi-app Server-Driven UI
                platforms.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {roles.map((role) => (
                <article
                  key={role.company}
                  className="flex flex-col justify-between gap-8 rounded-3xl bg-surface-container/60 p-8 shadow-md backdrop-blur-xl transition-all hover:bg-surface-container/90 lg:flex-row lg:items-start"
                >
                  <div className="flex flex-col gap-4 lg:w-2/3">
                    <div className="flex flex-wrap items-center gap-3">
                      {role.badge ? (
                        <span className="rounded-full bg-primary-container px-3.5 py-1 font-label-badge text-label-badge font-bold uppercase tracking-wider text-on-primary-container">
                          {role.badge}
                        </span>
                      ) : null}
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{role.company}</h3>
                      <span className="text-text-muted">•</span>
                      <span className={`font-headline-sm text-headline-sm font-medium ${role.titleClass}`}>
                        {role.title}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{role.summary}</p>
                    <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface">
                      {role.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className={`material-symbols-outlined mt-0.5 text-[18px] ${role.checkClass}`}>
                            check_circle
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {role.tags.map(([label, color]) => (
                        <span
                          key={label}
                          className={`rounded-full bg-surface-container-high px-3 py-1 font-label-code text-label-code ${color}`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between self-stretch lg:w-1/3 lg:items-end">
                    <span className="font-label-code text-label-code font-semibold uppercase tracking-wider text-text-muted">
                      {role.dates}
                    </span>
                    <div className="mt-4 flex w-full flex-col rounded-2xl bg-surface-container-high/40 p-4 lg:mt-0 lg:max-w-xs lg:items-end">
                      <span className="font-label-badge text-label-badge uppercase text-text-muted">
                        {role.metricLabel}
                      </span>
                      <span className={`font-headline-sm text-headline-sm font-bold ${role.metricClass}`}>
                        {role.metric}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant lg:text-right">
                        {role.metricNote}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="arsenal" className="relative w-full bg-surface-container-lowest/50 px-6 py-24 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-code text-label-code font-semibold uppercase tracking-wider text-primary">
                Specialized Toolkit
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile font-bold tracking-tight text-on-surface md:text-headline-lg">
                Native iOS Technical Arsenal
              </h2>
              <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Deep CocoaTouch mastery. Engineered from the low-level RunLoop up to modern reactive paradigms.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {arsenal.map((group) => (
                <div
                  key={group.title}
                  className="flex flex-col gap-4 rounded-3xl bg-surface-container/70 p-6 shadow-md backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${group.iconWrap}`}>
                      <span className="material-symbols-outlined text-[24px]">{group.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{group.title}</h3>
                      <span className="font-label-badge text-label-badge uppercase text-text-muted">{group.subtitle}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className={`rounded-full px-3.5 py-1.5 font-body-sm text-body-sm ${chip.className}`}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
