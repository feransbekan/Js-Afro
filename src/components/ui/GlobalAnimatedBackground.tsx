'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const GlobalAnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/30 dark:from-gray-950 dark:via-blue-950/50 dark:to-purple-950/30 light:from-gray-50 light:via-blue-50/50 light:to-purple-50/30" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20 hero-gradient-bg"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08), rgba(16, 185, 129, 0.08))
            `
          }}
        />
      </div>

      {/* Global Floating Icons - More distributed */}
      <div className="absolute inset-0">
        {/* Trading Chart Icon - Top Left */}
        <motion.div
          className="absolute top-[15%] left-[8%] hero-floating-icon"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-400">
            <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 12l4-4 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        {/* Globe Icon - Top Right */}
        <motion.div
          className="absolute top-[20%] right-[10%] hero-floating-icon"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -360, 0],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Package Icon - Middle Left */}
        <motion.div
          className="absolute top-[45%] left-[5%] hero-floating-icon"
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
            opacity: [0.07, 0.13, 0.07],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M3.29 7 12 12l8.71-5" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 22V12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Handshake Icon - Middle Right */}
        <motion.div
          className="absolute top-[50%] right-[7%] hero-floating-icon"
          animate={{
            y: [0, 18, 0],
            rotate: [0, 3, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
            <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 12h2a2 2 0 1 1 0 4H7c-.6 0-1.1-.2-1.4-.6L1 10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 12V8a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 12v4a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Dollar Sign Icon - Lower Left */}
        <motion.div
          className="absolute top-[75%] left-[12%] hero-floating-icon"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
            <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Truck Icon - Lower Right */}
        <motion.div
          className="absolute top-[80%] right-[15%] hero-floating-icon"
          animate={{
            y: [0, 10, 0],
            x: [0, -15, 0],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-orange-400">
            <rect x="1" y="3" width="15" height="13" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Additional Icons for Better Distribution */}
        
        {/* Medical Cross - Top Center */}
        <motion.div
          className="absolute top-[25%] left-[45%] hero-floating-icon"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-red-400">
            <path d="M9 12h6" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 9v6" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>

        {/* Target Icon - Middle Center */}
        <motion.div
          className="absolute top-[60%] left-[50%] hero-floating-icon"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            opacity: [0.06, 0.11, 0.06],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        </motion.div>

        {/* Blockchain Icon - Right Side */}
        <motion.div
          className="absolute top-[35%] right-[25%] hero-floating-icon"
          animate={{
            y: [0, -18, 0],
            x: [0, 10, 0],
            opacity: [0.07, 0.13, 0.07],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" rx="1"/>
            <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" rx="1"/>
            <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" rx="1"/>
            <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" rx="1"/>
            <path d="M9 6h6" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 18h6" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 9v6" stroke="currentColor" strokeWidth="2"/>
            <path d="M18 9v6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};