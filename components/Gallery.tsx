"use client";
import { motion } from "framer-motion";

const images = [
  "/building.png",
  "/single bed.png",
  "/double bed.png",
  "/gallery 0.png",
  "/gallery 1.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-navy-900 mb-2">Life at <span className="text-gold-500">The Stay Adda</span></h2>
        <p className="text-gray-500 mb-12">Comfortable spaces, happy faces, a better way of living.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-[400px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ flex: 1.5 }}
              className="h-full rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500"
              style={{ flex: 1 }}
            >
              <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <button className="mt-12 bg-gold-500 hover:bg-gold-600 text-white px-10 py-3 rounded-md font-bold transition-all shadow-lg">
          View Full Gallery
        </button>
      </div>
    </section>
  );
}
