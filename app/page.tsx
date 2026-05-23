import BottomSection from "@/components/BottomSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustedCareSection from "@/components/TrustedCareSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
     <main className="w-full bg-white">
        {/* <h1 className="text-5xl font-bold text-center sm:text-left">
          Welcome to{' '}
          <a href="https://ui-verse.com" className="text-blue-600">
            UI-Verse
          </a>
        </h1> */}
        <TestimonialsSection />
        <TrustedCareSection />
        <FaqSection />
        <BottomSection />
      </main>
    </div>
  )
}
