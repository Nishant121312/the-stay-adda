"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="py-12 bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-8">
        <h2 className="text-3xl font-bold text-white text-center lg:text-left">
          Ready to Make <span className="text-gold-500">The Stay Adda</span> Your New Home? <br />
          <span className="text-sm font-normal text-gray-400">Limited Seats Available. Book Your Spot Today!</span>
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="tel:+919867928531"
            className="bg-gold-500 hover:bg-gold-600 text-white px-10 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-xl"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a 
            href="https://wa.me/message/GAP72DHIZYHXA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-3 rounded-md font-bold flex items-center gap-2 transition-all"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
