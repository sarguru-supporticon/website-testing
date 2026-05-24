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
  Plug,
  Shield,
  Search,
  MessageSquare,
  Zap,
  Star,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CXLeadersForm } from "@/components/CXLeadersForm";

/* ─── Static particle positions ─── */
const PARTICLES = [
  { id: 0,  x: "8%",  y: "15%", size: 3, dur: 5.2, delay: 0   },
  { id: 1,  x: "18%", y: "72%", size: 2, dur: 6.8, delay: 1.1 },
  { id: 2,  x: "28%", y: "38%", size: 2, dur: 4.5, delay: 0.7 },
  { id: 3,  x: "42%", y: "88%", size: 4, dur: 7.0, delay: 2.3 },
  { id: 4,  x: "55%", y: "12%", size: 2, dur: 5.6, delay: 1.8 },
  { id: 5,  x: "67%", y: "55%", size: 3, dur: 6.2, delay: 0.4 },
  { id: 6,  x: "75%", y: "28%", size: 2, dur: 4.9, delay: 3.0 },
  { id: 7,  x: "85%", y: "80%", size: 3, dur: 7.5, delay: 1.5 },
  { id: 8,  x: "93%", y: "45%", size: 2, dur: 5.0, delay: 2.7 },
  { id: 9,  x: "12%", y: "52%", size: 4, dur: 6.5, delay: 0.9 },
  { id: 10, x: "35%", y: "65%", size: 2, dur: 5.8, delay: 3.4 },
  { id: 11, x: "62%", y: "78%", size: 3, dur: 6.0, delay: 2.1 },
  { id: 12, x: "79%", y: "18%", size: 4, dur: 5.3, delay: 0.6 },
];

const TICKETS = [
  { id: "#4521", text: "Password reset not working", status: "AI Drafting", dot: "bg-blue-400",    badge: "text-blue-400"    },
  { id: "#4522", text: "Billing invoice question",   status: "Resolved",   dot: "bg-emerald-400", badge: "text-emerald-400" },
  { id: "#4523", text: "SSO configuration issue",    status: "Escalated",  dot: "bg-amber-400",   badge: "text-amber-400"   },
];

const BARS = [55, 80, 65, 90, 75, 95, 70, 88, 60, 92, 78, 85];

