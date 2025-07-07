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
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });

      gsap.fromTo(
        image,
        { scale: 1 },
        {
          scale: 0.5,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "+=200%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // <-- added cleanup
    };
  }, []);

  return (
    <div ref={sectionRef} className="phone-img relative h-[100vh] mx-2 z-10">
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
              Health Notion, we look at health through a generational lens. The
              foods we eat, the sleep we skip, the stress we ignore—these aren’t
              isolated habits.
            </h1>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-left">
              Health isn’t just about now. It’s about what comes next. At My
              Health Notion, we look at health through a generational lens. The
              foods we eat, the sleep we skip, the stress we ignore—these aren’t
              isolated habits.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
