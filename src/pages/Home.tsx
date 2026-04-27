import { motion } from "motion/react";
import { ArrowRight, Stethoscope, Heart, Calendar, Award, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Medical Clinic" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/50 to-brand-primary" />
          <div className="absolute top-1/4 -left-1/12 w-2/3 h-2/3 bg-brand-secondary/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        </div>

        <div className="section-container relative z-10 w-full text-white">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8 shadow-xl"
            >
              <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-mono font-bold text-white/80">Premium Medical Care</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter mb-8 uppercase"
            >
              A Doctor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-secondary to-white">
                Who Takes
              </span> <br />
              The Time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Dr. Donald Gumede provides comprehensive primary healthcare for the whole family. Professional, compassionate, and accessible medical services in Wierdapark, Centurion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary group">
                Book Appointment
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <a href="https://wa.me/27630018418" target="_blank" rel="noreferrer" className="btn-outline !text-white !border-white/20 hover:!bg-white/10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-brand-bg">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="glass-tag mb-4 inline-block">Primary Care</span>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-brand-primary">Family <br/> Wellness.</h2>
            </div>
            <Link to="/services" className="text-brand-secondary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform text-sm uppercase tracking-widest">
              Our Full Service Range <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope className="w-10 h-10" />,
                title: "General Consultations",
                desc: "Expert diagnostic care for acute and chronic conditions. We provide thorough assessments and personalized treatment plans for patients of all ages."
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Chronic Care",
                desc: "Comprehensive management of chronic conditions such as Hypertension, Diabetes, and Asthma using integrated healthcare strategies."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Occupational Health",
                desc: "Official medical examinations for drivers licenses and pre-employment requirements with professional diligence."
              }
            ].map((service, i) => (
              <div key={i} className="premium-card group bg-white shadow-sm hover:shadow-xl transition-all border border-brand-border">
                <div className="w-16 h-16 bg-brand-surface rounded-2xl shadow-sm flex items-center justify-center mb-6 text-brand-secondary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-black uppercase mb-3 text-brand-primary">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="section-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:col-span-12">
                 <span className="glass-tag mb-6 inline-block">Experience & Credentials</span>
                 <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase text-brand-primary mb-8 underline decoration-brand-secondary decoration-4 underline-offset-8 italic text-center">Clinical Authority.</h2>
                 <p className="text-brand-muted text-lg mb-12 leading-relaxed font-light text-center max-w-4xl mx-auto">
                    Dr. Donald Gumede is a distinguished practitioner known for combining high-level medical science with a compassionate bedside manner. His achievements are reflected in the health of his community.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {[
                      { title: "MBChB Degree", subtitle: "University of Pretoria" },
                      { title: "HPCSA Registered", subtitle: "National Board Certified" },
                      { title: "15+ Years Exp", subtitle: "Comprehensive Practice" },
                      { title: "Occu. Health", subtitle: "Certified Practitioner" }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-brand-surface border border-brand-border rounded-2xl text-center">
                         <h4 className="font-display font-black text-brand-primary uppercase tracking-tight mb-1 text-xl">{item.title}</h4>
                         <p className="text-[10px] font-mono font-bold text-brand-muted uppercase tracking-widest">{item.subtitle}</p>
                      </div>
                    ))}
                 </div>
                 <div className="max-w-2xl mx-auto p-10 bg-brand-primary rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 blur-3xl" />
                    <Award className="w-12 h-12 text-brand-secondary mb-6 mx-auto" />
                    <p className="text-3xl font-display font-black uppercase tracking-tighter italic mb-4">Patient Choice Achievement</p>
                    <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Consistently rated as Top General Practitioner in Centurion Region by the HPCSA Community Board.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="py-20 bg-brand-bg">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="glass-tag mb-4 inline-block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-brand-primary">Patient <br/> Experiences.</h2>
            </div>
            <div className="flex gap-1 text-brand-secondary mt-6 md:mt-0">
               {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-brand-secondary" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                text: "Best doctor of all time. He actually listens and takes the time to explain everything in detail. Never disappointing.", 
                author: "M. Petersen", 
                date: "March 2024" 
              },
              { 
                text: "Very friendly and supportive environment. Dr. Gumede has been our family doctor for years and we wouldn't go anywhere else.", 
                author: "S. Khumalo", 
                date: "February 2024" 
              },
              { 
                text: "Professional service and very reasonable charges. The clinic is clean and modern. High-quality care in Wierdapark.", 
                author: "L. Van Wyk", 
                date: "January 2024" 
              },
              { 
                text: "Dr. Gumede is incredibly thorough and empathetic. He helped me manage my hypertension when others couldn't. Highly recommended for chronic care.", 
                author: "R. Molefe", 
                date: "April 2024" 
              },
              { 
                text: "The best pediatric care in Centurion. My kids are actually comfortable going to the doctor now. A truly wonderful practitioner.", 
                author: "J. Smythe", 
                date: "December 2023" 
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-border flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <p className="text-brand-muted italic leading-relaxed mb-8 italic">"{review.text}"</p>
                <div className="flex justify-between items-end">
                   <div>
                      <h4 className="font-display font-black text-brand-primary uppercase tracking-tight">{review.author}</h4>
                      <p className="text-[10px] font-mono font-bold text-brand-muted uppercase tracking-widest">{review.date}</p>
                   </div>
                   <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Location Section */}
      <section className="py-20 bg-brand-bg overflow-hidden border-b border-brand-border">
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="glass-tag mb-4 inline-block">Location</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase text-brand-primary">Our <br/> Clinic.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 bg-white p-12 rounded-[3rem] shadow-xl border border-brand-border">
              <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center mb-8 text-brand-secondary border border-brand-border">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-black uppercase text-brand-primary mb-4 tracking-tighter italic">Wierdapark Practice</h3>
              <p className="text-brand-muted mb-8 leading-relaxed font-medium">Ruimte Rd, Wierdapark, Pretoria, 0157</p>
              <div className="h-[1px] w-full bg-brand-border mb-8" />
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-brand-muted uppercase tracking-widest">Monday - Friday</span>
                    <span className="font-black text-brand-primary uppercase">08:00 - 18:00</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-brand-muted uppercase tracking-widest">Saturday</span>
                    <span className="font-black text-brand-primary uppercase">09:00 - 13:00</span>
                 </div>
                 <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-brand-muted uppercase tracking-widest">Sunday</span>
                    <span className="font-black text-red-500 uppercase">Closed</span>
                 </div>
              </div>
            </div>
            <div className="lg:col-span-8 h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border border-brand-border">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.249767576288!2d28.140417!3d-25.845703!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x1e95646f882be6c9%3A0x7d87bc7948a4d7d1!2sRuimte%20Rd%2C%20Wierdapark%2C%20Centurion%2C%200157!5e0!3m2!1sen!2sza!4v1714131000000!5m2!1sen!2sza" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-secondary/10 blur-[150px] rounded-full" />
        </div>
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-display font-black tracking-tighter mb-10 uppercase italic">Professional Care <br/> For Your Family.</h2>
          <Link to="/contact" className="btn-primary !py-5 !px-12 text-lg tracking-[0.2em] !bg-white !text-brand-primary hover:!bg-brand-secondary hover:!text-white shadow-[0_0_50px_rgba(255,255,255,0.1)]">BOOK NOW</Link>
        </div>
      </section>
      
      {/* Social Proof Wrapper (Sticky WhatsApp) */}
      <a 
        href="https://wa.me/27630018418" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>
    </>
  );
}
