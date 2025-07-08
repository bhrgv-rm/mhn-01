"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  CalendarBlank,
  ShareNetwork,
  PaperPlaneTilt,
  Bell,
  ChartLine,
  Users,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    icon: CalendarBlank,
    title: "Connect all your calendars",
    description:
      "Multiple emails sync in perfectly, without you having to worry about double bookings.",
    rightContent: {
      type: "calendar-sync",
      image: "/placeholder.svg?height=400&width=500",
      title: "Calendar Integration Dashboard",
    },
  },
  {
    id: 2,
    icon: ShareNetwork,
    title: "Share your availability",
    description:
      "Let clients or partners book a time slot for a meeting instantly via public link.",
    rightContent: {
      type: "booking-page",
      image: "/placeholder.svg?height=400&width=500",
      title: "Public Booking Page",
    },
  },
  {
    id: 3,
    icon: PaperPlaneTilt,
    title: "Schedule meetings yourself",
    description:
      "Send invites directly from our pre-built calendar with a custom questionnaire pre-meeting.",
    rightContent: {
      type: "meeting-scheduler",
      image: "/placeholder.svg?height=400&width=500",
      title: "Meeting Scheduler Interface",
    },
  },
  {
    id: 4,
    icon: Bell,
    title: "Smart notifications",
    description:
      "Get intelligent reminders and notifications that adapt to your schedule and preferences.",
    rightContent: {
      type: "notifications",
      image: "/placeholder.svg?height=400&width=500",
      title: "Notification Center",
    },
  },
  {
    id: 5,
    icon: ChartLine,
    title: "Analytics & insights",
    description:
      "Track your meeting patterns, productivity metrics, and optimize your scheduling workflow.",
    rightContent: {
      type: "analytics",
      image: "/placeholder.svg?height=400&width=500",
      title: "Analytics Dashboard",
    },
  },
  {
    id: 6,
    icon: Users,
    title: "Team collaboration",
    description:
      "Coordinate with team members, share calendars, and manage group scheduling effortlessly.",
    rightContent: {
      type: "team",
      image: "/placeholder.svg?height=400&width=500",
      title: "Team Management",
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
              className="bg-white rounded-3xl p-4 shadow-xl shadow-gray-100/50 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {features[activeFeature].rightContent.title}
                </h3>
              </div>

              {/* Main Content Image */}
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={
                    features[activeFeature].rightContent.image ||
                    "/placeholder.svg"
                  }
                  alt={features[activeFeature].rightContent.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="cta mt-4 px-4 py-2 rounded-md bg-slate-950 text-white text-lg font-semibold shadow-lg gap-2 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
}
