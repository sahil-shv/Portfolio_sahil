import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './useInView';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

export function Work() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const getCurrentProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="work" ref={ref} className="relative py-16 md:py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <p className="font-['elegance',sans-serif] text-[#00a6ff] text-2xl md:text-3xl lg:text-[45px] mb-2 md:mb-4">
            Work
          </p>
          <h2 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-3xl md:text-4xl lg:text-[67px]">
            Websites that <span className="text-[#686767]">perform</span>
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 col-span-full"
            >
              {getCurrentProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  className="bg-[#f2f2f2] rounded-2xl md:rounded-3xl lg:rounded-[31px] overflow-hidden cursor-pointer transition-all relative group"
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* 16:9 Image Preview Container - shows only top portion */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover object-top"
                      style={{ minHeight: '100%' }}
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Text Content - positioned at bottom */}
                  <motion.div
                    initial={{ opacity: 0.9, y: 0 }}
                    whileHover={{ opacity: 1, y: -5 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-12 z-10"
                  >
                    <h3 className="font-['Nohemi',sans-serif] font-bold text-white text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2">
                      {project.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-white/90 text-sm md:text-base lg:text-lg">
                      {project.description}
                    </p>
                  </motion.div>
                  
                  {/* Arrow indicator on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-5 right-5 md:top-8 md:right-8 lg:top-12 lg:right-12 z-10"
                  >
                    <svg 
                      width="20" 
                      height="20"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-white md:w-6 md:h-6"
                    >
                      <path 
                        d="M7 17L17 7M17 7H7M17 7V17" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-2 md:gap-3 mt-8 md:mt-12"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-[#212020] w-6 h-2 md:w-8 md:h-2.5' 
                  : 'bg-[#212020]/30 hover:bg-[#212020]/50 w-2 h-2 md:w-2.5 md:h-2.5'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0"
            style={{ 
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full md:w-screen md:h-screen flex items-center justify-center"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all"
                aria-label="Close preview"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="text-white"
                >
                  <path 
                    d="M18 6L6 18M6 6l12 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Full image container */}
              <div className="relative max-w-full max-h-full md:w-screen md:h-screen flex items-center justify-center p-4 md:p-16">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg md:rounded-2xl shadow-2xl"
                />

                {/* Image info overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-16 md:left-16 md:right-16 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 rounded-lg">
                  <h3 className="font-['Nohemi',sans-serif] font-bold text-white text-xl md:text-3xl mb-1 md:mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-white/90 text-sm md:text-lg">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}