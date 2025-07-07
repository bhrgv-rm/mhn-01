"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="about-one flex flex-col items-center justify-center pt-40 pb-44"></section>
      <section className="max-w-section-default px-4 flex flex-col text-xl gap-4 pt-10 pb-20">
        <h1 className="heading text-center font-bold tracking-tighter align-center">
          About Us
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
      <Footer />
    </>
  );
};

export default page;
