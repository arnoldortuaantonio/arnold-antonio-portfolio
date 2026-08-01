import { useState } from "react";
import { Reveal, SectionHeading } from "./primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CALENDLY_URL =
  "https://calendly.com/arnold-ortua-antonio/30min?hide_gdpr_banner=1&embed=true&background_color=020d18&text_color=e8f1ff&primary_color=3ec9ff";

const PUBLIC_IMAGES = {
  n8n1: "/certification/n8n-first-workflows.jpg",
  n8n2: "/certification/n8n-api-connected.jpg",
  n8n3: "/certification/n8n-ai-testing.jpg",
  n8nLvl2: "/certification/4.n8n Level 2Cert.png",
  zapAgents: "/certification/zap-ai-agents.jpg",
  zapZaps: "/certification/zap-intermediate-zaps.jpg",
  claude101: "/certification/claude-101.jpg",
  coursera: "/certification/coursera-deepseek-n8n.jpg",
  make: "/certification/make-academy.jpg",
};

const CERTS = [
  {
    image: PUBLIC_IMAGES.n8n1,
    name: "Essentials: Your First Workflows",
    org: "n8n Academy",
    date: "June 22, 2026",
    year: "2026",
    summary:
      "Foundational n8n training covering nodes, triggers, and building reliable first automation workflows end to end.",
    skills: ["n8n fundamentals", "Triggers & nodes", "Workflow logic", "Testing runs"],
  },
  {
    image: PUBLIC_IMAGES.n8n2,
    name: "Integrations: APIs & Connected Workflows",
    org: "n8n Academy",
    date: "June 27, 2026",
    year: "2026",
    summary:
      "Connecting external services through REST APIs, authentication, and webhooks to build multi-system workflows.",
    skills: ["REST APIs", "Webhooks", "Auth & credentials", "Data mapping"],
  },
  {
    image: PUBLIC_IMAGES.n8n3,
    name: "In Practice: AI, Testing & Best Practices",
    org: "n8n Academy",
    date: "June 25, 2026",
    year: "2026",
    summary:
      "Production practices for AI-enabled workflows: prompt nodes, testing strategies, error handling, and maintainability.",
    skills: ["AI nodes", "Error handling", "Testing", "Best practices"],
  },
  {
    image: PUBLIC_IMAGES.n8nLvl2,
    name: "Completed n8n Course Level 2",
    org: "n8n (Badge)",
    date: "Granted May 24",
    year: "2026",
    summary:
      "Advanced badge covering complex business processes and deeper technical understanding of n8n data handling.",
    skills: [
      "n8n data structure",
      "XML / HTML / binary data",
      "Merging data sources",
      "Code node (JavaScript)",
      "Error workflows",
    ],
  },
  {
    image: PUBLIC_IMAGES.zapAgents,
    name: "Building AI Agents",
    org: "Zapier Academy",
    date: "May 26, 2026 · ID FB884A41",
    year: "2026",
    summary:
      "Designing and deploying AI agents inside Zapier that reason over tools, data sources, and business actions.",
    skills: ["AI agents", "Tool calling", "Agent guardrails", "Zapier automation"],
  },
  {
    image: PUBLIC_IMAGES.zapZaps,
    name: "Building Intermediate Zaps",
    org: "Zapier Academy",
    date: "May 25, 2026 · ID DE426CCD",
    year: "2026",
    summary:
      "Multi-step Zaps with filters, paths, formatters, and lookup logic for real operational workflows.",
    skills: ["Multi-step Zaps", "Paths & filters", "Formatter", "Error recovery"],
  },
  {
    image: PUBLIC_IMAGES.claude101,
    name: "Claude 101",
    org: "Anthropic",
    date: "Issued April 26, 2026",
    year: "2026",
    summary:
      "Working effectively with Claude: prompting patterns, context handling, and applying the model to real work.",
    skills: ["Prompt engineering", "Context design", "LLM workflows"],
  },
  {
    image: PUBLIC_IMAGES.coursera,
    name: "Build Intelligent Agents Using DeepSeek & N8N",
    org: "Board Infinity · Coursera",
    date: "Feb 1, 2026",
    year: "2026",
    summary:
      "Course on building autonomous agents that combine DeepSeek models with n8n orchestration for practical automation.",
    skills: ["DeepSeek", "Agent orchestration", "n8n", "Automation design"],
  },
  {
    image: PUBLIC_IMAGES.make,
    name: "AI Automation Explorer",
    org: "Make Academy",
    date: "Issued Mar 02, 2026",
    year: "2026",
    summary:
      "Make Academy program covering AI-driven scenario building, modules, and data routing across connected apps.",
    skills: ["Make scenarios", "AI modules", "Routers & filters", "App integrations"],
  },
];

type Cert = (typeof CERTS)[number];

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Verified training across n8n, Zapier, Make, HubSpot and AI tooling. Click a certificate to view it in full."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 50}>
              <button
                type="button"
                onClick={() => setActive(c)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-500 hover:-translate-y-1 hover:border-champagne/40"
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={c.image}
                    alt={`${c.name} certificate from ${c.org}`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-75 grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{c.name}</p>
                    <p className="mt-1 text-xs text-neutral-500">{c.org}</p>
                  </div>
                  <span className="shrink-0 text-xs text-neutral-500">{c.year}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border border-border bg-background/95 backdrop-blur-2xl">
          {active ? (
            <>
              <DialogHeader>
                <p className="text-[11px] uppercase tracking-[0.28em] text-champagne/80">
                  {active.org}
                </p>
                <DialogTitle className="text-2xl text-foreground">{active.name}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {active.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <img
                  src={active.image}
                  alt={`${active.name} certificate issued by ${active.org}`}
                  className="w-full object-contain"
                />
              </div>

              <div className="rounded-xl border border-border bg-muted/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Issued
                </p>
                <p className="mt-2 text-sm text-foreground">{active.date}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Skills covered
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 py-24 lg:py-32">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(214,190,140,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-champagne/80">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gradient-silver sm:text-5xl">
              Let's automate the work you shouldn't be doing.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-400">
              Ready to streamline your operations? Let's map your process, find the bottlenecks, and
              author a system that removes the repetitive work.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#030d1d] shadow-[0_22px_60px_rgba(2,6,23,0.45)]">
            <iframe
              src={CALENDLY_URL}
              title="Book a call with Arnold"
              className="h-[760px] w-full border-0 bg-[#030d1d]"
              loading="lazy"
              allow="clipboard-write"
              scrolling="no"
              frameBorder="0"
              style={{ backgroundColor: "#030d1d" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <p className="min-w-0 truncate text-xs text-neutral-500">
          © {new Date().getFullYear()} AOA Automation Hub — Arnold Antonio
        </p>
        <p className="shrink-0 text-xs text-neutral-600">AI Automation & GHL Specialist</p>
      </div>
    </footer>
  );
}
