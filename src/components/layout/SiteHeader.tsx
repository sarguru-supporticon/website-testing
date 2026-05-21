import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RequestDemoDialog from "@/components/RequestDemoDialog";
import { Menu, X, FileText, BookOpen, Users, Video, CalendarDays, Package, CreditCard, Sparkles, Brain, Home, Zap, Layers, Info, ChevronDown } from "lucide-react";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import supporticonLogoIcon from "@/assets/supporticon_logo.png";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/features", label: "Features", icon: Zap }, 
  { 
    to: "/product", 
    label: "Product",
    icon: Package,
    subItems: [
      { to: "/product", label: "HelpDude", desc: "AI-powered helpdesk platform", icon: Package }
    ]
  },
  { 
    to: "/resources", 
    label: "Resources",
    icon: BookOpen,
    subItems: [
      { to: "/sources", label: "Sources", desc: "In-depth playbooks to download", icon: BookOpen },
      { to: "/resources?tab=blogs", label: "Blogs", desc: "Tips, guides & best practices", icon: FileText },
      { to: "/resources?tab=case-studies", label: "Case Studies", desc: "Real-world success stories", icon: Users },
      { to: "/resources?tab=videos", label: "Videos", desc: "Demos & product walkthroughs", icon: Video },
      { to: "/events", label: "Events", desc: "Webinars & community meetups", icon: CalendarDays },
    ]
  },
  { to: "/pricing", label: "Pricing", icon: CreditCard }, 
  { to: "/about", label: "About", icon: Info },
];

export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isNavigatingHome, setIsNavigatingHome] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    setIsNavigatingHome(true);
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
      setTimeout(() => setIsNavigatingHome(false), 100);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {isNavigatingHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {/* Attractive Multi-Ring Loading Animation */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 border-[3px] border-transparent border-t-green-600 border-r-green-600 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                {/* Middle ring */}
                <motion.div
                  className="absolute inset-2 border-[3px] border-transparent border-b-green-400 border-l-green-400 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner ring */}
                <motion.div
                  className="absolute inset-4 border-[3px] border-transparent border-t-emerald-300 border-r-emerald-300 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                />
                {/* Center Logo */}
                <motion.div
                  className="w-10 h-10 flex items-center justify-center absolute"
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={supporticonLogoIcon} alt="Loading Icon" className="w-full h-full object-contain drop-shadow-md" />
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
                className="mt-8 text-slate-500 font-bold tracking-[0.2em] text-xs uppercase"
              >
                Loading
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            to="/"
            onClick={handleLogoClick}
            aria-label="Supporticon home"
            className="flex items-center gap-2 mr-8 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={supporticonUploads.logo}
              alt="Supporticon logo"
              className="h-10 w-auto"
              loading="eager"
            />
          </Link>

        <nav aria-label="main" className="hidden gap-2 md:flex h-full items-center relative">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <div 
                key={n.to} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredPath(n.to)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <div className="relative group flex items-center h-full">
                  <NavLink
                    to={n.to}
                    end={n.to === "/"}
                    className={({ isActive }) =>
                      `relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 rounded-full
                      ${isActive ? "text-primary bg-primary/5" : "text-slate-600 hover:text-foreground hover:bg-slate-50"}`
                    }
                  >
                    <span>{n.label}</span>
                    {n.subItems && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </NavLink>

                  {/* Sliding Background Effect */}
                  <AnimatePresence>
                    {hoveredPath === n.to && (
                      <motion.div
                        layoutId="nav-background"
                        className="absolute inset-0 bg-primary/5 rounded-full -z-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Dropdown panel */}
                  {n.subItems && (
                    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 hidden group-hover:block z-[60] pt-4 min-w-[280px]">
                      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
                        <div className="px-3 py-2 mb-1">
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Explore {n.label}
                          </p>
                        </div>
                        <div className="grid gap-1">
                          {n.subItems.map(subItem => {
                            const SubIcon = subItem.icon;
                            return (
                              <NavLink
                                key={subItem.to}
                                to={subItem.to}
                                className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/item hover:bg-primary/5 hover:translate-x-1"
                              >
                                <div className="mt-0.5 flex-shrink-0 w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors duration-200">
                                  <SubIcon className="w-4 h-4 text-slate-400 group-hover/item:text-primary" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-700 leading-none mb-1 group-hover/item:text-primary transition-colors">
                                    {subItem.label}
                                  </div>
                                  {subItem.desc && (
                                    <p className="text-[11px] text-slate-400 leading-tight">
                                      {subItem.desc}
                                    </p>
                                  )}
                                </div>
                              </NavLink>
                            );
                          })}
                        </div>
                        {/* Featured Footer for Dropdown */}
                        <div className="mt-2 p-2 bg-slate-50/80 rounded-xl border border-slate-100/50">
                          <Link to="/product" className="flex items-center justify-between px-2 py-1 text-[11px] font-medium text-primary hover:underline">
                            <span>Get started with Supporticon</span>
                            <Sparkles className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden transition-all duration-200 hover:bg-muted/50 rounded-full w-10 h-10 p-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative">
            <Menu
              className={`h-5 w-5 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`h-5 w-5 absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}
            />
          </div>
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="hero"
            size="sm"
            aria-label="Book a demo"
            className="rounded-full px-5 shadow-brand hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://zbooking.in/PoPU8", "_blank", "noopener,noreferrer")}
          >
            Book Demo
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {nav.map((n, index) => (
                <div key={n.to} className="flex flex-col">
                  <NavLink
                    to={n.to}
                    end={n.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-3 text-lg font-bold transition-all duration-200 rounded-xl px-4 ${
                        isActive ? "text-primary bg-primary/10" : "text-slate-600 hover:text-foreground hover:bg-muted/30"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {n.label}
                  </NavLink>
                  {n.subItems && (
                    <div className="pl-12 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 ml-6">
                      {n.subItems.map(subItem => {
                        const SubIcon = subItem.icon;
                        return (
                          <NavLink
                            key={subItem.to}
                            to={subItem.to}
                            className="flex items-center gap-3 py-2 text-sm transition-all duration-200 rounded-lg px-3 text-muted-foreground hover:text-primary hover:bg-primary/5"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <SubIcon className="w-4 h-4 opacity-70" />
                            {subItem.label}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <RequestDemoDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </header>
    </>
  );
};

export default SiteHeader;
