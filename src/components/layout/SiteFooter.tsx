import { Link } from "react-router-dom";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-[#022c22] text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column: Logo & Socials */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={supporticonUploads.logo}
                alt="Supporticon logo"
                className="h-10 w-auto"
              />
            </Link>
            
            <div className="flex gap-3 mt-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300 hover:bg-white/5"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col gap-6 md:pl-12">
            <h3 className="text-xl font-bold text-white tracking-tight">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Features", path: "/features" },
                { name: "Product", path: "/product" },
                { name: "Resources", path: "/resources" },
                { name: "Pricing", path: "/pricing" },
                { name: "About", path: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/60 hover:text-white transition-colors duration-200 text-[15px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Head Office */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white tracking-tight">Head Office</h3>
            <ul className="flex flex-col gap-5 text-white/60">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                <span className="text-[15px] leading-relaxed">
                  7-14/4, Madam Sandhu,<br />
                  Tharamangalam, Salem,<br />
                  TamilNadu, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-white/30 shrink-0" />
                <a href="mailto:founder@supporticon.com" className="hover:text-white transition-colors text-[15px]">
                  founder@supporticon.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-white/30 shrink-0" />
                <span className="text-[15px]">+91 866 734 7679</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-sm text-white/30 font-medium">
            Copyright @2025 supporticon.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
