import { motion } from "motion/react";
import { CreditCard, AlertCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Charges() {
  return (
    <div className="pt-32 pb-40 min-h-screen bg-brand-bg font-sans">
      <div className="section-container">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="glass-tag mb-4 inline-block">Fee Structure</span>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase mb-8 italic text-brand-primary">Practice <br/> Charges.</h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-muted font-light leading-relaxed">
            We maintain a transparent billing matrix for all primary healthcare services. Our priority is delivering high-value medical outcomes with professional integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border border-brand-border rounded-[3rem] p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center text-brand-secondary mb-8 border border-brand-border">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="text-[10px] font-mono font-black text-brand-secondary uppercase tracking-[0.4em] mb-4">Base Interaction</h3>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-brand-primary mb-6 italic underline decoration-brand-secondary decoration-4 underline-offset-8">Consultation Fee</h2>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl font-display font-black tracking-tighter text-brand-primary">R1,200</span>
              <span className="text-brand-muted font-mono text-[10px] uppercase font-bold tracking-widest leading-none">Starting from</span>
            </div>
            <p className="text-brand-muted text-lg mb-10 leading-relaxed font-light">
              Covers a comprehensive diagnostic interview, physical examination, and initial protocol establishment.
            </p>
            <Link to="/contact" className="btn-primary group !w-full flex items-center justify-center gap-3">
              Proceed to Booking
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-primary text-white border border-white/5 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-secondary/10 blur-[100px]" />
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-secondary mb-8 border border-white/10">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-[10px] font-mono font-black text-brand-secondary uppercase tracking-[0.4em] mb-6 italic">Strategic Disclaimer</h3>
            <p className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter italic leading-tight mb-8">
              Medical costs may vary heavily based on clinical complexity.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-10">
              Additional charges may apply for specialized procedures, on-site diagnostics, emergency protocols, and chronic load balancing. We recommend contacting us for a specific medical estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0630018418" className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/5">
                <Phone className="w-5 h-5 text-brand-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Call Practice</span>
              </a>
              <a href="https://wa.me/27630018418" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-green-500 p-4 rounded-2xl hover:bg-green-600 transition-all shadow-lg border border-white/5">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">WhatsApp Direct</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto py-16 px-12 bg-white rounded-[2rem] border border-brand-border text-center">
           <h4 className="text-xs font-mono font-black text-brand-secondary uppercase tracking-[0.4em] mb-8">Medical Aid & Billing</h4>
           <p className="text-brand-muted text-sm leading-relaxed max-w-2xl mx-auto uppercase tracking-wide font-bold">
            We are a contracted-out practice. Payments are required upfront at the point of service. You can claim back from your medical aid provider according to your specific plan benefits.
           </p>
        </div>
      </div>
    </div>
  );
}
