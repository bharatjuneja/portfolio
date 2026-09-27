"use client";

export function InspectDemoButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("portfolio:inspect-demo"))}
      className="inline-flex items-center gap-2 rounded-full bg-primary-container px-6 py-3 font-body-md text-body-md font-semibold text-on-primary-container shadow-[0_0_24px_rgba(0,113,227,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(0,113,227,0.65)] active:scale-[0.98]"
    >
      <span className="material-symbols-outlined text-[20px]">code</span>
      Inspect Demo JSON
    </button>
  );
}
