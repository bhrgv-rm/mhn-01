"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ScrollText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      const split = new SplitText(textRef.current, { type: "words" });

      gsap.from(split.words, {
        opacity: 0,
        y: 20,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 15%",
          end: "bottom 0%",
          pin: true,
          scrub: 1,
        },
      });

      // Store split instance for cleanup
      return () => {
        split.revert();
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex items-center justify-center"
    >
      <h1
        ref={textRef}
        className="md:w-[60%] w-[90%] h-fit mb-[50vh] tracking-tight text-center font-semibold leading-tight md:text-4xl text-xl"
      >
        My Health Notion is designed to support you on your personal health
        journey — with intelligent insights and thoughtful features that fit
        seamlessly into your everyday life.
        <br />
        <br />
        Every feature is built in collaboration with medical experts and
        grounded in scientific validation, so you can trust the information
        guiding your choices.
        <br />
        <br />
        By connecting your lifestyle with your health records, My Health Notion
        gives you a clearer view of your overall well-being — day by day, and
        over time.
        <br />
        <br />
        And with privacy at the core, your data stays yours. Always in your
        hands. Always in your control.
      </h1>
    </div>
  );
};

export default ScrollText;
