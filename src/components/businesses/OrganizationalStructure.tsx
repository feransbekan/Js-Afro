'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Target, Award } from 'lucide-react';
import { FeatureCard } from '../ui/PremiumCard';

const organizationalFeatures = [
  {
    icon: Building2,
    title: 'Specialized Focus',
    description: 'Each division maintains deep expertise in their specific industry vertical.',
    iconColor: 'blue' as const,
  },
  {
    icon: Users,
    title: 'Expert Teams',
    description: 'Dedicated professionals with proven track records in their domains.',
    iconColor: 'orange' as const,
  },
  {
    icon: Target,
    title: 'Clear Objectives',
    description: 'Well-defined goals and measurable outcomes for every engagement.',
    iconColor: 'purple' as const,
  },
  {
    icon: Award,
    title: 'Quality Standards',
    description: 'Rigorous quality control and continuous improvement processes.',
    iconColor: 'green' as const,
  },
];

export function OrganizationalStructure() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-display-lg text-primary mb-4">
            Organizational Excellence
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto text-center">
            Delivering specialized expertise and exceptional service across all business divisions.
          </p>
        </div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {organizationalFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        {/* CTA Section */}
        <div className="
          bg-white/[0.06] backdrop-blur-xl
          dark:bg-white/[0.02]
          light:bg-white/[0.95]
          border border-white/[0.12]
          dark:border-white/[0.08]
          light:border-gray-200/[0.5]
          rounded-3xl p-12
          shadow-xl shadow-black/20
          text-center max-w-4xl mx-auto
        ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md text-primary mb-4">
              Ready to Work with Our Expert Divisions?
            </h2>
            <p className="text-body-lg text-secondary mb-8 max-w-2xl mx-auto">
              Contact us to discuss which division can best serve your business needs 
              and how we can help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link href="/contact" className="btn-cta">
                Contact Our Team
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>

            {/* Gap Separator */}
            <div className="h-6 md:h-8" />

            <div className="pt-4 border-t border-white/[0.12] dark:border-white/[0.08] light:border-gray-200/[0.5]">
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-body-sm text-secondary">Licensed Operations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-body-sm text-secondary">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-body-sm text-secondary">24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}