"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      setMenuHeight(`${menuRef.current.scrollHeight}px`);
    } else {
      setMenuHeight("0px");
    }
  }, [menuOpen]);

  return (
    <nav
      className={`navbar fixed top-2 left-1/2 transform w-full max-w-[1200px] p-2 rounded-3xl border bg-white shadow-md z-50`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/" className="font-bold text-xl tracking-tight">
          My Health Notion
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-around gap-12">
          <Link href="/about-us">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/app">App</Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/app"
          className="hidden md:inline-block cta bg-slate-950 text-amber-50 px-4 py-2 rounded-2xl"
        >
          Download App
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={28} weight="bold" />
          ) : (
            <List size={28} weight="bold" />
          )}
        </button>
      </div>

      {/* Mobile Menu (with animated height) */}
      <div
        ref={menuRef}
        style={{
          height: menuOpen ? menuHeight : "0px",
          overflow: "hidden",
          transition: "height 300ms ease",
        }}
      >
        <div className="p-2 flex flex-col gap-3 mt-3 md:hidden">
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/features" onClick={() => setMenuOpen(false)}>
            Features
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <Link href="/app" onClick={() => setMenuOpen(false)}>
            App
          </Link>
        </div>
        <Link
          href="/app"
          className="block cta-nav bg-slate-950 text-amber-50 px-4 py-2 rounded-3xl text-center"
          onClick={() => setMenuOpen(false)}
        >
          Download App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
