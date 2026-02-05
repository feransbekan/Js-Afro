'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface DivisionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  services: string[];
  stats: Record<string, string | undefined>;
  iconColor: 'blue' | 'orange' | 'purple' | 'green' | 'gold';
  ctaText?: string;
  featured?: boolean;
  delay?: number;
}

const iconColorMap = {
  blue: {
    bg: 'bg-blue-500/8',
    icon: 'text-blue-300',
    accent: 'text-blue-300',
    dot: 'bg-blue-300',
    glow: 'shadow-blue-500/10'
  },
  orange: {
    bg: 'bg-orange-500/8',
    icon: 'text-orange-300',
    accent: 'text-orange-300',
    dot: 'bg-orange-300',
    glow: 'shadow-orange-500/10'
  },
  purple: {
    bg: 'bg-purple-500/8',
    icon: 'text-purple-300',
    accent: 'text-purple-300',
    dot: 'bg-purple-300',
    glow: 'shadow-purple-500/10'
  },
  green: {
    bg: 'bg-emerald-500/8',
    icon: 'text-emerald-300',
    accent: 'text-emerald-300',
    dot: 'bg-emerald-300',
    glow: 'shadow-emerald-500/10'
  },
  gold: {
    bg: 'bg-amber-500/8',
    icon: 'text-amber-300',
    accent: 'text-amber-300',
    dot: 'bg-amber-300',
    glow: 'shadow-amber-500/10'
  }
};

export function DivisionCard({
  icon: Icon,
  title,
  subtitle,
  description,
  services,
  stats,
  iconColor,
  ctaText = 'Learn More',
  featured = false,
  delay = 0
}: DivisionCardProps) {
  const colors = iconColorMap[iconColor];

  // Different layouts for featured vs regular cards
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
        viewport={{ once: true }}
        className="
          group relative overflow-hidden
          bg-white/[0.15] backdrop-blur-xl
          dark:bg-white/[0.12] 
          light:bg-white/[0.98]
          rounded-3xl p-8
          shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)]
          hover:bg-white/[0.18]
          dark:hover:bg-white/[0.15]
          light:hover:bg-white/[1.0]
          hover:shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.12)]
          hover:-translate-y-3
          transition-all duration-700 ease-out
          border-l-4 border-l-transparent
          hover:border-l-4
        "
        style={{
          '--hover-border-color': colors.accent.replace('text-', 'border-')
        } as React.CSSProperties}
      >
        <div className="relative z-10">
          <div className="flex flex-col space-y-6">
            {/* Header */}
            <div className="flex items-start space-x-6">
              <div className={`
                flex items-center justify-center
                w-16 h-16 rounded-2xl
                ${colors.bg} ${colors.glow}
                backdrop-blur-sm
                transition-all duration-500
                group-hover:scale-110
                flex-shrink-0
                shadow-lg
              `}>
                <Icon size={28} className={`${colors.icon} transition-all duration-500`} />
              </div>
              
              <div className="flex-1 min-w-0 space-y-2">
                {subtitle && (
                  <div className={`text-sm font-medium ${colors.accent} uppercase tracking-wider`}>
                    {subtitle}
                  </div>
                )}
                <h3 className="
                  text-xl font-bold text-primary
                  tracking-tight leading-tight
                  transition-colors duration-500
                ">
                  {title}
                </h3>
                <p className="
                  text-secondary text-sm leading-relaxed
                  transition-colors duration-500
                ">
                  {description}
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(stats)
                .filter(([, value]) => value !== undefined)
                .slice(0, 3)
                .map(([key, value], idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-lg font-bold ${colors.accent} mb-1`}>
                    {value}
                  </div>
                  <div className="text-xs text-secondary uppercase tracking-wider">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Services Preview */}
            <div className="flex flex-wrap gap-2">
              {services.slice(0, 3).map((service, idx) => (
                <span key={idx} className="
                  px-3 py-1 rounded-full text-xs
                  bg-white/[0.08] text-secondary
                  dark:bg-white/[0.06]
                  light:bg-gray-100/[0.8]
                  backdrop-blur-sm
                ">
                  {service}
                </span>
              ))}
              {services.length > 3 && (
                <span className="
                  px-3 py-1 rounded-full text-xs
                  bg-white/[0.08] text-secondary
                  dark:bg-white/[0.06]
                  light:bg-gray-100/[0.8]
                  backdrop-blur-sm
                ">
                  +{services.length - 3} more
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="
                  inline-flex items-center space-x-2
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r from-primary-500 to-primary-600
                  text-white text-sm font-semibold
                  hover:from-primary-600 hover:to-primary-700
                  hover:shadow-lg hover:shadow-primary-500/25
                  hover:-translate-y-0.5
                  transition-all duration-300 ease-out
                  group/btn
                "
              >
                <span>{ctaText}</span>
                <ArrowRight 
                  size={14} 
                  className="transition-transform duration-300 group-hover/btn:translate-x-1" 
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Regular card layout
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true }}
      className="
        group relative overflow-hidden
        bg-white/[0.08] backdrop-blur-xl
        dark:bg-white/[0.06] 
        light:bg-white/[0.95]
        rounded-2xl p-6
        shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06)]
        hover:bg-white/[0.12]
        dark:hover:bg-white/[0.08]
        light:hover:bg-white/[1.0]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)]
        hover:-translate-y-1
        transition-all duration-500 ease-out
      "
    >
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          {/* Icon & Title */}
          <div className="lg:col-span-2 flex items-center space-x-4">
            <div className={`
              flex items-center justify-center
              w-12 h-12 rounded-xl
              ${colors.bg}
              transition-all duration-300
              group-hover:scale-105
              flex-shrink-0
            `}>
              <Icon size={20} className={`${colors.icon} transition-all duration-300`} />
            </div>
            
            <div className="min-w-0">
              {subtitle && (
                <div className={`text-xs font-medium ${colors.accent} uppercase tracking-wider mb-1`}>
                  {subtitle}
                </div>
              )}
              <h3 className="
                text-lg font-semibold text-primary
                tracking-tight leading-tight
                transition-colors duration-300
              ">
                {title}
              </h3>
              <p className="
                text-secondary text-sm leading-relaxed mt-1
                transition-colors duration-300
                line-clamp-2
              ">
                {description}
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="flex justify-center lg:justify-start space-x-4">
            {Object.entries(stats)
              .filter(([, value]) => value !== undefined)
              .slice(0, 2)
              .map(([key, value], idx) => (
              <div key={idx} className="text-center">
                <div className={`text-base font-bold ${colors.accent}`}>
                  {value}
                </div>
                <div className="text-xs text-secondary">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-end">
            <Link 
              href="/contact" 
              className="
                inline-flex items-center space-x-2
                px-4 py-2 rounded-lg
                bg-white/[0.08] backdrop-blur-sm
                dark:bg-white/[0.06]
                light:bg-white/[0.9]
                text-primary text-sm font-medium
                hover:bg-white/[0.12]
                dark:hover:bg-white/[0.08]
                light:hover:bg-white/[1.0]
                hover:-translate-y-0.5
                transition-all duration-300 ease-out
                group/btn
              "
            >
              <span>{ctaText}</span>
              <ArrowRight 
                size={12} 
                className="transition-transform duration-300 group-hover/btn:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}