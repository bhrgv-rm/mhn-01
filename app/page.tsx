"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger, ScrollSmoother } from "gsap/all";
import Hero from "@/components/Hero";
import Phone from "@/components/Phone";
import Bento from "@/components/Bento";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import ScrollText from "@/components/ScrollText";
import Footer from "@/components/Footer";
import Finale from "@/components/Finale";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export default function AnimatedText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a GSAP context scoped to this component
    const ctx = gsap.context(() => {
      // Any GSAP animations here will be automatically cleaned up
    }, containerRef);

    return () => {
      // Clean up only this component's animations
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <Hero />
      <Phone />
      <ScrollText />
      <Bento />
      <Testimonials />
      <Finale />
      <Footer />
    </div>
  );
}
