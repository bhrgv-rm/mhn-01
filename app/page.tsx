"use client";

import React, { useEffect, useRef } from "react";
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
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type: "words" });

    const animation = gsap.from(split.words, {
      opacity: 0.1,
      stagger: 0.01,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 30%",
        end: "bottom 20%",
        pin: true,
        scrub: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      split.revert();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Phone />
      <ScrollText />
      <Bento />
      <Testimonials />
      <Finale />
      <Footer />
    </>
  );
}
