'use client';

import { useState } from 'react';
import { useAuthModal } from '@/context/AuthModalContext';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { openSignup, openSignin } = useAuthModal();

	return (
		<>
			<nav className="w-full bg-white px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between border-b border-gray-100 shadow-sm">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<img src="/images/expat-cares-logo.png" alt="Logo" className="h-8" />
				</div>

                

				{/* Desktop nav links — hidden on mobile */}
				<div className="hidden md:flex items-center gap-7 text-sm text-gray-600 font-medium">
					<a
						href="#"
						className="hover:text-[#1D6FD8] transition-colors"
					>
						Home
					</a>
					<a
						href="#"
						className="hover:text-[#1D6FD8] transition-colors"
					>
						Services
					</a>
					<a
						href="#"
						className="hover:text-[#1D6FD8] transition-colors"
					>
						About Us
					</a>
					<a
						href="#"
						className="hover:text-[#1D6FD8] transition-colors"
					>
						Contact
					</a>
				</div>

				{/* Right side */}
				<div className="flex items-center gap-2">
					{/* Log In button */}
					<button
						onClick={openSignin}
						className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-600 hover:border-[#1D6FD8] hover:text-[#1D6FD8] transition-colors"
					>
						
                        <img src="/icons/person-icon.png" alt="Login Icon" className="w-3.5 h-3.5" />
						Log IN
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
						<img
                            src="/images/menu-icon.png"
                            alt="Menu"
                            className={`w-5 h-5 transition-transform ${menuOpen ? 'rotate-90' : 'rotate-0'}`}
                        />
                        <span className="sr-only">Toggle menu</span>
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
						Log IN
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
	);
}
