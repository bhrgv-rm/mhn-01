"use client";
import Pulse from "./Pulse";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section className="hero relative flex flex-col items-center h-[100dvh] justify-center text-center gap-2 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <h5 className="tara-badge flex items-center md:gap-4 gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800">
          <Pulse />
          TARA: Our Revolutionary AI Assistant
        </h5>

        <h1 className="main w-[80vw] font-bold tracking-tighter text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
          Health Decisions Made Smarter - For You and the Ones that Follow.
        </h1>

        <Link
          href="/app"
          className="cta bg-slate-950 text-white px-6 py-3 rounded-lg mt-4 md:text-lg text-sm font-semibold shadow-lg flex items-center transition-colors duration-200"
        >
          <span>Pre-Register</span>
          <ArrowRightIcon size={18} className="inline-block ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
