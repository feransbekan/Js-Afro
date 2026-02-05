'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
}: BadgeProps) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-lg transition-all duration-200';
  
  const variants = {
    primary: 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20',
    secondary: 'bg-surface-secondary text-text-secondary border border-border-primary',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
    error: 'bg-error/10 text-error border border-error/20',
  };

  const sizes = {
    sm: 'px-2 py-1 text-label-sm',
    md: 'px-3 py-1.5 text-label-md',
    lg: 'px-4 py-2 text-label-lg',
  };

  return (
    <motion.span
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
};

export default Badge;