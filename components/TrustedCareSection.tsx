// app/components/TrustedCareSection.tsx

import Image from "next/image";

export default function TrustedCareSection() {
  return (
    <section className="w-full bg-[#ececec] py-10 px-4">
      <div className="max-w-6xl mx-auto rounded-[20px] overflow-hidden bg-gradient-to-b from-[#84b9ee] to-[#b7eef0] p-5 md:p-8">
        
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Trusted care, wherever
            <br />
            you’re from
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Top Large Card */}
          <div className="md:col-span-2 bg-[#6ea5ea] rounded-[22px] p-6 md:p-10 min-h-[280px] relative overflow-hidden">
            <div className="h-full flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Left Text */}
              <div className="max-w-[220px]">
                <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  International
                  <br />
                  standards
                </h3>
              </div>

              {/* Center Image */}
              <div className="relative w-[220px] h-[160px] md:w-[280px] md:h-[200px]">
                <Image
                  src="/icons/world-icon.png"
                  alt="International Standards"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>

              {/* Right Text */}
              <div className="max-w-[220px]">
                <p className="text-white/90 text-sm md:text-base leading-6">
                  Our guidelines follow globally recognized pharmaceutical and
                  patient-safety standards, adapted to UAE regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="bg-[#6ea5ea] rounded-[22px] p-6 md:p-8 min-h-[320px] flex flex-col items-center justify-between text-center">
            
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                Licensed
                <br />
                pharmacists
              </h3>
            </div>

            <div className="relative w-[160px] h-[160px]">
              <Image
                src="/icons/doctor-icon.png"
                alt="Licensed Pharmacists"
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <p className="text-white/90 text-sm leading-6 max-w-[250px]">
              All advice is provided by pharmacists licensed by the Dubai Health
              Authority.
            </p>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-[#6ea5ea] rounded-[22px] p-6 md:p-8 min-h-[320px] flex flex-col items-center justify-between text-center">
            
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                Multilingual
                <br />
                support
              </h3>
            </div>

            <div className="relative w-[160px] h-[160px]">
              <Image
                src="/icons/translation-icon.png"
                alt="Multilingual Support"
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <p className="text-white/90 text-sm leading-6 max-w-[250px]">
              Clear guidance in the language you’re most comfortable with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}