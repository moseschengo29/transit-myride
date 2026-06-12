import BentoFeatures from "../components/BentoFeatures";
import Footer from "../components/Footer";
import GlossySection from "../components/GlossySection";
import HomeHero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import PhoneShowcase from "../components/PhoneShowCase";
import PricingAndFAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ConnectedEcosystem from "../components/ConnectedEcosystem";
import MoreFeatures from "../components/MoreFeatures";
import ValueProposition from "../components/ValueProposition";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#F7F7F7]">
      {/* 1. Global Top Blur Mask */}
      <div className="fixed top-0 left-0 w-full h-40 z-40 pointer-events-none backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]" />
      
      {/* 2. The Navigation */}
      <Navbar />

      {/* 3. The Wrapped Sections */}
      <GlossySection className="min-h-screen pt-2">
        <HomeHero />
      </GlossySection>

        {/* <BentoFeatures /> */}
        <MoreFeatures />
        <ValueProposition />
        <HowItWorks/>
        <PhoneShowcase />
        <Testimonials />
        {/* <ConnectedEcosystem /> */}

        <FAQ />


      

      <Footer />
    </main>
  );
}