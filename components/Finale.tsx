import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
const Finale = () => {
  return (
    <div className="bg-white text-center text-black flex flex-col items-center justify-center w-[90vw] rounded-lg p-16 mx-auto border shadow-lg">
      <h5 className="uppercase text-lg tracking-tight font-semibold mb-8">
        Download the App
      </h5>
      <h1 className="font-bold tracking-tighter align-center text-7xl text-balance">
        Health Decisions Made Smarter - For You and the Ones that Follow.
      </h1>
      <Link
        href="/app"
        className="cta bg-slate-950 text-white px-6 py-3 rounded-lg mt-8 text-lg font-semibold shadow-lg flex items-center"
      >
        <span>Download App</span>
        <ArrowRightIcon size={18} weight="bold" className="inline-block ml-2" />
      </Link>
    </div>
  );
};

export default Finale;
