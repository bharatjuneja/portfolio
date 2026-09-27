"use client";

import { useEffect, useState } from "react";

type AppKey = "nykaa" | "byjus" | "netgear";

const tabs: { key: AppKey; label: string; icon: string; island: string }[] = [
  { key: "nykaa", label: "Nykaa SDUI", icon: "widgets", island: "SDUI" },
  { key: "byjus", label: "Byju's DRM", icon: "play_circle", island: "DRM" },
  { key: "netgear", label: "Netgear IoT", icon: "router", island: "MESH" },
];

const schema = `{
  "component": "CarouselWidget",
  "version": "4.2.0",
  "id": "hero_928",
  "layout": { "height": 194, "cachePolicy": "memDisk" },
  "props": {
    "title": "Monsoon Glamour Fest",
    "cta_action": "nykaa://collection/8821",
    "telemetry": { "ad_id": "AD_NYK_4288" }
  },
  "bindings": ["analytics", "experimentVariantB"]
}`;

export function PhoneSimulator() {
  const [app, setApp] = useState<AppKey>("nykaa");
  const [inspect, setInspect] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const island = tabs.find((tab) => tab.key === app)?.island ?? "SDUI";

  useEffect(() => {
    let timer = 0;
    const onInspect = () => {
      setApp("nykaa");
      setInspect(true);
      setHighlighted(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setHighlighted(false), 1600);
      if (window.matchMedia("(max-width: 1023px)").matches) {
        document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    window.addEventListener("portfolio:inspect-demo", onInspect);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("portfolio:inspect-demo", onInspect);
    };
  }, []);

  return (
    <div id="simulator" className="relative z-10 flex scroll-mt-24 flex-col items-center justify-center lg:col-span-7">
      <div className="z-20 mb-6 flex w-full max-w-md items-center justify-between rounded-full bg-surface-container-lowest/80 p-1.5 shadow-lg backdrop-blur-xl">
        {tabs.map((tab) => {
          const active = app === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setApp(tab.key)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-center font-body-sm text-body-sm transition-all ${
                active
                  ? "bg-primary-container font-semibold text-on-primary-container shadow-[0_0_16px_rgba(0,113,227,0.35)]"
                  : "font-medium text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
              <span className="text-[11px] leading-none sm:text-body-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div
        className={`relative h-[680px] w-full max-w-[310px] rounded-[54px] bg-gradient-to-b from-[#1C2330] via-[#0E131E] to-[#161B26] p-[10px] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8),0_0_40px_rgba(0,113,227,0.2)] transition-all duration-500 hover:scale-[1.01] sm:h-[720px] sm:max-w-[370px] ${
          highlighted ? "scale-[1.02] ring-4 ring-primary shadow-[0_0_48px_rgba(0,113,227,0.55)]" : ""
        }`}
      >
        <div className="absolute -left-[13px] top-[115px] h-[28px] w-[3px] rounded-l-sm bg-surface-variant opacity-80" />
        <div className="absolute -left-[13px] top-[160px] h-[48px] w-[3px] rounded-l-sm bg-surface-variant opacity-80" />
        <div className="absolute -left-[13px] top-[220px] h-[48px] w-[3px] rounded-l-sm bg-surface-variant opacity-80" />
        <div className="absolute -right-[13px] top-[170px] h-[74px] w-[3px] rounded-r-sm bg-surface-variant opacity-80" />

        <div className="relative flex h-full w-full select-none flex-col justify-between overflow-hidden rounded-[44px] bg-canvas-deep">
          <div className="z-30 flex w-full items-center justify-between px-6 pt-3">
            <span className="font-body-sm text-body-sm font-semibold tracking-tight text-pure-white">9:41</span>
            <div className="flex h-[28px] w-[116px] cursor-default items-center justify-between gap-2 rounded-full bg-black px-3 shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-tertiary" />
                <span className="font-label-badge text-label-badge font-bold uppercase tracking-tight text-pure-white">
                  {island}
                </span>
              </div>
              <div className="flex items-end gap-1">
                <span className="h-2 w-[2px] animate-pulse bg-tertiary" />
                <span className="h-3 w-[2px] animate-pulse bg-tertiary" />
                <span className="h-1.5 w-[2px] animate-pulse bg-tertiary" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-pure-white">
              <span className="material-symbols-outlined text-[13px]">wifi</span>
              <span className="font-label-code text-[10px] font-bold">5G</span>
              <span className="material-symbols-outlined text-[14px]">battery_full</span>
            </div>
          </div>

          {app === "nykaa" ? (
            <div className="flex w-full flex-1 flex-col gap-3 overflow-y-auto px-4 pt-2">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-body-lg font-bold tracking-tight text-pure-white">NYKAA</span>
                  <span className="rounded-full bg-primary-container/40 px-2 py-0.5 font-label-badge text-label-badge text-primary">
                    SDUI v4.2
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setInspect((value) => !value)}
                  className="flex items-center gap-1 rounded-md bg-surface-container-high px-2.5 py-1 font-label-code text-[11px] text-tertiary transition-colors hover:bg-surface-bright"
                >
                  <span className="material-symbols-outlined text-[13px]">code</span>
                  {inspect ? "Live View" : "Inspect JSON"}
                </button>
              </div>

              <div
                className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-[#99004d]/40 via-surface-container-high to-surface-container p-4 shadow-md transition-all duration-300 ${
                  inspect ? "opacity-40" : ""
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded bg-primary-container px-2 py-0.5 font-label-badge text-label-badge font-semibold uppercase tracking-wider text-on-primary-container">
                    Hero Slot 0
                  </span>
                  <span className="font-label-code text-[10px] text-tertiary">diff_key: #hero_928</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold leading-tight text-pure-white">
                  Monsoon Glamour Fest
                </h3>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Runtime server-hydrated collection. Up to 40% off top curated luxury lines.
                </p>
                <div className="mt-3 flex items-center justify-between pt-2">
                  <span className="font-label-code text-label-code font-bold text-primary">₹1,499 Onwards</span>
                  <span className="rounded-full bg-pure-white px-3.5 py-1.5 font-body-sm text-body-sm font-semibold text-[#051424] shadow-sm">
                    Explore SDUI
                  </span>
                </div>
              </div>

              {inspect ? (
                <pre className="w-full overflow-x-auto rounded-2xl bg-[#030712] p-3 text-left font-label-code text-[11px] leading-relaxed text-tertiary shadow-inner">
                  {schema}
                </pre>
              ) : null}

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col justify-between rounded-xl bg-surface-container/70 p-3">
                  <span className="font-label-badge text-label-badge uppercase text-text-muted">Nykaa Man</span>
                  <span className="mt-1 font-body-md text-body-md font-semibold text-pure-white">Grooming Kit</span>
                  <span className="mt-2 font-label-code text-label-code text-primary">SDK Fast-Path</span>
                </div>
                <div className="flex flex-col justify-between rounded-xl bg-surface-container/70 p-3">
                  <span className="font-label-badge text-label-badge uppercase text-text-muted">Nykaa Fashion</span>
                  <span className="mt-1 font-body-md text-body-md font-semibold text-pure-white">Autumn &apos;24</span>
                  <span className="mt-2 font-label-code text-label-code text-secondary">Zero-Binary Update</span>
                </div>
              </div>

              <div className="flex w-full items-center justify-between rounded-xl bg-surface-container-high/40 p-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-tertiary" />
                  <span className="font-label-code text-[11px] text-on-surface">SDUI Render Pipeline</span>
                </div>
                <span className="font-label-code text-[11px] font-bold text-tertiary">60.0 FPS</span>
              </div>
            </div>
          ) : null}

          {app === "byjus" ? (
            <div className="flex w-full flex-1 flex-col gap-3 overflow-y-auto px-4 pt-2">
              <div className="flex items-center justify-between py-1">
                <span className="font-headline-sm text-body-lg font-bold tracking-tight text-pure-white">
                  Byju&apos;s AVKit DRM
                </span>
                <span className="rounded-full bg-secondary-container px-2 py-0.5 font-label-badge text-label-badge text-on-secondary-container">
                  FairPlay 4K
                </span>
              </div>
              <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-high p-3 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-high to-surface-container opacity-90" />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded bg-error-container px-2 py-0.5 font-label-badge text-label-badge font-bold uppercase text-on-error-container">
                    DRM Encrypted
                  </span>
                  <span className="font-label-code text-[10px] text-tertiary">FairPlay Key Valid</span>
                </div>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center self-center rounded-full bg-surface-container-highest/90 shadow-lg">
                  <span className="material-symbols-outlined fill text-[28px] text-primary">play_arrow</span>
                </div>
                <div className="relative z-10 flex flex-col gap-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-lowest">
                    <div className="h-full w-2/3 rounded-full bg-primary" />
                  </div>
                  <div className="flex justify-between font-label-code text-[10px] text-on-surface-variant">
                    <span>18:42</span>
                    <span>-09:18</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-surface-container/80 p-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-badge text-label-badge font-semibold uppercase text-tertiary">
                    Interactive Video Event
                  </span>
                  <span className="font-label-code text-[10px] text-text-muted">timestamp: 18:40</span>
                </div>
                <p className="font-body-sm text-body-sm font-medium text-pure-white">
                  What is the time complexity of DiffableDataSource lookups?
                </p>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-center font-label-code text-[11px] text-on-surface">
                    O(N) Myers
                  </span>
                  <span className="rounded-lg bg-primary-container px-3 py-1.5 text-center font-label-code text-[11px] font-semibold text-on-primary-container">
                    O(1) Hash Ident
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-surface-container-lowest/60 p-3 font-label-code text-[11px]">
                <span className="text-text-muted">AVPlayerItem Buffer</span>
                <span className="text-tertiary">30.4s Forward Stash</span>
              </div>
            </div>
          ) : null}

          {app === "netgear" ? (
            <div className="flex w-full flex-1 flex-col gap-3 overflow-y-auto px-4 pt-2">
              <div className="flex items-center justify-between py-1">
                <span className="font-headline-sm text-body-lg font-bold tracking-tight text-pure-white">
                  Insight IoT Mesh
                </span>
                <span className="rounded-full bg-surface-container-high px-2 py-0.5 font-label-badge text-label-badge text-tertiary">
                  AP WAC510
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl bg-surface-container/80 p-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-badge text-label-badge uppercase text-text-muted">Mesh Throughput</span>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-headline-md text-headline-md font-bold tracking-tight text-pure-white">
                    1.42 <span className="font-body-sm text-body-sm font-normal text-text-muted">Gbps</span>
                  </span>
                  <span className="font-label-code text-label-code text-tertiary">CoreData Synced</span>
                </div>
                <svg className="mt-1 h-10 w-full text-tertiary" fill="none" viewBox="0 0 200 40" aria-hidden>
                  <path
                    d="M0 32 L30 26 L60 30 L90 14 L120 22 L150 8 L180 18 L200 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 32 L30 26 L60 30 L90 14 L120 22 L150 8 L180 18 L200 4 L200 40 L0 40 Z"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-xl bg-surface-container-high/40 p-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">cell_tower</span>
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-pure-white">Office Access Point 01</span>
                      <span className="font-label-code text-[10px] text-text-muted">192.168.1.104 • GCD Queue Pool</span>
                    </div>
                  </div>
                  <span className="font-label-badge text-label-badge font-bold uppercase text-tertiary">ONLINE</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-surface-container-high/40 p-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">dns</span>
                    <div className="flex flex-col">
                      <span className="font-body-sm text-body-sm font-semibold text-pure-white">ReadyNAS Storage Node</span>
                      <span className="font-label-code text-[10px] text-text-muted">192.168.1.200 • Multithreaded I/O</span>
                    </div>
                  </div>
                  <span className="font-label-badge text-label-badge font-bold uppercase text-secondary">SYNCED</span>
                </div>
              </div>
            </div>
          ) : null}

          <div className="z-30 flex w-full items-center justify-around bg-surface-container-lowest/90 px-6 pb-6 pt-3 backdrop-blur-md">
            {[
              { icon: "dashboard", label: "Feed", active: true },
              { icon: "explore", label: "Explore", active: false },
              { icon: "analytics", label: "Telemetry", active: false },
              { icon: "settings", label: "Settings", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-0.5 ${item.active ? "text-primary" : "text-text-muted"}`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? "fill" : ""}`}>{item.icon}</span>
                <span className="font-label-badge text-[10px] font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-40 h-1 w-32 -translate-x-1/2 rounded-full bg-pure-white/40" />
        </div>
      </div>
    </div>
  );
}
