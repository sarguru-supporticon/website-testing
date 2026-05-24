import { SEO } from "@/components/SEO";
import { CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useReveal } from "@/hooks/use-reveal";
import { DotLottiePlayer } from "@dotlottie/react-player";
import titleAnimation from "@/assets/title.lottie";

const Features = () => {
  useScrollToTop();
  const reveal = useReveal();

  return (
    <main className="min-h-screen bg-transparent pb-24">
      <SEO
        title="Features, SupportIcon"
        description="Help Dude is an AI co pilot that lives inside your Freshdesk ticket view, surfacing grounded answers in under 30 seconds."
        canonicalPath="/features"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div
          ref={reveal.ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${reveal.revealClasses}`}
        >
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                The customer support software
              </span>{" "}
              your team will actually use
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Help Dude is an AI co pilot that lives inside your Freshdesk
              ticket view, searching your own KB, past tickets, and trusted docs
              to surface grounded answers in under 30 seconds. Not generic AI.
              Your knowledge. Your brand voice.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-[#1A7FB533] rounded-3xl blur-3xl opacity-50 -z-10"></div>
            <DotLottiePlayer
              src={titleAnimation}
              autoplay
              loop
              className="relative w-[80%] mx-auto h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feature 01 */}
          <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 text-[#1A7FB5] font-bold tracking-widest uppercase text-sm mb-4">
              Feature 01
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Auto Pilot Mode
            </h2>
            <ul className="space-y-4 flex-grow">
              {[
                "Autonomous resolution of high confidence, repeat tickets, no agent touchpoint required",
                "Smart follow up questions automatically sent to customers when ticket info is incomplete",
                "Every auto reply is grounded in your KB, past tickets, or trusted docs, never hallucinated",
                "Full audit trail logged inside Freshdesk ticket notes, match score, source, processing time",
                "25% ticket deflection typically achieved within the first 30 days of deployment",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1A7FB5] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 02 */}
          <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 text-[#1A7FB5] font-bold tracking-widest uppercase text-sm mb-4">
              Feature 02
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Co Pilot Mode
            </h2>
            <ul className="space-y-4 flex-grow">
              {[
                "Inline citations on every suggestion, agents see the exact source document before approving",
                "One click rewrite to adjust tone, language formality, and reply length, no manual editing",
                "Best-source ranking, KB articles, past resolved tickets, and trusted docs ranked by confidence score",
                "Full brand control maintained, agent reviews and approves every reply before it reaches the customer",
                "30% faster resolution time, agents edit and send rather than research and write from scratch",
              ].map((item, index) => (
                <li key={`f2-${index}`} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1A7FB5] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 03 */}
          <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 text-[#1A7FB5] font-bold tracking-widest uppercase text-sm mb-4">
              Feature 03
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Multilayer RAG Search
            </h2>
            <ul className="space-y-4 flex-grow">
              {[
                "Simultaneous search across KB articles + past resolved tickets + internal docs + trusted product documentation",
                "Confidence-ranked results, agents always see the highest match source first, with score visible",
                "Grounded answers only, every suggestion traceable to a specific document in your knowledge base",
                "Works across Confluence, Jira, Freshdesk KB and custom document sources, unified in one search",
              ].map((item, index) => (
                <li key={`f3-${index}`} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1A7FB5] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 04 */}
          <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 text-[#1A7FB5] font-bold tracking-widest uppercase text-sm mb-4">
              Feature 04
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Knowledge Capture Loop
            </h2>
            <ul className="space-y-4 flex-grow">
              {[
                "Automatic knowledge capture, validated resolutions are indexed and made searchable for future tickets",
                "Contributor leaderboard, tracks which agents' knowledge contributions are being used by the rest of the team",
                "Compound improvement, the AI gets meaningfully better at your specific domain over time",
                "Zero manual curation needed, the capture loop runs automatically from ticket resolution",
              ].map((item, index) => (
                <li key={`f4-${index}`} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1A7FB5] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 05 */}
          <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 text-[#1A7FB5] font-bold tracking-widest uppercase text-sm mb-4">
              Feature 05
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Built-in ROI Dashboard
            </h2>
            <ul className="space-y-4 flex-grow">
              {[
                "Total Time Saved tracked in minutes and hours, customisable by agent hourly rate to show ₹/$ saved",
                "Deflection tracking, exact count of tickets resolved without human involvement, with confidence scores",
                "Contributor Leaderboard, ranks agents by validated contributions, times used by others, and total points earned",
                "Resolution time trends, track improvement week over week as the knowledge loop compounds",
                "Custom date ranges, Today, Yesterday, Last Week, Last Month, Last Year, or Custom, full reporting flexibility",
              ].map((item, index) => (
                <li key={`f5-${index}`} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1A7FB5] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature 06 */}
          <div className="flex flex-col bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-green-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 text-[#1A7FB5] font-bold tracking-widest uppercase text-sm mb-4">
              Feature 06
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Setup & Security
            </h2>

            <div className="space-y-8 mt-4 flex-grow">
              {[
                {
                  step: "01",
                  title: "Connect to Freshdesk",
                  desc: "Authenticate Help Dude with your Freshdesk account using a secure API token. One click. Read only access. Your ticket data never leaves your workspace.",
                  time: "~3 minutes",
                },
                {
                  step: "02",
                  title: "Configure Knowledge Sources",
                  desc: "Point Help Dude at your KB articles, internal docs, and KT documents in the SME Admin Console. Define your Dev and QA POC ownership for escalation routing.",
                  time: "~8 minutes",
                },
                {
                  step: "03",
                  title: "Your First AI Assisted Ticket",
                  desc: "Open any ticket in Freshdesk. Help Dude's panel appears in the sidebar, already searching your knowledge sources. See your first grounded suggestion in under 30 seconds.",
                  time: "",
                },
              ].map((item, index) => (
                <div
                  key={`f6-${index}`}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1A7FB511] text-[#1A7FB5] font-bold text-lg flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-2">
                      {item.desc}
                    </p>
                    {item.time && (
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Core Features */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-16 text-slate-900 text-center leading-tight">
            Core Features of HelpDude, and the Customer Outcomes They Create
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col h-full lg:col-span-2 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Unified Knowledge Search
              </h3>
              <div className="text-[#1A7FB5] font-medium text-sm md:text-base mb-4 leading-snug">
                → Customers Get the Right Answer, Every Time
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                HelpDude searches once across your entire trusted sources, KB
                articles, internal docs, knowledge transfer content, past solved
                tickets, inside your support ticketing system. Agents resolve
                tickets with confidence. Customers receive accurate, consistent
                answers that don't require a follow up or an escalation. Repeat
                ticket volume drops. Customer trust compounds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col h-full lg:col-span-2 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                One Click AI Email Generation
              </h3>
              <div className="text-[#1A7FB5] font-medium text-sm md:text-base mb-4 leading-snug">
                → Professional Responses in your brand tone at the Speed of
                Customer Expectations
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                HelpDude reads the ticket context, finds the most relevant
                knowledge article, and drafts a complete, polished email
                response in one click under 30 seconds. Your customers
                experience a team that understands their issue immediately.
                Agents can adjust tone, language, and length with a single
                click, the response feels personalised because it is. This is
                email ticketing software built around the customer, not the
                template.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col h-full lg:col-span-2 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Intelligent POC Routing
              </h3>
              <div className="text-[#1A7FB5] font-medium text-sm md:text-base mb-4 leading-snug">
                → High Value Escalations Handled Without Friction
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                HelpDude analyses ticket content and automatically identifies
                the correct Dev or QA point of contact for every escalation.
                Your highest value customers, the ones raising complex, urgent
                issues, never experience a stalled queue. The right person is
                involved from the moment it matters, every time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col h-full lg:col-span-3 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Enterprise grade Data Security
              </h3>
              <div className="text-[#1A7FB5] font-medium text-sm md:text-base mb-4 leading-snug">
                → Customer Trust, Protected End to End
              </div>
              <div className="space-y-4">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  All customer data is stored exclusively on AWS and MongoDB
                  Atlas, ensuring high availability, durability, and enterprise
                  level protection. No third party access and no data sharing,
                  your data remains fully isolated and under your control.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  We implement strict role based access control (RBAC) and
                  granular admin permissions, so the right people access only
                  the data they need. This minimizes risk and ensures compliance
                  regardless of team size.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  All data is protected using end to end encryption, including
                  encryption at rest and in transit. Secure authentication
                  mechanisms and token based access further safeguard sensitive
                  operations.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col h-full lg:col-span-3 bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-green-100 shadow-xl hover:shadow-[0_8px_30px_rgba(26,127,181,0.15)] transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                SME Admin Console
              </h3>
              <div className="text-[#1A7FB5] font-medium text-sm md:text-base mb-4 leading-snug">
                → CX Consistency Managed at Scale
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                The SME Admin Console is the control centre for your helpdesk
                ticketing system. Admins configure knowledge sources, define
                escalation ownership, and manage access permissions, so customer
                experience quality is consistent across every agent, every
                shift, and every support tier.
              </p>
              <ul className="space-y-3">
                {[
                  "Configure KB articles, internal docs, and knowledge transfer content as a single source of truth",
                  "Define Dev and QA POC ownership for accountable, fast escalations",
                  "Control access with role based permissions, the right people, in the right seats, every time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                      • {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison Table */}
      <section className="container mx-auto px-4 py-20 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
              How HelpDude Compares to Standard Support Ticket Systems
            </h2>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 inline-block shadow-lg border border-slate-100 max-w-4xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Standard Support Ticket System vs. HelpDude
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A standard support ticket system{" "}
                <span className="font-medium text-slate-900">
                  tracks tickets
                </span>
                . HelpDude is customer support software that{" "}
                <span className="font-medium text-[#1A7FB5]">acts on them</span>
                , surfacing the right knowledge, drafting the right response,
                and routing the right escalation, automatically.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-green-100 shadow-2xl overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-5 px-6 md:px-8 text-slate-500 font-semibold uppercase tracking-wider text-sm">
                      Capability
                    </th>
                    <th className="py-5 px-6 md:px-8 text-slate-500 font-semibold uppercase tracking-wider text-sm">
                      Standard Ticket System
                    </th>
                    <th className="py-5 px-6 md:px-8 bg-[#1A7FB5]/5 text-[#1A7FB5] font-bold uppercase tracking-wider text-sm">
                      HelpDude by Supporticon
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      cap: "Knowledge Search",
                      standard: "Manual tab-switching across tools",
                      helpdude:
                        "Unified AI search across entire stack under 30 secs",
                    },
                    {
                      cap: "Email Drafting",
                      standard: "Agent writes from scratch",
                      helpdude:
                        "One click AI draft from ticket context in your brand's tone",
                    },
                    {
                      cap: "Escalation Routing",
                      standard: "Manual, check Slack/org chart",
                      helpdude: "Automatic POC identification",
                    },
                    {
                      cap: "CX Intelligence",
                      standard: "Ticket volume metrics only",
                      helpdude: "Pattern analysis, root-cause insights",
                    },
                    {
                      cap: "Setup Time",
                      standard: "Days to weeks",
                      helpdude: "Under 15 minutes",
                    },
                    {
                      cap: "Security",
                      standard: "Varies by vendor",
                      helpdude: "AWS + MongoDB Atlas, role based access",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-5 px-6 md:px-8 font-semibold text-slate-900">
                        {row.cap}
                      </td>
                      <td className="py-5 px-6 md:px-8 text-slate-600">
                        {row.standard}
                      </td>
                      <td className="py-5 px-6 md:px-8 font-medium text-[#1A7FB5] bg-[#1A7FB5]/5">
                        {row.helpdude}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="container mx-auto px-4 pb-24">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-green-100 text-center shadow-xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Setup in 15 Minutes. Customer Outcomes from Day One.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Sign up, connect Freshdesk, and see your first customer intelligence
            insight in under 15 minutes. No implementation project. No IT
            dependency. Your customers start experiencing the difference the
            same week you deploy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="hero"
              className="px-10 py-7 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features;
