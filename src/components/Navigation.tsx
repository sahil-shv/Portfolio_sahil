import { motion } from 'motion/react';
import imgAvatar from "figma:asset/e64887f02cf4a4f4cae88fbb9a623698b2e5b580.png";

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-5">
        <div className="flex items-center justify-center">
          {/* Navigation Links - Centered Pill Shape with Avatar Inside */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 bg-white/90 backdrop-blur-md rounded-full pl-1.5 pr-6 lg:pr-8 py-1.5 shadow-lg">
            {/* Avatar inside the pill */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img 
                src={imgAvatar} 
                alt="Sahil" 
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover"
              />
            </motion.button>

            {/* Navigation Links */}
            {['Work', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-['Inter',sans-serif] text-[#212020] text-base lg:text-lg hover:text-[#00a6ff] transition-colors cursor-pointer"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile: Avatar and Menu Button */}
<div className="md:hidden flex items-center w-full bg-white/90 backdrop-blur-md rounded-full pl-1.5 pr-3 py-1.5 shadow-lg">
  
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center"
  >
    <img 
      src={imgAvatar} 
      alt="Sahil" 
      className="w-10 h-10 rounded-full object-cover"
    />
  </motion.button>

  {/* Navigation Links */}
  <div className="flex items-center gap-3 ml-[42px]">
    {['Work', 'Services', 'About', 'Contact'].map((item, index) => (
      <motion.button
        key={item}
        onClick={() => scrollToSection(item.toLowerCase())}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="font-['Inter',sans-serif] text-[#212020] text-xs hover:text-[#00a6ff] transition-colors cursor-pointer"
      >
        {item}
      </motion.button>
    ))}
  </div>
</div>
        </div>
      </div>
    </motion.nav>
  );
}