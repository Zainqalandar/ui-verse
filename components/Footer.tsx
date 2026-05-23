"use client";

import {
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

import { LucideProps } from 'lucide-react';

const CustomFacebookIcon = (props: LucideProps) => (
  <svg
    xmlns="http://w3.org"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const CustomInstagramIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-2.83-2.83 4 4 0 0 1 2.83 2.83z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const CustomLinkedinIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-4v9h-4v-18h4v3a6 6 0 0 1 5-3z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const CustomYoutubeIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.95 6.42C1.48 8.13 1.48 12 1.48 12s0 3.87.47 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95c.47-1.71.47-5.58.47-5.58s0-3.87-.47-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D5AB8] rounded-[28px] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-sm font-bold">EC</span>
              </div>

              <h2 className="text-[22px] font-semibold">ExpatCares</h2>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-6 text-[#D6E6FF] max-w-[260px]">
              Moving is complex. Your health shouldn&apos;t be. We provide the
              local expertise to clear your prescriptions in the UAE.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0D5AB8] transition"
              >
                <CustomFacebookIcon size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0D5AB8] transition"
              >
                <CustomYoutubeIcon size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0D5AB8] transition"
              >
                <CustomInstagramIcon size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0D5AB8] transition"
              >
                <CustomLinkedinIcon size={16} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-[14px] text-[#D6E6FF]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <p>23 Main Street, 12345, Pakistan</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <p>alihassanx@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <p>1234567890</p>
              </div>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h3 className="text-[#00D4C7] font-semibold text-[20px] mb-6">
              Main Pages
            </h3>

            <ul className="space-y-4 text-[15px] text-[#D6E6FF]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  About us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Speak to Doctor
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  How it Works
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Check Medications
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-[#00D4C7] font-semibold text-[20px] mb-6">
              Customer Support
            </h3>

            <ul className="space-y-4 text-[15px] text-[#D6E6FF]">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ&apos;s
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-[#00D4C7] font-semibold text-[20px] mb-6">
                Our Services
              </h3>

              <ul className="space-y-4 text-[15px] text-[#D6E6FF]">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pre-Travel Check
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Video Consultation
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Find a Replacement
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Back To Top */}
            <div className="mt-10 lg:mt-0 flex lg:justify-end">
              <button className="bg-white text-[#0D5AB8] px-6 py-3 rounded-full flex items-center gap-3 font-medium hover:scale-105 transition">
                Back To Top
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}