"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Phone = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the entire section (image + text)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%", // control how long it pins
        pin: true,
        scrub: true,
      });

      // Scale image on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.05 },
        {
          scale: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
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
      <div ref={sectionRef} className="phone-img relative h-[100vh] z-10">
        <div className="h-screen flex justify-center items-center">
          <div ref={imageRef}>
            <Image
              src="/screen1.png"
              alt="phone"
              width={600}
              height={800}
              className="z-10"
            />
          </div>
        </div>

        <div className="h-screen flex items-center justify-center absolute top-0 w-full -z-10">
          <div className="flex w-full max-w-7xl gap-80">
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-right">
                Health isn’t just about now. It’s about what comes next. At My
                Health Notion, we look at health through a generational lens.
                The foods we eat, the sleep we skip, the stress we ignore—these
                aren’t isolated habits.
              </h1>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-left">
                Health isn’t just about now. It’s about what comes next. At My
                Health Notion, we look at health through a generational lens.
                The foods we eat, the sleep we skip, the stress we ignore—these
                aren’t isolated habits.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
