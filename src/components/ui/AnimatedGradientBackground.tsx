'use client';

import React from 'react';

interface AnimatedGradientBackgroundProps {
  variant?: 'default' | 'orbs' | 'mesh' | 'section' | 'scroll' | 'icons' | 'premium' | 'luxury';
  className?: string;
  children?: React.ReactNode;
  iconDensity?: 'light' | 'medium' | 'dense';
}

export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  variant = 'default',
  className = '',
  children,
  iconDensity: _iconDensity = 'medium'
}) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'orbs':
        return 'floating-orbs';
      case 'mesh':
        return 'mesh-gradient';
      case 'section':
        return 'section-gradient';
      case 'scroll':
        return 'scroll-gradient';
      case 'icons':
        return '';
      default:
        return 'animated-gradient-bg';
    }
  };

  if (variant === 'icons' || variant === 'premium' || variant === 'luxury') {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  if (variant === 'orbs') {
    return (
      <div className={`floating-orbs ${className}`}>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
        <div className="orb orb-6"></div>
        {children}
      </div>
    );
  }

  if (children) {
    return (
      <div className={`${getBackgroundClass()} ${className}`}>
        {children}
      </div>
    );
  }

  return <div className={`${getBackgroundClass()} ${className}`} />;
};

// Utility component for gradient text
export const GradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}> = ({ children, className = '', animated = false }) => {
  return (
    <span className={`${animated ? 'text-gradient-animated' : 'bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent'} ${className}`}>
      {children}
    </span>
  );
};

// Utility component for gradient buttons
export const GradientButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  onClick?: () => void;
  href?: string;
}> = ({ children, className = '', animated = false, onClick, href }) => {
  const baseClasses = `${animated ? 'btn-gradient-animated' : 'bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500'} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

// Utility component for gradient cards
export const GradientCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`card ${hover ? 'card-gradient-hover' : ''} ${className}`}>
      {children}
    </div>
  );
};