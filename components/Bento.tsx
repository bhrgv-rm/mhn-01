"use client";
import React from "react";
import BentoInner from "./BentoInner";
import {
  StethoscopeIcon,
  HeartIcon,
  UsersThreeIcon,
  RobotIcon,
  ScrollIcon,
  DropIcon,
} from "@phosphor-icons/react";

const Bento = () => {
  return (
    <div className="flex items-center justify-center mt-[50vh] px-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-7 md:grid-rows-6 w-full max-w-7xl">
        <div className="md:col-span-3 md:row-span-2 shadow-md flex items-center justify-center">
          {/* <BentoInner
            icon={<StethoscopeIcon size={32} weight="bold" />}
            title="Doctor Connect"
            desc="Optimized for speed with minimal latency."
          /> */}
          <img src="/scop.jpg" alt="" />
        </div>

        <div className="md:col-span-2 md:row-span-2 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<HeartIcon size={32} weight="bold" />}
            title="Health Tracking"
            desc="Optimized for speed with minimal latency."
          />
        </div>

        <div className="md:col-span-2 md:row-span-3 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<UsersThreeIcon size={32} weight="bold" />}
            title="Family Connect"
            desc="Optimized for speed with minimal latency."
          />
        </div>

        <div className="md:col-span-2 md:row-span-4 shadow-md flex items-center justify-center">
          {/* <BentoInner
            icon={<RobotIcon size={32} weight="bold" />}
            title="TARA AI"
            desc="Optimized for speed with minimal latency."
          /> */}
          <img src="/doc2.png" alt="" className="mt-auto " />
        </div>

        <div className="shadow-md flex items-center justify-center order-first md:order-none md:col-span-3 md:row-span-2">
          {/* <div className="flex flex-col p-4 rounded-xl w-full h-full bg-gray-50 shadow-sm hover:shadow-md transition-shadow overflow-hidden items-center justify-center text-2xl font-bold text-gray-800"> */}
          {/* <h1>Be the Change</h1> */}
          <img src="/change.png" alt="" />
          {/* </div> */}
        </div>

        <div className="md:col-span-2 md:row-span-3 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<DropIcon size={32} weight="bold" />}
            title="Period Tracking"
            desc="Optimized for speed with minimal latency."
          />
        </div>

        <div className="md:col-span-3 md:row-span-2 shadow-md flex items-center justify-center">
          <img src="/8.png" className="mt-auto" alt="" />
          {/* <BentoInner
            icon={<ScrollIcon size={32} weight="bold" />}
            title="Health Wallet"
            desc="Optimized for speed with minimal latency."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Bento;
