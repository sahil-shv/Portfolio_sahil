import { motion } from 'motion/react';
import Illustration from "../imports/Illustration";

export function ContactIllustration() {
  return (
    <div className="relative w-full max-w-[700px] mx-auto scale-[0.8] md:scale-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <Illustration />
      </motion.div>
    </div>
  );
}