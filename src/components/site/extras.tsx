import { useState } from "react";
import { Reveal, SectionHeading } from "./primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import n8n1 from "@/assets/1.n8n_First_Workflows.jpg.asset.json";
import n8n2 from "@/assets/2.n8n_API_Connected_Workflows.jpg.asset.json";
import n8n3 from "@/assets/3.n8n_AI_Testing_Best_Practices.jpg.asset.json";
import n8nLvl2 from "@/assets/4.n8n_Level_2Cert.png.asset.json";
import zapAgents from "@/assets/Building_AI_Agents.jpg.asset.json";
import zapZaps from "@/assets/Building_Intermediate_Zaps.jpg.asset.json";
import claude101 from "@/assets/Clauded_101.jpg.asset.json";
import coursera from "@/assets/Coursera.jpg.asset.json";
import hubspot from "@/assets/Hubspot_Service_Hub_Software_Certified.png.asset.json";
import make from "@/assets/Make.jpg.asset.json";

const CERTS = [
  {
    image: n8n1.url,
    name: "Essentials: Your First Workflows",
    org: "n8n Academy",
    date: "June 22, 2026",
    year: "2026",
    summary:
      "Foundational n8n training covering nodes, triggers, and building reliable first automation workflows end to end.",
    skills: ["n8n fundamentals", "Triggers & nodes", "Workflow logic", "Testing runs"],
  },
  {
    image: n8n2.url,
    name: "Integrations: APIs & Connected Workflows",
    org: "n8n Academy",
    date: "June 27, 2026",
    year: "2026",
    summary:
      "Connecting external services through REST APIs, authentication, and webhooks to build multi-system workflows.",
    skills: ["REST APIs", "Webhooks", "Auth & credentials", "Data mapping"],
  },
  {
    image: n8n3.url,
    name: "In Practice: AI, Testing & Best Practices",
    org: "n8n Academy",
    date: "June 25, 2026",
    year: "2026",
    summary:
      "Production practices for AI-enabled workflows: prompt nodes, testing strategies, error handling, and maintainability.",
    skills: ["AI nodes", "Error handling", "Testing", "Best practices"],
  },
  {
    image: n8nLvl2.url,
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
    image: zapAgents.url,
    name: "Building AI Agents",
    org: "Zapier Academy",
    date: "May 26, 2026 · ID FB884A41",
    year: "2026",
    summary:
      "Designing and deploying AI agents inside Zapier that reason over tools, data sources, and business actions.",
    skills: ["AI agents", "Tool calling", "Agent guardrails", "Zapier automation"],
  },
  {
    image: zapZaps.url,
    name: "Building Intermediate Zaps",
    org: "Zapier Academy",
    date: "May 25, 2026 · ID DE426CCD",
    year: "2026",
    summary:
      "Multi-step Zaps with filters, paths, formatters, and lookup logic for real operational workflows.",
    skills: ["Multi-step Zaps", "Paths & filters", "Formatter", "Error recovery"],
  },
  {
    image: claude101.url,
    name: "Claude 101",
    org: "Anthropic",
    date: "Issued April 26, 2026",
    year: "2026",
    summary:
      "Working effectively with Claude: prompting patterns, context handling, and applying the model to real work.",
    skills: ["Prompt engineering", "Context design", "LLM workflows"],
  },
  {
    image: coursera.url,
    name: "Build Intelligent Agents Using DeepSeek & N8N",
    org: "Board Infinity · Coursera",
    date: "Feb 1, 2026",
    year: "2026",
    summary:
      "Course on building autonomous agents that combine DeepSeek models with n8n orchestration for practical automation.",
    skills: ["DeepSeek", "Agent orchestration", "n8n", "Automation design"],
  },
  {
    image: hubspot.url,
    name: "Service Hub Software Certified",
    org: "HubSpot Academy",
    date: "Valid Jan 18, 2026 – Feb 17, 2027",
    year: "2026",
    summary:
      "Certified in HubSpot Service Hub concepts and best practices for improving the customer experience.",
    skills: ["Service Hub", "Ticketing & pipelines", "Customer experience", "CRM hygiene"],
  },
  {
    image: make.url,
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
    <section
      id="certifications"
      className="relative border-t border-white/5 py-24 lg:py-32"
    >
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
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-white/10 bg-black/95 backdrop-blur-2xl">
          {active ? (
            <>
              <DialogHeader>
                <p className="text-[11px] uppercase tracking-[0.28em] text-champagne/80">
                  {active.org}
                </p>
                <DialogTitle className="text-2xl text-white">{active.name}</DialogTitle>
                <DialogDescription className="text-neutral-400">
                  {active.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <img
                  src={active.image}
                  alt={`${active.name} certificate issued by ${active.org}`}
                  className="w-full object-contain"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Issued
                </p>
                <p className="mt-2 text-sm text-neutral-300">{active.date}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Skills covered
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
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

const REVIEWS = [
  {
    quote:
      "Arnold rebuilt our GoHighLevel pipeline and the follow-up gap disappeared. Every lead gets touched within minutes now.",
    name: "M. Reyes",
    role: "Agency Owner",
  },
  {
    quote:
      "The Messenger agent handles the questions my team used to answer 40 times a day. Documentation was flawless.",
    name: "J. Cruz",
    role: "E-commerce Founder",
  },
  {
    quote:
      "He connected HubSpot, Sheets and Gmail into one flow. No more copy-paste, and the reporting finally makes sense.",
    name: "S. Delgado",
    role: "Operations Manager",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Reviews" title="What clients say" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/25">
                <blockquote className="text-sm leading-relaxed text-neutral-300">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
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
          background:
            "radial-gradient(circle, rgba(214,190,140,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-champagne/80">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gradient-silver sm:text-5xl">
            Let's automate the work you shouldn't be doing.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-400">
            Book a focused 30-minute discovery call. We'll map your process, find the
            bottlenecks, and agree on what a win looks like.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@aoaautomation.com"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Book a Call
            </a>
            <a
              href="mailto:hello@aoaautomation.com"
              className="rounded-full border border-white/15 px-8 py-3 text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              hello@aoaautomation.com
            </a>
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
        <p className="shrink-0 text-xs text-neutral-600">
          AI Automation & GHL Specialist
        </p>
      </div>
    </footer>
  );
}
