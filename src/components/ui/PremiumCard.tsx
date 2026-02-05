'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface PremiumCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  variant?: 'default' | 'elevated' | 'minimal';
  iconColor?: 'blue' | 'orange' | 'purple' | 'green' | 'gold';
  className?: string;
  delay?: number;
}

const iconColorMap = {
  blue: {
    bg: 'bg-primary-500/10',
    icon: 'text-primary-400',
    gradient: 'from-blue-500/20 via-blue-400/10 to-transparent',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/30',
  },
  orange: {
    bg: 'bg-orange-500/10',
    icon: 'text-orange-400',
    gradient: 'from-orange-500/20 via-orange-400/10 to-transparent',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/30',
  },
  purple: {
    bg: 'bg-purple-500/10',
    icon: 'text-purple-400',
    gradient: 'from-purple-500/20 via-purple-400/10 to-transparent',
    glow: 'shadow-purple-500/20',
    border: 'border-purple-500/30',
  },
  green: {
    bg: 'bg-emerald-500/10',
    icon: 'text-emerald-400',
    gradient: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/30',
  },
  gold: {
    bg: 'bg-amber-500/10',
    icon: 'text-amber-400',
    gradient: 'from-amber-500/20 via-amber-400/10 to-transparent',
    glow: 'shadow-amber-500/20',
    border: 'border-amber-500/30',
  }
};

export function PremiumCard({
  icon: Icon,
  title,
  description,
  children,
  variant = 'default',
  iconColor = 'blue',
  className = '',
  delay = 0
}: PremiumCardProps) {
  const colors = iconColorMap[iconColor];
  
  const baseClasses = "group relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2";
  
  const variantClasses = {
    default: "card",
    elevated: "card-elevated",
    minimal: "bg-white/[0.04] backdrop-blur-lg rounded-xl p-6 shadow-sm hover:bg-white/[0.06] hover:shadow-md border border-white/8 hover:border-white/12"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="relative z-10">
        {/* Icon Container */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${colors.bg} transition-all duration-300 group-hover:scale-105`}>
          <Icon size={24} className={`${colors.icon} transition-all duration-300`} />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-primary tracking-tight leading-tight transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-secondary text-base leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Additional content */}
        {children && (
          <div className="mt-6 pt-6 border-t border-default">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Specialized card variants
export function FeatureCard(props: Omit<PremiumCardProps, 'variant'>) {
  return <PremiumCard {...props} variant="default" />;
}

export function ServiceCard(props: Omit<PremiumCardProps, 'variant'>) {
  return <PremiumCard {...props} variant="elevated" />;
}

export function StatCard({ 
  value, 
  label, 
  icon: Icon, 
  iconColor = 'blue',
  delay = 0 
}: {
  value: string;
  label: string;
  icon: LucideIcon;
  iconColor?: PremiumCardProps['iconColor'];
  delay?: number;
}) {
  const colors = iconColorMap[iconColor];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative overflow-hidden rounded-xl p-4 cursor-pointer bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/[0.12] hover:border-white/[0.20] shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Animated glow effect */}
      <motion.div 
        className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 flex items-center space-x-3">
        {/* Enhanced icon container */}
        <motion.div 
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${colors.glow} group-hover:shadow-lg`}
          whileHover={{ 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Icon size={18} className={`${colors.icon} transition-all duration-300 group-hover:scale-110`} />
        </motion.div>
        
        <div className="space-y-1 flex-1">
          <motion.div 
            className="text-2xl font-bold text-primary tracking-tight leading-tight"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            viewport={{ once: true }}
          >
            {value}
          </motion.div>
          <div className="text-xs text-secondary font-medium group-hover:text-primary transition-colors duration-300 leading-tight">
            {label}
          </div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
    </motion.div>
  );
}