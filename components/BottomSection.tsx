// app/page.tsx

import Image from "next/image";
import { Search } from "lucide-react";

const categories = [
  {
    title: "The Basic",
    image:
      "/images/the-basic-image.png",
  },
  {
    title: "My Account",
    image:
      "/images/my-account.png",
  },
  {
    title: "Medical Care",
    image:
      "/images/medical-care.png",
  },
  {
    title: "Privacy security",
    image:
      "/images/privacy-security.png",
  },
];

export default function BottomSection() {
  return (
   <>
      <section className="w-full px-5 pb-12 pt-10 sm:px-8 md:px-14 lg:px-20 xl:px-24">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[48px] font-bold leading-none tracking-[-2px] text-[#101B6D] sm:text-[64px] lg:text-[78px]">
            Help Center
          </h1>

          <p className="mt-4 text-sm font-normal text-[#7B7B7B] sm:text-base">
            Everything you need to know, all in one place.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-12 flex w-full max-w-[980px] items-center border-b border-[#BDBDBD] pb-3">
          <input
            type="text"
            placeholder="How can we help you"
            className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-[#BDBDBD]"
          />

          <button>
            <Search
              size={21}
              strokeWidth={2}
              className="text-black"
            />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => (
            <div key={index} className="w-full">
              {/* Image */}
              <div className="relative h-[250px] w-full overflow-hidden rounded-[18px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-center text-[22px] font-semibold text-black">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
   </>
  );
}