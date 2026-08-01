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

const BrandIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="h-7 w-7 rounded-md object-contain bg-transparent"
    loading="lazy"
  />
);

const TECH = [
  { name: "n8n", icon: <BrandIcon src="/icon/n8n.svg" alt="n8n" /> },
  { name: "Zapier", icon: <BrandIcon src="/icon/zapier.png" alt="Zapier" /> },
  { name: "Make", icon: <BrandIcon src="/icon/Make.png" alt="Make" /> },
  { name: "GoHighLevel", icon: <BrandIcon src="/icon/Gohighlevel.jpeg" alt="GoHighLevel" /> },
  { name: "Claude", icon: <BrandIcon src="/icon/Claude_Symbol_1.png" alt="Claude" /> },
  { name: "OpenAI", icon: <BrandIcon src="/icon/OpenAI.svg" alt="OpenAI" /> },
  { name: "Google Gemini", icon: <BrandIcon src="/icon/gemini.webp" alt="Google Gemini" /> },
  { name: "REST APIs", icon: <BrandIcon src="/icon/rest%20api.png" alt="REST APIs" /> },
  { name: "Google Workspace", icon: <BrandIcon src="/icon/google%20workspace.png" alt="Google Workspace" /> },
  { name: "Airtable", icon: <BrandIcon src="/icon/Airtable.svg" alt="Airtable" /> },
  { name: "Slack", icon: <BrandIcon src="/icon/Slack.png" alt="Slack" /> },
  { name: "Webhooks", icon: <BrandIcon src="/icon/webhook.svg" alt="Webhooks" /> },
  { name: "ElevenLabs", icon: <BrandIcon src="/icon/ELevenlabs.png" alt="ElevenLabs" /> },
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
              key={`${t.name}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-champagne/50 hover:text-white"
            >
              {t.icon}
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkflowDiagram() {
  return (
    <section id="workflow" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="AI-powered Facebook Messenger automation"
          subtitle="A live conversational system where inbound messages are captured, enriched with business context, and converted into intelligent responses backed by memory and knowledge sources."
        />

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="workflow-canvas">
            <svg className="workflow-connections" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <filter id="workflow-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path d="M 200 325 L 220 325" className="workflow-connection-path" />
              <path d="M 400 325 L 420 325" className="workflow-connection-path" />
              <path d="M 560 325 L 780 325" className="workflow-connection-path" />
              <path d="M 750 140 C 765 140, 765 295, 780 295" className="workflow-connection-path" />
              <path d="M 750 515 C 765 515, 765 355, 780 355" className="workflow-connection-path" />
              <path d="M 980 325 L 1000 325" className="workflow-connection-path" />
              <path d="M 1085 220 L 1085 35 C 1085 20, 1070 20, 1055 20 L 665 20 C 650 20, 665 20, 665 35 L 665 70" className="workflow-connection-path workflow-connection-loop" />

              <circle r="3.5" fill="#38bdf8" filter="url(#workflow-glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#workflow-track-1" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#38bdf8" filter="url(#workflow-glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.7s"><mpath href="#workflow-track-1" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#38bdf8" filter="url(#workflow-glow)">
                <animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#workflow-track-2" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#38bdf8" filter="url(#workflow-glow)">
                <animateMotion dur="2s" repeatCount="indefinite" begin="1s"><mpath href="#workflow-track-3" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#38bdf8" filter="url(#workflow-glow)">
                <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s"><mpath href="#workflow-track-3" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#c084fc" filter="url(#workflow-glow)">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.3s"><mpath href="#workflow-track-4" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#34d399" filter="url(#workflow-glow)">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.6s"><mpath href="#workflow-track-5" /></animateMotion>
              </circle>
              <circle r="3.5" fill="#f472b6" filter="url(#workflow-glow)">
                <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#workflow-track-6" /></animateMotion>
              </circle>
            </svg>

            <path id="workflow-track-1" d="M 200 325 L 220 325" />
            <path id="workflow-track-2" d="M 400 325 L 420 325" />
            <path id="workflow-track-3" d="M 560 325 L 780 325" />
            <path id="workflow-track-4" d="M 750 140 C 765 140, 765 295, 780 295" />
            <path id="workflow-track-5" d="M 750 515 C 765 515, 765 355, 780 355" />
            <path id="workflow-track-6" d="M 1085 220 L 1085 35 C 1085 20, 1070 20, 1055 20 L 665 20 C 650 20, 665 20, 665 35 L 665 70" />

            <div className="workflow-loop-label">
              <div className="workflow-loop-title">🔄 Memory Loop</div>
              <div className="workflow-loop-desc">Save conversation • update context</div>
            </div>

            <div className="workflow-node" style={{ left: "30px", top: "270px", width: "170px", height: "110px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">💬</span> Messenger
              </div>
              <div className="workflow-bubble">
                <strong>User:</strong> Hi, I want to know more about your service.
              </div>
            </div>

            <div className="workflow-node" style={{ left: "220px", top: "240px", width: "180px", height: "170px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">⚡</span> n8n Webhook
              </div>
              <div className="workflow-json-block">
                <div>{"{"}</div>
                <div className="workflow-json-line"><span className="workflow-json-key">"Name"</span>: <span className="workflow-json-val">"User"</span>,</div>
                <div className="workflow-json-line"><span className="workflow-json-key">"Message"</span>: <span className="workflow-json-val">"Hi..."</span>,</div>
                <div className="workflow-json-line"><span className="workflow-json-key">"User ID"</span>: <span className="workflow-json-val">"104928"</span>,</div>
                <div className="workflow-json-line"><span className="workflow-json-key">"Time"</span>: <span className="workflow-json-val">"14:02"</span></div>
                <div>{"}"}</div>
              </div>
            </div>

            <div className="workflow-node" style={{ left: "420px", top: "280px", width: "140px", height: "90px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">⚙️</span> Processing
              </div>
              <div className="workflow-processing-animation">
                <span className="workflow-bar" />
                <span className="workflow-bar" />
                <span className="workflow-bar" />
                <span className="workflow-bar" />
              </div>
              <div className="workflow-processing-status">Structuring...</div>
            </div>

            <div className="workflow-node" style={{ left: "580px", top: "70px", width: "170px", height: "140px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">🧠</span> Memory
              </div>
              <div className="workflow-tag-list">
                <div className="workflow-tag">Previous messages</div>
                <div className="workflow-tag">User context</div>
                <div className="workflow-tag">Preferences</div>
              </div>
            </div>

            <div className="workflow-node" style={{ left: "580px", top: "440px", width: "170px", height: "150px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">📄</span> Google Docs
              </div>
              <div className="workflow-tag-list">
                <div className="workflow-tag">Business knowledge</div>
                <div className="workflow-tag">FAQs</div>
                <div className="workflow-tag">Services</div>
                <div className="workflow-tag">Policies</div>
              </div>
            </div>

            <div className="workflow-node workflow-node--primary" style={{ left: "780px", top: "250px", width: "200px", height: "150px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">✨</span> Gemini AI Agent
              </div>
              <div className="workflow-gemini-steps">
                <div className="workflow-step">Understand <span className="workflow-arrow">↓</span></div>
                <div className="workflow-step">Retrieve <span className="workflow-arrow">↓</span></div>
                <div className="workflow-step">Reason <span className="workflow-arrow">↓</span></div>
                <div className="workflow-step">Generate response <span className="workflow-arrow">→</span></div>
              </div>
            </div>

            <div className="workflow-node" style={{ left: "1000px", top: "220px", width: "170px", height: "210px" }}>
              <div className="workflow-node-header">
                <span className="workflow-node-icon">💬</span> Messenger
              </div>
              <div className="workflow-bubble workflow-bubble--ai">
                <strong>AI:</strong> Absolutely! I can help you with that. Our team offers several automation services...
              </div>
              <div className="workflow-bubble workflow-bubble--reply">
                <strong>User:</strong> Thanks! I&apos;d like to book a consultation.
              </div>
            </div>
          </div>
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

        <div className="mt-14 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className={s.wide ? "lg:col-span-2" : ""}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-white/25 sm:p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <h3 className="text-[1.2rem] font-semibold leading-tight text-white">{s.title}</h3>
                <p className="mt-3 max-w-lg text-[0.96rem] leading-relaxed text-neutral-400">{s.body}</p>
                {s.bullets ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[0.72rem] text-neutral-300"
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
    period: "2022 – Present",
    role: "AI Automation Specialist & GHL Consultant",
    org: "AOA Automation Hub",
    body: "Designing AI-powered workflows, CRM automations, API integrations, and lead systems that eliminate repetitive work and improve conversion performance.",
  },
  {
    period: "2019 – 2025",
    role: "Inventory Clerk / Operations Support",
    org: "DRB Sales Inc. — Urdaneta City, Pangasinan",
    body: "Maintained inventory accuracy, reconciled records, supported operational reporting, and improved process visibility across high-volume workflows.",
  },
  {
    period: "2010 – 2015",
    role: "Data Entry Specialist",
    org: "Bha Seng Sei Contract Solutions",
    body: "Handled large-volume data processing, records maintenance, and workflow documentation with a strong focus on accuracy and consistency.",
  },
  {
    period: "2008 – 2010",
    role: "Data Entry Specialist",
    org: "GE Marketing — Sto. Niño, Caloocan City",
    body: "Managed documentation, reporting support, and data organization for fast-moving operational processes.",
  },
];

export function Experience() {
  return (
    <section id="about" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Experience" title="From clean data to smarter systems." />
        <div className="mt-14 space-y-10 border-l border-white/10 pl-6 sm:pl-10">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.period} delay={i * 80}>
              <div className="relative pt-1">
                <span className="absolute -left-[1.85rem] top-2 h-2 w-2 rounded-full bg-champagne sm:-left-[2.85rem]" />
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{t.period}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{t.role}</h3>
                <p className="mt-2 text-sm text-neutral-300">{t.org}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
