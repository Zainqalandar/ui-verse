import BottomSection from "@/components/BottomSection";
import DubaiHealthHero from "@/components/DubaiHealthHero";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedCareSection from "@/components/TrustedCareSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
     <main className="w-full bg-white">
        <DubaiHealthHero />
        <TestimonialsSection />
        <HowItWorks />
        <TrustedCareSection />
        <FaqSection />
        <BottomSection />
      </main>
    </div>
  )
}
