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
      text: "As a doctor, I've often faced challenges with patients arriving without their previous health records, making it difficult to provide comprehensive care. This platform has been a game-changer for me. It allows me to access patients' complete medical histories quickly and securely, right from my desk. The ease of finding and reviewing health records has significantly streamlined my practice and improved patient care. It's truly made my job easier and more efficient.",
      name: "Dr. PVV Raju",
      image: "/faces/1.jpg",
      tag: "Medical Professional, Karnataka",
    },
    {
      text: "Living far from my elderly parents, I struggled with the challenge of managing their health care from across the globe. This app has been invaluable, allowing me to securely access their medical records and stay informed about their health in real time. It provides peace of mind, knowing I can oversee their well-being and ensure they're receiving the best care, no matter the distance between us.",
      name: "Vijay Bathula",
      image: "/faces/2.jpg",
      tag: "Engineer, New Zealand",
    },
    {
      text: "Working abroad, I was often anxious about managing my parents' health care from such a distance. This app has made all the difference. It enables me to easily access their medical records and keep track of their health status, no matter where I am. It's incredibly reassuring to have the ability to oversee their care and ensure they're getting the support they need, even from halfway around the world.",
      name: "Sagun Soni",
      image: "/faces/3.jpg",
      tag: "E-Com Professional, Germany",
    },
    {
      text: "As a wellness counselor and health enthusiast, I am thrilled with this platform's ability to merge cutting-edge AI technology with personal wellness. The personalised insights and secure access to my medical records make managing my health both easy and effective. It's empowering to have such innovative tools at my fingertips, helping me make informed decisions and stay on top of my well-being. This platform is a fantastic resource for anyone passionate about taking charge of their health.",
      name: "Rashmi T Duseja",
      image: "/faces/4.jpg",
      tag: "Wellness Counselor, Dehradun",
    },
    {
      text: "As a dental surgeon, I am truly impressed by the innovative approach of this platform. Their seamless integration of advanced AI with a user-friendly interface provides exceptional personalised health insights and secure record management. This technology not only enhances the way we manage patient information but also empowers patients with tailored recommendations for better health outcomes. It's a game-changer for modern healthcare, offering both precision and convenience for a healthier future.",
      name: "Dr. Meghana",
      image: "/faces/5.jpg",
      tag: "Dental Sugeon, Tamil Nadu",
    },
    {
      text: "As a busy IT professional, managing my health can be challenging with my hectic schedule. This platform has been a lifesaver. The seamless access to my medical records and personalised health insights saves me time and keeps me informed about my well-being. The convenience of having everything in one place allows me to focus on my work without worrying about my health management. It's a fantastic tool for anyone with a demanding lifestyle.",
      name: "Harsha Jonnalagadda",
      image: "/faces/6.jpg",
      tag: "IT Professional, USA",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-12 md:text-5xl text-2xl font-bold tracking-tighter px-4 text-balance">
        A Glimpse. A Reaction.
      </h1>
      <p className="text-center text-balance text-gray-600 px-4">
        We shared MyHealthNotion with a few early testers. What they felt tells
        us we're on the right path.
      </p>
      <div className="flex justify-center items-center md:gap-16 gap-2 mb-32 mt-4 mx-2">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Scroll Previous"
          className="text-gray-600 hover:text-black cursor-pointer"
        >
          <ArrowLeftIcon size={24} weight="bold" />
        </button>

        <div
          className="viewport overflow-hidden w-full max-w-240"
          ref={emblaRef}
        >
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
    </>
  );
};

export default EmblaCarousel;
