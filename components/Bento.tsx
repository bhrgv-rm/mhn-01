import React from "react";
import BentoInner from "./BentoInner";
import {
  StethoscopeIcon,
  HeartIcon,
  UsersThreeIcon,
  RobotIcon,
  ScrollIcon,
  DropIcon,
} from "@phosphor-icons/react";
const Bento = () => {
  return (
    <div className="flex items-center justify-center mt-[50vh]">
      <div className="grid h-[110vh] w-[160vh] gap-5 p-5 grid-cols-7 grid-rows-6 rounded-lg ">
        <div className="col-span-3 row-span-2  shadow-md flex items-center justify-center">
          <BentoInner
            icon={<StethoscopeIcon size={32} weight="bold" />}
            title="Doctor Connect"
            desc="Optimized for speed with minimal latency."
          />{" "}
        </div>

        <div className="col-span-2 row-span-2 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<HeartIcon size={32} weight="bold" />}
            title="Health Tracking"
            desc="Optimized for speed with minimal latency."
          />{" "}
        </div>

        <div className="col-span-2 row-span-3 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<UsersThreeIcon size={32} weight="bold" />}
            title="Family Connect"
            desc="Optimized for speed with minimal latency."
          />{" "}
        </div>

        <div className="col-span-2 row-span-4 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<RobotIcon size={32} weight="bold" />}
            title="TARA AI"
            desc="Optimized for speed with minimal latency."
          />{" "}
        </div>

        <div className="col-span-3 row-span-2 shadow-md flex items-center justify-center">
          <div className="flex flex-col p-4 rounded-xl w-full h-full bg-gray-50 shadow-sm hover:shadow-md transition-shadow overflow-hidden items-center justify-center text-2xl font-bold text-gray-800">
            <h1>Be the Change</h1>
          </div>
        </div>

        <div className="col-span-2 row-span-3 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<DropIcon size={32} weight="bold" />}
            title="Period Tracking"
            desc="Optimized for speed with minimal latency."
          />{" "}
        </div>

        <div className="col-span-3 row-span-2 shadow-md flex items-center justify-center">
          <BentoInner
            icon={<ScrollIcon size={32} weight="bold" />}
            title="Health Records"
            desc="Optimized for speed with minimal latency."
          />
        </div>
      </div>
    </div>
  );
};

export default Bento;
