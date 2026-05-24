import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-imge.png";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import {
  FadeUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/ui/motion-utils";
import {
  Brain,
  Search,
  Plug,
  Shield,
  Zap,
  Clock,
  Rocket,
  XCircle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";

const steps = [
  {
    number: "01",
    title: "Connect",
    desc: "Install HelpDude from the Freshdesk Marketplace. No IT project. No developer needed. Done in minutes.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    accent: "text-blue-600",
  },
  {
    number: "02",
    title: "Configure",
    desc: "Upload your KB articles, set POC ownership, and configure access permissions in the SME Admin Console.",
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
  },
  {
    number: "03",
    title: "Activate",
    desc: "Agents open a ticket, HelpDude searches your knowledge base and drafts the email response automatically.",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50",
    accent: "text-teal-600",
  },
  {
    number: "04",
    title: "Retain",
    desc: "Faster resolutions, consistent quality, accurate escalations. Customers trust you enough to stay and renew.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    accent: "text-orange-600",
  },
];

const features = [
  {
    icon: Search,
    title: "Find Answers Instantly Across All Tools",
    desc: "Search across Jira, Confluence, Freshdesk and more, in seconds, not minutes.",
    accent: "bg-blue-100 text-blue-600",
  },
  {
    icon: Rocket,
    title: "Resolve Tickets 3x Faster",
    desc: "AI powered results help you find the right info instantly, no more digging.",
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Plug,
    title: "Set Up in Minutes, Not Days",
    desc: "Secure, read only integrations with zero engineering effort.",
    accent: "bg-purple-100 text-purple-600",
  },
  {
    icon: Brain,
    title: "Built for Speed & Simplicity",
    desc: "Clean, intuitive interface designed for real support workflows.",
    accent: "bg-amber-100 text-amber-600",
  },
];

const comparison = [
  {
    without: "Agents tab-switch across 5+ tools just to find the right answer",
    with: "Unified AI search across knowledge base in < 30 seconds",
  },
  {
    without: "Email responses written from scratch, slow, inconsistent, off brand",
    with: "One click AI email drafts from ticket context in your brand tone",
  },
  {
    without: "Escalations stall while teams search Slack for the right POC",
    with: "Intelligent POC routing, right person engaged instantly",
  },
  {
    without: "Senior engineers become human search engines and bottlenecks",
    with: "Expert knowledge distributed instantly across your entire team",
  },
  {
    without: "New hires take weeks to ramp, customers feel every gap",
    with: "New hires resolve tickets with confidence from Week One",
  },
  {
    without: "Support's impact on revenue stays invisible to leadership",
    with: "ROI dashboards make support's impact on retention measurable",
  },
];

const Home = () => {
  useScrollToTop();
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Supporticon, Empowering Support Teams"
        description="Who supports the support team? We're building the next big leap in AI to protect and empower support engineers, not replace them."
        image={heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Supporticon Strategies Private Limited",
          url:
            typeof window !== "undefined" ? window.location.origin : undefined,
          logo: supporticonUploads.image2,
        }}
      />
      <main className="relative">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── FEATURES GRID ────────────────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <FadeUp>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <div className="section-label mb-6">Platform</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Everything Your Support Team Needs, In One Place
                </h2>
                <p className="text-lg text-slate-500">
                  Purpose-built for support engineers, fast, accurate and deeply integrated.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <HoverCard>
                    <div className="premium-card p-7 h-full">
                      <div
                        className={`w-12 h-12 ${f.accent} rounded-xl flex items-center justify-center mb-5`}
                      >
                        <f.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {f.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── PROBLEM VS SOLUTION ──────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 to-white pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative">
            <FadeUp>
              <div className="text-center mb-16">
                <div className="section-label mb-4">The Problem We Solve</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                  Your Support Team Is Losing Customers, Silently.
                </h2>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                  Slow replies. Inconsistent answers. Missed escalations. These aren't
                  operational problems, they're revenue leaks that compound quietly
                  every single day.
                </p>
              </div>
            </FadeUp>

            <FadeIn delay={0.15}>
              <div className="overflow-hidden rounded-3xl border border-slate-200/70 shadow-2xl bg-white">
                {/* Header row */}
                <div className="grid grid-cols-2 border-b border-slate-100">
                  <div className="p-6 md:p-8">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                      <XCircle className="w-4 h-4 text-red-400" />
                      Without HelpDude
                    </span>
                  </div>
                  <div className="p-6 md:p-8 bg-emerald-50/50">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest">
                      <CheckCircle className="w-4 h-4" />
                      With HelpDude
                    </span>
                  </div>
                </div>
                {/* Data rows */}
                {comparison.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="grid grid-cols-2 border-b border-slate-100/80 last:border-0 group hover:bg-slate-50/30 transition-colors"
                  >
                    <div className="p-5 md:p-7 flex gap-3 items-start">
                      <XCircle className="w-4 h-4 text-red-300 shrink-0 mt-1" />
                      <span className="text-sm md:text-base text-slate-500 leading-relaxed">
                        {row.without}
                      </span>
                    </div>
                    <div className="p-5 md:p-7 flex gap-3 items-start bg-emerald-50/20 group-hover:bg-emerald-50/40 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
                        {row.with}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <FadeUp>
              <div className="text-center mb-16">
                <div className="section-label mb-4">How It Works</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  From Sign Up to Customer Outcomes in 15 Minutes
                </h2>
              </div>
            </FadeUp>

            {/* Desktop stepper */}
            <div className="hidden md:block relative">
              {/* connecting line */}
              <div className="absolute top-[2.8rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-emerald-200 to-amber-200 z-0" />

              <StaggerContainer className="grid grid-cols-4 gap-6 relative z-10">
                {steps.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6`}
                      >
                        <span className="text-xl font-black text-white">{step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Mobile vertical stepper */}
            <div className="md:hidden space-y-8">
              {steps.map((step, idx) => (
                <FadeUp key={step.number} delay={idx * 0.1}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
                      >
                        <span className="text-lg font-black text-white">{step.number}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-px flex-1 bg-slate-200 mt-3" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-200/30 rounded-full blur-[80px] -z-10" />

          <div className="container mx-auto px-4 text-center max-w-4xl">
            <FadeUp>
              <div className="section-label mx-auto mb-8 w-fit">Get Started Today</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Setup in 15 Minutes.{" "}
                <span className="gradient-text">Customer Outcomes from Day One.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
                Sign up, connect Freshdesk, and see your first customer intelligence
                insight in under 15 minutes. No implementation project. No IT dependency.
                Your customers start experiencing the difference the same week you deploy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="hero"
                  className="rounded-full px-10 py-6 text-base font-bold shadow-xl shadow-emerald-200/80 hover:shadow-emerald-300 hover:scale-[1.03] transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Start Your Exclusive Trial
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Social proof row */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Free to start
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Live in minutes
                </span>
              </div>
            </FadeUp>
          </div>
        </section>

        <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />
      </main>
    </>
  );
};

export default Home;
