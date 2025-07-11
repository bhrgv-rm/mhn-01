"use client";

import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600">We’re Almost There</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance tracking-tight mb-8 leading-tighter">
            Pre-register to get early access and be the first to experience a
            mark in health history.{" "}
          </h1>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt=""
                className="h-12"
              />
            </a>
            <a href="">
              <img
                src="/playstore.png"
                height="100px"
                alt=""
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="flex justify-center items-end ">
          <img
            src="/app/connect.png"
            alt=""
            className="scale-75 md:block hidden"
          />
          <img src="/app/wallet.png" alt="" className="" />
          <img src="/app/emo.png" alt="" className="scale-75 md:block hidden" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
