import FAQ from "@/components/FAQ";
import IntroBanner from "@/components/IntroBanner";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Supporters from "@/components/Supporters";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <IntroBanner />
      <Supporters/>
      <Pricing />
      <FAQ />
    </div>
  );
}
