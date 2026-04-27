import { motion } from "motion/react";
import { Stethoscope, Activity, Baby, CheckCircle2, Heart, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Primary Healthcare & Diagnosis",
      desc: "Our primary healthcare division is the cornerstone of patient wellness. We provide thorough diagnostic assessments for a wide range of acute illnesses—from respiratory infections to sports injuries. Every patient receives a tailored treatment protocol focused on swift recovery and long-term vitality.",
      details: "Utilizing advanced diagnostic tools and evidence-based protocols to ensure precision in every diagnosis. Our approach integrates physical examination with detailed clinical history.",
      features: ["Walk-in Available", "On-site Diagnostics", "Referral Networks", "E-Prescriptions"]
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Chronic Disease Management",
      desc: "Managing long-term health requires more than just medication—it requires a lifestyle partnership. We specialize in the management of lifestyle-related and chronic conditions (Diabetes, Hypertension, Cholesterol) using a combined clinical and nutritional approach to minimize complications.",
      details: "Continuous monitoring through monthly check-ups, specialized lab tests, and dynamic medication adjustments tailored to your body's changing profile and needs.",
      features: ["Diabetes Control", "Hypertension Management", "Nutrition Guidance", "Monthly Monitoring"]
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Pediatrics & Child Wellness",
      desc: "Specialized care for the smallest members of your family. Our pediatric services cover everything from growth monitoring and developmental assessments to childhood illness management and school readiness medicals. We ensure a warm, friendly environment for children.",
      details: "Comprehensive developmental tracking and specialized care for childhood conditions. We focus on preventative health to ensure your child hits every developmental milestone.",
      features: ["Growth Tracking", "School Medicals", "Nebulization", "Childhood Nutrition"]
    }
  ];

  return (
    <div className="pt-32 pb-40 min-h-screen bg-brand-bg">
      <div className="section-container">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="glass-tag mb-4 inline-block">Excellence in Care</span>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase mb-8 italic text-brand-primary">Our Expertise.</h1>
          <p className="text-xl text-brand-muted">A comprehensive framework of medical specializations designed to protect and enhance the health of you and your loved ones.</p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-brand-secondary mb-10 shadow-lg border border-brand-border">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-8 leading-[1.1] italic text-brand-primary">{service.title}</h2>
                <p className="text-brand-muted text-lg mb-8 leading-relaxed font-light">{service.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                   {service.features.map(f => (
                     <div key={f} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-brand-border">
                        <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand-primary">{f}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="premium-card bg-brand-primary text-white p-12 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 blur-[80px]" />
                   <h3 className="text-xs font-mono font-bold text-brand-secondary uppercase tracking-[0.4em] mb-6">Patient Philosophy</h3>
                   <div className="space-y-8 relative z-10">
                      <p className="text-xl italic font-light text-white/80 leading-relaxed">
                        "{service.details}"
                      </p>
                      <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                         <span className="text-[10px] font-mono font-bold tracking-widest opacity-40 uppercase">Certified Practice</span>
                         <div className="px-4 py-1 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase">Clinical Excellence</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
