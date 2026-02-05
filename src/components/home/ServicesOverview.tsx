'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingCart, Briefcase, Heart, Truck, Megaphone, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/PremiumCard';

const services = [
  {
    icon: Package,
    title: 'General Trading',
    description: 'Comprehensive trading solutions for international commerce and business development.',
    href: '/services#trading',
    iconColor: 'blue' as const,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online sales platforms and digital commerce infrastructure.',
    href: '/services#ecommerce',
    iconColor: 'purple' as const,
  },
  {
    icon: Briefcase,
    title: 'Procurement Consulting',
    description: 'Strategic sourcing and procurement optimization for businesses worldwide.',
    href: '/services#procurement',
    iconColor: 'gold' as const,
  },
  {
    icon: Heart,
    title: 'Medical Facilitation',
    description: 'Healthcare coordination and medical treatment facilitation services.',
    href: '/services#medical',
    iconColor: 'green' as const,
  },
  {
    icon: Truck,
    title: 'Logistics & Freight',
    description: 'Global freight forwarding and comprehensive logistics management.',
    href: '/services#logistics',
    iconColor: 'blue' as const,
  },
  {
    icon: Megaphone,
    title: 'Advertising & Gifts',
    description: 'Marketing solutions and corporate gift trading services.',
    href: '/services#advertising',
    iconColor: 'orange' as const,
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-gradient relative overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-display-lg text-primary mb-4">
            Comprehensive Business Solutions
          </h2>
        </motion.div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
              delay={index * 0.1}
            >
              <Link 
                href={service.href}
                className="inline-flex items-center space-x-2 text-tertiary hover:text-primary-500 text-sm font-medium transition-colors duration-300 group/link"
              >
                <span>Learn more</span>
                <ArrowRight 
                  size={14} 
                  className="transition-transform duration-300 group-hover/link:translate-x-1" 
                />
              </Link>
            </ServiceCard>
          ))}
        </div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services" className="btn-primary group">
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}