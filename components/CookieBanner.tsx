"use client";

import React, { useEffect, useState } from "react";
import { CookieIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";

const CookieBanner = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (!consent) {
			setVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "accepted");
		setVisible(false);
	};

	const handleClose = () => {
		localStorage.setItem("cookieConsent", "closed");
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm rounded-lg bg-white shadow-xl border-2 border-gray-300 p-4">
			<div className="flex items-start gap-3">
				<CookieIcon size={28} weight="fill" className="text-[#0b9344] mt-1" />
				<div className="flex-1 text-sm text-gray-700">
					<p>
						We use cookies to enhance your experience. By continuing to browse, you agree to our use
						of cookies.
					</p>
					<div className="mt-3 flex items-center justify-end gap-4 ">
						<button
							onClick={handleAccept}
							className="cta px-4 py-2 rounded-md bg-slate-950 text-white text-sm font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer">
							Accept
						</button>
						<Link href="/privacy-policy" className="text-sm">
							Privacy Policy
						</Link>
					</div>
				</div>
				<button
					onClick={handleClose}
					aria-label="Close cookie banner"
					className="text-gray-800 cursor-pointer transition">
					<XIcon size={20} />
				</button>
			</div>
		</div>
	);
};

export default CookieBanner;
