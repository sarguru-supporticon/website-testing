import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, FileText, Sparkles, Sliders, Route, Lock, ChevronDown, Plug } from "lucide-react";
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
                HelpDude is Supporticon's flagship customer support software — purpose-built for SaaS support teams. It gives your engineers unified knowledge search, AI-generated email responses, and automatic escalation routing, so every customer interaction is handled with the speed, accuracy, and care that drives retention and renewal.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open('https://www.freshworks.com/apps/helpdude_1/', '_blank', 'noopener,noreferrer')}
                >
                  Start Your Exclusive Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-700 hover:bg-green-50"
                  onClick={() => window.open('https://zbooking.in/PoPU8', '_blank', 'noopener,noreferrer')}
                >
                  Book Demo
                </Button>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-700 delay-300 fill-mode-both">
              <div
                className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/50"
              >
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

          {/* New One-line sentence spanning the entire width */}
          <div className="mt-12 w-full bg-white border-2 border-white p-6 rounded-2xl shadow-lg text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <p className="text-lg md:text-xl text-slate-800 font-semibold md:whitespace-nowrap">
              Less time searching. Fewer inconsistent answers. Faster resolutions. Customers who trust you enough to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Intelligent Email Drafting */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-500 fill-mode-both">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-green-100 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              AI Drafting
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
              Intelligent Email Drafting from Tickets
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              HelpDude's email ticketing software capability goes beyond simple templates, creating a seamless workflow for support engineers.
            </p>
            <ul className="space-y-5">
              {[
                "Drafts complete email replies directly from relevant knowledge-base articles",
                "Generates responses based on the support engineer's own issue description and solution notes",
                "Automatically finds and assigns the correct POC for every escalation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Zap className="h-3.5 w-3.5 fill-green-600" />
                  </div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-white p-3 md:p-6 rounded-3xl border border-slate-100 shadow-2xl">
            <ImageZoom
              src={supporticonUploads.image3}
              alt="HelpDude AI Drafting Interface"
            />
          </div>
        </div>
      </section>

      {/* Section 2: SME Admin Console */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-700 fill-mode-both">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="md:order-last bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-green-100 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
              <Sliders className="h-3.5 w-3.5" />
              Admin Control
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
              SME Admin Console
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              The SME Admin Console is the control centre for your helpdesk ticketing system. All configuration — articles, POCs, and AI workflows — is managed here by your team leads or admins.
            </p>
            <ul className="space-y-6">
              {[
                "Configure knowledge sources: KB articles, internal docs, and knowledge-transfer content",
                "Define Dev and QA POC ownership for clean, accountable escalation paths",
                "Control access with role-based permissions — keep the right people in the right seats"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    • {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative bg-white p-3 md:p-6 rounded-3xl border border-slate-100 shadow-2xl">
            <ImageZoom
              src={supporticonUploads.image1}
              alt="SME Admin Console Dashboard"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Integrations */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="bg-white/70 backdrop-blur-md p-8 md:p-16 rounded-2xl border border-green-100 shadow-xl max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-[#1A7FB515] text-[#1A7FB5] text-xs font-bold uppercase tracking-wider">
            <Plug className="h-3.5 w-3.5" />
            Integrations
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
            Customer Support Software That Works Inside Your Existing Stack
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            HelpDude connects natively with the customer service ticketing system platforms your team already relies on:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Freshdesk — Full native integration, live now in the Freshdesk Marketplace",
              "Zoho Desk — Integration coming soon",
              "Zendesk — Integration coming soon"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  • {item}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-lg text-slate-500 leading-relaxed">
            Whether you're a growing SaaS business using the best ticketing system for small business or a scaling enterprise managing thousands of tickets daily — HelpDude plugs-in under minutes, not months. Your customers start experiencing the difference the same week you deploy.
          </p>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="max-w-6xl mx-auto">

          {/* FAQ Accordion */}
          <div className="mb-10">
            <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {[
                {
                  q: "What makes HelpDude different from other customer support software?",
                  a: "Most customer support software manages the workflow around a ticket. HelpDude works inside the ticket — surfacing the right knowledge under 30 seconds with citation without switching tabs, drafting the right response, and routing the right escalation automatically."
                },
                {
                  q: "Does HelpDude replace our existing Freshdesk ticketing system?",
                  a: "No. HelpDude works inside your existing support ticket system — starting with native Freshdesk integration. It adds an AI intelligence layer on top of the tools your team already uses. No migration, no disruption."
                },
                {
                  q: "How does the one-click email drafting work in practice?",
                  a: "When an agent opens a ticket in Freshdesk, HelpDude reads the ticket content, searches the knowledge base for the most relevant articles, and drafts a complete reply. The agent reviews, personalises if needed, and sends. Seconds instead of minutes."
                },
                {
                  q: "Is HelpDude suitable for small business teams?",
                  a: "Yes. HelpDude scales from small SaaS teams handling 20–50 tickets per day to enterprise operations managing thousands. The SME Admin Console is self-service — no IT department required."
                },
                {
                  q: "What data security standards does HelpDude meet?",
                  a: "All customer data is stored exclusively on AWS and MongoDB Atlas. No third-party access or data sharing. Role-based permissions ensure only authorised team members access specific customer data."
                },
                {
                  q: "How does intelligent POC routing improve the customer experience?",
                  a: "HelpDude automatically identifies the correct Dev or QA point-of-contact based on ticket content — eliminating manual routing through Slack or org charts. Complex issues reach the right expert immediately, not after multiple handoffs."
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-white/70 backdrop-blur-md rounded-2xl border border-green-100 shadow-md overflow-hidden">
                  <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none hover:bg-green-50/40 transition-colors">
                    <span className="font-bold text-slate-900 text-base pr-8">{faq.q}</span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1A7FB5]/10 text-[#1A7FB5] flex items-center justify-center font-bold text-lg transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>


          {/* Final CTA */}

          <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-green-100 text-center shadow-xl">
            <h3 className="font-display text-4xl font-bold text-slate-900 mb-6">
              Setup in 15 Minutes. Customer Outcomes from Day One.
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Sign up, connect Freshdesk, and see your first customer intelligence insight in under 15 minutes. No implementation project. No IT dependency. Your customers start experiencing the difference the same week you deploy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="hero"
                className="px-10 py-7 rounded-full font-bold text-lg shadow-xl relative z-10 transition-all hover:scale-105"
                onClick={() => window.open('https://www.freshworks.com/apps/helpdude_1/', '_blank', 'noopener,noreferrer')}
              >
                Start Your Exclusive Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Removed */}

    </main>
  );
};

export default Product;
