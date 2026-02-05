'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variants = {
    primary: 'bg-accent-primary text-bg-primary hover:bg-accent-secondary focus:ring-accent-primary/50 shadow-md hover:shadow-accent',
    secondary: 'bg-surface-secondary text-text-primary border border-border-primary hover:bg-surface-tertiary hover:border-border-secondary focus:ring-accent-primary/50 backdrop-blur-md',
    outline: 'border border-border-primary text-text-secondary hover:bg-surface-primary hover:border-accent-primary hover:text-accent-primary focus:ring-accent-primary/50',
    ghost: 'text-text-secondary hover:bg-surface-primary hover:text-text-primary focus:ring-accent-primary/50',
  };

  const sizes = {
    sm: 'px-3 py-2 text-body-sm rounded-md',
    md: 'px-4 py-2.5 text-body-md rounded-lg',
    lg: 'px-6 py-3 text-body-lg rounded-lg',
  };

  return (
    <motion.button
      type={type}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;