'use client';

import { useState } from 'react';
import { useAuthModal } from '@/context/AuthModalContext';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { openSignup, openSignin } = useAuthModal();

	return (
		<>
			<nav className="w-full bg-white px-4 md:px-8 lg:px-16 py-4 border-b border-gray-100 shadow-sm">
				<div className="max-w-[1400px] mx-auto flex items-center justify-between">
					
					{/* Logo */}
					<div className="flex items-center">
						<img
							src="/images/expat-cares-logo.png"
							alt="Logo"
							className="h-9 w-auto"
						/>
					</div>

					{/* Right Side */}
					<div className="flex items-center gap-3">
						
						{/* Login */}
						<button
							onClick={openSignin}
							className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#1D6FD8] hover:text-[#1D6FD8] transition"
						>
							<img
								src="/icons/person-icon.png"
								alt="Login Icon"
								className="w-4 h-4"
							/>

							Log In
						</button>

						{/* Signup */}
						<button
							onClick={openSignup}
							className="bg-[#1D6FD8] hover:bg-[#1559b8] text-white text-sm font-semibold px-5 py-2 rounded-full transition"
						>
							Sign Up
						</button>

						{/* Menu Icon — ALL DEVICES */}
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="flex items-center justify-center w-10 h-10"
						>
							<img
								src="/images/menu-icon.png"
								alt="Menu"
								className={`w-5 h-5 transition-transform duration-300 ${
									menuOpen ? 'rotate-90' : 'rotate-0'
								}`}
							/>
						</button>
					</div>
				</div>
			</nav>

			{/* Dropdown Menu — ALL DEVICES */}
			<div
				className={`w-full bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
					menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-16 py-3 flex flex-col">
					
					{['Home', 'Services', 'About Us', 'Contact'].map((item) => (
						<a
							key={item}
							href="#"
							className="text-sm md:text-base text-gray-700 font-medium py-4 border-b border-gray-100 hover:text-[#1D6FD8] transition"
						>
							{item}
						</a>
					))}
				</div>
			</div>
		</>
	);
}