'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export function Leadership() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-primary mb-4">
            Leadership & Management
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            Our experienced leadership team brings decades of combined expertise in international trading, business development, and regulatory compliance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-elevated"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-accent-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-accent-blue" />
              </div>
              <h3 className="text-heading-xl text-primary mb-2">
                Executive Leadership Team
              </h3>
              <p className="text-body-md text-secondary">
                Experienced professionals committed to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={24} className="text-accent-blue" />
                </div>
                <h4 className="text-heading-lg text-primary mb-2">
                  Executive Management
                </h4>
                <p className="text-body-sm text-secondary">
                  20+ years combined experience in international trading and business development
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={24} className="text-accent-orange" />
                </div>
                <h4 className="text-heading-lg text-primary mb-2">
                  Professional Qualifications
                </h4>
                <p className="text-body-sm text-secondary">
                  Advanced degrees in business, international trade, and regulatory compliance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-purple bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User size={24} className="text-accent-purple" />
                </div>
                <h4 className="text-heading-lg text-primary mb-2">
                  Industry Expertise
                </h4>
                <p className="text-body-sm text-secondary">
                  Deep knowledge across all our business divisions and international markets
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-default text-center">
              <p className="text-body-md text-secondary">
                Our leadership team is committed to maintaining the highest standards of corporate governance, 
                ethical business practices, and regulatory compliance across all operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}