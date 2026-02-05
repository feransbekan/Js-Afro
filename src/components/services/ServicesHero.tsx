'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display-xl text-primary mb-6">
              Comprehensive Business Solutions
            </h1>
            <p className="text-body-lg text-secondary mb-8">
              From international trading to medical facilitation, we provide professional services 
              across multiple industries to support your business growth and success.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-accent-green" />
                <span className="text-body-sm text-secondary font-medium">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-accent-green" />
                <span className="text-body-sm text-secondary font-medium">Global Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-accent-green" />
                <span className="text-body-sm text-secondary font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-accent-green" />
                <span className="text-body-sm text-secondary font-medium">Compliance Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}