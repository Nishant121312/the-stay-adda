"use client";
import { motion } from "framer-motion";
import { Wifi, ShieldCheck, Utensils, Droplets, Zap, Shirt } from "lucide-react";

export default function Hero() {
  const amenities = [
    { icon: <Wifi size={18} />, label: "Hi-Speed Wi-Fi" },
    { icon: <ShieldCheck size={18} />, label: "24x7 Security" },
    { icon: <Utensils size={18} />, label: "Hygienic Food" },
    { icon: <Droplets size={18} />, label: "RO Water" },
    { icon: <Zap size={18} />, label: "Power Backup" },
    { icon: <Shirt size={18} />, label: "Laundry" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-stretch overflow-hidden bg-[#020c1b]">
      {/* Background Building Image for Mobile */}
      <div className="absolute inset-0 lg:hidden overflow-hidden">
        <img 
          src="/building.png" 
          alt="The Stay Adda Building"
          className="w-full h-full object-cover opacity-30 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b] via-[#020c1b]/80 to-[#020c1b]" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      
      <div className="w-full flex relative z-10">
        {/* Left Content Area (Centered Content in Container) */}
        <div className="w-full lg:w-[55%] flex justify-end">
          <div className="w-full max-w-3xl px-4 md:px-12 py-12 lg:py-20 text-white lg:pr-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                Luxury Living Space
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Premium PG <br />
                in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 italic drop-shadow-sm">Indirapuram</span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
                Experience upscale hospitality in the heart of Indirapuram. 
                Safe, modern, and designer spaces tailored for the ambitious student and working professional.
              </p>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
                {amenities.map((item, index) => (
                  <div key={index} className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300">
                    <div className="text-gold-500 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 group-hover:text-gold-400 transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                <a 
                  href="tel:+919867928531"
                  className="relative group overflow-hidden bg-gold-500 px-10 py-4 rounded-full font-bold text-navy-900 transition-all hover:shadow-[0_0_30px_rgba(212,160,23,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Call Now <span className="text-lg">→</span>
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                
                <a 
                  href="https://wa.me/message/GAP72DHIZYHXA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image (Full Bleed to edge) */}
        <div className="relative hidden lg:block flex-1 group">
          {/* Diagonal Gold Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/50 to-transparent z-20 skew-x-[-12deg] -ml-8" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="h-full w-full relative overflow-hidden"
          >
            {/* Smooth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#020c1b] via-transparent to-transparent z-10 w-48" />
            
            <img 
              src="/building.png" 
              alt="The Stay Adda Building"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Depth Shadow */}
            <div className="absolute inset-0 shadow-[inset_80px_0_100px_-50px_rgba(2,12,27,1)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
