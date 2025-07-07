"use client";
import {
  ArrowRightIcon,
  PencilSimpleLineIcon,
  CodeIcon,
  PaletteIcon,
  ChartBarIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "@phosphor-icons/react";
import React from "react";

const iconSet: Record<string, React.ReactNode> = {
  software: <CodeIcon size={24} />,
  writing: <PencilSimpleLineIcon size={24} />,
  design: <PaletteIcon size={24} />,
  marketing: <ChartBarIcon size={24} />,
};

type IconType = keyof typeof iconSet;

interface Props {
  title: string;
  description: string;
  location: string;
  icon: IconType;
  url: string;
}
const Job: React.FC<Props> = ({ title, description, location, icon, url }) => {
  const selectedIcon = iconSet[icon] || <BriefcaseIcon size={24} />;
  return (
    <div className="relative">
      <div className="job-card p-4 w-full flex gap-1 rounded-md border-2 border-green-400 hover:bg-gray-50">
        <div className="flex flex-col gap-1 w-full">
          <h1 className="text-lg font-semibold flex items-center gap-2">
            {selectedIcon}
            {title}
          </h1>
          <p className="leading-snug">{description}</p>
          <p className="text-sm bg-green-400 text-slate-950 w-fit px-3 py-1 font-semibold rounded-full flex items-center justify-center gap-1">
            <MapPinIcon weight="bold" />
            <span>-</span> {location}
          </p>
        </div>
      </div>
      {/* <a href={url} className="absolute h-full w-full top-0"></a> */}
    </div>
  );
};

export default Job;
