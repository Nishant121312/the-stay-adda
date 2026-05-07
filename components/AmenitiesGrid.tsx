"use client";
import { Wifi, ShieldCheck, Utensils, Droplets, Shirt, Home, Zap, HeartPulse } from "lucide-react";

const amenities = [
  { icon: <Wifi />, label: "High Speed Wi-Fi" },
  { icon: <ShieldCheck />, label: "24x7 CCTV Security" },
  { icon: <Utensils />, label: "Hygienic Food" },
  { icon: <Droplets />, label: "RO Water" },
  { icon: <Shirt />, label: "Laundry Service" },
  { icon: <Home />, label: "Housekeeping" },
  { icon: <Zap />, label: "Power Backup" },
  { icon: <HeartPulse />, label: "Regular Sanitization" },
];

export default function AmenitiesGrid() {
  return (
    <section id="facilities" className="py-16 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-12 border-b-2 border-gold-500 w-fit mx-auto pb-2">Our Amenities</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-xs font-semibold tracking-wide text-gray-300 group-hover:text-gold-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
