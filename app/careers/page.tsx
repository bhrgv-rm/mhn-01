"use client";

import React, { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Job from "@/components/Job";
import {
  ArrowRightIcon,
  CopySimpleIcon,
  InfoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { AvailableRoles } from "@/careers";

// const AvailableRoles = [];

const CareersPage = () => {
  const rolesRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);

  const handleScrollToRoles = () => {
    if (rolesRef.current) {
      const offset = 100;
      const top =
        rolesRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("careers@myhealthnotion.in").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    });
  };

  return (
    <>
      <Navbar />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-section-default mt-24 px-4">
        <div className="flex flex-col gap-2 py-6 items-start justify-center">
          <span className="text-sm text-gray-700">
            Careers at My Health Notion
          </span>
          <h1 className="font-bold tracking-tighter text-3xl md:text-4xl lg:text-5xl">
            Build the future of healthcare with us
          </h1>
          <p>
            MyHealthNotion is building the human-centered infrastructure modern
            healthcare needs. Together, we're not just improving workflows;
            we're improving lives. You can help build what comes next.
          </p>
          <button
            className="cta mt-4 px-4 py-2 rounded-md bg-slate-950 text-white text-lg font-semibold shadow-lg flex items-center gap-2"
            onClick={handleScrollToRoles}
          >
            See open roles <ArrowRightIcon size={20} weight="bold" />
          </button>
        </div>
        <div className="relative rounded-2xl bg-lime-200 bg-opacity-10 p-2">
          <Image
            src="/team.webp"
            alt="Careers at My Health Notion"
            width={800}
            height={600}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <section className="max-w-section-default mt-16 mb-8 px-4">
        <h1 className="text-4xl font-bold mb-6">
          We're building the future of healthcare — together, in person.
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            At <strong>MyHealthNotion</strong>, we're reimagining what
            healthcare can be.{" "}
            <strong>
              Smarter tools, seamless experiences, and systems that actually
              serve the people in them
            </strong>{" "}
            — that's what we're building.
          </p>
          <p>
            We're a fast-moving, mission-driven team working side-by-side to
            make healthcare more human.{" "}
            <strong>No silos, no endless Zooms</strong> — just real
            collaboration, creative energy, and hands-on problem solving.
          </p>

          <h2 className="text-2xl font-semibold mt-2">
            Why you'll want to be here (literally):
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>In-person magic:</strong> We believe the best ideas happen
              when we're together — whiteboarding, brainstorming, building.
            </li>
            <li>
              <strong>Fast pace, big ownership:</strong> You'll have real
              responsibility from day one.
            </li>
            <li>
              <strong>Tight-knit team:</strong> We're serious about what we do,
              but don't take ourselves too seriously.
            </li>
            <li>
              <strong>Make real impact:</strong> Your work will go live — and
              improve lives.
            </li>
            <li>
              <strong>We're all in:</strong> This isn't just a job. We're
              building something that matters, and we're doing it as a team.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-2">What we believe:</h2>
          <ul className="list-disc pl-5 font-light">
            <li>
              <strong>Health tech should feel effortless</strong>
            </li>
            <li>
              <strong>In-person beats always-online</strong>
            </li>
            <li>
              <strong>Empathy is a superpower</strong>
            </li>
            <li>
              <strong>Done - perfect</strong>
            </li>
            <li>
              <strong>Collaboration is our unfair advantage</strong>
            </li>
          </ul>

          <p className="mb-6 text-lg">
            We're hiring across{" "}
            <span className="font-semibold">
              engineering, product, design, and operations
            </span>{" "}
            — and we want people who are excited to show up, roll up their
            sleeves, and build something that lasts.
          </p>

          <h3 className="text-xl font-bold">
            Let's fix healthcare — together, under one roof.
          </h3>
        </div>
      </section>

      <section className="max-w-section-default mt-16 mb-8 px-4">
        <h1
          className="text-4xl mt-4 font-bold tracking-tight text-center"
          ref={rolesRef}
        >
          Available Roles
        </h1>
        {AvailableRoles.length > 0 ? (
          <>
            <p className="text-center text-gray-700">
              We are always looking for talented individuals to join our team.
              If you are passionate about healthcare and want to make a
              difference, mail us at{" "}
              <span
                className="inline-flex items-center gap-1 cursor-pointer underline font-bold"
                onClick={handleCopy}
              >
                careers@myhealthnotion.in <CopySimpleIcon weight="bold" />
              </span>
            </p>

            <div className="roles flex flex-col gap-4 mt-8">
              {AvailableRoles.map(
                (role: {
                  title: string;
                  description: string;
                  location: string;
                  icon: string;
                  url: string;
                }) => (
                  <Job
                    key={role.url}
                    title={role.title}
                    description={role.description}
                    location={role.location}
                    icon={role.icon}
                    url={role.url}
                  />
                )
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-700 mt-3 text-lg">
            <p>
              We're at capacity right now. Thank you for your interest. Check
              back soon for new opportunities.
            </p>
          </div>
        )}
      </section>

      <Footer />

      {copied && (
        <div
          className="toast fixed z-50 bottom-4 right-4 bg-lime-500 font-semibold rounded-md flex items-center gap-3 px-4 py-3 shadow-lg transition-all duration-500 animate-slide-in"
          role="status"
          aria-live="polite"
        >
          <InfoIcon weight="bold" size={20} />
          Email Address Copied to Clipboard
        </div>
      )}
    </>
  );
};

export default CareersPage;
