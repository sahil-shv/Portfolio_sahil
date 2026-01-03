import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Send, Zap, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import { sendEmail, EmailData } from '../services/simpleEmailService';

function AnimatedContactSVG() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full max-w-[600px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Gradient Blobs */}
        <motion.path
          d="M100 150 Q150 50, 300 100 T500 200 Q550 300, 450 400 T200 420 Q50 350, 100 150 Z"
          fill="url(#backgroundGradient)"
          opacity="0.6"
          initial={{ scale: 0.9, opacity: 0.4 }}
          animate={{ scale: [0.9, 1, 0.95, 1], opacity: [0.4, 0.7, 0.5, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Secondary Background Blob */}
        <motion.path
          d="M400 80 Q480 60, 550 120 T580 250 Q560 320, 480 350 T350 320 Q300 280, 400 80 Z"
          fill="url(#secondaryGradient)"
          opacity="0.3"
          initial={{ scale: 1.1, opacity: 0.2 }}
          animate={{ scale: [1.1, 0.9, 1.05, 0.95], opacity: [0.2, 0.4, 0.3, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00a6ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#5cc6ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#b8e0f6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5cc6ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00a6ff" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
        </defs>

        {/* Enhanced Flying Plane with Trail */}
        <motion.g
          initial={{ x: -150, y: 0 }}
          animate={{ 
            x: [-150, 200],
            y: [0, -15, 5, -10, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Plane Trail/Contrail */}
          <motion.path
            d="M100 85 Q80 85, 60 85 T20 85"
            stroke="#00a6ff"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M105 90 Q85 90, 65 90 T25 90"
            stroke="#5cc6ff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          
          {/* Plane Tail */}
          <path
            d="M120 70 L140 85 L145 75 L125 60 Z"
            fill="url(#planeGradient)"
            stroke="#212020"
            strokeWidth="2"
          />
          
          {/* Plane Body */}
          <path
            d="M140 85 L240 100 L260 95 L265 85 L150 70 Z"
            fill="url(#planeGradient)"
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
          
          {/* Enhanced Windows with Reflections */}
          <circle cx="190" cy="85" r="4" fill="#B8E0F6" stroke="#212020" strokeWidth="1" />
          <circle cx="190" cy="83" r="1.5" fill="white" opacity="0.7" />
          <circle cx="210" cy="87" r="4" fill="#B8E0F6" stroke="#212020" strokeWidth="1" />
          <circle cx="210" cy="85" r="1.5" fill="white" opacity="0.7" />
          <circle cx="230" cy="90" r="4" fill="#B8E0F6" stroke="#212020" strokeWidth="1" />
          <circle cx="230" cy="88" r="1.5" fill="white" opacity="0.7" />
          
          {/* Propeller */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "282px 91px" }}
          >
            <line x1="275" y1="91" x2="289" y2="91" stroke="#212020" strokeWidth="2" strokeLinecap="round" />
            <line x1="282" y1="84" x2="282" y2="98" stroke="#212020" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        </motion.g>

        {/* Enhanced Direction Sign Post */}
        <g>
          {/* Post with Shadow */}
          <motion.rect
            x="342"
            y="152"
            width="4"
            height="196"
            rx="2"
            fill="#00000020"
            animate={{ scaleY: [1, 0.98, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "344px 250px" }}
          />
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
          
          {/* Top Sign with Enhanced Design */}
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
            {/* Sign Text */}
            <text x="415" y="175" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CONTACT</text>
            <text x="415" y="188" textAnchor="middle" fill="white" fontSize="8">THIS WAY</text>
            <circle cx="365" cy="180" r="3" fill="white" opacity="0.8" />
            <path d="M360 180 L370 175 L370 185 Z" fill="white" opacity="0.6" />
          </motion.g>
          
          {/* Bottom Sign with Enhanced Design */}
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
            {/* Sign Text */}
            <text x="415" y="235" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">PROJECTS</text>
            <text x="415" y="248" textAnchor="middle" fill="white" fontSize="8">PORTFOLIO</text>
            <circle cx="365" cy="240" r="3" fill="white" opacity="0.8" />
            <path d="M360 240 L370 235 L370 245 Z" fill="white" opacity="0.6" />
          </motion.g>
        </g>

        {/* Enhanced Traveler/Person */}
        <motion.g
          animate={{ 
            x: [0, -8, 0, 8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Head with better shading */}
          <circle cx="200" cy="200" r="18" fill="white" stroke="#212020" strokeWidth="2" />
          <circle cx="200" cy="198" r="15" fill="#f8f8f8" opacity="0.5" />
          
          {/* Hair/Hat with animation */}
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
          
          {/* Enhanced face details */}
          <circle cx="195" cy="202" r="1.5" fill="#212020" />
          <circle cx="205" cy="202" r="1.5" fill="#212020" />
          <motion.path 
            d="M195 210 Q200 212, 205 210" 
            stroke="#212020" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ d: [
              "M195 210 Q200 212, 205 210",
              "M195 210 Q200 214, 205 210",
              "M195 210 Q200 212, 205 210"
            ]}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Body/Torso with better design */}
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
          
          {/* Enhanced Shirt Details */}
          <line x1="200" y1="220" x2="200" y2="270" stroke="#686767" strokeWidth="1" />
          <circle cx="200" cy="230" r="2" fill="#00a6ff" />
          <circle cx="200" cy="245" r="2" fill="#00a6ff" />
          <circle cx="200" cy="260" r="2" fill="#00a6ff" />
          
          {/* Collar */}
          <path d="M190 220 Q200 215, 210 220" stroke="#212020" strokeWidth="1.5" fill="none" />
          
          {/* Arm pointing at sign with better animation */}
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
          
          {/* Hand pointing */}
          <motion.circle
            cx="250"
            cy="210"
            r="3"
            fill="white"
            stroke="#212020"
            strokeWidth="1.5"
            animate={{ 
              cx: [250, 252, 250],
              cy: [210, 208, 210]
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
            
            {/* Enhanced Luggage Handle */}
            <path
              d="M160 290 L165 295 L170 290"
              stroke="#212020"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="165" cy="292" r="2" fill="#212020" />
          </motion.g>
          
          {/* Enhanced Legs with better animation */}
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
          
          {/* Enhanced Shoes */}
          <ellipse cx="185" cy="365" rx="12" ry="5" fill="white" stroke="#212020" strokeWidth="2" />
          <ellipse cx="185" cy="363" rx="8" ry="3" fill="#f0f0f0" />
          <ellipse cx="215" cy="365" rx="12" ry="5" fill="white" stroke="#212020" strokeWidth="2" />
          <ellipse cx="215" cy="363" rx="8" ry="3" fill="#f0f0f0" />
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

        {/* Enhanced Floating Message Icons */}
        <motion.g
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="280" cy="140" r="15" fill="#00a6ff" opacity="0.9" />
          <circle cx="280" cy="138" r="12" fill="#5cc6ff" opacity="0.3" />
          <path d="M275 137 L280 142 L290 132" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="285" cy="135" r="2" fill="white" opacity="0.8" />
        </motion.g>

        <motion.g
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="520" cy="180" r="12" fill="#686767" opacity="0.9" />
          <circle cx="520" cy="178" r="9" fill="#888888" opacity="0.3" />
          <text x="520" y="185" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">!</text>
        </motion.g>

        {/* New Email Icon */}
        <motion.g
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="90" y="120" width="20" height="14" rx="2" fill="#00a6ff" opacity="0.8" stroke="white" strokeWidth="1" />
          <path d="M92 122 L100 128 L108 122" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        {/* New Phone Icon */}
        <motion.g
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <rect x="540" y="300" width="12" height="20" rx="3" fill="#686767" opacity="0.8" stroke="white" strokeWidth="1" />
          <circle cx="546" cy="305" r="1" fill="white" />
          <rect x="542" y="312" width="8" height="1" fill="white" opacity="0.7" />
        </motion.g>

        {/* Enhanced decorative elements */}
        <motion.line
          x1="300"
          y1="350"
          x2="320"
          y2="350"
          stroke="#00a6ff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
          animate={{ x2: [320, 330, 320], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="310"
          y1="365"
          x2="330"
          y2="365"
          stroke="#5cc6ff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
          animate={{ x2: [330, 340, 330], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.line
          x1="305"
          y1="380"
          x2="325"
          y2="380"
          stroke="#686767"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
          animate={{ x2: [325, 335, 325], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />

        {/* Floating Dots */}
        <motion.circle
          cx="80"
          cy="300"
          r="3"
          fill="#00a6ff"
          opacity="0.6"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="550"
          cy="120"
          r="2"
          fill="#5cc6ff"
          opacity="0.5"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="70"
          cy="180"
          r="2.5"
          fill="#686767"
          opacity="0.4"
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>
    </div>
  );
}

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [templateLoaded, setTemplateLoaded] = useState(false);

  // Listen for template population events from Services component
  useEffect(() => {
    const handlePopulateForm = (event: any) => {
      const template = event.detail.template;
      setFormData(prev => ({
        ...prev,
        message: template
      }));
      
      // Show template loaded indicator
      setTemplateLoaded(true);
      setTimeout(() => setTemplateLoaded(false), 3000);
    };

    window.addEventListener('populateContactForm', handlePopulateForm);
    
    return () => {
      window.removeEventListener('populateContactForm', handlePopulateForm);
    };
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSending(true);
    setError('');

    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New contact from ${formData.name}`
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        setIsSent(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setIsSent(false);
        }, 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && isValidEmail(formData.email);

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-['elegance',sans-serif] text-[#00a6ff] text-3xl md:text-[45px] mb-4">
            Contact
          </p>
          <h2 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-4xl md:text-[67px]">
            Work with <span className="text-[#686767]">me.</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          {/* Left Side - Animated SVG */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <AnimatedContactSVG />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-[#00a6ff] opacity-5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <h3 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-2xl md:text-3xl mb-6">
                Let's create something <span className="text-[#00a6ff]">amazing</span>
              </h3>

              {/* Template Loaded Indicator */}
              {templateLoaded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-['Inter',sans-serif] mb-6 flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ✓
                  </motion.div>
                  Template loaded! Please fill in your details and customize the message.
                </motion.div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    disabled={isSending || isSent}
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 font-['Inter',sans-serif] text-[#212020] transition-all duration-300 focus:outline-none focus:border-[#00a6ff] focus:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    disabled={isSending || isSent}
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 font-['Inter',sans-serif] text-[#212020] transition-all duration-300 focus:outline-none focus:border-[#00a6ff] focus:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={8}
                    disabled={isSending || isSent}
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 font-['Inter',sans-serif] text-[#212020] transition-all duration-300 focus:outline-none focus:border-[#00a6ff] focus:shadow-lg resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  
                  {/* Character count */}
                  <div className="absolute bottom-3 right-4 text-xs text-[#686767] font-['Inter',sans-serif]">
                    {formData.message.length} characters
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-['Inter',sans-serif]"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Send Button */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid || isSending || isSent}
                  className="relative w-full bg-[#00a6ff] text-white font-['Nohemi',sans-serif] font-bold py-5 px-8 rounded-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={isFormValid && !isSending && !isSent ? { scale: 1.02 } : {}}
                  whileTap={isFormValid && !isSending && !isSent ? { scale: 0.98 } : {}}
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00a6ff] via-[#0095e8] to-[#00a6ff]"
                    animate={isFormValid && !isSending && !isSent ? {
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

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSent ? (
                      <>
                        <motion.span
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          ✓
                        </motion.span>
                        Message Sent Successfully!
                      </>
                    ) : isSending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </span>

                  {/* Particle effects on hover */}
                  {isFormValid && !isSending && !isSent && (
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
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20"
        >
          {/* Fast Delivery */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 flex items-start gap-5 cursor-pointer group"
          >
            <motion.div
              className="bg-[#00a6ff] p-4 rounded-2xl"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h4 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-xl mb-2 group-hover:text-[#00a6ff] transition-colors">
                Fast Delivery
              </h4>
              <p className="font-['Inter',sans-serif] text-[#686767]">
                Quick turnaround without compromising quality. Your project delivered on time.
              </p>
            </div>
          </motion.div>

          {/* Budget Friendly */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 flex items-start gap-5 cursor-pointer group"
          >
            <motion.div
              className="bg-[#00a6ff] p-4 rounded-2xl"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <DollarSign className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h4 className="font-['Nohemi',sans-serif] font-bold text-[#212020] text-xl mb-2 group-hover:text-[#00a6ff] transition-colors">
                Budget Friendly
              </h4>
              <p className="font-['Inter',sans-serif] text-[#686767]">
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
          <p className="font-['Inter',sans-serif] text-[#686767] text-sm">
            designed and developed by Sahil. 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}