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
  Heart,
  Shield,
  Users,
  Zap,
  Clock,
  Star,
  ArrowRight,
  FileText,
  Rocket,
  XCircle,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState, useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import businessTeamAnimation from "@/assets/business-team.lottie";
import { CXLeadersForm } from "../components/CXLeadersForm";
import { motion } from "framer-motion";

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

  const [showCXForm, setShowCXForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
        <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16 pb-24">
          {/* Ambient hero glows */}
          <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-emerald-100/70 to-teal-50/30 blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/50 to-transparent blur-[80px] -z-10" />

          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: content */}
              <div className="order-2 md:order-1">
                <FadeUp delay={0}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    AI Powered Helpdesk Software
                  </div>
                </FadeUp>

                <FadeUp delay={0.08}>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
                    <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                      Who supports
                    </span>{" "}
                    <span className="block">the support team?</span>
                  </h1>
                </FadeUp>

                <FadeUp delay={0.16}>
                  <h2 className="mt-6 text-xl md:text-2xl font-semibold text-slate-700 leading-snug">
                    For SaaS Teams That Drive Retention.
                  </h2>
                  <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-xl">
                    HelpDude gives your support engineers unified knowledge search,
                    one-click AI email drafting, and intelligent escalation routing
                    so every ticket is resolved faster and every customer stays longer.
                  </p>
                </FadeUp>

                <FadeUp delay={0.24}>
                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      variant="hero"
                      className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.03] transition-all duration-300"
                      onClick={() =>
                        window.open(
                          "https://www.freshworks.com/apps/helpdude_1/",
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      Start Your Free Trial
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 py-6 text-base font-semibold border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:scale-[1.02] transition-all duration-300"
                      onClick={() => navigate("/product")}
                    >
                      Watch How It Works
                    </Button>
                  </div>
                </FadeUp>

                {/* Trust badges */}
                <FadeUp delay={0.32}>
                  <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
                    {[
                      { icon: Clock, text: "Setup in under 15 minutes" },
                      { icon: Plug, text: "No IT dependency" },
                      { icon: Shield, text: "Enterprise-grade security" },
                      { icon: Brain, text: "AWS + MongoDB Atlas" },
                    ].map((b) => (
                      <div
                        key={b.text}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border border-slate-100 shadow-sm"
                      >
                        <b.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-slate-700 text-xs font-semibold leading-tight">
                          {b.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>

              {/* Right: visual */}
              <div className="relative order-1 md:order-2">
                <FadeUp delay={0.12}>
                  {/* Glow behind card */}
                  <div className="absolute inset-8 bg-gradient-to-br from-emerald-200/60 to-teal-200/40 rounded-3xl blur-3xl" />

                  <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow-2xl shadow-slate-200/50 overflow-hidden p-2">
                    {/* Toolbar strip */}
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100/80">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-3 text-xs text-slate-400 font-medium">
                        HelpDude — AI Helpdesk
                      </span>
                    </div>

                    <div className="relative aspect-video">
                      <DotLottiePlayer
                        src={businessTeamAnimation}
                        autoplay
                        loop
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* CX Insights overlay button */}
                    <div className="absolute bottom-6 right-6 z-20">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowCXForm(true);
                        }}
                        variant="hero"
                        size="sm"
                        className="rounded-full px-4 shadow-lg shadow-emerald-200 hover:scale-105 transition-all duration-300"
                      >
                        <FileText className="w-3.5 h-3.5 mr-1.5" />
                        CX Insights
                      </Button>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUPPORT TEAMS SECTION ────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <FadeUp>
              <div className="mx-auto max-w-4xl text-center mb-16">
                <div className="section-label mb-6">Always On</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Support teams are always on
                </h2>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Replying...",
                  desc: "24/7 customer support across time zones",
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  icon: Zap,
                  title: "Escalating...",
                  desc: "Managing complex issues and urgent requests",
                  color: "bg-amber-50 text-amber-600",
                },
                {
                  icon: Heart,
                  title: "Explaining...",
                  desc: "Patiently guiding customers through solutions",
                  color: "bg-rose-50 text-rose-600",
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <HoverCard>
                    <div className="premium-card p-8 text-center h-full">
                      <div
                        className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                      >
                        <card.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="mt-10 mx-auto max-w-2xl">
                <div className="glass-card p-6 text-center">
                  <p className="text-lg text-slate-700 font-medium italic">
                    "All while hiding their burnout behind 'Happy to help!' replies."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── MISSION SECTION ──────────────────────────────────────────── */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 to-white pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 relative">
            <FadeUp>
              <div className="mx-auto max-w-4xl text-center mb-16">
                <div className="section-label mb-6">Our Origin</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  At Supporticon Strategies Private Limited
                </h2>
                <p className="text-xl text-slate-500">We asked one simple question:</p>
                <div className="mt-6 inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-2xl">
                  <span className="text-2xl">👉</span>
                  <span className="text-xl font-bold text-primary">
                    Who supports the support team?
                  </span>
                </div>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  n: "1",
                  title: "That one question became a mission",
                  gradient: "from-blue-500 to-indigo-500",
                },
                {
                  n: "2",
                  title: "That mission became a movement",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  n: "3",
                  title: "And now, it's almost time ⏲️",
                  gradient: "from-orange-400 to-amber-400",
                },
              ].map((item) => (
                <StaggerItem key={item.n}>
                  <div className="text-center space-y-5">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <span className="text-3xl font-black text-white">{item.n}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── WHAT WE'RE BUILDING ───────────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center mb-16">
                <div className="section-label mb-6">In The Making</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
                  📢 Something we've been quietly building...
                </h2>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Users,
                  emoji: "🚀",
                  title: "For the humans behind every helpdesk",
                  desc: "Supporting the people who support others",
                  color: "bg-indigo-50 text-indigo-600",
                },
                {
                  icon: Shield,
                  emoji: "🚀",
                  title: "For the calm in every customer chaos",
                  desc: "Bringing peace to stressful situations",
                  color: "bg-teal-50 text-teal-600",
                },
                {
                  icon: Star,
                  emoji: "🚀",
                  title: "For the frontline, not the dashboard",
                  desc: "Tools that work for people, not metrics",
                  color: "bg-amber-50 text-amber-600",
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <HoverCard>
                    <div className="premium-card p-8 h-full">
                      <div
                        className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-5`}
                      >
                        <card.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {card.emoji} {card.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── COMING SOON BANNER ───────────────────────────────────────── */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 -z-10" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />

          <div className="container mx-auto px-4 text-center">
            <FadeUp>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
                  #Supporticon
                </span>{" "}
                is coming
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                And we're not here to disrupt 🚫,
              </p>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl">
                <span className="text-3xl">✨</span>
                <span className="text-2xl font-bold text-white">We're here to Empower</span>
              </div>
            </FadeUp>
          </div>
        </section>

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
