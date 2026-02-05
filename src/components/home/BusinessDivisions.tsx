'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Globe, Users, TrendingUp, Package, ShoppingCart, Briefcase, Heart, Truck, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { PremiumCard, StatCard } from '../ui/PremiumCard';

const divisions = [
  {
    icon: Package,
    title: 'International Trading Division',
    focus: 'Commodities, Import/Export, Market Development',
    stats: '200+ Active Partners',
    iconColor: 'blue' as const,
  },
  {
    icon: ShoppingCart,
    title: 'Digital Commerce Division',
    focus: 'E-Commerce, Digital Sales, Online Platforms',
    stats: '50+ Platforms Managed',
    iconColor: 'purple' as const,
  },
  {
    icon: Briefcase,
    title: 'Consulting Services Division',
    focus: 'Procurement, Strategy, Business Optimization',
    stats: '100+ Projects Completed',
    iconColor: 'gold' as const,
  },
  {
    icon: Heart,
    title: 'Healthcare Services Division',
    focus: 'Medical Facilitation, Healthcare Coordination',
    stats: '1000+ Patients Served',
    iconColor: 'green' as const,
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain Division',
    focus: 'Freight Forwarding, Supply Chain, Logistics',
    stats: '10,000+ Shipments Handled',
    iconColor: 'blue' as const,
  },
  {
    icon: Megaphone,
    title: 'Marketing & Advertising Division',
    focus: 'Advertising, Marketing, Corporate Gifts',
    stats: '300+ Campaigns Delivered',
    iconColor: 'orange' as const,
  },
];

export function BusinessDivisions() {
  return (
    <section className="section-padding bg-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-display-lg text-primary mb-4">
            Organized for Excellence
          </h2>
        </motion.div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {divisions.map((division, index) => (
            <PremiumCard
              key={index}
              icon={division.icon}
              title={division.title}
              description={`${division.focus} • ${division.stats}`}
              iconColor={division.iconColor}
              delay={index * 0.1}
              variant="elevated"
            />
          ))}
        </div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        {/* Division Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StatCard
              icon={Building2}
              value="6"
              label="Specialized Divisions"
              iconColor="blue"
              delay={0.1}
            />
            <StatCard
              icon={Globe}
              value="50+"
              label="Countries Served"
              iconColor="gold"
              delay={0.2}
            />
            <StatCard
              icon={Users}
              value="500+"
              label="Active Clients"
              iconColor="purple"
              delay={0.3}
            />
            <StatCard
              icon={TrendingUp}
              value="95%"
              label="Growth Rate"
              iconColor="green"
              delay={0.4}
            />
          </div>
        </motion.div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/businesses" className="btn-primary group">
            Explore All Divisions
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}