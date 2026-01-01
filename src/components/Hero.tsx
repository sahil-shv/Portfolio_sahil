import { motion } from "motion/react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-16 pb-12 md:pb-16">
      {/* Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-[#00a6ff]/30 via-[#5cc6ff]/20 to-transparent rounded-full blur-3xl"
        style={{ transform: "translate(-30%, -20%)" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-tl from-[#00a6ff]/30 via-[#5cc6ff]/20 to-transparent rounded-full blur-3xl"
        style={{ transform: "translate(30%, 20%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="text-center space-y-6 md:space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2 md:space-y-4"
          >
            <h1 className="font-['Nohemi',sans-serif] font-[1400] text-[#686767] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85.13px] leading-tight">
              Hi, I am Sahil.
            </h1>
            <h1 className="font-['Nohemi',sans-serif] font-[1400] text-[#212020] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[85.13px] leading-tight">
              I Build Websites.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['ogelo',sans-serif] text-[#686767] text-sm sm:text-base md:text-lg lg:text-[20px] text-center max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4"
          >
            I build local businesses the online presence they
            deserve through website design and development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto font-['Nohemi',sans-serif] font-[1400] bg-[#212020] text-[#f2f2f2] px-6 py-3 md:px-8 md:py-4 rounded-[26px] text-base md:text-xl transition-all"
            >
              Contact
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto font-['Nohemi',sans-serif] font-[1400] bg-white text-[#212020] px-6 py-3 md:px-8 md:py-4 rounded-[26px] text-base md:text-xl border-2 border-[#212020] transition-all"
            >
              Contact
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#212020] rounded-full flex items-start justify-center p-1.5 md:p-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#212020] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}