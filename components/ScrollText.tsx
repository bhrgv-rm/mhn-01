import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ScrollText = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type: "words" });

    const animation = gsap.from(split.words, {
      opacity: 0,
      stagger: 0.1,
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
    <div className="w-full min-h-screen flex items-center justify-center">
      <h1
        ref={textRef}
        className="md:w-[60%] w-[90%] h-fit mb-[50vh] tracking-tight text-center font-semibold leading-tighter md:text-4xl text-xl"
      >
        At My Health Notion, we look at health through a generational lens. The
        foods we eat, the sleep we skip, the stress we ignore are not isolated
        habits. They are patterns that echo across time, shaping not just our
        future, but the future of those who come after us. That is why our
        platform is designed to do more than track numbers. It connects the dots
        between your medical records and your lifestyle patterns to offer
        personalized, AI-driven insights that help you stay ahead of preventable
        illness, reduce chronic risk, and make mindful choices that ripple
        across generations. Because when you manage your health today, you are
        not just making life better for yourself. You are protecting the
        possibility of a healthier tomorrow for your family, and for the future.
      </h1>
    </div>
  );
};

export default ScrollText;
