'use client';

import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';

export function ClientNavigation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use a timeout to avoid synchronous setState in effect
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    // Return a placeholder navigation during SSR
    return (
      <nav className="glass-card sticky top-4 z-50 mx-4 mt-4 mb-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center h-20">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <span className="text-heading-lg text-primary font-semibold">
                  JS Afro Trading
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return <Navigation />;
}