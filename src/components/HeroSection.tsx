import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion-utils";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Clock,
  FileText,
  Plug,
  Shield,
  Search,
  MessageSquare,
  TrendingUp,
  Zap,
  Star,
  Activity,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CXLeadersForm } from "@/components/CXLeadersForm";

/* ─── Static particle positions (avoid Math.random in render) ─── */
const PARTICLES = [
  { id: 0,  x: "8%",   y: "15%", size: 3, dur: 5.2, delay: 0    },
  { id: 1,  x: "18%",  y: "72%", size: 2, dur: 6.8, delay: 1.1  },
  { id: 2,  x: "28%",  y: "38%", size: 2, dur: 4.5, delay: 0.7  },
  { id: 3,  x: "42%",  y: "88%", size: 4, dur: 7.0, delay: 2.3  },
  { id: 4,  x: "55%",  y: "12%", size: 2, dur: 5.6, delay: 1.8  },
  { id: 5,  x: "67%",  y: "55%", size: 3, dur: 6.2, delay: 0.4  },
  { id: 6,  x: "75%",  y: "28%", size: 2, dur: 4.9, delay: 3.0  },
  { id: 7,  x: "85%",  y: "80%", size: 3, dur: 7.5, delay: 1.5  },
  { id: 8,  x: "93%",  y: "45%", size: 2, dur: 5.0, delay: 2.7  },
  { id: 9,  x: "12%",  y: "52%", size: 4, dur: 6.5, delay: 0.9  },
  { id: 10, x: "35%",  y: "65%", size: 2, dur: 5.8, delay: 3.4  },
  { id: 11, x: "50%",  y: "35%", size: 3, dur: 4.7, delay: 1.2  },
  { id: 12, x: "62%",  y: "78%", size: 2, dur: 6.0, delay: 2.1  },
  { id: 13, x: "79%",  y: "18%", size: 4, dur: 5.3, delay: 0.6  },
  { id: 14, x: "90%",  y: "62%", size: 2, dur: 7.2, delay: 1.9  },
];

/* ─── Ticket data ──────────────────────────────────────────────── */
const TICKETS = [
  { id: "#4521", text: "Password reset not working", status: "AI Drafting", color: "bg-blue-500",    dot: "bg-blue-400"    },
  { id: "#4522", text: "Billing invoice question",   status: "Resolved",   color: "bg-emerald-500", dot: "bg-emerald-400" },
  { id: "#4523", text: "SSO configuration issue",    status: "Escalated",  color: "bg-amber-500",   dot: "bg-amber-400"   },
];

/* ─── Mini bar chart data ──────────────────────────────────────── */
const BARS = [55, 80, 65, 90, 75, 95, 70, 88, 60, 92, 78, 85];

