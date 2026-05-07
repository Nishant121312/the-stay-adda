"use client";
import { CheckCircle2, MapPin, Send } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-navy-900 leading-tight">
            Why Choose <span className="text-gold-500">The Stay Adda?</span>
          </h2>
          <p className="text-gray-600">
            We provide a safe, friendly and homely environment with all modern amenities to make your stay comfortable and stress-free.
          </p>
          <ul className="space-y-4">
            {[
              "Prime Location & Well Connected",
              "Clean & Spacious Rooms",
              "Nutritious & Hygienic Meals",
              "Affordable Prices",
              "Friendly & Supportive Management"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-navy-800 font-medium">
                <CheckCircle2 size={18} className="text-gold-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">Quick Inquiry</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500" />
              <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500">
                <option>Select Room Type</option>
                <option>Single Sharing</option>
                <option>Double Sharing</option>
              </select>
              <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-gray-400" />
            </div>
            <button className="w-full bg-navy-900 hover:bg-navy-800 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
              <Send size={18} />
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
            <MapPin size={32} className="text-gold-500" />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-2">Prime Location</h3>
          <p className="text-gray-900 font-semibold">Indirapuram, Ghaziabad</p>
          <p className="text-gray-500 text-sm mt-2 mb-6">
            Near Metro Station, Market, Colleges & Offices
          </p>
          <button className="bg-gold-500/10 hover:bg-gold-500 hover:text-white text-gold-500 border border-gold-500 px-8 py-2.5 rounded-lg font-bold transition-all">
            View on Map
          </button>
        </div>
      </div>
    </section>
  );
}
