"use client";

import { useState, useEffect } from "react";
import {
  ChartLineIcon,
  CloudArrowUpIcon,
  HeartIcon,
  StethoscopeIcon,
  UsersThreeIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    icon: CloudArrowUpIcon,
    title: "Medical Record Storage",
    description:
      "Say goodbye to bulky files. MHN keeps all your health history safe, searchable, and shareable at your fingertips.",
    rightContent: {
      type: "calendar-sync",
      image: "/features/1.webp",
      title: "Medical Record Storage",
    },
  },
  {
    id: 2,
    icon: HeartIcon,
    title: "AI Health Recommendations",
    description:
      "MHN doesn't just store your data — it reads it. Get early warnings, wellness tips, and health nudges tailored to you.",
    rightContent: {
      type: "booking-page",
      image: "/features/2.webp",
      title: "AI Health Recommendations",
    },
  },
  {
    id: 3,
    icon: ChartLineIcon,
    title: "Personalized Insights",
    description:
      "Track sleep, stress, hydration, meals, exercise, and even caffeine. Understand how your daily choices shape your health.",
    rightContent: {
      type: "meeting-scheduler",
      image: "/features/3.webp",
      title: "Personalized Insights",
    },
  },
  {
    id: 4,
    icon: WarningIcon,
    title: "Emergency SOS",
    description:
      "Built-in safety. One tap sends a help alert to your chosen contacts with your location and basic health info.",
    rightContent: {
      type: "notifications",
      image: "/features/4.webp",
      title: "Emergency SOS",
    },
  },
  {
    id: 5,
    icon: UsersThreeIcon,
    title: "Family Connect",
    description:
      "Manage your loved ones' health just like your own. Especially useful for parents, caregivers, or long-distance support.",
    rightContent: {
      type: "analytics",
      image: "/features/5.webp",
      title: "Family Connect",
    },
  },
  {
    id: 6,
    icon: StethoscopeIcon,
    title: "Doctor Connect",
    description:
      "No more printing or emailing health records. Share directly with your doctor for smarter, faster consultations.",
    rightContent: {
      type: "team",
      image: "/features/6.webp",
      title: "Doctor Connect",
    },
  },
];

const CYCLE_DURATION = 5000; // 5 seconds

export default function Component() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [timeLeft, setTimeLeft] = useState(CYCLE_DURATION);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setActiveFeature((current) => (current + 1) % features.length);
      setTimeLeft(CYCLE_DURATION);
    }
  }, [timeLeft]);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setTimeLeft(CYCLE_DURATION);
  };

  const getTimerProgress = (index: number) => {
    if (index === activeFeature) {
      return ((CYCLE_DURATION - timeLeft) / CYCLE_DURATION) * 100;
    }
    return 0;
  };

  const formatTime = (ms: number) => {
    return Math.ceil(ms / 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen mt-32">
      <div className="flex items-center flex-col">
        <h1 className="text-center md:text-5xl text-2xl font-bold tracking-tighter px-4 text-balance">
          The Future of Health. All in One App.
        </h1>{" "}
        <p className="text-center text-balance text-gray-600 px-4 mt-1 mb-12 max-w-4xl">
          No more switching between tools. Everything you need for your health
          journey—thoughtfully designed into one seamless experience.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-3 flex md:flex-col flex-row flex-wrap justify-center gap-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className={`relative cursor-pointer transition-all duration-500 mb-0 ${
                  index === activeFeature ? "scale-[1.02]" : "scale-100"
                }`}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div
                  className={`p-6 rounded-xl border transition-all duration-500 ${
                    index === activeFeature
                      ? "bg-white border-green-200 shadow-lg shadow-green-100/50"
                      : "bg-gray-50/50 border-gray-100 hover:bg-white hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-500 ${
                        index === activeFeature
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <IconComponent size={24} weight="regular" />
                    </div>

                    <div className="flex-1 min-w-0 hidden md:block">
                      <div className="flex items-center justify-between mb-3">
                        <h3
                          className={`text-lg font-medium transition-colors duration-500 ${
                            index === activeFeature
                              ? "text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>

                      <p
                        className={`text-sm leading-relaxed transition-colors duration-500 ${
                          index === activeFeature
                            ? "text-gray-600"
                            : "text-gray-500"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {index === activeFeature && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-green-400 rounded-r-full"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl p-4 shadow-xl shadow-gray-100/50 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {features[activeFeature].rightContent.title}
                </h3>
              </div>

              {/* Main Content Image */}
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={
                    features[activeFeature].rightContent.image ||
                    "/placeholder.svg"
                  }
                  alt={features[activeFeature].rightContent.title}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
