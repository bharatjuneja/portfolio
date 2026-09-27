const links = [
  { label: "GitHub", href: "https://github.com/bharatjuneja" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bharat-juneja-67a36296" },
  { label: "Portfolio", href: "https://bharatjuneja.github.io/bharat-portfolio/" },
];

export function Footer() {
  return (
    <footer className="mt-space-xl w-full bg-surface-container-lowest/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-space-lg px-6 py-space-xl md:flex-row lg:px-12">
        <div className="flex flex-col items-center gap-space-xs md:items-start">
          <div className="flex items-center gap-space-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
            <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant">
              iOS • Swift • SDUI
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-text-faint">
            © {new Date().getFullYear()} Bharat Juneja. Engineered with CocoaTouch precision.
          </span>
        </div>
        <div className="flex items-center gap-space-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded px-space-sm py-1 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
