'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'minimal' | 'glass';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({
  children,
  variant = 'default',
  className,
  hover = true,
  onClick,
}: CardProps) => {
  const baseClasses = "group relative overflow-hidden transition-all duration-700 ease-out";
  
  const variants = {
    default: "bg-white/[0.06] backdrop-blur-xl rounded-2xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.03)]",
    elevated: "bg-white/[0.08] backdrop-blur-xl rounded-3xl p-12 shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-white/[0.10] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.10),0_0_32px_rgba(255,255,255,0.04)]",
    minimal: "bg-white/[0.04] backdrop-blur-lg rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/[0.06] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06),0_0_16px_rgba(255,255,255,0.02)]",
    glass: "bg-white/[0.05] backdrop-blur-xl rounded-xl p-8 shadow-[0_6px_28px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/[0.07] hover:shadow-[0_10px_36px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.07),0_0_20px_rgba(255,255,255,0.02)]"
  };

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      className={cn(baseClasses, variants[variant], className)}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      whileTap={onClick ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ambient glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent rounded-inherit" />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
};

export default Card;