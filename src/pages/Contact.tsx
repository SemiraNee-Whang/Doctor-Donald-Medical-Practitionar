import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const reason = formData.get("reason") as string;

    const whatsappNumber = "27828597251";
    const message = `Hello Dr. Gumede, my name is ${name}.\n\nContact Number: ${phone}\nReason for Visit: ${reason}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-40 min-h-screen bg-brand-primary text-white selection:bg-brand-secondary selection:text-white">
      <div className="section-container">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <span className="glass-tag !bg-white/10 !text-white/80 !border-white/20 mb-4 inline-block">Consultation</span>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase mb-8">Schedule <br/> Appointment.</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed">Book your visit with Dr. Donald Gumede. Our team will confirm your consultation slot within an hour during business hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          <div className="space-y-12">
            {[
              { icon: <Phone />, label: "Landline", val: "012 654 7177", href: "tel:0126547177" },
              { icon: <Phone />, label: "Cell Phone", val: "082 859 7251", href: "tel:0828597251" },
              { icon: <MessageCircle />, label: "WhatsApp Chat", val: "Chat With Us", href: "https://wa.me/27828597251" },
              { icon: <MapPin />, label: "Clinic Location", val: "Ruimte Rd, Wierdapark, Pretoria, 0157", href: "https://maps.google.com/?q=Ruimte+Rd,+Wierdapark,+Pretoria,+0157" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-8 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase font-black tracking-[0.3em] text-white/30 mb-1">{item.label}</p>
                  <p className="text-2xl font-display font-black group-hover:text-brand-secondary transition-colors italic uppercase">{item.val}</p>
                </div>
              </motion.a>
            ))}
            
            <div className="pt-10 border-t border-white/5">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-brand-secondary mb-6 italic">Operating Hours</h4>
              <div className="space-y-3 opacity-60 text-sm font-bold uppercase tracking-widest text-white/60">
                 <div className="flex justify-between"><span>Mon - Fri</span><span>08:00 - 18:00</span></div>
                 <div className="flex justify-between"><span>Saturday</span><span>09:00 - 13:00</span></div>
                 <div className="flex justify-between"><span>Sunday</span><span className="text-red-400">Closed</span></div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="premium-card !bg-white/5 !border-white/10 p-10 !rounded-[3rem] backdrop-blur-xl shadow-2xl h-full flex flex-col"
          >
            <h3 className="text-2xl font-display font-black uppercase mb-10 tracking-tight italic">Appointment Request</h3>
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-grow flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-secondary/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-display font-black uppercase tracking-tighter">Request <br/> Received.</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed max-w-[240px]">We have received your booking request. Our reception will contact you shortly to confirm your slot.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-mono font-bold text-brand-secondary uppercase tracking-[0.3em] hover:underline"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-grow"
                >
                   <div>
                      <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest mb-3">Full Name</label>
                      <input name="name" required type="text" placeholder="Patient Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-secondary text-white placeholder:text-white/20 transition-all font-sans" />
                   </div>
                   <div>
                      <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest mb-3">Contact Number</label>
                      <input name="phone" required type="tel" placeholder="063 001 8418" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-secondary text-white placeholder:text-white/20 transition-all font-sans" />
                   </div>
                   <div>
                      <label className="block text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest mb-3">Reason for Visit</label>
                      <textarea name="reason" required placeholder="Brief description of symptoms or service required..." rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-secondary text-white placeholder:text-white/20 transition-all resize-none font-sans" />
                   </div>
                   <button type="submit" className="w-full py-6 rounded-2xl bg-white text-brand-primary font-display font-black uppercase tracking-[0.2em] shadow-xl hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-3">
                      Book Now
                      <ArrowRight className="w-5 h-5" />
                   </button>
                </form>
              )}
            </AnimatePresence>
            
            <p className="mt-8 text-center text-[10px] font-mono text-white/30 uppercase tracking-widest leading-relaxed">
              *Confidential data processing according to medical privacy standards.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
