// app/components/FaqSection.tsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "What is expat care and how does it work?",
    answer:
      "Expat care is a service designed for individuals living abroad who want to ensure their loved ones receive reliable professional care in their home country. It provides peace of mind by connecting families with trusted caregivers, healthcare support, and regular monitoring services.",
  },
  {
    question: "Is expat care available in multiple locations?",
    answer:
      "Yes, expat care services are available in multiple cities and regions depending on the provider.",
  },
  {
    question: "How do you ensure patient safety and quality care?",
    answer:
      "We work with trained professionals, regular quality checks, and verified healthcare support systems.",
  },
  {
    question: "Who can benefit from expat care services?",
    answer:
      "Families living abroad who want care support for parents, relatives, or loved ones.",
  },
  {
    question: "Is 24/7 care support available?",
    answer:
      "Yes, depending on the selected plan and care requirements.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#ececec] py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative overflow-hidden rounded-[32px] min-h-[650px] lg:min-h-[520px]">
          
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop"
            alt="city"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f4aa1]/70 to-[#0aa5d8]/40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10 p-6 md:p-10 lg:p-14">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center text-white max-w-[420px] pt-6 lg:pt-16">
              <span className="uppercase text-[11px] tracking-[2px] mb-5 opacity-90">
                FAQs
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Got Questions?
                <br />
                We’ve Got
                <br />
                Answers
              </h2>

              <p className="mt-8 text-sm md:text-base leading-7 text-white/90 max-w-[350px]">
                Discover detailed insights and answers designed to guide you
                through every aspect of your experience with ease and clarity.
              </p>
            </div>

            {/* Right FAQ Box */}
            <div className="w-full lg:max-w-[580px] bg-gradient-to-b from-[#0ab0b8] to-[#0056c9] rounded-[30px] p-6 md:p-8 shadow-2xl backdrop-blur-md">
              
              <h3 className="text-white text-2xl md:text-4xl font-bold mb-8">
                Do you have questions?
              </h3>

              <div className="space-y-2">
                {faqData.map((faq, index) => {
                  const isOpen = active === index;

                  return (
                    <div
                      key={index}
                      className="border-b border-white/20 pb-4"
                    >
                      <button
                        onClick={() => setActive(isOpen ? -1 : index)}
                        className="w-full flex items-center justify-between text-left gap-4"
                      >
                        <span className="text-white text-sm md:text-base font-medium">
                          {faq.question}
                        </span>

                        <ChevronDown
                          className={`text-white transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          size={18}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-white/80 text-sm leading-7 pr-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}