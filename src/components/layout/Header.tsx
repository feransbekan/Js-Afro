'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-card border-b border-primary'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff8533] to-[#ffb885] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-sm">JS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-heading-lg font-semibold text-primary tracking-tight">
                JS Afro Trading
              </h1>
              <p className="text-label-md text-tertiary font-medium tracking-wide uppercase">
                FZC LLC
              </p>
            </div>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-accent transition-colors duration-200 font-medium text-body-md relative group"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Premium Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="flex items-center space-x-2 px-3 py-2 text-secondary hover:text-accent transition-colors duration-200 font-medium rounded-lg hover:bg-white hover:bg-opacity-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-label-md">EN</span>
            </motion.button>
            
            <button className="btn-premium flex items-center space-x-2">
              <Wallet className="w-4 h-4" />
              <span>Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-secondary hover:text-accent transition-colors duration-200 rounded-lg hover:bg-white hover:bg-opacity-5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass-elevated border-t border-primary"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-heading-lg font-medium text-secondary hover:text-accent transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <div className="pt-6 border-t border-primary space-y-4">
                <button className="flex items-center space-x-3 text-secondary hover:text-accent transition-colors duration-200 font-medium">
                  <Globe className="w-4 h-4" />
                  <span>English / العربية</span>
                </button>
                <button className="btn-premium w-full flex items-center justify-center space-x-2">
                  <Wallet className="w-4 h-4" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;