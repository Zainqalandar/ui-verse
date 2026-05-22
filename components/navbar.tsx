'use client'

import { useState } from 'react'
import { useAuthModal } from '@/context/AuthModalContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { openSignup, openSignin } = useAuthModal()

  return (
    <>
      <nav className="w-full bg-white px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between border-b border-gray-100 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-9 h-9 flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M18 3L5 8.5V18c0 8.8 5.6 16.7 13 18.9C25.4 34.7 31 26.8 31 18V8.5L18 3z"
                fill="#1D6FD8"
              />
              <rect x="16.5" y="11" width="3" height="14" rx="1.5" fill="white" />
              <rect x="11" y="16.5" width="14" height="3" rx="1.5" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[#1D6FD8] font-bold text-base tracking-tight leading-none">
              Expat Cares
            </span>
            <span className="text-gray-400 text-[8px] tracking-widest uppercase leading-tight mt-0.5">
              Safe Travels, Safe Health
            </span>
          </div>
        </div>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-[#1D6FD8] transition-colors">Home</a>
          <a href="#" className="hover:text-[#1D6FD8] transition-colors">Services</a>
          <a href="#" className="hover:text-[#1D6FD8] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#1D6FD8] transition-colors">Contact</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Log In button */}
          <button
            onClick={openSignin}
            className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#1D6FD8] hover:text-[#1D6FD8] transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Log In
          </button>

          {/* Sign Up — desktop only */}
          <button
            onClick={openSignup}
            className="hidden md:block bg-[#1D6FD8] hover:bg-[#1559b8] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Sign Up
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-gray-600 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-gray-600 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-gray-600 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-5 py-2 gap-0">
          {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-700 font-medium py-3 border-b border-gray-50 last:border-0 hover:text-[#1D6FD8] transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={openSignin}
            className="mt-3 mb-2 w-full border border-gray-200 text-[#1D6FD8] text-sm font-semibold py-2.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={openSignup}
            className="w-full bg-[#1D6FD8] text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#1559b8] transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}