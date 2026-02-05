'use client';

import React from 'react';

interface MinimalFloatingIconsProps {
  className?: string;
}

export const MinimalFloatingIcons: React.FC<MinimalFloatingIconsProps> = ({
  className = ''
}) => {
  // Simple trading-related icons
  const tradingIcons = [
    // Chart icon
    <svg key="chart" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M3 3v18h18" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 12l4-4 4 4 4-4" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7" cy="12" r="1" fill="url(#gradient1)"/>
      <circle cx="11" cy="8" r="1" fill="url(#gradient1)"/>
      <circle cx="15" cy="12" r="1" fill="url(#gradient1)"/>
      <circle cx="19" cy="8" r="1" fill="url(#gradient1)"/>
    </svg>,
    
    // Globe icon
    <svg key="globe" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" stroke="url(#gradient2)" strokeWidth="2"/>
      <path d="M2 12h20" stroke="url(#gradient2)" strokeWidth="2"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="url(#gradient2)" strokeWidth="2"/>
    </svg>,
    
    // Package icon
    <svg key="package" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" stroke="url(#gradient3)" strokeWidth="2"/>
      <path d="M3.29 7 12 12l8.71-5" stroke="url(#gradient3)" strokeWidth="2"/>
      <path d="M12 22V12" stroke="url(#gradient3)" strokeWidth="2"/>
    </svg>,
    
    // Handshake icon
    <svg key="handshake" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" stroke="url(#gradient4)" strokeWidth="2"/>
      <path d="M8 12h2a2 2 0 1 1 0 4H7c-.6 0-1.1-.2-1.4-.6L1 10" stroke="url(#gradient4)" strokeWidth="2"/>
      <path d="M12 12V8a2 2 0 0 1 2-2h3" stroke="url(#gradient4)" strokeWidth="2"/>
      <path d="M12 12v4a2 2 0 0 0 2 2h3" stroke="url(#gradient4)" strokeWidth="2"/>
    </svg>,
    
    // Dollar icon
    <svg key="dollar" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <line x1="12" y1="1" x2="12" y2="23" stroke="url(#gradient5)" strokeWidth="2"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="url(#gradient5)" strokeWidth="2"/>
    </svg>,
    
    // Target icon
    <svg key="target" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" stroke="url(#gradient6)" strokeWidth="2"/>
      <circle cx="12" cy="12" r="6" stroke="url(#gradient6)" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill="url(#gradient6)"/>
    </svg>,
  ];

  // Fixed positions for consistency
  const positions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '8%' },
    { top: '40%', left: '3%' },
    { top: '60%', right: '5%' },
    { top: '80%', left: '7%' },
    { top: '30%', right: '15%' },
  ];

  return (
    <div className={`fixed inset-0 pointer-events-none z-[1] overflow-hidden ${className}`}>
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {positions.map((position, index) => {
        const icon = tradingIcons[index % tradingIcons.length];
        
        return (
          <div
            key={index}
            className="absolute animate-float-gradient"
            style={{
              ...position,
              animationDelay: `${index * 2}s`,
              animationDuration: '10s',
            }}
          >
            <div className="gradient-icon-glow">
              {icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};