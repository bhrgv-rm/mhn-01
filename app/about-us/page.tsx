"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="about-one md:mt-40 flex flex-col items-center justify-center pt-40 pb-44"></section>
      <section className="max-w-section-default px-4 flex flex-col gap-4 pt-10 pb-20">
        <h1 className="md:text-6xl text-xl text-center text-balance font-bold tracking-tighter align-center">
          No more paper files. No more confusion. Hassle free, organized health.
        </h1>
        <p>Hey, glad you're here.</p>
        <p>
          No, really. The fact that you are here says something: you care about
          your health — and you want to know who's behind the app that says it
          can help you manage it all.
        </p>
        <h2>So, let's get real.</h2>
        <p>
          We're <strong>MyHealthNotion</strong> — and we're here to simplify
          health, without making it feel like homework.
        </p>
        <p>
          We get it. Life is busy. You're juggling work, sleep (or the lack of
          it), mood swings, caffeine, cravings, checkups, and that thing you
          Googled at 2 AM that made you spiral. That's exactly why we built
          MyHealthNotion — a place to track it all, understand your patterns,
          and start taking charge of your health, one tiny (but powerful)
          insight at a time.
        </p>
        <h2>
          This isn't just an app — it's your private space to log, reflect, and
          grow.
        </h2>
        <p>
          From your mood to your meals, your sleep to your stress — your entire
          lifestyle story is here, connected. You don't need five different apps
          and a spreadsheet anymore. You need one that just gets you.
        </p>
        <h2>
          We're not here to tell you what to do. We're here to help you notice
          what matters.
        </h2>
        <p>
          Whether you're 25 and navigating burnout or 50 and finally
          prioritizing yourself — MyHealthNotion is your space to reconnect with
          you.
        </p>
        <p>
          So thanks for stopping by. Stay curious. Stay kind to yourself.And hey
          — your health just found its new favorite habit.
        </p>
      </section>

      <section className="flex flex-col md:flex-row max-w-section-default mx-auto px-4 py-10 gap-8">
        <div className="flex-1">
          <p className="mb-4">
            Managing your health can feel overwhelming—juggling symptoms,
            appointments, and scattered medical records makes it hard to stay in
            control. That's why we created My Health Notion—to bring everything
            about your health into one secure, easy-to-use space. Your medical
            records, daily habits, and health data are all connected, giving you
            a complete picture of your well-being in one place.
          </p>
          <p className="mb-4">
            But we don't stop at just organizing your health information. Our
            AI-powered platform helps you recognize patterns, track your
            progress, and gain personalized insights that actually make a
            difference. Whether it's understanding how your habits impact your
            health, easily sharing records with your doctor, or managing your
            family's medical history, My Health Notion makes it effortless.
            Because staying healthy should feel simple, not stressful. Here's to
            a healthier, happier you!
          </p>
          <p className="mt-6 font-semibold">Priyanka Gandhavalla</p>
          <p className="mb-2">Founder, My Health Notion</p>
          <p className="font-semibold">Vivek Bollam</p>
          <p>Co-Founder, My Health Notion</p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="img-container relative w-full md:w-1/2 h-full group">
            <img
              src="/priyanka.jpg"
              alt="Priyanka"
              className="object-cover rounded-xl w-full h-full"
            />
            <div className="img-inner absolute top-0 left-0 w-full h-full rounded-xl z-10 opacity-0 flex flex-col items-center justify-end gap-0.5 pb-2">
              <div className="relative flex flex-col items-center justify-end gap-0.5 pb-2  ">
                <h1 className="text-gray-200 text-lg font-semibold">
                  Priyanka Gandhavalla
                </h1>
                <p className="text-gray-300 text-xs flex items-center gap-1">
                  FOUNDER &bull;
                  <span>
                    <LinkedinLogoIcon size={24} color="#f5f5f5" weight="fill" />
                  </span>
                </p>
                <a
                  href="https://www.linkedin.com/in/priyanka-gandhavalla-9aa43b114/"
                  className="absolute top-0 left-0 w-full h-full"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
          <div className="img-container relative w-full md:w-1/2 h-full group">
            <img
              src="/vivek.jpg"
              alt="Vivek"
              className="object-cover rounded-xl w-full h-full"
            />
            <div className="img-inner absolute top-0 left-0 w-full h-full rounded-xl z-10 opacity-0 flex flex-col items-center justify-end gap-0.5 pb-2">
              <div className="relative  flex flex-col items-center justify-end gap-0.5 pb-2">
                <h1 className="text-gray-200 text-lg font-semibold">
                  Vivek Bollam
                </h1>
                <p className="text-gray-300 text-xs flex items-center gap-1">
                  CO - FOUNDER &bull;
                  <span>
                    <LinkedinLogoIcon size={24} color="#f5f5f5" weight="fill" />
                  </span>
                </p>
                <a
                  href="https://www.linkedin.com/in/vivekbollam/"
                  target="_blank"
                  className="absolute top-0 left-0 w-full h-full"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-section-default">
        <h1 className="font-bold text-2xl mt-16">Our Core Values</h1>
        <ol className="about-list">
          <li>
            Radical Transparency -
            <span>
              We believe in clear, honest communication—with our users,
              partners, and ourselves. Your health deserves nothing less than
              truth you can trust.
            </span>
          </li>
          <li>
            Health Beyond Self -
            <span>
              Every choice we make today—every meal, every step, every moment of
              care—ripples forward into the lives of those we love and the
              generations yet to come.
            </span>
          </li>
          <li>
            Radical Simplicity -
            <span>
              Healthcare is already complex. We make it feel
              effortless—designing experiences so intuitive, you barely notice
              the technology behind them.
            </span>
          </li>
          <li>
            Science with Soul -
            <span>
              We marry cutting-edge science and data with timeless human wisdom.
              Because true health is both evidence-led and deeply personal.
            </span>
          </li>
          <li>
            Stewardship for the Future -
            <span>
              We're not just building for now. We're building for your children,
              your grandchildren, and communities we may never meet.
            </span>
          </li>
          <li>
            Integrity at Every Step -
            <span>
              From how we handle your data to how we guide your care—we operate
              with uncompromising honesty and respect.
            </span>
          </li>
        </ol>
      </section>
      <Footer />
    </>
  );
};

export default page;
