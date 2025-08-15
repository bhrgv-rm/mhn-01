import type React from "react";
import type { Metadata } from "next";
import { Mona_Sans, Phudu } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/Lenis";

const phudu = Phudu({
	variable: "--font-phudu",
	subsets: ["latin"],
});

const monaSans = Mona_Sans({
	variable: "--font-mona-sans",
	subsets: ["latin"],
	weight: ["200", "400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "My Health Notion",
	description: "AI health assistant with doctor connect & secure records.",
	keywords: [
		"AI health assistant",
		" health management app",
		"medical records app",
		"healthcare platform",
		"indian healthcare",
		" personal health tracker",
		"doctor connect",
		"secure health records",
		"healthcare app",
		"health assistant",
		"medical assistant",
		"health management system",
		"digital health records",
		"healthcare technology",
		"patient management app",
		"healthcare innovation",
		"AI-powered personal health assistant for families in India",
		"secure medical record storage app with doctor consultations",
		"all-in-one health tracker & emergency SOS app",
		"preventive health and lifestyle tracking app",
		"voice-enabled AI health assistant India",
	],
	metadataBase: new URL("https://mhn-01.vercel.app/"),
	icons: {
		icon: "/logo/default.png",
		apple: "/apple-touch-icon.png",
		shortcut: "/logo/default.png",
	},
	openGraph: {
		title: "My Health Notion",
		description: "AI health assistant with doctor connect & secure records.",
		url: "https://mhn-01.vercel.app/",
		siteName: "My Health Notion",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "My Health Notion",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "My Health Notion",
		description: "AI health assistant with doctor connect & secure records.",
		images: ["/twitter-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${phudu.className} ${monaSans.className} antialiased`}>
				<SmoothScrollWrapper>{children}</SmoothScrollWrapper>
			</body>
		</html>
	);
}
