import { useEffect, useState } from "react";

const LINES = ["Automate workflows.", "Build scalable systems.", "Save valuable time."];

const CALENDLY_URL = "https://calendly.com/arnold-ortua-antonio/30min?back=1&month=2026-07";
const CV_URL = "https://drive.google.com/file/d/1pcWn5u1LQXFCFXW_2WOTPgHLO7N4GmfH/view?usp=sharing";

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % LINES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(214,190,140,0.07) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="animate-line-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
            AI Automation Specialist | GHL Specialist
          </p>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-gradient-silver">
              {LINES.map((line, idx) => (
                <span
                  key={line}
                  className={`block transition-all duration-700 ${
                    idx === i ? "text-white opacity-100" : "text-neutral-600 opacity-40"
                  }`}
                >
                  {line}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            I design intelligent automations and AI-powered workflows that eliminate repetitive
            tasks, streamline operations, and help businesses focus on growth and high-impact work.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a Call
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              View My Work
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-champagne/60 hover:text-white"
            >
              Download CV <span className="text-neutral-500">(ATS-Friendly)</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900">
            <img
              src="/picsko.png"
              alt="Arnold Antonio, AI automation and GoHighLevel specialist"
              className="h-full w-full object-cover grayscale contrast-110 transition-all duration-700 hover:grayscale-0"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
              <p className="text-sm font-semibold text-white">Arnold Antonio</p>
              <p className="text-xs text-neutral-400">AOA Automation Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
