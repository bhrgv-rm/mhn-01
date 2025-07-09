"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { InfoIcon } from "@phosphor-icons/react"; // Adjust to the correct import for your InfoIcon

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false); // State for toast visibility

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const formDataString = new URLSearchParams({ email }).toString(); // This is how the email is sent to the Google Script

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw2G9l_Ob0SC3TRg7Uy7LaJw8mcnjKXjaW7CfE8_L1_b81JkjAIhPqa5NpkIncSSqts/exec", // Your Google Apps Script URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: formDataString,
        }
      );

      if (response.ok) {
        console.log("Email submitted successfully!");
        setSuccess(true);
        localStorage.setItem("MHNEmailFormSubmitted", "true");
        setShowToast(true); // Show the toast on successful submission
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      } else {
        console.error("Failed to submit the email.");
        throw new Error("Failed to submit the email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="text-black px-6 py-10 md:px-32 md:py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        <section className="flex-1 flex flex-col gap-6">
          <div className="relative flex items-center gap-3">
            <Image src="/logo/default.png" alt="logo" width={40} height={40} />
            <p className="text-2xl font-bold tracking-tight">
              My Health Notion
            </p>
            <a href="/" className="absolute top-0 left-0 w-full h-full"></a>
          </div>

          <label htmlFor="footer-email" className="sr-only">
            Email
          </label>
          <form
            onSubmit={handleEmailSubmit}
            className="relative w-full max-w-xs"
          >
            <input
              autoComplete="off"
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="border-2 border-gray-500 rounded px-4 py-2 w-full pr-10 text-sm"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
              aria-label="Submit email"
              disabled={loading}
            >
              {loading ? (
                <div className="loader"></div> // Add your loading spinner here
              ) : success ? (
                // SVG success tick mark
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-green-500"
                >
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              ) : (
                <ArrowRightIcon size={20} weight="bold" />
              )}
            </button>
          </form>

          <div className="flex gap-4">
            <a href="#" aria-label="Instagram">
              {/* Instagram Icon */}
            </a>
            <a href="#" aria-label="Facebook">
              {/* Facebook Icon */}
            </a>
            <a href="#" aria-label="YouTube">
              {/* YouTube Icon */}
            </a>
            <a href="#" aria-label="X">
              {/* X Icon */}
            </a>
          </div>
        </section>

        {/* Right Section */}
        <nav className="flex flex-1 flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Quick Links
            </h2>
            <Link
              href="/about-us"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              Blogs
            </Link>
            <Link
              href="/careers"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              Careers
            </Link>
            <Link
              href="/app"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              App
            </Link>
            <Link
              href="/faqs"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              FAQs
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Legal
            </h2>
            <Link
              href="/privacy-policy"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/eula"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              EULA
            </Link>
          </div>
        </nav>
      </div>
      <p className="text-xs text-gray-600 mt-4">
        © {new Date().getFullYear()} My Health Notion. All rights reserved.
      </p>

      {/* Toast notification */}
      {showToast && (
        <div className="toast fixed z-50 bottom-4 right-4 bg-lime-500 font-semibold rounded-md flex items-center gap-3 px-4 py-3 shadow-lg transition-all duration-500 animate-slide-in pointer-events-auto">
          <InfoIcon weight="bold" size={20} />
          Thank you for Subscribing.
        </div>
      )}
    </footer>
  );
};

export default Footer;
