import React from "react";
import { motion } from "framer-motion";
const Pulse = () => {
  return (
    <motion.div className="relative inline-flex items-center justify-center">
      <motion.div
        className="pulser absolute bg-gray-200 w-4 h-4 rounded-full"
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
      <motion.div className="constant z-10 absolute bg-gray-100 w-3 h-3 rounded-full" />
    </motion.div>
  );
};

export default Pulse;
