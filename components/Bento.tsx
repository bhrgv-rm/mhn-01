"use client";
import React from "react";
import {
  CloudArrowUpIcon,
  StethoscopeIcon,
  UsersThreeIcon,
  WarningIcon,
} from "@phosphor-icons/react";

const Bento = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center mt-[50vh] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 grid-rows-7 gap-2 m-4 w-full max-w-screen-xl">
          {/* Top Left Image */}
          <div className="bg-white rounded-xl h-fit sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:row-span-2 relative group">
            <div className="w-full h-full bg-[#004aad] text-white rounded-xl flex flex-col items-start justify-start md:text-8xl text-6xl text-center p-8 font-bold tracking-tighter">
              <h1 className="phudu">FEATURES</h1>
              <p className="flex flex-col">
                <span className="md:text-4xl text-3xl tracking-tight text-start">
                  designed
                </span>
                <span className="md:text-4xl text-3xl tracking-tight text-start">
                  around
                </span>
                <span className="md:text-4xl text-3xl tracking-tight text-start">
                  you.
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl h-fit sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-2 flex items-center justify-center relative group">
            <div className="bg-white/20 h-full w-full rounded-xl items-start absolute top-0 left-0 pl-4 pt-4 flex gap-2 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <StethoscopeIcon color="#2f2f2f" size={42} />
                <h1 className="font-semibold tracking-tight text-[#2f2f2f] text-xl">
                  Doctor Connect
                </h1>
              </div>
            </div>
            <img src="/bento/1.png" className="rounded-xl w-full h-min" />
          </div>

          <div className="bg-white rounded-xl h-fit sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-6 lg:row-start-1 lg:col-span-2 lg:row-span-3 flex items-center justify-center">
            <img src="/bento/2.png" className="rounded-xl w-full h-min" />
          </div>

          <div className="bg-white rounded-xl h-fit sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-6 lg:row-start-4 lg:col-span-2 lg:row-span-3 flex items-center justify-center">
            <div className="w-full h-full bg-[#459858] text-white rounded-xl flex flex-col items-end justify-end md:text-8xl text-6xl text-center p-8 font-bold tracking-tighter">
              <h1 className="phudu">TARA,</h1>
              <p className="md:text-4xl text-3xl tracking-tight">Your AI</p>
              <p className="md:text-4xl text-3xl tracking-tight">Health</p>
              <p className="md:text-4xl text-3xl tracking-tight">Assistant</p>
            </div>
          </div>

          <div className="bg-white rounded-xl h-fit sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-3 lg:row-start-5 lg:col-span-3 lg:row-span-2 flex items-center justify-center relative group">
            <div className="bg-white/20 h-full w-full rounded-xl items-start absolute top-0 left-0 pl-4 pt-4 flex gap-2 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <UsersThreeIcon color="#2f2f2f" size={42} />
                <h1 className="font-semibold tracking-tight text-[#2f2f2f] text-xl">
                  Family Connect
                </h1>
              </div>
            </div>
            {/* <img src="/bento/4.png" className="rounded-xl w-full h-min" /> */}
            <img src="/bento/4.png" className="rounded-xl w-full h-min" />
          </div>

          <div className="bg-white rounded-xl h-full sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-1 lg:row-start-3 lg:col-span-2 lg:row-span-4 flex w-full items-center justify-center relative group">
            <div className="bg-white/20 h-full w-full rounded-xl items-start absolute top-0 left-0 pl-4 pt-4 flex gap-2 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <CloudArrowUpIcon color="#2f2f2f" size={42} />
                <h1 className="font-semibold tracking-tight text-[#2f2f2f] text-xl">
                  Medical Record Storage
                </h1>
              </div>
            </div>
            <img
              src="/bento/5.png"
              alt="Wallet"
              className="rounded-xl max-w-full h-auto object-contain"
            />
          </div>

          <div className="bg-white rounded-xl h-fit sm:h-auto sm:col-span-3 sm:row-span-2 lg:col-start-3 lg:row-start-3 lg:col-span-3 lg:row-span-2 flex items-center justify-center">
            <img
              src="/bento/6.png"
              alt="Change"
              className="rounded-xl max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bento;
