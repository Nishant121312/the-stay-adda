"use client";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Star } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <img src="/ChatGPT Image May 8, 2026, 01_19_11 AM.png" alt="The Stay Adda Logo" className="h-24 w-auto self-start" />
          <p className="text-gray-500 text-sm leading-relaxed">
            The Stay Adda is a premium boys PG offering comfortable rooms with modern amenities, great food and a safe environment.
          </p>
        </div>

        <div>
          <h4 className="text-navy-900 font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
            <li><Link href="#rooms" className="hover:text-gold-500 transition-colors">Rooms</Link></li>
            <li><Link href="#facilities" className="hover:text-gold-500 transition-colors">Facilities</Link></li>
            <li><Link href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-gold-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-navy-900 font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-500 flex-shrink-0" />
              <span>Indirapuram, Ghaziabad, Uttar Pradesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-500 flex-shrink-0" />
              <span>+91 98679 28531</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-500 flex-shrink-0" />
              <span>hello@thestayadda.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-gold-500 flex-shrink-0" />
              <span>Mon - Sun : 24x7 Open</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-navy-900 font-bold mb-6">Follow Us</h4>
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-navy-900 hover:bg-gold-500 hover:text-white transition-all"><Youtube size={18} /></a>
          </div>

          <h4 className="text-navy-900 font-bold mb-4">Google Reviews</h4>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-navy-900">4.8</span>
            <div className="flex text-gold-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>
          <span className="text-[10px] text-gray-400">Based on 120+ Reviews</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© 2026 The Stay Adda. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-gold-500">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold-500">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
