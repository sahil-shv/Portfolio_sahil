import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Send, Zap, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import { messageTemplates } from '../data/messageTemplates';

function AnimatedContactSVG() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full max-w-[600px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Blob */}
        <motion.path
          d="M100 150 Q150 50, 300 100 T500 200 Q550 300, 450 400 T200 420 Q50 350, 100 150 Z"
          fill="#B8E0F6"
          opacity="0.4"
          initial={{ scale: 0.9, opacity: 0.3 }}
          animate={{ scale: [0.9, 1, 0.95, 1], opacity: [0.3, 0.5, 0.4, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Flying Plane */}
        <motion.g
          initial={{ x: -100, y: 0 }}
          animate={{ 
            x: [-100, 150],
            y: [0, -10, 0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Plane Tail */}
          <path
            d="M120 70 L140 85 L145 75 L125 60 Z"
            fill="white"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Plane Body */}
          <path
            d="M140 85 L240 100 L260 95 L265 85 L150 70 Z"
            fill="white"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Plane Wing Top */}
          <path
            d="M200 80 L260 65 L270 60 L275 65 L265 75 L210 88 Z"
            fill="#E8E8E8"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Plane Wing Bottom */}
          <path
            d="M180 95 L190 110 L185 115 L175 100 Z"
            fill="#E8E8E8"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Plane Nose */}
          <path
            d="M265 85 L285 88 L280 95 L260 95 Z"
            fill="#686767"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Windows */}
          <circle cx="190" cy="85" r="3" fill="#B8E0F6" stroke="#212020" strokeWidth="1" />
          <circle cx="210" cy="87" r="3" fill="#B8E0F6" stroke="#212020" strokeWidth="1" />
          <circle cx="230" cy="90" r="3" fill="#B8E0F6" stroke="#212020" strokeWidth="1" />
        </motion.g>

        {/* Direction Sign Post */}
        <g>
          {/* Post */}
          <motion.rect
            x="340"
            y="150"
            width="8"
            height="200"
            rx="4"
            fill="#686767"
            stroke="#212020"
            strokeWidth="2"
            animate={{ scaleY: [1, 0.98, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "344px 250px" }}
          />
          
          {/* Top Sign */}
          <motion.g
            animate={{ 
              rotate: [-2, 2, -2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "415px 180px" }}
          >
            <path
              d="M350 165 L480 165 L495 180 L480 195 L350 195 Z"
              fill="#00a6ff"
              stroke="#212020"
              strokeWidth="2"
            />
            <circle cx="365" cy="180" r="3" fill="white" opacity="0.5" />
            <line x1="380" y1="180" x2="470" y2="180" stroke="white" strokeWidth="2" opacity="0.3" />
          </motion.g>
          
          {/* Bottom Sign */}
          <motion.g
            animate={{ 
              rotate: [2, -2, 2],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "415px 240px" }}
          >
            <path
              d="M350 225 L480 225 L495 240 L480 255 L350 255 Z"
              fill="#00a6ff"
              stroke="#212020"
              strokeWidth="2"
            />
            <circle cx="365" cy="240" r="3" fill="white" opacity="0.5" />
            <line x1="380" y1="240" x2="470" y2="240" stroke="white" strokeWidth="2" opacity="0.3" />
          </motion.g>
        </g>

        {/* Traveler/Person */}
        <motion.g
          animate={{ 
            x: [0, -8, 0, 8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Head */}
          <circle cx="200" cy="200" r="18" fill="white" stroke="#212020" strokeWidth="2" />
          
          {/* Hair/Hat */}
          <motion.path
            d="M185 195 Q200 180, 215 195"
            fill="#00a6ff"
            stroke="#212020"
            strokeWidth="2"
            animate={{ d: [
              "M185 195 Q200 180, 215 195",
              "M185 195 Q200 178, 215 195",
              "M185 195 Q200 180, 215 195"
            ]}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <path
            d="M195 195 L205 195 L207 205 L193 205 Z"
            fill="#00a6ff"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Face details */}
          <circle cx="195" cy="202" r="1.5" fill="#212020" />
          <circle cx="205" cy="202" r="1.5" fill="#212020" />
          <path d="M195 210 Q200 212, 205 210" stroke="#212020" strokeWidth="1.5" fill="none" />
          
          {/* Body/Torso */}
          <path
            d="M200 218 L200 280"
            stroke="#212020"
            strokeWidth="2"
          />
          <ellipse
            cx="200"
            cy="245"
            rx="22"
            ry="30"
            fill="white"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Shirt Details */}
          <line x1="200" y1="220" x2="200" y2="270" stroke="#686767" strokeWidth="1" />
          <circle cx="200" cy="230" r="2" fill="#686767" />
          <circle cx="200" cy="245" r="2" fill="#686767" />
          <circle cx="200" cy="260" r="2" fill="#686767" />
          
          {/* Arm pointing at sign */}
          <motion.path
            d="M200 235 L240 210 L245 215 L250 210"
            stroke="#212020"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            animate={{ 
              d: [
                "M200 235 L240 210 L245 215 L250 210",
                "M200 235 L242 208 L247 213 L252 208",
                "M200 235 L240 210 L245 215 L250 210"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Other Arm with luggage */}
          <motion.g
            animate={{ 
              rotate: [-5, 5, -5],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "200px 240px" }}
          >
            <path
              d="M200 240 L160 290"
              stroke="#212020"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            
            {/* Luggage Handle */}
            <path
              d="M160 290 L165 295 L170 290"
              stroke="#212020"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </motion.g>
          
          {/* Legs */}
          <motion.path
            d="M200 280 L190 340 L185 360"
            stroke="#00a6ff"
            strokeWidth="10"
            strokeLinecap="round"
            animate={{ 
              d: [
                "M200 280 L190 340 L185 360",
                "M200 280 L192 340 L188 360",
                "M200 280 L190 340 L185 360"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.path
            d="M200 280 L210 340 L215 360"
            stroke="#00a6ff"
            strokeWidth="10"
            strokeLinecap="round"
            animate={{ 
              d: [
                "M200 280 L210 340 L215 360",
                "M200 280 L208 340 L212 360",
                "M200 280 L210 340 L215 360"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
          />
          
          {/* Shoes */}
          <ellipse cx="185" cy="365" rx="12" ry="5" fill="white" stroke="#212020" strokeWidth="2" />
          <ellipse cx="215" cy="365" rx="12" ry="5" fill="white" stroke="#212020" strokeWidth="2" />
        </motion.g>

        {/* Rolling Suitcase */}
        <motion.g
          animate={{ 
            x: [0, -8, 0, 8, 0],
            rotate: [0, -2, 0, 2, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "150px 320px" }}
        >
          {/* Suitcase Body */}
          <rect
            x="125"
            y="285"
            width="50"
            height="65"
            rx="4"
            fill="#686767"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Suitcase Stripe */}
          <rect
            x="125"
            y="310"
            width="50"
            height="3"
            fill="#00a6ff"
          />
          <rect
            x="125"
            y="320"
            width="50"
            height="3"
            fill="#00a6ff"
          />
          
          {/* Handle */}
          <path
            d="M145 285 L145 270 L155 270 L155 285"
            stroke="#212020"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Wheels */}
          <motion.circle
            cx="135"
            cy="355"
            r="4"
            fill="#212020"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "135px 355px" }}
          />
          <motion.circle
            cx="165"
            cy="355"
            r="4"
            fill="#212020"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "165px 355px" }}
          />
        </motion.g>

        {/* Stacked Suitcases (right side) */}
        <g>
          {/* Bottom Suitcase */}
          <rect
            x="420"
            y="310"
            width="90"
            height="55"
            rx="4"
            fill="#00a6ff"
            stroke="#212020"
            strokeWidth="2"
          />
          <rect x="420" y="330" width="90" height="3" fill="white" opacity="0.3" />
          <rect x="420" y="345" width="90" height="3" fill="white" opacity="0.3" />
          <circle cx="435" cy="337" r="4" fill="white" stroke="#212020" strokeWidth="1" />
          <circle cx="495" cy="337" r="4" fill="white" stroke="#212020" strokeWidth="1" />
          
          {/* Top Suitcase */}
          <motion.g
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="430"
              y="255"
              width="90"
              height="55"
              rx="4"
              fill="#686767"
              stroke="#212020"
              strokeWidth="2"
            />
            <rect x="430" y="275" width="90" height="3" fill="#00a6ff" />
            <rect x="430" y="290" width="90" height="3" fill="#00a6ff" />
            <circle cx="445" cy="282" r="4" fill="#E8E8E8" stroke="#212020" strokeWidth="1" />
            <circle cx="505" cy="282" r="4" fill="#E8E8E8" stroke="#212020" strokeWidth="1" />
          </motion.g>
        </g>

        {/* Floating Message Icons */}
        <motion.g
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="280" cy="140" r="12" fill="#00a6ff" opacity="0.8" />
          <path d="M275 137 L280 142 L290 132" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        <motion.g
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="520" cy="180" r="10" fill="#686767" opacity="0.8" />
          <text x="520" y="185" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
        </motion.g>

        {/* Small decorative lines/dashes */}
        <motion.line
          x1="300"
          y1="350"
          x2="320"
          y2="350"
          stroke="#686767"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
          animate={{ x2: [320, 330, 320] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="310"
          y1="365"
          x2="330"
          y2="365"
          stroke="#686767"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
          animate={{ x2: [330, 340, 330] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

interface ContactProps {
  templateMessage?: string | null;
  onTemplateUsed?: () => void;
}

export function Contact({ templateMessage, onTemplateUsed }: ContactProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [templateApplied, setTemplateApplied] = useState(false);
  const [lastAppliedTemplate, setLastAppliedTemplate] = useState<string | null>(null);

  // Apply template when templateMessage changes
  useEffect(() => {
    // Reset lastAppliedTemplate when templateMessage is cleared
    if (!templateMessage) {
      setLastAppliedTemplate(null);
      return;
    }

    // Apply template if it's different from the last one applied
    if (
      templateMessage !== lastAppliedTemplate &&
      messageTemplates[templateMessage as keyof typeof messageTemplates]
    ) {
      const template = messageTemplates[templateMessage as keyof typeof messageTemplates];
      setMessage(template);
      setTemplateApplied(true);
      setLastAppliedTemplate(templateMessage);
      
      // Notify parent that template was used
      if (onTemplateUsed) {
        onTemplateUsed();
      }

      // Clear the template indicator after 5 seconds
      setTimeout(() => {
        setTemplateApplied(false);
      }, 5000);
    }
  }, [templateMessage, onTemplateUsed, lastAppliedTemplate]);

  const handleSend = async () => {
    if (message.trim()) {
      setIsSending(true);
      setError(null);
      
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'https://your-api.onrender.com';
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: message.trim() }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setIsSending(false);
          setIsSent(true);
          
          // Reset after 3 seconds
          setTimeout(() => {
            setMessage('');
            setIsSent(false);
          }, 3000);
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (err) {
        console.error('Error sending message:', err);
        setIsSending(false);
        setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
        
        // Clear error after 5 seconds
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-24"
        >
          <p className="font-['elegance',sans-serif] text-[#00a6ff] text-2xl md:text-3xl lg:text-[45px] mb-2 md:mb-4">
            Contact
          </p>
          <h2 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-3xl md:text-4xl lg:text-[67px]">
            Work with <span className="text-[#686767]">me.</span>
          </h2>
        </motion.div>

        {/* Two Column Layout - Vertical on Mobile, Horizontal on Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-12 md:mb-20">
          {/* Left Side - Animated SVG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center items-center order-1 md:order-1"
          >
            <AnimatedContactSVG />
          </motion.div>

          {/* Right Side - Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full order-2 md:order-2"
          >
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border-2 border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-[#00a6ff] opacity-5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <h3 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                Let's create something <span className="text-[#00a6ff]">amazing</span>
              </h3>

              {/* Template Applied Notification */}
              {templateApplied && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mb-4 p-3 md:p-4 bg-[#00a6ff]/10 border-2 border-[#00a6ff] rounded-xl text-[#00a6ff] text-sm md:text-base font-['Inter',sans-serif] flex items-center gap-2 md:gap-3"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Template message applied! Feel free to edit it.</span>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 md:p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm md:text-base font-['Inter',sans-serif]"
                >
                  {error}
                </motion.div>
              )}

              {/* Message Input */}
              <div className="relative mb-4 md:mb-6">
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    // Clear template indicator when user edits
                    if (templateApplied) {
                      setTemplateApplied(false);
                    }
                  }}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={isSending || isSent}
                  className="w-full px-4 py-4 md:px-6 md:py-5 rounded-xl md:rounded-2xl border-2 border-gray-200 font-['Inter',sans-serif] text-[#212020] text-sm md:text-base transition-all duration-300 focus:outline-none focus:border-[#00a6ff] focus:shadow-lg resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
                
                {/* Character count */}
                <div className="absolute bottom-3 right-3 md:bottom-3 md:right-4 text-xs text-[#686767] font-['Inter',sans-serif]">
                  {message.length} characters
                </div>
              </div>

              {/* Send Button */}
              <motion.button
                onClick={handleSend}
                disabled={!message.trim() || isSending || isSent}
                className="relative w-full bg-[#00a6ff] text-white font-['Nohemi',sans-serif] font-bold py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl text-sm md:text-base overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                whileHover={!isSending && !isSent ? { scale: 1.02 } : {}}
                whileTap={!isSending && !isSent ? { scale: 0.98 } : {}}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] via-[#0095e8] to-[#00a6ff]"
                  animate={!isSending && !isSent ? {
                    x: ['-100%', '100%']
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Sending animation */}
                {isSending && (
                  <motion.div
                    className="absolute inset-0 bg-[#0095e8]"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                )}

                {/* Success animation */}
                {isSent && (
                  <motion.div
                    className="absolute inset-0 bg-green-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  {isSent ? (
                    <>
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        ✓
                      </motion.span>
                      Sent Successfully!
                    </>
                  ) : isSending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </>
                  )}
                </span>

                {/* Particle effects on hover */}
                {!isSending && !isSent && (
                  <>
                    <motion.div
                      className="absolute w-2 h-2 bg-white rounded-full"
                      initial={{ x: '20%', y: '50%', opacity: 0 }}
                      whileHover={{
                        x: ['20%', '80%'],
                        y: ['50%', '20%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute w-2 h-2 bg-white rounded-full"
                      initial={{ x: '40%', y: '50%', opacity: 0 }}
                      whileHover={{
                        x: ['40%', '90%'],
                        y: ['50%', '80%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                    />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-20"
        >
          {/* Fast Delivery */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border-2 border-gray-100 flex items-start gap-4 md:gap-5 cursor-pointer group"
          >
            <motion.div
              className="bg-[#00a6ff] p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div>
              <h4 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-lg md:text-xl mb-1 md:mb-2 group-hover:text-[#00a6ff] transition-colors">
                Fast Delivery
              </h4>
              <p className="font-['Inter',sans-serif] text-[#686767] text-sm md:text-base">
                Quick turnaround without compromising quality. Your project delivered on time.
              </p>
            </div>
          </motion.div>

          {/* Budget Friendly */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border-2 border-gray-100 flex items-start gap-4 md:gap-5 cursor-pointer group"
          >
            <motion.div
              className="bg-[#00a6ff] p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div>
              <h4 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-lg md:text-xl mb-1 md:mb-2 group-hover:text-[#00a6ff] transition-colors">
                Budget Friendly
              </h4>
              <p className="font-['Inter',sans-serif] text-[#686767] text-sm md:text-base">
                Affordable rates that fit your budget. Quality work at competitive prices.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="font-['Inter',sans-serif] text-[#686767] text-xs md:text-sm">
            designed and developed by Sahil. 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}