'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Sparkles, Building2, Users, Globe, Clock, TrendingUp, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GradientText, GradientButton } from '@/components/ui/AnimatedGradientBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { 
      icon: Building2,
      number: '6+', 
      label: 'Business Divisions', 
      description: 'Specialized divisions covering trading, e-commerce, procurement, medical facilitation, logistics, and advertising',
      gradient: 'from-blue-500 to-purple-500',
      details: 'Each division operates with dedicated expertise and industry-specific knowledge'
    },
    { 
      icon: Users,
      number: '500+', 
      label: 'Global Clients', 
      description: 'Trusted by enterprises, SMEs, and organizations across multiple industries worldwide',
      gradient: 'from-yellow-500 to-orange-500',
      details: 'From startups to Fortune 500 companies across 6 continents'
    },
    { 
      icon: Globe,
      number: '50+', 
      label: 'Countries', 
      description: 'International presence with active operations and partnerships spanning five continents',
      gradient: 'from-purple-500 to-pink-500',
      details: 'Strategic partnerships in key markets across Americas, Europe, Asia, Africa, and Oceania'
    },
    { 
      icon: Clock,
      number: '24/7', 
      label: 'Support', 
      description: 'Round-the-clock customer support and business continuity across all time zones',
      gradient: 'from-emerald-500 to-teal-500',
      details: 'Multilingual support team with average response time under 2 hours'
    },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient">
      {/* Enhanced Background Effects with Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), rgba(16, 185, 129, 0.3))'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ 
            background: 'linear-gradient(-45deg, rgba(251, 191, 36, 0.3), rgba(239, 68, 68, 0.3), rgba(139, 92, 246, 0.3))'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.25, 0.08],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-2xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)'
          }}
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.05, 0.2, 0.05],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Enhanced Status Badge with Gradient */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-4 glass-card rounded-2xl px-8 py-4 mb-12 card-gradient-hover"
          >
            <Shield className="w-5 h-5 text-primary-500" />
            <span className="text-secondary font-medium text-body-sm">Licensed & Regulated</span>
            <div className="w-px h-4 bg-gradient-to-b from-primary-500 to-purple-500" />
            <GradientText className="font-medium text-body-sm">
              International Operations
            </GradientText>
          </motion.div>

          {/* Enhanced Hero Title with Animated Gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-bold text-primary mb-8 leading-none max-w-5xl mx-auto"
          >
            Premium International
            <br />
            <GradientText animated className="text-display-xl font-bold">
              Trading Solutions
            </GradientText>
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-secondary mb-12 max-w-3xl mx-auto"
          >
            Elevate your business with our comprehensive suite of trading, e-commerce, 
            procurement, medical facilitation, and logistics services. Trusted by enterprises worldwide.
          </motion.p>

          {/* Enhanced CTA Buttons with Gradients */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <GradientButton 
              href="/contact" 
              animated 
              className="group flex items-center gap-3 px-8 py-4 text-lg font-semibold"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </GradientButton>
            <Link href="/services" className="btn-secondary">
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Gap Separator */}
          <div className="h-8 md:h-10 lg:h-12" />

          {/* Enhanced Interactive Stats with Gradient Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative text-center glass-card rounded-lg p-4 card-gradient-hover cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
              >
                {/* Animated gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={hoveredStat === index ? {
                    scale: [1, 1.02, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon */}
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                </motion.div>

                {/* Number with counter animation */}
                <motion.div 
                  className={`text-heading-lg font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>
                
                {/* Label */}
                <div className="text-tertiary font-medium text-body-2xs group-hover:text-secondary transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {hoveredStat === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-64 pointer-events-none"
                    >
                      <div className="glass-card rounded-xl p-4 shadow-2xl border border-white/20">
                        <div className={`w-full h-1 rounded-full bg-gradient-to-r ${stat.gradient} mb-3`} />
                        <p className="text-body-xs text-secondary leading-relaxed mb-2">
                          {stat.description}
                        </p>
                        <div className="flex items-start space-x-2 pt-2 border-t border-white/10">
                          <TrendingUp className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <p className="text-body-2xs text-tertiary leading-relaxed">
                            {stat.details}
                          </p>
                        </div>
                      </div>
                      {/* Arrow pointer */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white/[0.08] backdrop-blur-xl border-l border-t border-white/20 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pulse effect on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${stat.gradient} opacity-0`}
                  animate={hoveredStat === index ? {
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.1, 1.2],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>


        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator with Gradient */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2" />
      </motion.div>
    </section>
  );
}