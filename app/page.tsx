import MouseGlow from "@/components/effects/MouseGlow";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import PremiumSection from "@/components/sections/PremiumSection";
import BentoGrid from "@/components/sections/BentoGrid";
import PremiumCursor from "@/components/effects/PremiumCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SmoothScroll from "@/components/effects/SmoothScroll";
import StorySection from "@/components/sections/StorySection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <SmoothScroll />
      
      <PremiumCursor />

      <ScrollProgress />

      <MouseGlow />

      <Navbar />

      <Hero />

      <About />

      <PracticeAreas />

      <Benefits />

      <PremiumSection />

      <StorySection />

      <BentoGrid />

      <Testimonials />

      <FAQ />

      <FinalCTA />

      <Footer />

    </main>
  );
}