import { motion } from 'motion/react';
import imgAbout from "figma:asset/c825bdb7f9b986e459e81216d37064929000c6a3.png";
import { useInView } from './useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-20 lg:py-32">
      {/* Gradient Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-[#00a6ff]/30 via-[#5cc6ff]/20 to-transparent rounded-full blur-3xl"
        style={{ transform: 'translate(20%, 20%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <p className="font-['elegance',sans-serif] text-[#00a6ff] text-2xl md:text-3xl lg:text-[45px] mb-2 md:mb-4">
            About me
          </p>
          <h2 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-3xl md:text-4xl lg:text-[67px]">
            Working <span className="text-[#686767]">remotely.</span>
          </h2>
        </motion.div>

        {/* White Background Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-3xl md:rounded-[40px] p-6 md:p-10 lg:p-16 shadow-lg relative z-10"
        >
          {/* Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 md:space-y-6 order-2 lg:order-1"
            >
              <p className="font-['ogelo',sans-serif] text-[#686767] text-sm md:text-base lg:text-lg leading-relaxed">
                I'm a web designer and developer who enjoys helping local businesses build a strong and trustworthy online presence. I believe a website should do more than just look good. It should clearly communicate your story, make it easy for customers to find you, and turn visitors into real enquiries. That's why I take time to understand your business, your customers, and your goals before starting any project.
              </p>
              
              <p className="font-['ogelo',sans-serif] text-[#686767] text-sm md:text-base lg:text-lg leading-relaxed">
                I design clean, modern, and mobile-friendly websites that load fast, are easy to use, and look smooth on all devices. Beyond design and development, I help you grow by creating websites that improve visibility, build customer trust, and support your business goals, whether that means getting more calls, visits, or bookings. I guide you through the entire process with clear communication and simple explanations, so you always know what you're getting. If you're a local business looking for a website that actually works for your business, I'm here to help you grow with confidence online.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full order-1 lg:order-2"
            >
              <div
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={imgAbout} 
                  alt="Working remotely" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}