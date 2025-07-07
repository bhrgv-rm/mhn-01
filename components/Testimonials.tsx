"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import TestimonialsInner from "./TestimonialsInner";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const testimonials = [
    {
      text: "As a doctor, I've often faced challenges with patients arriving without their previous health records, making it difficult to provide comprehensive care. This platform has been a game-changer for me. It allows me to access patients' complete medical histories quickly and securely, right from my desk. The ease of finding and reviewing health records has significantly streamlined my practice and improved patient care. It's truly made my job easier and more efficient..",
      name: "Lucy Sullivan",
      image:
        "https://assets.lummi.ai/assets/QmVV2h9RhHo9PuzXJj35k8uZNvYE2QznpjEskdY4iHmibQ?auto=format&w=1500",
      tag: "Radiojournalist",
    },
    {
      text: "This platform changed my perspective on health completely.",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      tag: "Health Coach",
    },
    {
      text: "Highly recommend to anyone looking to improve their wellness.",
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      tag: "Nutritionist",
    },
  ];

  return (
    <div className="flex justify-center items-center md:gap-16 gap-2 my-48 mx-2">
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Scroll Previous"
        className="text-gray-600 hover:text-black cursor-pointer"
      >
        <ArrowLeftIcon size={24} weight="bold" />
      </button>

      <div className="viewport overflow-hidden w-full max-w-240" ref={emblaRef}>
        <div className="container flex items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="slide transition-opacity duration-300 ease-in-out"
              style={{
                flex: "0 0 100%",
                opacity: index === selectedIndex ? 1 : 0,
                pointerEvents: index === selectedIndex ? "auto" : "none",
                transition: "opacity 0.4s ease-in-out",
              }}
            >
              <TestimonialsInner {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Scroll Next"
        className="text-gray-600 hover:text-black cursor-pointer"
      >
        <ArrowRightIcon size={24} weight="bold" />
      </button>
    </div>
  );
};

export default EmblaCarousel;
