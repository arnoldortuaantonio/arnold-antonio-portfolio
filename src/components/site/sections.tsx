import { Reveal, SectionHeading } from "./primitives";

const STEPS = [
  {
    n: "01",
    title: "Discovery Call",
    body: "A focused 30-minute call to map your current process, find the bottlenecks, and agree on what a win looks like. No commitment.",
  },
  {
    n: "02",
    title: "Planning & Design",
    body: "I turn that into a clear blueprint built around your tools and your logic, then walk you through it before anything gets built.",
  },
  {
    n: "03",
    title: "Build & Test",
    body: "I build it, then test against real data and edge cases until it runs reliably without you having to babysit it.",
  },
  {
    n: "04",
    title: "Handoff & Support",
    body: "You get full documentation, a live walkthrough, and support after launch, so the system keeps running smoothly.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Method" title="How it works" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25">
                <span className="text-xs font-semibold tracking-[0.3em] text-champagne/80">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECH = [
  "n8n",
  "Zapier",
  "Make",
  "GoHighLevel",
  "Claude",
  "OpenAI",
  "Google Gemini",
  "REST APIs",
  "Google Workspace",
  "Airtable",
  "Slack",
  "Webhooks",
  "ElevenLabs",
];

export function TechStack() {
  const row = [...TECH, ...TECH];
  return (
    <section className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tech Stack"
          subtitle="I help businesses save time, reduce manual work, and scale faster with intelligent AI automation. I build AI Agents, automated workflows, CRM integrations, API systems, and custom SaaS solutions that turn repetitive processes into efficient, connected systems."
        />
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-neutral-500 transition-colors duration-300 hover:border-champagne/50 hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    title: "GoHighLevel & CRM",
    body: "A GoHighLevel system that captures every lead, nurtures it, and books the call, so nothing slips through the cracks.",
    bullets: [
      "Lead capture & pipelines",
      "Automated nurture sequences",
      "Calendar booking built in",
    ],
    wide: true,
  },
  {
    title: "Workflow Automation",
    body: "The repetitive tasks eating your week, data entry, hand-offs, status updates, get handled automatically and exactly the same way every time.",
  },
  {
    title: "CRM Administrator",
    body: "Pipeline setup, lead routing, tagging and lifecycle hygiene.",
  },
  {
    title: "API & Webhook Integrations",
    body: "Your apps, finally talking to each other. I connect them through APIs and webhooks so data moves in real time, with no manual exporting.",
  },
  {
    title: "Funnels & Landing Pages",
    body: "Fast, mobile-ready pages built with one job: turning visitors into booked calls and paying clients.",
  },
  {
    title: "Monitoring & Support",
    body: "Built-in error handling, retries, and alerts catch problems and fix them quietly, before they ever reach your customers.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="My Services"
          subtitle="I design and build custom automation systems that connect your entire tech stack, eliminate repetitive manual work, and create seamless workflows that improve efficiency, accuracy, and scalability."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className={s.wide ? "lg:col-span-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/25">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-400">
                  {s.body}
                </p>
                {s.bullets ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-neutral-300"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    period: "Dec 2025 – Present",
    role: "Automation Specialist",
    org: "AOA Automation Hub",
    body: "RPA, scripting, and scalable automation frameworks.",
  },
  {
    period: "Jul 2019 – Dec 2025",
    role: "Inventory Clerk",
    org: "DRB Sales Inc. — Urdaneta City, Pangasinan",
    body: "90% reduction in discrepancies and a 30% efficiency gain.",
  },
  {
    period: "Dec 2010 – Dec 2015",
    role: "Data Entry Specialist",
    org: "Bha Seng Sei Contract Solutions",
    body: "High-volume data accuracy and process documentation.",
  },
  {
    period: "Dec 2008 – Dec 2010",
    role: "Data Entry Specialist",
    org: "GE Marketing — Sto. Niño, Caloocan City",
    body: "Records management and reporting support.",
  },
];

export function Experience() {
  return (
    <section id="about" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A 14+ year paper trail of clean data."
        />
        <div className="mt-14 border-l border-white/10 pl-6 sm:pl-10">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.period} delay={i * 80}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[1.85rem] top-2 h-2 w-2 rounded-full bg-champagne sm:-left-[2.85rem]" />
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {t.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{t.role}</h3>
                <p className="mt-1 text-sm text-neutral-300">{t.org}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500">
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
