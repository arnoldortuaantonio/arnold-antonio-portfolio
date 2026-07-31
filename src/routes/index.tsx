import { createFileRoute } from "@tanstack/react-router";
import { CyberCursor } from "@/components/site/cyber-cursor";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Process, TechStack, Services, Experience } from "@/components/site/sections";
import { Projects } from "@/components/site/projects";
import {
  Certifications,
  Reviews,
  Contact,
  SiteFooter,
} from "@/components/site/extras";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arnold Antonio — AI Automation & GHL Specialist" },
      {
        name: "description",
        content:
          "AOA Automation Hub: AI agents, GoHighLevel CRM systems, workflow automation and API integrations that remove repetitive work.",
      },
      {
        property: "og:title",
        content: "Arnold Antonio — AI Automation & GHL Specialist",
      },
      {
        property: "og:description",
        content:
          "Intelligent automations and AI-powered workflows that eliminate repetitive tasks and scale operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-black">
      <CyberCursor />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <Process />
        <TechStack />
        <Services />
        <Experience />
        <Projects />
        <Certifications />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
