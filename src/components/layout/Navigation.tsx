'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when clicking outside
  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        className="glass-card sticky top-4 z-50 mx-4 mt-4 mb-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex-shrink-0 min-w-0 pl-2 lg:pl-0"
            >
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold text-sm sm:text-lg">JS</span>
                </motion.div>
                <span className="text-sm sm:text-heading-lg text-primary font-semibold group-hover:text-primary-500 transition-colors duration-300 truncate">
                  JS Afro Trading
                </span>
              </Link>
            </motion.div>

            {/* Navigation Items - Desktop */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <nav className="flex items-center gap-8 xl:gap-12">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative text-body-md font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                        pathname === item.href
                          ? 'text-primary bg-white/5'
                          : 'text-secondary hover:text-primary-500 hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-accent rounded-full"
                          layoutId="activeTab"
                          initial={false}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
              
            {/* Right Side Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-shrink-0">
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <ThemeToggle />
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="ml-4"
              >
                <Link href="/contact" className="btn-cta">
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu controls */}
            <div className="lg:hidden flex items-center gap-3 flex-shrink-0 pr-2">
              {/* Mobile Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="p-1"
              >
                <ThemeToggle />
              </motion.div>
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-secondary hover:text-primary transition-colors duration-200 p-2.5 rounded-lg hover:bg-white/5 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="lg:hidden border-t border-default mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-body-md font-medium transition-all duration-300 hover:text-primary-500 hover:bg-surface rounded-lg ${
                          pathname === item.href
                            ? 'text-primary-500 bg-surface'
                            : 'text-secondary'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="px-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <Link 
                      href="/contact" 
                      className="btn-cta w-full justify-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}