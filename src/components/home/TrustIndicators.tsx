'use client';

import { Shield, Award, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatCard } from '../ui/PremiumCard';

const trustItems = [
  {
    icon: Shield,
    title: 'Licensed & Regulated',
    description: 'Fully compliant with international trading regulations',
    iconColor: 'blue' as const,
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'Recognized certifications across all business divisions',
    iconColor: 'gold' as const,
  },
  {
    icon: Globe,
    title: 'Global Operations',
    description: 'Serving clients in 50+ countries worldwide',
    iconColor: 'purple' as const,
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: 'ISO certified processes and quality management',
    iconColor: 'green' as const,
  },
];

export function TrustIndicators() {
  return (
    <section className="section-padding bg-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
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
            Built on Trust & Excellence
          </h2>
        </motion.div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="text-center p-6 cursor-pointer"
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.iconColor === 'blue' ? 'bg-blue-500' : item.iconColor === 'gold' ? 'bg-amber-500' : item.iconColor === 'purple' ? 'bg-purple-500' : 'bg-emerald-500'}`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-primary mb-3 min-h-[3rem] flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-secondary leading-relaxed min-h-[2.5rem] flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-4">
            <StatCard
              icon={CheckCircle}
              value="99.9%"
              label="Client Satisfaction"
              iconColor="green"
              delay={0.1}
            />
            <StatCard
              icon={Award}
              value="4+ Years"
              label="Established Excellence"
              iconColor="blue"
              delay={0.2}
            />
            <StatCard
              icon={Shield}
              value="Zero"
              label="Compliance Issues"
              iconColor="gold"
              delay={0.3}
            />
          </div>
          
          {/* Gap Separator */}
          <div className="h-6 md:h-8" />
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { label: 'ISO Certified', color: 'bg-emerald-400' },
              { label: 'Regulatory Compliant', color: 'bg-blue-400' },
              { label: 'Audited Annually', color: 'bg-amber-400' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="trust-badge"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`w-2 h-2 ${badge.color} rounded-full`}></div>
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}