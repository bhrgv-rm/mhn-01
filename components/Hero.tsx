import React from "react";
import Pulse from "./Pulse";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
const Hero = () => {
  return (
    <nav className="hero flex flex-col items-center h-screen justify-center text-center gap-2">
      <h5 className="tara-badge flex items-center gap-4">
        <Pulse />
        TARA: Our Revolutionary AI Assistant
      </h5>
      <h1 className="main w-[80vw] font-bold tracking-tighter align-center">
        Health Decisions Made Smarter - For You and the Ones that Follow.
      </h1>
      <Link
        href="/app"
        className="cta bg-slate-950 text-white px-6 py-3 rounded-lg mt-4 text-lg font-semibold shadow-lg flex items-center"
      >
        <span>Download App</span>
        <ArrowRightIcon size={18} weight="bold" className="inline-block ml-2" />
      </Link>
    </nav>
  );
};

export default Hero;
