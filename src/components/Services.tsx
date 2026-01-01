import { motion } from 'motion/react';
import { useInView } from './useInView';

interface ServicesProps {
  onServiceSelect?: (serviceTitle: string) => void;
}

const services = [
  {
    id: 1,
    title: 'UI Design',
    description: 'Beautiful interfaces that captivate users',
    price: 'Starting at $1,500',
    benefits: [
      'Custom design mockups',
      'Responsive layouts',
      'Design system creation',
      'Unlimited revisions',
      'Figma source files',
    ],
    accent: '#00a6ff',
  },
  {
    id: 2,
    title: 'Development',
    description: 'Clean code that brings designs to life',
    price: 'Starting at $2,500',
    benefits: [
      'Modern tech stack',
      'Fully responsive',
      'Performance optimized',
      'SEO ready',
      'Cross-browser compatible',
    ],
    accent: '#00a6ff',
  },
  {
    id: 3,
    title: 'Complete Package',
    description: 'Full service from design to deployment',
    price: 'Starting at $3,500',
    benefits: [
      'Everything from UI + Dev',
      'Brand strategy consultation',
      'Content creation support',
      'Hosting & deployment',
      '30 days post-launch support',
    ],
    accent: '#00a6ff',
    featured: true,
  },
];

export function Services({ onServiceSelect }: ServicesProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleGetStarted = (serviceTitle: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceTitle);
    }
  };

  return (
    <section id="services" ref={ref} className="relative py-16 md:py-20 lg:py-32 overflow-visible">
      {/* Gradient Blob - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#00a6ff]/20 via-[#5cc6ff]/10 to-transparent rounded-full blur-3xl"
        style={{ transform: 'translate(-20%, -20%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <p className="font-['elegance',sans-serif] text-[#00a6ff] text-2xl md:text-3xl lg:text-[45px] mb-2 md:mb-4">
            Services
          </p>
          <h2 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-3xl md:text-4xl lg:text-[67px]">
            What I <span className="text-[#686767]">offer.</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
              }}
              className={`bg-white rounded-3xl md:rounded-[40px] p-6 md:p-8 lg:p-10 shadow-lg relative overflow-hidden group ${
                service.featured ? 'ring-2 ring-[#00a6ff]' : ''
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#00a6ff] text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-['Nohemi',sans-serif]">
                  Popular
                </div>
              )}

              {/* Accent Gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00a6ff] to-[#5cc6ff]"
              />

              {/* Service Number */}
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00a6ff]/10 mb-4 md:mb-6">
                <span className="font-['Nohemi',sans-serif] font-bold text-[#00a6ff] text-xl md:text-2xl">
                  {service.id}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="font-['ogelo',sans-serif] text-[#686767] text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                {service.description}
              </p>

              {/* Price */}
              <p className="font-['Nohemi',sans-serif] text-[#00a6ff] text-base md:text-xl mb-4 md:mb-6">
                {service.price}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {service.benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.05 }}
                    className="flex items-start gap-2 md:gap-3"
                  >
                    {/* Checkmark Icon */}
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#00a6ff] flex-shrink-0 mt-0.5 md:mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-['ogelo',sans-serif] text-[#686767] text-sm md:text-base">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => handleGetStarted(service.title)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 md:py-4 rounded-full font-['Nohemi',sans-serif] text-sm md:text-base transition-all ${
                  service.featured
                    ? 'bg-[#00a6ff] text-white hover:bg-[#0095e8]'
                    : 'bg-[#f2f2f2] text-[#212020] hover:bg-[#00a6ff] hover:text-white'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}