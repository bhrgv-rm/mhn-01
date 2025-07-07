import React from "react";
import Image from "next/image";
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-10 md:px-32 md:py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        <section className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo/default.png" alt="logo" width={40} height={40} />
            <p className="text-2xl font-bold tracking-tight">
              My Health Notion
            </p>
          </div>

          <label htmlFor="footer-email" className="sr-only">
            Email
          </label>
          <input
            id="footer-email"
            type="email"
            placeholder="Enter your email"
            className="border-2 border-gray-300 rounded px-4 py-2 w-full max-w-xs mb-4 text-sm"
          />

          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Instagram">
              <InstagramLogoIcon size={24} />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookLogoIcon size={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeLogoIcon size={24} />
            </a>
            <a href="#" aria-label="X">
              <XLogoIcon size={24} />
            </a>
          </div>

          <p className="text-xs text-gray-600 mt-6">
            © {new Date().getFullYear()} My Health Notion. All rights reserved.
          </p>
        </section>

        {/* Right Section */}
        <nav className="flex flex-1 flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-3">
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
              href="/contact"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              Contact Us
            </Link>
            <Link
              href="/faqs"
              className="text-sm p-1 hover:bg-gray-200 rounded-md px-3 py-1.5 w-fit"
            >
              FAQs
            </Link>
          </div>
          <div className="flex flex-col gap-3">
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
    </footer>
  );
};

export default Footer;
