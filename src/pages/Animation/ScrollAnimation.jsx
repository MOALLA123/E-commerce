import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 0 }}
      whileInView={{ opacity: 1, y: -7 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
