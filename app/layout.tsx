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
  description:
    "Health Decisions Made Smarter - For You and the Ones that Follow.",
  icons: {
    icon: "/logo/default.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/logo/default.png",
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
