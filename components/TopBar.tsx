"use client";
import { MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy-900 text-white/80 py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs border-b border-white/10">
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <div className="flex items-center gap-1">
          <MapPin size={14} className="text-gold-500" />
          <span>Indirapuram, Ghaziabad, Uttar Pradesh</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span>FOLLOW US:</span>
          <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-gold-500 transition-colors"><Youtube size={14} /></a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>Have any questions?</span>
          <div className="flex items-center gap-1 font-semibold text-white">
            <Phone size={14} className="text-gold-500" />
            <span>+91 98679 28531</span>
          </div>
        </div>
      </div>
    </div>
  );
}
