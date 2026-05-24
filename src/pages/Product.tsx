import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  FileText,
  Sparkles,
  Sliders,
  Route,
  Lock,
  ChevronDown,
  Plug,
  Search,
  Mail,
  BookOpen,
  BarChart,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import ImageWithLoader from "@/components/ImageWithLoader";
import { DotLottiePlayer } from "@dotlottie/react-player";
import businessTeamAnimation from "@/assets/business-team.lottie";
import productDemoVideo from "@/assets/product-demo.mp4";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import postImage from "@/assets/post_image.png";
import heroImage from "@/assets/home-imge.png";
import videoThumbnail from "@/assets/thmb.png";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import ImageZoom from "@/components/ui/image-zoom";

const Product = () => {
  useScrollToTop();

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"freshdesk" | "standalone">(
    "freshdesk",
  );

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="overflow-x-hidden pb-12 bg-transparent">
      <SEO
        title="HelpDude - Product Features"
        description="Explore HelpDude's Intelligent Email Drafting and SME Admin Console features."
        canonicalPath="/product"
      />

      <RequestDemoDialog open={open} onOpenChange={setOpen} />

      {/* Hero / Video Demo Section */}
      <section className="container mx-auto px-4 py-6 md:py-20 animate-in fade-in duration-1000">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-in slide-in-from-left duration-700 delay-200 fill-mode-both">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                HelpDude
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                HelpDude is Supporticon's flagship customer support software,
                purpose-built for SaaS support teams. It gives your engineers
                unified knowledge search, AI generated email responses, and
                automatic escalation routing, so every customer interaction is
                handled with the speed, accuracy, and care that drives retention
                and renewal.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Start Your Exclusive Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-700 hover:bg-green-50"
                  onClick={() =>
                    window.open(
                      "https://zbooking.in/PoPU8",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Book Demo
                </Button>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-700 delay-300 fill-mode-both">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/50">
                <video
                  src={productDemoVideo}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  poster={heroImage}
                  controlsList="nodownload"
                >
                  <source src={productDemoVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* New One line sentence spanning the entire width */}
          <div className="mt-12 w-full bg-white border-2 border-white p-6 rounded-2xl shadow-lg text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <p className="text-lg md:text-xl text-slate-800 font-semibold md:whitespace-nowrap">
              Less time searching. Fewer inconsistent answers. Faster
              resolutions. Customers who trust you enough to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse shrink-0"></span>
              Now live on Freshdesk Marketplace
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-slate-900 leading-tight mt-6 max-w-4xl">
              Enterprise AI that resolves support tickets{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block md:inline">
                before your team opens them
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl font-normal">
              HelpDude's AI engine automatically handles common tickets on
              Autopilot and empowers agents with AI-drafted replies on Co-Pilot
              — as a native Freshdesk plugin or a fully standalone platform.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.freshworks.com/apps/helpdude_1/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Start free trial
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setOpen(true)}
              >
                Request a demo
              </Button>

              <Button
                size="lg"
                className="bg-[#1C734D] hover:bg-[#155A3B] text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.freshworks.com/apps/helpdude_1/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Install on Freshdesk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="container mx-auto px-4 py-16 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Two Deployment Options
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              Choose how HelpDude fits your stack
            </h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-slate-200 justify-center mb-12 gap-8">
            <button
              onClick={() => setActiveTab("freshdesk")}
              className={`pb-4 text-lg font-semibold transition-all relative ${
                activeTab === "freshdesk"
                  ? "text-primary"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              HelpDude for Freshdesk
              {activeTab === "freshdesk" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("standalone")}
              className={`pb-4 text-lg font-semibold transition-all relative ${
                activeTab === "standalone"
                  ? "text-primary"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              HelpDude standalone platform
              {activeTab === "standalone" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></div>
              )}
            </button>
          </div>

          <div className="mt-8">
            {activeTab === "freshdesk" ? (
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl animate-in fade-in duration-300">
                {/* Paragraph */}
                <p className="text-lg text-slate-700 font-medium mb-12 max-w-4xl leading-relaxed">
                  A Marketplace plugin that embeds directly into every Freshdesk
                  ticket view. Zero workflow disruption. Install in 15 minutes —
                  no IT project required.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {[
                    {
                      icon: Search,
                      title: "Unified knowledge search",
                      desc: "AI searches KB articles, internal docs, and past resolutions simultaneously across all sources in under 30 seconds.",
                    },
                    {
                      icon: Sparkles,
                      title: "One click AI drafting",
                      desc: "Three complete, context-grounded email replies generated per ticket. Agent selects, optionally refines, then sends.",
                    },
                    {
                      icon: Sliders,
                      title: "Response customisation",
                      desc: "Adjust tone, language, length, and regional context in one click. LLM regenerates the reply in real time.",
                    },
                    {
                      icon: Route,
                      title: "Intelligent POC routing",
                      desc: "AI identifies the correct Dev or QA escalation contact automatically from ticket context — no manual org-chart lookup.",
                    },
                    {
                      icon: Lock,
                      title: "SME admin console",
                      desc: "Central control for knowledge sources, escalation ownership, and role based permissions across all agents.",
                    },
                    {
                      icon: FileText,
                      title: "Analytics dashboard",
                      desc: "Resolution rates, Autopilot accuracy, knowledge gap reports, and agent performance — all in one view.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl animate-in fade-in duration-300">
                {/* Paragraph */}
                <p className="text-lg text-slate-700 font-medium mb-12 max-w-4xl leading-relaxed">
                  A complete, standalone email ticketing platform. No Freshdesk
                  needed. Inbound emails become tickets. Autopilot resolves what
                  it can. Co Pilot handles everything else.
                </p>

                {/* 2 Column Autopilot / Co-Pilot Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  {/* Left Column: Autopilot */}
                  <div className="flex flex-col">
                    <div className="bg-blue-50/50 p-4 rounded-2xl flex items-center gap-4 mb-6 border border-blue-100/50">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                          Autopilot mode
                        </h4>
                        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                          Zero touch resolution
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      Inbound email arrives, AI searches your knowledge base,
                      and — if confidence exceeds the threshold — sends a
                      complete, professional reply to the customer
                      automatically. No agent required.
                    </p>

                    <ol className="space-y-4">
                      {[
                        "Email arrives at HelpDude support inbox",
                        "AI embeds and vector searches knowledge base",
                        "Match above 60% confidence threshold",
                        "LLM generates reply — SES dispatches to customer",
                        "Response, match score, and metadata logged",
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <p className="text-slate-700 font-medium">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Right Column: Co-Pilot */}
                  <div className="flex flex-col">
                    <div className="bg-emerald-50/50 p-4 rounded-2xl flex items-center gap-4 mb-6 border border-emerald-100/50">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">
                          Co Pilot mode
                        </h4>
                        <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wider mt-0.5">
                          Human in the loop
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      Complex tickets route to agents with three AI drafted
                      reply options ready. Agent selects, refines in one click,
                      and sends — a 15 minute task completed in under 2 minutes.
                    </p>

                    <ul className="space-y-4">
                      {[
                        {
                          letter: "A",
                          text: "Agent opens ticket, clicks HelpDude button",
                        },
                        {
                          letter: "B",
                          text: "AI surfaces top 3 drafts from full knowledge base",
                        },
                        {
                          letter: "C",
                          text: "Agent selects draft, refines tone/language/length",
                        },
                        {
                          letter: "D",
                          text: "Or: types solution, AI formats professionally",
                        },
                        {
                          letter: "E",
                          text: "Or: escalates — AI auto routes to Dev/QA POC",
                        },
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {step.letter}
                          </div>
                          <p className="text-slate-700 font-medium">
                            {step.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="border-t border-slate-100 pt-12 mb-8">
                  <h4 className="text-xl font-bold text-slate-900">
                    Standalone feature set
                  </h4>
                </div>

                {/* 4 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email to ticket ingestion",
                      desc: "Inbound emails parsed via AWS SES, converted to tickets with full metadata extraction automatically.",
                    },
                    {
                      icon: Zap,
                      title: "Autopilot resolution",
                      desc: "Common tickets resolved 24/7 without agent involvement. Configurable confidence threshold.",
                    },
                    {
                      icon: BookOpen,
                      title: "Self improving knowledge base",
                      desc: "SME validated resolutions automatically promoted into the article pool — AI accuracy compounds over time.",
                    },
                    {
                      icon: BarChart,
                      title: "Analytics & reporting",
                      desc: "Autopilot success rate, knowledge gap reports, SLA tracking, and agent performance metrics.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600 shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Integrations */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="bg-white p-8 md:p-16 rounded-2xl border border-green-100 shadow-xl max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#1A7FB515] text-[#1A7FB5] text-xs font-bold uppercase tracking-wider">
            <Plug className="h-3.5 w-3.5" />
            Integrations
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
            Customer Support Software That Works Inside Your Existing Stack
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            HelpDude connects natively with the customer service ticketing
            system platforms your team already relies on:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Freshdesk, Full native integration, live now in the Freshdesk Marketplace",
              "Zoho Desk, Integration coming soon",
              "Zendesk, Integration coming soon",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  • {item}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-lg text-slate-500 leading-relaxed">
            Whether you're a growing SaaS business using the best ticketing
            system for small business or a scaling enterprise managing thousands
            of tickets daily, HelpDude plugs-in under minutes, not months. Your
            customers start experiencing the difference the same week you
            deploy.
          </p>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="max-w-6xl mx-auto">
          {/* Final CTA */}
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 text-center shadow-xl relative overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-sm font-bold tracking-widest text-primary uppercase block mb-3">
                Get started today
              </span>
              <h3 className="font-display text-4xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
                Deploy in 15 minutes. Resolve smarter from day one.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
                Install from the Freshdesk Marketplace or start the standalone
                platform. See your first AI-handled ticket the same day you sign
                up.
              </p>

              <div className="flex flex-wrap justify-center gap-4 items-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Start free trial
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setOpen(true)}
                >
                  Request a demo
                </Button>

                <Button
                  size="lg"
                  className="bg-[#1C734D] hover:bg-[#155A3B] text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open(
                      "https://www.freshworks.com/apps/helpdude_1/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Install on Freshdesk
                </Button>
              </div>

              <p className="text-sm text-slate-500 mt-8 font-medium">
                No credit card required &middot; No IT dependency &middot;
                Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Removed */}
      <RequestDemoDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Product;
