'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Award, Globe, CheckCircle, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity & Transparency',
    description: 'We conduct all business with complete honesty and transparency, ensuring our clients always know exactly what to expect.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'We maintain the highest professional standards in all our operations, from client communication to service delivery.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Our clients\' success is our success. We tailor our services to meet specific needs and exceed expectations.',
  },
  {
    icon: CheckCircle,
    title: 'Regulatory Compliance',
    description: 'We strictly adhere to all international regulations and maintain full compliance across all jurisdictions.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We understand international markets and cultural nuances, enabling effective cross-border business solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We constantly evolve our services and processes to deliver better outcomes and stay ahead of industry trends.',
  },
];

export function CompanyValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            These fundamental principles guide our decisions, shape our culture, and define how we serve our clients every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-12 h-12 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <value.icon size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-heading-lg text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-body-md text-secondary">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}