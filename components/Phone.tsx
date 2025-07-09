"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Phone = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the entire section (image + text)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%", // control how long it pins
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      });

      // Scale image on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "-20% bottom",
            end: "+=200%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* This section gets pinned and animated */}
      <div ref={sectionRef} className="phone-img relative h-[100vh] mx-2 z-10">
        <div className="h-screen flex justify-center items-center">
          <div ref={imageRef}>
            <Image
              src="/screen1.png"
              alt="phone"
              width={600}
              height={800}
              className="z-10 rounded-[100px]"
            />
          </div>
        </div>

        {/* This div handles the text layout */}
        <div className="absolute top-0 w-full -z-10 h-screen flex items-center justify-center">
          <div className="flex flex-col sm:flex-row w-full max-w-7xl gap-8 sm:gap-80">
            {/* Left Text Block */}
            <div className="flex-1 flex items-center justify-center sm:justify-end mb-8 sm:mb-0">
              <h1 className="text-3xl font-bold text-center sm:text-right sm:ml-2.5">
                A seamless way to see your health—clearly. My Health Notion
                brings together your records, habits, and insights in one quiet,
                powerful place. It doesn't just store your health data. It
                understands it.
              </h1>
            </div>

            {/* Right Text Block */}
            <div className="flex-1 flex items-center justify-center sm:justify-start mb-8 sm:mb-0">
              <h1 className="text-3xl font-bold text-center sm:text-left sm:mr-2.5">
                Because health should feel effortless. Too many apps complicate
                what should be intuitive. We built My Health Notion to bring
                clarity, calm, and control back to you.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
