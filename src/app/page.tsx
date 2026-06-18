import Footer from "../components/Footer";
import GlossySection from "../components/GlossySection";
import HomeHero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import PhoneShowcase from "../components/PhoneShowCase";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import MoreFeatures from "../components/MoreFeatures";
import ValueProposition from "../components/ValueProposition";
import FeatureStack from "../components/FeaturesStack";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#F7F7F7]">
      {/* 1. Global Top Blur Mask */}
      <div className="fixed top-0 left-0 w-full h-20 z-40 pointer-events-none backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]" />
      
      {/* 2. The Navigation */}
      <Navbar />

      {/* 3. The Wrapped Sections */}
      <GlossySection className="min-h-screen pt-2">
        <HomeHero />
      </GlossySection>

        <MoreFeatures />
        <ValueProposition />
        <FeatureStack />
        <HowItWorks/>
        
        <PhoneShowcase />
        
        <Testimonials />

        <FAQ />


      

      <Footer />
    </main>
  );
}