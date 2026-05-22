'use client'

export default function HeroSection() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 pt-8 pb-10 md:pt-14 md:pb-16 overflow-hidden">

      {/* Headline */}
      <div className="mb-8 md:mb-10">
        <h1 className="text-[32px] md:text-[52px] lg:text-[64px] font-extrabold leading-tight">
          <span className="text-[#1D6FD8]">Enjoy Dubai.</span>
          <br />
          <span className="text-gray-900">We'll Handle The Meds!</span>
        </h1>
      </div>

      {/* Cards Row */}
      <div className="flex items-center justify-between gap-3 md:gap-6">

        {/* Pre-Travel Check Card */}
        <div className="flex items-center justify-between gap-3 bg-[#EAF2FB] rounded-xl px-4 py-3 md:px-6 md:py-4 w-[48%] md:w-auto md:min-w-[240px] lg:min-w-[280px] cursor-pointer hover:shadow-md transition-shadow group">
          <div className="flex items-center gap-3">
            {/* Shield icon */}
            <div className="w-11 h-11 md:w-14 md:h-14 flex-shrink-0 relative">
              <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
                {/* Shield body */}
                <path
                  d="M28 4L6 14v14c0 13.5 9.3 26 22 29.5C40.7 54 50 41.5 50 28V14L28 4z"
                  fill="#1D6FD8"
                  opacity="0.15"
                />
                <path
                  d="M28 5L7 14.5V28c0 13 9 25 21 28.5C40 53 49 41 49 28V14.5L28 5z"
                  fill="#1D6FD8"
                />
                {/* Checkmark */}
                <path
                  d="M19 28l6 6 12-12"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[11px] md:text-sm font-semibold text-gray-800 leading-tight">
              Pre-Travel<br className="md:hidden" /> Check
            </span>
          </div>
          {/* Arrow */}
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#1D6FD8] transition-colors">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:stroke-white transition-colors" stroke="#1D6FD8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Vertical divider line in center — subtle dashes */}
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <span className="block w-px h-2 bg-gray-300 rounded" />
          <span className="block w-px h-2 bg-gray-300 rounded" />
          <span className="block w-px h-2 bg-gray-300 rounded" />
          <span className="block w-px h-2 bg-gray-300 rounded" />
        </div>

        {/* Documentation Support Card */}
        <div className="flex items-center justify-between gap-3 bg-[#EAF2FB] rounded-xl px-4 py-3 md:px-6 md:py-4 w-[48%] md:w-auto md:min-w-[240px] lg:min-w-[280px] cursor-pointer hover:shadow-md transition-shadow group">
          <div className="flex items-center gap-3">
            {/* Document stack icon */}
            <div className="w-11 h-11 md:w-14 md:h-14 flex-shrink-0 relative">
              <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
                {/* Back doc */}
                <rect x="16" y="12" width="26" height="32" rx="3" fill="#93C5FD" opacity="0.5" />
                {/* Mid doc */}
                <rect x="13" y="15" width="26" height="32" rx="3" fill="#60A5FA" opacity="0.7" />
                {/* Front doc */}
                <rect x="10" y="18" width="26" height="32" rx="3" fill="#1D6FD8" />
                {/* Lines on front doc */}
                <rect x="15" y="25" width="16" height="2" rx="1" fill="white" opacity="0.8" />
                <rect x="15" y="30" width="12" height="2" rx="1" fill="white" opacity="0.6" />
                <rect x="15" y="35" width="14" height="2" rx="1" fill="white" opacity="0.6" />
              </svg>
            </div>
            <span className="text-[11px] md:text-sm font-semibold text-gray-800 leading-tight">
              Documentation<br className="md:hidden" /> Support
            </span>
          </div>
          {/* Arrow */}
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#1D6FD8] transition-colors">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:stroke-white transition-colors" stroke="#1D6FD8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 5h6M5 2l3 3-3 3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}