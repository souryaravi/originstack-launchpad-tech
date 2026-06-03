import { Check } from "lucide-react";
import fintech from "@/assets/industries/fintech.jpg";
import healthcare from "@/assets/industries/healthcare.jpg";
import retail from "@/assets/industries/retail.jpg";
import education from "@/assets/industries/education.jpg";
import manufacturing from "@/assets/industries/manufacturing.jpg";
import realestate from "@/assets/industries/realestate.jpg";
import logistics from "@/assets/industries/logistics.jpg";
import startup from "@/assets/industries/startup.jpg";

const industries = [
  {
    image: fintech,
    title: "FinTech & Banking",
    challenges: "Legacy systems, compliance, real-time fraud.",
    solutions: "Core modernization, KYC/AML automation, payments APIs.",
    benefits: ["Faster onboarding", "Reduced fraud loss", "Regulatory readiness"],
  },
  {
    image: healthcare,
    title: "Healthcare & Pharma",
    challenges: "Fragmented records, HIPAA, manual workflows.",
    solutions: "EHR integrations, telehealth, AI diagnostics.",
    benefits: ["Better patient outcomes", "Operational efficiency", "Secure data exchange"],
  },
  {
    image: retail,
    title: "Retail & E-Commerce",
    challenges: "Cart abandonment, omnichannel, personalization.",
    solutions: "Headless commerce, recommendation engines, OMS.",
    benefits: ["Higher conversion", "Unified inventory", "Personalized journeys"],
  },
  {
    image: education,
    title: "Education & E-Learning",
    challenges: "Engagement, scale, content delivery.",
    solutions: "LMS platforms, adaptive learning, AI tutors.",
    benefits: ["Higher completion", "Scalable delivery", "Data-driven curriculum"],
  },
  {
    image: manufacturing,
    title: "Manufacturing & Supply Chain",
    challenges: "Visibility, downtime, demand planning.",
    solutions: "IIoT, predictive maintenance, digital twins.",
    benefits: ["Reduced downtime", "Real-time visibility", "Optimized inventory"],
  },
  {
    image: realestate,
    title: "Real Estate",
    challenges: "Lead quality, paperwork, virtual tours.",
    solutions: "CRM, AI valuation, immersive 3D experiences.",
    benefits: ["More qualified leads", "Faster closings", "Better client trust"],
  },
  {
    image: logistics,
    title: "Logistics",
    challenges: "Routing, tracking, last-mile cost.",
    solutions: "TMS, route optimization, real-time tracking.",
    benefits: ["Lower delivery cost", "On-time performance", "Customer satisfaction"],
  },
  {
    image: startup,
    title: "Startups & SaaS",
    challenges: "Speed to market, scaling, product-market fit.",
    solutions: "MVPs, multi-tenant SaaS, growth analytics.",
    benefits: ["Faster launches", "Investor-ready scale", "Lower burn"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Industries We Empower
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Domain expertise across <span className="text-gradient-brand">eight verticals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-3xl border border-border bg-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-foreground drop-shadow-lg">
                  {it.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Challenges: </span>
                    <span className="text-muted-foreground">{it.challenges}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Solutions: </span>
                    <span className="text-muted-foreground">{it.solutions}</span>
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {it.benefits.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      <Check className="h-3 w-3" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
