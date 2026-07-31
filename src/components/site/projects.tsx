import { useState } from "react";
import { Reveal, SectionHeading } from "./primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import messenger from "@/assets/messenger-agent.png.asset.json";
import leadCapture from "@/assets/lead-capture.png.asset.json";
import crossSystem from "@/assets/cross-system.png.asset.json";
import rag from "@/assets/rag.png.asset.json";

const PROJECTS = [
  {
    image: messenger.url,
    title: "Facebook Messenger AI Agent",
    tag: "Gemini + Google Docs + Memory",
    intro:
      "An intelligent AI agent that lives inside Facebook Messenger, powered by Google Gemini and connected to Google Docs for knowledge and long-term memory.",
    problem:
      "Businesses waste hours every week answering the same questions, losing context between chats, and missing messages outside working hours.",
    how: [
      "Users chat on Messenger like normal",
      "Gemini understands intent and generates replies",
      "Google Docs acts as the knowledge base + memory store",
      "The agent remembers past conversations and updates records automatically",
    ],
    results: [
      "Instant 24/7 responses",
      "Handles most routine questions without human help",
      "Saves 12–25 hours per week on support and note-taking",
    ],
  },
  {
    image: leadCapture.url,
    title: "Lead Capture → AI Qualification → GoHighLevel",
    tag: "n8n + OpenRouter + GHL",
    intro:
      "An automated lead pipeline that captures prospects, qualifies them with AI, and instantly syncs qualified leads into GoHighLevel.",
    problem:
      "Manual lead handling is slow, inconsistent, and causes good prospects to go cold before sales can follow up.",
    how: [
      "Leads are captured from forms, ads, or chat",
      "AI instantly qualifies them based on your criteria",
      "Qualified leads are pushed into GoHighLevel with full context and tags",
      "Unqualified leads are filtered or nurtured automatically",
    ],
    results: [
      "Faster response times",
      "Higher quality leads in your CRM",
      "Sales team only talks to ready prospects",
      "Significant time saved on manual sorting and data entry",
    ],
  },
  {
    image: crossSystem.url,
    title: "Cross-System Intelligence",
    tag: "HubSpot + Sheets + OpenAI + Gmail",
    intro:
      "An AI layer that connects HubSpot, Google Sheets, OpenAI, and Gmail so your systems talk to each other and take action automatically.",
    problem:
      "Data lives in silos. Teams waste time copying information between tools, missing follow-ups, and manually updating records.",
    how: [
      "Pulls data from HubSpot and Google Sheets",
      "OpenAI analyzes, summarizes, or decides next actions",
      "Triggers smart emails via Gmail",
      "Writes updates back to HubSpot and Sheets automatically",
    ],
    results: [
      "Zero manual data entry between systems",
      "Faster, more consistent follow-ups",
      "Cleaner CRM and reporting",
      "Hours saved every week on repetitive admin work",
    ],
  },
  {
    image: rag.url,
    title: "RAGForge Knowledge Automation",
    tag: "Supabase Vector + Embeddings + Drive",
    intro:
      "An AI-powered knowledge system that turns scattered documents into instant, accurate answers using Retrieval-Augmented Generation (RAG).",
    problem:
      "Company knowledge is buried in files, chats, and folders. Finding the right information is slow, and answers are often inconsistent or outdated.",
    how: [
      "Ingests documents, PDFs, and internal files",
      "Builds a searchable knowledge base with RAG",
      "AI retrieves the most relevant information and generates precise answers",
      "Keeps knowledge updated and accessible across teams",
    ],
    results: [
      "Instant, accurate answers from company data",
      "Reduced time spent searching for information",
      "Consistent knowledge shared across the team",
      "Scalable knowledge base that grows with your business",
    ],
  },
];

type Project = (typeof PROJECTS)[number];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Selected Works"
          title="Workflow Automation That Removes Repetitive Tasks"
          subtitle="Click any workflow to open the full breakdown."
        />

        <div className="mt-14 space-y-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/25 lg:grid-cols-[1.05fr_1fr] lg:p-8">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  aria-label={`View details for ${p.title}`}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-black text-left"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} automation workflow`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Click to expand
                  </span>
                </button>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-champagne/80">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    {p.intro}
                  </p>

                  <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Problem it solves
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {p.problem}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        How it works
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.how.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2 text-sm leading-relaxed text-neutral-400"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Results
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.results.map((r) => (
                          <li
                            key={r}
                            className="flex gap-2 text-sm leading-relaxed text-neutral-300"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="mt-7 rounded-full border border-white/15 px-5 py-2 text-[13px] font-medium text-neutral-200 transition-colors duration-300 hover:border-white/40 hover:text-white"
                  >
                    View full case study
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto border-white/10 bg-black/95 backdrop-blur-2xl">
          {active ? (
            <>
              <DialogHeader>
                <p className="text-[11px] uppercase tracking-[0.28em] text-champagne/80">
                  {active.tag}
                </p>
                <DialogTitle className="text-2xl text-white">{active.title}</DialogTitle>
                <DialogDescription className="text-neutral-400">
                  {active.intro}
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <img
                  src={active.image}
                  alt={`${active.title} automation workflow full view`}
                  className="w-full object-contain"
                />
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Problem it solves
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {active.problem}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    How it works
                  </p>
                  <ul className="mt-3 space-y-2">
                    {active.how.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm leading-relaxed text-neutral-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Results
                  </p>
                  <ul className="mt-3 space-y-2">
                    {active.results.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-sm leading-relaxed text-neutral-300"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
