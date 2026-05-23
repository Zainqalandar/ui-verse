// app/components/TestimonialsSection.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
	{
		name: 'Linda A.',
		role: 'Patient',
		image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
		text: `“Smooth and Stress-Free.”
I was worried when I couldn’t find my regular medication in Dubai. Expat Care reviewed my prescription, explained the equivalent UAE-approved option, and arranged everything quickly. The video call with the pharmacist gave me real confidence.

It was simple, professional, and reassuring — exactly what you need when you’re living abroad.`,
	},
	{
		name: 'John Thompson',
		role: 'CEO - Stellar Enterprises',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
		text: `Expat Pro’s strategic care system has been amazing for our employees and workforce support. Their insights and personalized assistance improved our overall workflow efficiency.`,
	},
	{
		name: 'Zenniah Pro',
		role: 'Workforce Specialist',
		image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
		text: `Their multilingual support and healthcare coordination services are outstanding. Everything feels seamless and easy to manage remotely.`,
	},
];

export default function TestimonialsSection() {
	const [active, setActive] = useState(0);

	const nextSlide = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	return (
		<section className="relative overflow-hidden bg-[#efefef] py-16 md:py-24">
			{/* Background Shape */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-full h-[280px] bg-[#38c2b2] rounded-b-[120px]" />

				<div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#d7e88f] to-transparent rounded-t-[120px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4">
				{/* Heading */}
				<div className="text-center mb-12">
					<h2 className="text-[52px] md:text-[88px] font-black leading-none text-black">
						Testimonials
					</h2>
				</div>

				{/* Slider Wrapper */}
				<div className="relative flex items-center justify-center">
					{/* Left Preview Card */}
					<div className="hidden xl:flex absolute left-[-120px] top-1/2 -translate-y-1/2 w-[240px] h-[340px] bg-[#d7efe8] rounded-[22px] overflow-hidden opacity-80">
						<Image
							src={
								testimonials[(active + 2) % testimonials.length]
									.image
							}
							alt="preview"
							fill
							className="object-cover"
						/>
					</div>

					{/* Left Arrow */}
					<button
						onClick={prevSlide}
						className="absolute left-0 md:left-[40px] z-20 w-11 h-11 rounded-full bg-[#667675]/70 hover:bg-[#667675] transition flex items-center justify-center text-white"
					>
						<ChevronLeft size={22} />
					</button>

					{/* Main Card */}
					<div className="w-full max-w-5xl bg-[#f3f3f3] rounded-[30px] overflow-hidden shadow-2xl">
						<div className="grid grid-cols-1 md:grid-cols-2 min-h-[620px] md:min-h-[500px]">
							{/* Text Content */}
							<div className="p-8 md:p-12 flex flex-col justify-center">
								<Quote
									size={38}
									className="text-[#2467c8] fill-[#2467c8] mb-4"
								/>

								<div className="space-y-5">
									<p className="text-[#222] text-[15px] md:text-[17px] leading-8 whitespace-pre-line">
										{testimonials[active].text}
									</p>
								</div>

								{/* User */}
								<div className="mt-8">
									<div className="flex items-center gap-2 text-[#2467c8] font-bold">
										<Quote
											size={18}
											className="fill-[#2467c8]"
										/>
										{testimonials[active].name}
									</div>

									<p className="text-sm text-[#555] mt-1">
										{testimonials[active].role}
									</p>
								</div>
							</div>

							{/* Image */}
							<div className="relative min-h-[320px] md:min-h-full">
								<Image
									src={testimonials[active].image}
									alt={testimonials[active].name}
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Right Arrow */}
					<button
						onClick={nextSlide}
						className="absolute right-0 md:right-[40px] z-20 w-11 h-11 rounded-full bg-[#667675]/70 hover:bg-[#667675] transition flex items-center justify-center text-white"
					>
						<ChevronRight size={22} />
					</button>

					{/* Right Preview Card */}
					<div className="hidden xl:flex absolute right-[-120px] top-1/2 -translate-y-1/2 w-[240px] h-[340px] bg-[#d7efe8] rounded-[22px] overflow-hidden opacity-80">
						<div className="p-8 text-sm text-[#555] flex flex-col justify-center">
							<Quote
								size={28}
								className="text-[#2467c8] fill-[#2467c8] mb-5"
							/>

							<p className="line-clamp-6 leading-7">
								{
									testimonials[
										(active + 1) % testimonials.length
									].text
								}
							</p>
						</div>
					</div>
				</div>

				{/* Dots */}
				<div className="flex items-center justify-center gap-2 mt-8">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setActive(index)}
							className={`transition-all duration-300 rounded-full ${
								active === index
									? 'w-8 h-2 bg-[#b3d4ee]'
									: 'w-2 h-2 bg-[#c8c8c8]'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