export const HeroSection = () => {
  const navigate = useNavigate();
  const [showCXForm, setShowCXForm] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Mouse parallax springs */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sX = useSpring(rawX, { stiffness: 35, damping: 22 });
  const sY = useSpring(rawY, { stiffness: 35, damping: 22 });

  const rotateX = useTransform(sY, [-1, 1], [6, -6]);
  const rotateY = useTransform(sX, [-1, 1], [-10, 10]);

  /* Individual card parallax (separate motion values per axis, no conflict) */
  const card1X = useTransform(sX, [-1, 1], [-10, 10]);
  const card1Y = useTransform(sY, [-1, 1], [-8, 8]);
  const card2X = useTransform(sX, [-1, 1], [12, -12]);
  const card2Y = useTransform(sY, [-1, 1], [10, -10]);
  const card3X = useTransform(sX, [-1, 1], [-8, 8]);
  const card3Y = useTransform(sY, [-1, 1], [6, -6]);

  /* Scroll — only translate, no opacity fade (avoids content disappearing) */
  const { scrollY } = useScroll();
  const dashY = useTransform(scrollY, [0, 600], [0, -45]);
  const bgY   = useTransform(scrollY, [0, 600], [0, -25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
    rawY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      className="relative min-h-[94vh] flex items-center overflow-hidden pt-4 pb-20"
    >
      {/* ── Ambient background ─────────────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/90 to-emerald-50/70" />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] right-[-2%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-emerald-100/70 to-teal-100/50 blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[450px] rounded-full bg-gradient-to-tr from-blue-100/40 to-cyan-100/30 blur-[90px]"
        />

        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-emerald-400/25"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [-14, 14, -14], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}

        <div className="absolute top-[30%] left-[10%] w-px h-[180px] bg-gradient-to-b from-transparent via-emerald-300/25 to-transparent rotate-[25deg]" />
        <div className="absolute top-[20%] right-[20%] w-px h-[140px] bg-gradient-to-b from-transparent via-blue-300/20 to-transparent -rotate-[15deg]" />
      </motion.div>

      {/* ── Main grid ──────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: Copy */}
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
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Button
                    size="lg"
                    variant="hero"
                    className="rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-emerald-200/70 hover:shadow-xl hover:shadow-emerald-300/50 w-full sm:w-auto"
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

            <FadeUp delay={0.30}>
              <div className="mt-8 grid grid-cols-2 gap-2.5 max-w-[380px]">
                {[
                  { icon: Clock,  text: "Setup in under 15 minutes" },
                  { icon: Plug,   text: "No IT dependency"          },
                  { icon: Shield, text: "Enterprise-grade security" },
                  { icon: Brain,  text: "AWS + MongoDB Atlas"       },
                ].map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/80 border border-slate-100 shadow-sm"
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

          {/* RIGHT: 3D Dashboard */}
          <div className="relative order-1 md:order-2 flex items-center justify-center">

            {/* Ambient glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[5%] rounded-3xl bg-gradient-to-br from-emerald-200/50 via-teal-100/30 to-blue-100/20 blur-[60px] pointer-events-none"
            />

            {/* 3D wrapper — mouse tilt + scroll translate */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                y: dashY,
                perspective: 1100,
              }}
              className="relative w-full max-w-[480px]"
            >
              {/* ── Main Dashboard Card ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-3xl overflow-hidden border border-white/30 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
              >
                <div className="bg-[#0f172a]/95 backdrop-blur-2xl">

                  {/* Toolbar */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-xs text-slate-400 font-semibold tracking-wide">
                        HelpDude — AI Command Center
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-emerald-400"
                      />
                      <span className="text-[10px] text-emerald-400 font-bold">LIVE</span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 border-b border-white/8">
                    {[
                      { label: "Tickets",   value: "247",  icon: Activity,    color: "text-blue-400"    },
                      { label: "Resolved",  value: "94%",  icon: CheckCircle, color: "text-emerald-400" },
                      { label: "CSAT",      value: "4.8★", icon: Star,        color: "text-amber-400"   },
                      { label: "Avg Reply", value: "28s",  icon: Zap,         color: "text-teal-400"    },
                    ].map((s, i) => (
                      <div key={s.label} className={`px-4 py-4 ${i < 3 ? "border-r border-white/8" : ""}`}>
                        <s.icon className={`w-3.5 h-3.5 ${s.color} mb-1.5`} />
                        <div className={`text-lg font-black ${s.color}`}>{s.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
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
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: i * 0.05 + 0.3, duration: 0.5, ease: "easeOut" }}
                          className={`flex-1 rounded-t-sm origin-bottom ${
                            i === BARS.length - 1 ? "bg-emerald-400"
                            : i === BARS.length - 2 ? "bg-emerald-500/60"
                            : "bg-slate-600/50"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tickets */}
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
                          transition={{ delay: 0.5 + i * 0.12 }}
                          className="flex items-center justify-between gap-3 bg-white/5 rounded-xl px-3 py-2.5 border border-white/6"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.dot} shrink-0`} />
                            <span className="text-[10px] text-slate-500 font-mono shrink-0">{t.id}</span>
                            <span className="text-xs text-slate-300 truncate">{t.text}</span>
                          </div>
                          <span className={`text-[10px] font-bold shrink-0 ${t.badge}`}>
                            {t.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating card 1: AI Response (top-right) ── */}
              <motion.div
                style={{ x: card1X, y: card1Y }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.06 }}
                className="absolute -top-8 -right-6 w-[180px] rounded-2xl bg-white/92 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-3 cursor-default z-10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">AI Response</span>
                </div>
                <div className="text-xs text-slate-500 leading-snug mb-2">
                  Draft ready in <span className="font-bold text-emerald-600">2.3s</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    animate={{ width: ["0%", "94%"] }}
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                  />
                </div>
              </motion.div>

              {/* ── Floating card 2: Knowledge Base (bottom-left) ── */}
              <motion.div
                style={{ x: card2X, y: card2Y }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.06 }}
                className="absolute -bottom-6 -left-6 w-[170px] rounded-2xl bg-white/92 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.10)] p-3 cursor-default z-10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Search className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">Knowledge Base</span>
                </div>
                <div className="text-[10px] text-slate-400 mb-0.5">Articles indexed</div>
                <div className="text-xl font-black text-blue-600">1,247</div>
                <div className="text-[10px] text-emerald-500 font-semibold">↑ 34 added this week</div>
              </motion.div>

              {/* ── Floating card 3: Live Chat (mid-right) ── */}
              <motion.div
                style={{ x: card3X, y: card3Y }}
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-[42%] -right-10 w-[168px] rounded-2xl bg-[#0f172a]/92 backdrop-blur-xl border border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.25)] p-3 cursor-default z-10"
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-bold text-emerald-400">Live Chat</span>
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white/8 rounded-lg px-2.5 py-1.5 rounded-bl-none">
                    <span className="text-[10px] text-slate-300">Can't access SSO login...</span>
                  </div>
                  <div className="bg-emerald-500/20 rounded-lg px-2.5 py-1.5 ml-3 rounded-br-none">
                    <span className="text-[10px] text-emerald-300">AI found 3 KB articles ✓</span>
                  </div>
                </div>
              </motion.div>

              {/* ── AI ambient orb ── */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(20,184,166,0.06) 50%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <CXLeadersForm open={showCXForm} onOpenChange={setShowCXForm} />
    </section>
  );
};

export default HeroSection;
