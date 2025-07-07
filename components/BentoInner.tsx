"use client";
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const BentoInner: React.FC<Props> = ({ icon, title, desc }) => {
  return (
    <div className="relative group flex flex-col items-start p-4 rounded-xl w-full h-full bg-gray-50 shadow-mg hover:shadow-lg transition-shadow overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md bg-white/30 text-gray-900 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center text-lg font-medium text-center">
        {desc}
      </div>

      {/* Base content (under the overlay) */}
      <div className="text-2xl mb-2 z-0">{icon}</div>
      <h3 className="text-lg font-semibold z-0">{title}</h3>
    </div>
  );
};

export default BentoInner;
