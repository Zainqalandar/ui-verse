"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="w-full px-3 md:px-6 py-6 bg-white">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-[#d7e4ea] to-[#f4e38f] relative px-4 md:px-10 pt-6 md:pt-8 pb-6">
        
        {/* Top Curve Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-[180px]"
            viewBox="0 0 1200 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Blue Curve */}
            <path
              d="M0 20C180 10 220 120 420 120C650 120 700 40 950 40C1080 40 1140 80 1200 60"
              stroke="#1E2D8F"
              strokeWidth="2"
            />

            {/* Yellow Dotted Curve */}
            <path
              d="M0 180C180 120 300 80 500 80C700 80 820 20 1200 20"
              stroke="#F6D768"
              strokeWidth="2"
              strokeDasharray="6 8"
            />

            {/* Dots */}
            {[0, 120, 240, 420, 760, 980, 1080].map((x, i) => (
              <circle
                key={i}
                cx={x}
                cy={i % 2 === 0 ? 20 : 120}
                r="4"
                fill="#1E2D8F"
              />
            ))}
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-extrabold text-[#1b1b1b] relative z-10">
          How it Works
        </h2>

        {/* Doctor Image */}
        <div className="relative z-10 flex justify-center mt-6 md:mt-8">
          <div className="relative w-[220px] h-[260px] md:w-[320px] md:h-[380px]">
            <Image
              src="/images/work-girl-img.png"
              alt="Doctor"
              fill
              className="object-contain"
              priority
            />

            {/* Floating Buttons */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
              <button className="bg-[#0056d6] text-white text-xs md:text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                Speak To Doctor
              </button>

              <button className="bg-white text-gray-700 text-xs md:text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                Check Medication
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto mt-2 rounded-[24px] overflow-hidden">
          
          {/* Card 1 */}
          <div className="bg-[#f6f0df] p-6 md:p-8 min-h-[360px] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#e8dcc4]">
            <div>
              <h3 className="text-2xl font-bold text-[#111] leading-tight">
                Upload or ask about
              </h3>
              <p className="text-2xl text-gray-500 leading-tight">
                your medication
              </p>
            </div>

            <div className="flex justify-center my-6">
              <div className="relative w-[220px] h-[160px]">
                <Image
                  src="/images/work-mdedicine-img.png"
                  alt="Medicine"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#0056d6] text-white text-xs md:text-sm px-5 py-2 rounded-full shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f6f0df] p-6 md:p-8 min-h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#111] leading-tight">
                Reviewed by licensed
              </h3>
              <p className="text-2xl text-gray-500 leading-tight">
                pharmacists
              </p>
            </div>

            <div className="flex justify-center my-6">
              <div className="relative w-[200px] h-[220px]">
                <Image
                  src="/images/work-man-img.png"
                  alt="Pharmacist"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#0056d6] text-white text-xs md:text-sm px-5 py-2 rounded-full shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="relative z-10 text-center text-[11px] md:text-xs text-[#666] mt-5 leading-relaxed">
          We make medication changes simple, secure, and clinically reviewed —
          <br className="hidden md:block" />
          wherever you are in the world.
        </p>
      </div>
    </section>
  );
}