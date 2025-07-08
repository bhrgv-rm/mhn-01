import React from "react";
import { motion } from "framer-motion";
const Pulse = () => {
  return (
    <motion.div className="relative inline-flex items-center justify-center">
      <motion.div
        className="pulser absolute bg-gray-200 md:w-4 w-2 h-2 md:h-4 rounded-full"
        animate={{
          scale: [1.8, 1.2, 1, 1.8],
          opacity: [0, 0.4, 0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div className="constant z-10 absolute bg-gray-100 w-1 h-1 md:w-3 md:h-3 rounded-full" />
    </motion.div>
  );
};

export default Pulse;
