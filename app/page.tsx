import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Rooms from "@/components/Rooms";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import Gallery from "@/components/Gallery";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <InfoSection />
      <Rooms />
      <AmenitiesGrid />
      <Gallery />
      <FooterCTA />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
