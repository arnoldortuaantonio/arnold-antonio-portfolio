import { Reveal, SectionHeading } from "./primitives";

const CERTS = [
  { name: "GoHighLevel Certified Admin", org: "HighLevel", year: "2025" },
  { name: "n8n Advanced Workflow Automation", org: "n8n", year: "2025" },
  { name: "AI Agents & Prompt Engineering", org: "OpenAI Academy", year: "2025" },
  { name: "Google Workspace Automation", org: "Google", year: "2024" },
  { name: "API & Webhook Integration", org: "Postman", year: "2024" },
  { name: "Data Analytics Foundations", org: "Coursera", year: "2023" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-white/5 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Ongoing training across automation platforms, AI tooling, and CRM systems."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="flex h-full items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/40">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{c.name}</p>
                  <p className="mt-1 text-xs text-neutral-500">{c.org}</p>
                </div>
                <span className="shrink-0 text-xs text-neutral-500">{c.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
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
