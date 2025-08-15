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
	description: "Health Decisions Made Smarter - For You and the Ones that Follow.",
	generator: "v0.app",
	metadataBase: new URL("https://mhn-01.vercel.app/"), // Replace with your actual domain
	icons: {
		icon: "/logo/default.png",
		apple: "/apple-touch-icon.png",
		shortcut: "/logo/default.png",
	},
	openGraph: {
		title: "My Health Notion",
		description: "Health Decisions Made Smarter - For You and the Ones that Follow.",
		url: "https://mhn-01.vercel.app/", // Replace with your actual domain
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
		description: "Health Decisions Made Smarter - For You and the Ones that Follow.",
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
