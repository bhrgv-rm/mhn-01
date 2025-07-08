"use client";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
const Finale = () => {
  return (
    <div className=" text-center text-black flex flex-col items-center justify-center w-[90vw] rounded-xl md:p-16 p-8 mx-auto border shadow-lg">
      <h5 className="uppercase text-md tracking-tight font-semibold md:mb-8 mb-4">
        Download the App
      </h5>
      <h1 className="font-bold tracking-tighter align-center md:text-7xl text-4xl text-balance">
        Health Decisions Made Smarter - For You and the Ones that Follow.
      </h1>
      <Link
        href="/app"
        className="cta bg-slate-950 text-white px-6 py-3 rounded-lg md:mt-8 mt-4 text-lg font-semibold shadow-lg flex items-center"
      >
        <span>Download App</span>
        <ArrowRightIcon size={18} weight="bold" className="inline-block ml-2" />
      </Link>
    </div>
  );
};

export default Finale;
