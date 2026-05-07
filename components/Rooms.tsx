"use client";
import { Bed, User, Layout, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "Single Sharing",
    price: "₹12,000",
    image: "/single bed.png",
    beds: 1,
    person: 1,
    amenity: "Attached Almirah"
  },
  {
    title: "Double Sharing",
    price: "₹9,000",
    image: "/double bed.png",
    beds: 2,
    person: 2,
    amenity: "Study Table"
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-2">Our Rooms</h2>
          <p className="text-gray-500">Choose a room that suits your comfort and budget.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {rooms.map((room, index) => (
              <motion.div 
                key={room.title}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-navy-900">{room.title}</h3>
                    <div className="text-right">
                      <span className="text-gold-500 text-2xl font-bold">{room.price}</span>
                      <span className="text-gray-400 text-xs block">/month</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6 text-gray-500 text-xs">
                    <div className="flex items-center gap-1">
                      <Bed size={14} className="text-gold-500" />
                      <span>{room.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-gold-500" />
                      <span>{room.person} Person</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Layout size={14} className="text-gold-500" />
                      <span>{room.amenity}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gold-500/10 hover:bg-gold-500 text-gold-500 hover:text-white py-3 rounded-lg font-bold transition-all border border-gold-500">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
