"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CircleNotchIcon, CheckIcon, ArrowRightIcon, InfoIcon } from "@phosphor-icons/react";
export default function App() {
	const [email, setEmail] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [showToast, setShowToast] = useState<boolean>(false);
	const inputRef = useRef<HTMLFormElement>(null);

	const handleScroll = () => {
		if (inputRef.current) {
			const offset = 100;
			const top = inputRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleEmailSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		setLoading(true);

		const formData = new URLSearchParams();
		formData.append("pre-register-mail", email);

		try {
			const response = await fetch(
				"https://script.google.com/macros/s/AKfycbwijVCBFyznYQovai7TIf64J85RJyj5z9Y5L-qaQZQBxBpD3x8dPEV2B6q1QIrS4Juv/exec",
				{
					method: "POST",
					body: formData.toString(),
					headers: {
						"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
					},
				}
			);

			if (response.ok) {
				console.log("Success!");
				setSuccess(true);
				setShowToast(true);

				setTimeout(() => {
					setEmail("");
					setShowToast(false);
					setSuccess(false);
				}, 3000);
			} else {
				console.error("Submission failed");
			}
		} catch (err) {
			console.error("Error:", err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
				<div className="text-center mb-8 flex items-center flex-col">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight leading-tighter">
						We're Almost There
					</h1>
					<p className="text-sm text-gray-600">
						Pre-register to get early access and be the first to experience a mark in health
						history.{" "}
					</p>

					<button
						className="cta mt-8 px-4 py-2 rounded-md bg-slate-950 text-white text-lg font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
						onClick={handleScroll}>
						Pre-Register Now
					</button>

					{/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
             <a href="">
							<img
								src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
								alt=""
								className="h-12"
							/>
						</a>
						<a href="">
							<img src="/playstore.png" height="100px" alt="" className="h-12" />
						</a> 
					</div> */}
				</div>

				{/* Phone Mockups */}
				<div className="flex justify-center items-end ">
					<img
						src="/app/connect.png"
						alt="Family Connect"
						className="scale-75 lg:block hidden w-fit -mr-[15%]"
					/>
					<img src="/app/wallet.png" alt="Health Wallet" className="w-fit z-10" />
					<img
						src="/app/emo.png"
						alt="Emergency SOS"
						className="scale-75 lg:block hidden w-fit -ml-[15%]"
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 my-16">
					<label htmlFor="pre-register-mail" className="text-6xl tracking-tighter font-bold">
						Be the First to Experience Our App
					</label>
					<form
						ref={inputRef}
						onSubmit={handleEmailSubmit}
						className="relative w-full max-w-xs mb-6">
						<input
							autoComplete="off"
							id="pre-register-mail"
							name="pre-register-mail"
							type="email"
							placeholder="Enter your email"
							className="border-2 border-gray-500 rounded px-4 py-2 w-full pr-10 text-sm"
							value={email}
							onChange={handleEmailChange}
							required
						/>
						<button
							type="submit"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
							aria-label="Submit email"
							disabled={loading}>
							{loading ? (
								<CircleNotchIcon size={20} weight="bold" className="animate-spin" />
							) : success ? (
								<CheckIcon size={20} weight="bold" />
							) : (
								<ArrowRightIcon size={20} weight="bold" />
							)}
						</button>
					</form>
				</div>
			</main>
			<Footer />
			{showToast && (
				<div
					className="toast fixed z-50 bottom-4 right-4 bg-green-400/80 font-semibold rounded-md flex items-center gap-3 px-4 py-3 shadow-lg transition-all duration-500 animate-slide-in"
					role="status"
					aria-live="polite">
					<InfoIcon size={20} />
					You are added to the Pre-Registration list.
				</div>
			)}
		</div>
	);
}
