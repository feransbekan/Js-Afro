'use client';

import React from 'react';

interface GradientSectionProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'vibrant' | 'mesh' | 'radial' | 'animated';
  className?: string;
  as?: React.ElementType;
}

export const GradientSection: React.FC<GradientSectionProps> = ({
  children,
  variant = 'subtle',
  className = '',
  as: Component = 'section'
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'vibrant':
        return 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10';
      case 'mesh':
        return 'mesh-gradient';
      case 'radial':
        return 'bg-radial-gradient';
      case 'animated':
        return 'section-gradient';
      default:
        return 'bg-gradient-to-b from-transparent via-blue-500/5 to-transparent';
    }
  };

  return (
    <Component className={`relative ${getGradientClass()} ${className}`}>
      {children}
    </Component>
  );
};

// Utility for gradient overlays
export const GradientOverlay: React.FC<{
  variant?: 'dark' | 'light' | 'colorful';
  opacity?: number;
  className?: string;
}> = ({ variant = 'dark', opacity = 0.5, className = '' }) => {
  const getOverlayGradient = () => {
    switch (variant) {
      case 'light':
        return 'bg-gradient-to-b from-white/20 to-white/5';
      case 'colorful':
        return 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20';
      default:
        return 'bg-gradient-to-b from-black/30 to-black/10';
    }
  };

  return (
    <div 
      className={`absolute inset-0 ${getOverlayGradient()} ${className}`}
      style={{ opacity }}
    />
  );
};