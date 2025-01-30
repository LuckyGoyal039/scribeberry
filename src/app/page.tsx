import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosection";
import IntroBanner from "@/components/IntroBanner";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Supporters from "@/components/Supporters";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <IntroBanner />
      <Supporters />
      <Pricing />
      <FAQ />
      <HeroSection />
      <Footer />
    </div>
  );
}
