"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/ChatGPT Image May 8, 2026, 01_19_11 AM.png" alt="The Stay Adda Logo" className="h-20 md:h-28 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-navy-800 hover:text-gold-500 transition-colors">
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/message/GAP72DHIZYHXA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all"
          >
            Book Now
          </a>
        </div>

        <button className="lg:hidden text-navy-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-navy-800 border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/message/GAP72DHIZYHXA1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-white py-3 rounded-md font-bold mt-2 text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
