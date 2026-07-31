import { useEffect, useState } from "react";

const LINKS = [
  ["Process", "#process"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["About", "#about"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[auto_1fr_auto] lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/15 bg-white/5 text-[11px] font-bold tracking-tight text-white">
            AOA
          </span>
          <span className="truncate text-sm font-semibold tracking-tight text-white">
            AOA Automation
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-black transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
          >
            Book a Call
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/5 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-white transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-white transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-2xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-black"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