/* ─── Main component ───────────────────────────────────────────── */
export const HeroSection = () => {
  const navigate = useNavigate();
  const [showCXForm, setShowCXForm] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Mouse parallax */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 35, damping: 22 };
  const sX = useSpring(rawX, springCfg);
  const sY = useSpring(rawY, springCfg);

  const rotateX  = useTransform(sY, [-1, 1], [7,  -7]);
  const rotateY  = useTransform(sX, [-1, 1], [-12, 12]);
  const floatX1  = useTransform(sX, [-1, 1], [-8,  8]);
  const floatY1  = useTransform(sY, [-1, 1], [-6,  6]);
  const floatX2  = useTransform(sX, [-1, 1], [10, -10]);
  const floatY2  = useTransform(sY, [-1, 1], [8,  -8]);

  /* Scroll parallax */
  const { scrollY } = useScroll();
  const dashY      = useTransform(scrollY, [0, 600], [0, -50]);
  const heroOp     = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale  = useTransform(scrollY, [0, 400], [1, 0.97]);
  const bgY        = useTransform(scrollY, [0, 600], [0, -30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
    rawY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  };
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: heroOp, scale: heroScale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[94vh] flex items-center overflow-hidden pt-4 pb-20"
    >
      {/* ── Ambient background ───────────────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/90 to-emerald-50/70" />

        {/* Pulsing glow blobs */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] right-[0%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-emerald-100/70 to-teal-100/50 blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[450px] rounded-full bg-gradient-to-tr from-blue-100/40 to-cyan-100/30 blur-[90px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[300px] rounded-full bg-emerald-200/20 blur-[80px]"
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-emerald-400/25"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [-14, 14, -14], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}

        {/* Light streak */}
        <div className="absolute top-[30%] left-[10%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-emerald-300/30 to-transparent rotate-[25deg] blur-[1px]" />
        <div className="absolute top-[20%] right-[20%] w-[1px] h-[150px] bg-gradient-to-b from-transparent via-blue-300/20 to-transparent -rotate-[15deg] blur-[1px]" />
      </motion.div>

      {/* ── Main grid ────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Copy ─────────────────────────────────────── */}
          <div className="order-2 md:order-1 z-10">
            <FadeUp delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                AI Powered Helpdesk Software
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.04] text-slate-900">
                <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Who supports
                </span>
                <span className="block">the support team?</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
                HelpDude gives your support engineers unified knowledge search,
                one-click AI email drafting, and intelligent escalation routing —
                so every ticket is resolved faster and every customer stays longer.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                {/* Primary CTA — magnetic hover */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Button
                    size="lg"
                    variant="hero"
                    className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-emerald-200/70 hover:shadow-xl hover:shadow-emerald-300/50 transition-shadow duration-300 w-full sm:w-auto"
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
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base font-semibold border-slate-200 bg-white/80 hover:bg-white text-slate-800 w-full sm:w-auto"
                    onClick={() => navigate("/product")}
                  >
                    Watch How It Works
                  </Button>
                </motion.div>
              </div>
            </FadeUp>

            {/* Trust badges */}
            <FadeUp delay={0.30}>
              <div className="mt-8 grid grid-cols-2 gap-2.5 max-w-[380px]">
                {[
                  { icon: Clock,  text: "Setup in under 15 minutes"  },
                  { icon: Plug,   text: "No IT dependency"            },
                  { icon: Shield, text: "Enterprise-grade security"   },
                  { icon: Brain,  text: "AWS + MongoDB Atlas"         },
                ].map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/80 border border-slate-100 shadow-sm backdrop-blur-sm"
                  >
                    <b.icon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 text-[11px] font-semibold leading-tight">
                      {b.text}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── RIGHT: 3D Dashboard ────────────────────────────── */}
          <div className="relative order-1 md:order-2 flex items-center justify-center">

            {/* Ambient glow behind dashboard */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[5%] rounded-3xl bg-gradient-to-br from-emerald-200/50 via-teal-100/30 to-blue-100/20 blur-[60px]"
            />

            {/* 3D perspective container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                y: dashY,
                transformPerspective: 1100,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-[480px]"
            >
              {/* ── Main Dashboard Card ──────────────────────── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden border border-white/30 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
                style={{ transform: "translateZ(0px)" }}
              >
                {/* Glass dark UI */}
                <div className="bg-[#0f172a]/95 backdrop-blur-2xl">

                  {/* Toolbar */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="ml-3 text-xs text-slate-400 font-semibold tracking-wide">
                        HelpDude — AI Command Center
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-emerald-400"
                      />
                      <span className="text-[10px] text-emerald-400 font-bold">LIVE</span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-0 border-b border-white/8">
                    {[
                      { label: "Tickets",    value: "247",   icon: Activity,    color: "text-blue-400"    },
                      { label: "Resolved",   value: "94%",   icon: CheckCircle, color: "text-emerald-400" },
                      { label: "CSAT",       value: "4.8★",  icon: Star,        color: "text-amber-400"   },
                      { label: "Avg Reply",  value: "28s",   icon: Zap,         color: "text-teal-400"    },
                    ].map((s, i) => (
                      <div key={s.label} className={`px-4 py-4 ${i < 3 ? "border-r border-white/8" : ""}`}>
                        <s.icon className={`w-3.5 h-3.5 ${s.color} mb-1.5`} />
                        <div className={`text-lg font-black ${s.color}`}>{s.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="px-5 py-4 border-b border-white/8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                        Ticket Volume — 30d
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">↑ 12% vs last month</span>
                    </div>
                    <div className="flex items-end gap-1 h-[52px]">
                      {BARS.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.06, duration: 0.6, ease: "easeOut" }}
                          className={`flex-1 rounded-t-sm ${
                            i === BARS.length - 1
                              ? "bg-emerald-400"
                              : i === BARS.length - 2
                                ? "bg-emerald-500/70"
                                : "bg-slate-600/60"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Ticket list */}
                  <div className="px-5 py-4">
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-3">
                      Active Tickets
                    </div>
                    <div className="space-y-2">
                      {TICKETS.map((t, i) => (
                        <motion.div
                          key={t.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.12 }}
                          className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-3 py-2.5 border border-white/6 hover:border-emerald-500/30 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.dot} shrink-0`} />
                            <span className="text-[10px] text-slate-500 font-mono shrink-0">{t.id}</span>
                            <span className="text-xs text-slate-300 truncate">{t.text}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/8 ${t.color.replace("bg-", "text-")}`}>
                            {t.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating card 1: AI Response ─────────────── */}
              <motion.div
                style={{ x: floatX1, y: floatY1 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.06, boxShadow: "0 16px 48px rgba(16,185,129,0.25)" }}
                className="absolute -top-8 -right-6 w-[180px] rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-3 cursor-default"
                style={{ transform: "translateZ(40px)" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">AI Response</span>
                </div>
                <div className="text-xs text-slate-500 leading-snug">
                  Draft ready in <span className="font-bold text-emerald-600">2.3s</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    animate={{ width: ["0%", "94%"] }}
                    transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                  />
                </div>
              </motion.div>

              {/* ── Floating card 2: Knowledge Search ────────── */}
              <motion.div
                style={{ x: floatX2, y: floatY2 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.06, boxShadow: "0 16px 48px rgba(59,130,246,0.2)" }}
                className="absolute -bottom-6 -left-6 w-[175px] rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.10)] p-3 cursor-default"
                style={{ transform: "translateZ(30px)" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">Knowledge Base</span>
                </div>
                <div className="text-[10px] text-slate-400 mb-1">Articles indexed</div>
                <div className="text-xl font-black text-blue-600">1,247</div>
                <div className="text-[10px] text-emerald-500 font-semibold">↑ 34 added this week</div>
              </motion.div>

              {/* ── Floating card 3: Chat preview ────────────── */}
              <motion.div
                style={{ x: floatX1 }}
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgba(16,185,129,0.2)" }}
                className="absolute top-[38%] -right-10 w-[170px] rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] p-3 cursor-default"
                style={{ transform: "translateZ(55px)" } as React.CSSProperties}
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-bold text-emerald-400">Live Chat</span>
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white/8 rounded-lg px-2.5 py-1.5 rounded-bl-none">
                    <span className="text-[10px] text-slate-300">Can't access SSO login...</span>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg px-2.5 py-1.5 rounded-br-none ml-3">
                    <span className="text-[10px] text-emerald-300">AI found 3 KB articles ✓</span>
                  </div>
                </div>
              </motion.div>

              {/* ── AI Orb glow ──────────────────────────────── */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [0, 360],
                }}
                transition={{
                  scale:   { duration: 4,   repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 4,   repeat: Infinity, ease: "easeInOut" },
                  rotate:  { duration: 20,  repeat: Infinity, ease: "linear"    },
                }}
                className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(16,185,129,0.15), rgba(20,184,166,0.08), rgba(59,130,246,0.12), rgba(16,185,129,0.15))",
                  filter: "blur(18px)",
                  transform: "translateZ(20px)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CX Form */}
      <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />
    </motion.section>
  );
};

export default HeroSection;
