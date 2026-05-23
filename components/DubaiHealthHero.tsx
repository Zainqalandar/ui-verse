"use client";

import Image from "next/image";

export default function DubaiHealthHero() {
  return (
    <section className="w-full bg-[#f4f4f4] py-10 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Top Small Text */}
        <p className="text-sm font-semibold text-gray-700 mb-2">
          About Expat Cares
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-10">
          Dubai Health. Decoded.
        </h1>

        {/* Main Image Section */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Left Stats */}
          <div className="hidden md:flex flex-col gap-3 absolute left-[-70px] top-10 z-20">
            <div className="bg-[#d9f7f4] rounded-md px-4 py-2 shadow-sm flex items-center gap-3">
              <span className="text-xs font-semibold text-black">30+</span>
              <span className="text-xs text-[#1565c0] font-medium">
                Nationalities served
              </span>
            </div>

            <div className="bg-[#d9f7f4] rounded-md px-4 py-2 shadow-sm flex items-center gap-3">
              <span className="text-xs font-semibold text-black">24 hrs</span>
              <span className="text-xs text-[#1565c0] font-medium">
                Average guidance
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div className="absolute right-[-40px] md:right-[-60px] top-20 md:top-28 z-20">
            <div className="bg-[#d9f7f4] rounded-2xl px-5 py-5 shadow-md w-[120px] md:w-[140px]">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow mb-3">
                  {/* <span className="text-2xl">👤</span> */}
                    <Image
                        src="/icons/person-mini-icons.png"
                        alt="Client Icon"
                        width={24}
                        height={24}
                    />
                </div>

                <p className="font-bold text-black text-lg">12+</p>
                <p className="text-sm font-semibold text-black">Clients</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-[35px] overflow-hidden h-[280px] sm:h-[400px] md:h-[560px]">
            <Image
              src="/images/about-img.png"
              alt="Doctor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-8 md:mt-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0056b8] leading-tight">
            Your Health, Verified.
          </h2>

          <p className="mt-5 text-sm md:text-base text-black font-medium leading-relaxed">
            We provide the{" "}
            <span className="text-[#0056b8] font-bold">
              DHA-licensed expertise
            </span>{" "}
            you need
            <br className="hidden md:block" />
            to land safely.
          </p>

          {/* Button */}
          <button className="mt-8 bg-[#0056b8] hover:bg-[#00479a] transition-all duration-300 text-white font-semibold px-10 py-3 rounded-full shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}