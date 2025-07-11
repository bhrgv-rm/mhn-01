"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  CheckIcon,
  CircleNotchIcon,
  InfoIcon,
  InstagramLogoIcon,
  MetaLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // Create FormData and convert to string exactly like your working script
    const formData = new FormData();
    formData.append("home-mail", email); // Changed from "email" to "home-mail"

    const keyValuePairs: string[] = [];
    for (const pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }
    const formDataString = keyValuePairs.join("&");

    // Only proceed if email exists (like your original logic)
    if (keyValuePairs[0].split("=")[1]) {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbw2G9l_Ob0SC3TRg7Uy7LaJw8mcnjKXjaW7CfE8_L1_b81JkjAIhPqa5NpkIncSSqts/exec",
          {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        );

        // Check if the request was successful
        if (response.ok) {
          console.log("Email submitted successfully!");
          localStorage.setItem("MHNEmailFormSubmitted", "true");
          setSuccess(true);
          setShowToast(true);

          // Clear email after success and reset success state
          setTimeout(() => {
            setEmail("");
            setShowToast(false);
            setSuccess(false); // Reset success state to show arrow again
          }, 3000);

          return response;
        } else {
          throw new Error("Failed to submit the form.");
        }
      } catch (error) {
        console.error("Error:", error);
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <footer className="text-black px-6 py-10 md:px-32 md:py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        <section className="flex-1 flex flex-col gap-1">
          <div className="relative flex items-center gap-3 mb-5">
            <Image src="/logo/default.png" alt="logo" width={40} height={40} />
            <p className="text-2xl font-bold tracking-tight">
              My Health Notion
            </p>
            <a href="/" className="absolute top-0 left-0 w-full h-full"></a>
          </div>

          <label htmlFor="home-mail" className="text-sm text-gray-700">
            Subscribe to our Newsletter
          </label>
          <form
            onSubmit={handleEmailSubmit}
            className="relative w-full max-w-xs mb-6"
          >
            <input
              autoComplete="off"
              id="home-mail"
              name="home-mail"
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
                <CircleNotchIcon
                  size={20}
                  weight="bold"
                  className="animate-spin"
                />
              ) : success ? (
                <CheckIcon size={20} weight="bold" />
              ) : (
                <ArrowRightIcon size={20} weight="bold" />
              )}
            </button>
          </form>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/myhealthnotion.ai/"
              aria-label="Instagram"
              target="_blank"
            >
              <InstagramLogoIcon size={28} />
            </a>
            <a
              href="https://www.facebook.com/people/My-Health-Notion/61565109898754/"
              aria-label="Facebook"
              target="_blank"
            >
              <MetaLogoIcon size={28} />
            </a>
            <a
              href="https://www.youtube.com/@MyHealthNotion"
              aria-label="YouTube"
              target="_blank"
            >
              <YoutubeLogoIcon size={28} />
            </a>
            <a
              href="https://x.com/myhealthnotion"
              aria-label="X"
              target="_blank"
            >
              <XLogoIcon size={28} />
            </a>
          </div>
        </section>

        {/* Right Section */}
        <nav className="flex flex-1 flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Quick Links
            </h2>
            <div className="flex sm:gap-12 gap-2 flex-col sm:flex-row">
              <div className="flex flex-col gap-2">
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
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/features"
                  className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
                >
                  Features
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
            </div>
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
        <div
          className="toast fixed z-50 bottom-4 right-4 bg-green-400/80 font-semibold rounded-md flex items-center gap-3 px-4 py-3 shadow-lg transition-all duration-500 animate-slide-in"
          role="status"
          aria-live="polite"
        >
          <InfoIcon size={20} />
          Thank you for Subscribing.
        </div>
      )}
    </footer>
  );
};
export default Footer;
