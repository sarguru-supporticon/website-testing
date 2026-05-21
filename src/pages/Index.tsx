import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-imge.png";
import Spotlight from "@/components/Spotlight";
import { Brain, Search, Plug, Heart, Shield, Users, Zap, Clock, Star, ArrowRight, FileText, Rocket, XCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useState, useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import businessTeamAnimation from "@/assets/business-team.lottie";
import { CXLeadersForm } from "../components/CXLeadersForm";


const steps = [
  {
    number: "1",
    title: "Connect",
    desc: "Install HelpDude from the Freshdesk Marketplace. No IT project. No developer needed. Done in minutes.",
    color: "border-blue-500 text-blue-500 bg-white"
  },
  {
    number: "2",
    title: "Configure",
    desc: "Upload your KB articles, set POC ownership, and configure access permissions in the SME Admin Console.",
    color: "border-green-500 text-green-500 bg-white"
  },
  {
    number: "3",
    title: "Activate",
    desc: "Agents open a ticket — HelpDude searches your knowledge base and drafts the email response automatically.",
    color: "border-emerald-500 text-emerald-500 bg-white"
  },
  {
    number: "4",
    title: "Retain",
    desc: "Faster resolutions, consistent quality, accurate escalations. Customers trust you enough to stay and renew.",
    color: "border-orange-500 text-orange-500 bg-white"
  }
];
const Home = () => {
  useScrollToTop();

  const [showCXForm, setShowCXForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <SEO
        title="Supporticon — Empowering Support Teams"
        description="Who supports the support team? We're building the next big leap in AI to protect and empower support engineers, not replace them."
        image={heroImage}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Supporticon Strategies Private Limited",
          url: typeof window !== "undefined" ? window.location.origin : undefined,
          logo: "/supporticon-uploads/8a9c0dca-e50e-459a-afc4-1e08634ad78b.png",
        }}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-subtle-gradient pb-24 md:pb-48">
          <div className="container mx-auto grid items-center gap-10 px-4 py-3 md:pt-20 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">Who supports</span> the support team?
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Supporticon gives B2B support teams the AI-powered knowledge and routing intelligence they need to resolve issues faster, communicate consistently, and turn every support interaction into a customer retention moment.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <Link to="/product">Join the Movement</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Born from experience</Link>
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative aspect-video rounded-xl overflow-hidden flex items-center justify-center">
                <DotLottiePlayer
                  src={businessTeamAnimation}
                  autoplay
                  loop
                  className="w-full h-full object-contain"
                />

                <div className="absolute bottom-4 right-4 z-20">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCXForm(true);
                    }}
                    variant="hero"
                    size="sm"
                    className="text-slate-900 border-none shadow-brand hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    CX Insights
                  </Button>
                </div>
              </div>
              <Spotlight className="absolute inset-0" />
            </div>
          </div>
        </section>

     
        <section className="py-12 md:py-20 bg-white/40 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-4xl font-bold mb-6">
                Support teams are always on
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Replying...</h3>
                  <p className="text-muted-foreground">24/7 customer support across time zones</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Escalating...</h3>
                  <p className="text-muted-foreground">Managing complex issues and urgent requests</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Explaining...</h3>
                  <p className="text-muted-foreground">Patiently guiding customers through solutions</p>
                </div>
              </div>
              <div className="mt-12 p-6 rounded-xl shadow-sm" style={{backgroundColor: '#1A7FB518', border: '1px solid #1A7FB544'}}>
                <p className="text-lg text-black font-medium italic">
                  "All while hiding their burnout behind 'Happy to help!' replies."
                </p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold mb-6">
                  At Supporticon Strategies Private Limited
                </h2>
                <p className="text-xl text-muted-foreground">
                  We asked one simple question:
                </p>
                <div className="mt-8 inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                  <span className="text-2xl">👉</span>
                  <span className="text-xl font-semibold text-primary">Who supports the support team?</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-slate-900">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">That one question became a mission</h3>
                </div>
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-slate-900">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">That mission became a movement</h3>
                </div>
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-slate-900">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">And now — it's almost time ⏲️</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We're Building Section */}
        <section className="py-12 md:py-20 bg-white/40 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-4xl font-bold mb-6">
                📢 Something we've been quietly building...
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">🚀 For the humans behind every helpdesk</h3>
                  <p className="text-muted-foreground">Supporting the people who support others</p>
                </div>
                <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">🚀 For the calm in every customer chaos</h3>
                  <p className="text-muted-foreground">Bringing peace to stressful situations</p>
                </div>
                <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">🚀 For the frontline, not the dashboard</h3>
                  <p className="text-muted-foreground">Tools that work for people, not metrics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-5xl font-bold mb-6">
                <span className="text-brand-gradient">#Supporticon</span> is coming
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                And we're not here to disrupt 🚫 —
              </p>
              <div className="inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-full">
                <span className="text-3xl">✨</span>
                <span className="text-2xl font-bold text-primary">We're here to Empower</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-white/40 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold">Everything Your Support Team Needs — In One Place</h2>
              <p className="mt-2 text-muted-foreground">
                Purpose-built for support engineers — fast, accurate and deeply integrated.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Search, title: "Find Answers Instantly Across All Tools", desc: "Search across Jira, Confluence, Freshdesk and more — in seconds, not minutes." },
                { icon: Rocket, title: "Resolve Tickets 3x Faster", desc: "AI-powered results help you find the right info instantly — no more digging." },
                { icon: Plug, title: "Set Up in Minutes, Not Days", desc: "Secure, read-only integrations with zero engineering effort." },
                { icon: Brain, title: "Built for Speed & Simplicity", desc: "Clean, intuitive interface designed for real support workflows." },
              ].map((f) => (
                <Card key={f.title} className="hover-scale">
                  <CardHeader>
                    <f.icon className="h-5 w-5 text-primary" />
                    <CardTitle>{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{f.desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* The Problem We Solve Section */}
        <section className="py-16 md:py-24 bg-white/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Problem We Solve</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Your Support Team Is Losing Customers — Silently.</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Slow replies. Inconsistent answers. Missed escalations. These aren't operational problems — they're revenue leaks that compound quietly every single day.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-white/80 backdrop-blur-md">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="p-6 md:p-8 text-xl font-bold text-slate-400 w-1/2 border-b border-slate-100">Without HelpDude</th>
                    <th className="p-6 md:p-8 text-xl font-bold text-emerald-600 w-1/2 border-b border-slate-100 bg-emerald-50/30">With HelpDude</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { without: "Agents tab-switch across 5+ tools just to find the right answer", with: "Unified AI search across knowledge base in < 30 seconds" },
                    { without: "Email responses written from scratch — slow, inconsistent, off-brand", with: "One-click AI email drafts from ticket context in your brand tone" },
                    { without: "Escalations stall while teams search Slack for the right POC", with: "Intelligent POC routing — right person engaged instantly" },
                    { without: "Senior engineers become human search engines and bottlenecks", with: "Expert knowledge distributed instantly across your entire team" },
                    { without: "New hires take weeks to ramp — customers feel every gap", with: "New hires resolve tickets with confidence from Week One" },
                    { without: "Support's impact on revenue stays invisible to leadership", with: "ROI dashboards make support's impact on retention measurable" }
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-slate-50/30 transition-colors">
                      <td className="p-6 md:p-8 border-b border-slate-100 text-slate-600 align-top">
                        <div className="flex gap-3">
                          <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                          <span>{row.without}</span>
                        </div>
                      </td>
                      <td className="p-6 md:p-8 border-b border-slate-100 text-slate-900 font-medium align-top bg-emerald-50/10 group-hover:bg-emerald-50/20">
                        <div className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                          <span>{row.with}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 text-center max-w-6xl">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How It Works</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-12">
                From Sign-Up to Customer Outcomes in 15 Minutes
              </h3>
              <div className="relative flex flex-col md:flex-row items-center justify-between md:gap-0 gap-12">
                {/* Stepper Line - only between circles */}
                <div className="hidden md:block absolute top-1/2 z-0" style={{
                  left: '12.5%',
                  right: '12.5%',
                  height: '2px',
                  backgroundColor: 'var(--border)',
                  transform: 'translateY(-50%)'
                }}></div>
                {/* Steps */}
                {steps.map((step, idx, arr) => (
                  <div key={step.number} className="flex-1 z-10 flex flex-col items-center min-w-[180px] relative">
                    <div className="flex items-center justify-center w-full" style={{height: '56px'}}>
                      <div className={`rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold border-4 ${step.color}`}>{step.number}</div>
                    </div>
                    <div className="font-bold text-lg mb-2 text-center mt-4">{step.title}</div>
                    <div className="text-muted-foreground text-base max-w-xs mx-auto text-center">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-white/40 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-display text-4xl font-bold mb-6">
              Setup in 15 Minutes. Customer Outcomes from Day One.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sign up, connect Freshdesk, and see your first customer intelligence insight in under 15 minutes. No implementation project. No IT dependency. Your customers start experiencing the difference the same week you deploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="px-8"
                onClick={() => window.open('https://www.freshworks.com/apps/helpdude_1/', '_blank', 'noopener,noreferrer')}
              >
                Start Your Exclusive Trial
              </Button>
            </div>
          </div>
        </section>



        {/* CX Leaders Form */}
        <CXLeadersForm
          open={showCXForm}
          onOpenChange={setShowCXForm}
        />
      </main>
    </>
  );
};

export default Home;
