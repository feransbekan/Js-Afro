'use client';

import React from 'react';
import { AnimatedGradientBackground } from './AnimatedGradientBackground';

export const EnhancedGradientDemo: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <h1 className="text-display-xl mb-6">
            Enhanced Gradient System
          </h1>
          <p className="text-body-lg text-secondary max-w-2xl mx-auto">
            Experience the enhanced gradient backgrounds with increased visibility, 
            more dynamic animations, and richer color combinations.
          </p>
        </div>
        
        <div className="grid gap-8">
          {/* Default Animated Gradient */}
          <div className="relative p-8 rounded-2xl overflow-hidden border border-default">
            <AnimatedGradientBackground variant="default" />
            <div className="relative z-10 text-center">
              <h2 className="text-heading-xl mb-4">Default Animated Gradient</h2>
              <p className="text-body-md text-secondary">
                Enhanced with 6 colors, increased opacity, and dynamic scaling animation.
              </p>
            </div>
          </div>
          
          {/* Floating Orbs */}
          <div className="relative p-8 rounded-2xl overflow-hidden border border-default">
            <AnimatedGradientBackground variant="orbs" />
            <div className="relative z-10 text-center">
              <h2 className="text-heading-xl mb-4">Enhanced Floating Orbs</h2>
              <p className="text-body-md text-secondary">
                6 floating orbs with increased size, better gradients, and improved visibility.
              </p>
            </div>
          </div>
          
          {/* Section Gradient */}
          <div className="relative p-8 rounded-2xl overflow-hidden border border-default">
            <AnimatedGradientBackground variant="section" />
            <div className="relative z-10 text-center">
              <h2 className="text-heading-xl mb-4">Section Gradient</h2>
              <p className="text-body-md text-secondary">
                Enhanced section-specific gradient with more vibrant colors and faster animation.
              </p>
            </div>
          </div>
          
          {/* Mesh Gradient */}
          <div className="relative p-8 rounded-2xl overflow-hidden border border-default">
            <AnimatedGradientBackground variant="mesh" />
            <div className="relative z-10 text-center">
              <h2 className="text-heading-xl mb-4">Mesh Gradient</h2>
              <p className="text-body-md text-secondary">
                Complex mesh gradient with 5 radial gradients and enhanced color intensity.
              </p>
            </div>
          </div>
          
          {/* Gradient Overlay Demo */}
          <div className="gradient-overlay p-8 rounded-2xl border border-default">
            <div className="relative z-10 text-center">
              <h2 className="text-heading-xl mb-4">New Gradient Overlay</h2>
              <p className="text-body-md text-secondary">
                A new gradient overlay class for sections that need enhanced visual impact.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="card max-w-4xl mx-auto">
            <h2 className="text-heading-xl mb-4">Enhancement Summary</h2>
            <div className="text-left space-y-4 text-body-md text-secondary">
              <p>
                <strong>Increased Visibility:</strong> Gradient opacity increased from 0.1 to 0.25 for colors, 
                overall opacity from 0.6 to 1.0 in dark mode.
              </p>
              <p>
                <strong>More Colors:</strong> Added red and violet to the color palette for richer gradients.
              </p>
              <p>
                <strong>Enhanced Orbs:</strong> 6 floating orbs instead of 4, with larger sizes and better gradients.
              </p>
              <p>
                <strong>Dynamic Animation:</strong> Added scaling and rotation to gradient animations for more life.
              </p>
              <p>
                <strong>Better Performance:</strong> Optimized animations while maintaining visual impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};