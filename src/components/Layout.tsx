import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Linkedin, Code, Zap } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isDarkModePage = location.pathname === "/" || location.pathname === "/contact";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md py-4 border-b border-brand-border shadow-sm" 
            : isDarkModePage ? "py-8 bg-transparent" : "py-8 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all">
          <Link 
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <span className={`font-display text-xl font-black tracking-tight leading-none uppercase ${isDarkModePage && !scrolled ? 'text-white' : 'text-brand-primary'}`}>Dr. Gumede</span>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-secondary uppercase">Medical Practice</span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-10 items-center">
            {[
              { name: "Services", to: "/services" },
              { name: "Charges", to: "/charges" },
              { name: "Contact", to: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`nav-link text-sm font-bold uppercase tracking-widest ${
                  isDarkModePage && !scrolled ? "text-white/60 hover:text-white" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-brand-border mx-2" />
            
            <Link
              to="/contact"
              className={`btn-primary py-3 px-8 text-xs tracking-widest uppercase italic ${
                isDarkModePage && !scrolled ? "bg-white !text-brand-primary hover:!bg-brand-secondary hover:!text-white" : ""
              }`}
            >
              Consult Now
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className={isDarkModePage && !scrolled ? "text-white" : "text-brand-primary"}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[70] bg-brand-primary flex flex-col p-8 text-white"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display font-black text-2xl uppercase italic">Dr. Gumede</span>
              <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              {[{ name: "Home", to: "/" }, { name: "Services", to: "/services" }, { name: "Charges", to: "/charges" }, { name: "Contact", to: "/contact" }].map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-6xl font-display font-black tracking-tighter hover:text-brand-secondary transition-all transform hover:translate-x-4 uppercase italic"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">{children}</main>

      {/* Corporate Footer (Full Width) */}
      <footer className="bg-brand-primary text-white py-32 w-full mt-auto relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-secondary/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <span className="font-display text-3xl font-black tracking-tight uppercase italic">Dr. Donald Gumede</span>
            </div>
            <p className="text-white/60 text-xl leading-relaxed max-w-md mb-10 font-light">
              Providing premium family and primary medical care in Wierdapark. Where care meets excellence.
            </p>
            <div className="flex flex-col gap-2 text-white/80 font-mono text-sm tracking-tight mb-8">
               <p>Tel: 012 654 7177</p>
               <p>Cell: 082 859 7251</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="/contact" 
                className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all transform hover:-translate-y-2"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
               <h5 className="font-mono text-[10px] font-black uppercase text-brand-secondary tracking-[0.4em] mb-8">Contact Us</h5>
               <div className="flex flex-col gap-5 text-white/40 font-bold uppercase text-[10px] tracking-widest">
                 <p className="text-white">Ruimte Rd, Wierdapark, Pretoria</p>
                 <p className="text-white">063 001 8418</p>
                 <p className="text-white">Open · Closes 6 PM</p>
               </div>
            </div>
            <div>
               <h5 className="font-mono text-[10px] font-black uppercase text-brand-secondary tracking-[0.4em] mb-8">Medical Practice</h5>
               <div className="flex flex-col gap-5 text-white/40 font-bold uppercase text-[10px] tracking-widest">
                 <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                 <Link to="/charges" className="hover:text-white transition-colors">Billing</Link>
               </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
               <h5 className="font-mono text-[10px] font-black uppercase text-brand-secondary tracking-[0.4em] mb-8">Compliance</h5>
               <div className="flex flex-col gap-4 text-[10px] font-black uppercase opacity-20 tracking-tighter italic">
                 <p className="border-l-2 border-brand-secondary pl-3">SABS ISO-9001</p>
                 <p className="border-l-2 border-brand-secondary pl-3">Verified Level 1</p>
                 <p className="border-l-2 border-brand-secondary pl-3">ICASA Licensed</p>
               </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 opacity-30">
          <p className="text-white text-[9px] font-mono tracking-[0.3em] uppercase">
            &copy; 2026 DR. DONALD GUMEDE — WIERDAPARK, PRETORIA
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <Code className="w-3 h-3" />
                <span className="text-[9px] font-mono uppercase tracking-[0.4em]">Engineered by Gemini</span>
             </div>
             <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-brand-secondary fill-brand-secondary" />
                <span className="text-[9px] font-mono uppercase tracking-[0.4em]">High Load Ready</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
