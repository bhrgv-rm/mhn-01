"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CalendarBlankIcon } from "@phosphor-icons/react";
import React, { useRef } from "react";
import Image from "next/image";
interface Props {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}
const BlogPreview = ({ title, description, image, date, link }: Props) => {
  return (
    <div className="blog-preview flex items-stretch justify-between rounded-lg mb-8 w-full relative overflow-hidden">
      {/* Content: 4/5 width */}
      <div className="w-4/5 p-4 flex flex-col justify-between">
        <div>
          <h2 className="blog-title text-xl font-semibold">{title}</h2>
          <p className="blog-desc leading-snug text-gray-600 mt-1">
            {description}
          </p>
        </div>
        <span className="text-gray-400 text-sm flex items-center gap-1 mt-2">
          <CalendarBlankIcon /> {date}
        </span>
      </div>

      <div className="w-1/5 min-h-[150px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-r-lg"
        />
      </div>

      <a href={link} className="absolute w-full h-full top-0 left-0 z-10"></a>
    </div>
  );
};

const Page = () => {
  const blogsRef = useRef<HTMLDivElement>(null);

  const handleScrollToRoles = () => {
    if (blogsRef.current) {
      const offset = 100;
      const top =
        blogsRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <section className="max-w-section-default px-4 pt-32 flex flex-col items-center justify-center">
        <h1 className="heading text-center text-pretty font-bold tracking-tighter">
          Insights about Health: All at One Place
        </h1>
        <button
          className="cta mt-4 px-4 py-2 rounded-md bg-slate-950 text-white text-lg font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          onClick={handleScrollToRoles}
        >
          Explore Blogs
        </button>
      </section>

      <div className="flex flex-col items-center justify-center max-w-section-default px-4 mt-8">
        <h1
          className="text-4xl my-4 font-bold tracking-tight text-center"
          ref={blogsRef}
        >
          Latest Publications
        </h1>
        <BlogPreview
          title="Contaminated Groundwater: Causes, Health Risks, and What You Can't Afford anything  "
          description="Did you know that over 70% of rural India relies on groundwater for daily use, but much of it is dangerously contaminated? Groundwater — the water stored beneath the earth’s surface in cracks, aquifers, and porous for real."
          image="/team.png"
          date="2023-10-01"
          link="https://example.com/blog1"
        />
        <BlogPreview
          title="Contaminated Groundwater: Causes, Health Risks, and What You Can't Afford anything  "
          description="Did you know that over 70% of rural India relies on groundwater for daily use, but much of it is dangerously contaminated? Groundwater — the water stored beneath the earth’s surface in cracks, aquifers, and porous for real."
          image="/team.png"
          date="2023-10-01"
          link="https://www.google.com"
        />
        <BlogPreview
          title="Contaminated Groundwater: Causes, Health Risks, and What You Can't Afford anything  "
          description="Did you know that over 70% of rural India relies on groundwater for daily use, but much of it is dangerously contaminated? Groundwater — the water stored beneath the earth’s surface in cracks, aquifers, and porous for real."
          image="/team.png"
          date="2023-10-01"
          link="https://www.google.com"
        />
        <BlogPreview
          title="Contaminated Groundwater: Causes, Health Risks, and What You Can't Afford anything  "
          description="Did you know that over 70% of rural India relies on groundwater for daily use, but much of it is dangerously contaminated? Groundwater — the water stored beneath the earth’s surface in cracks, aquifers, and porous for real."
          image="/team.png"
          date="2023-10-01"
          link="https://www.google.com"
        />
      </div>
      <Footer />
    </>
  );
};

export default Page;
