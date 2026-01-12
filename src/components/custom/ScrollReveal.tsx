import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
}

export const ScrollReveal = ({ children }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when visible
      viewport={{ once: true, amount: 0.2 }} // Only play once, when 20% visible
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};