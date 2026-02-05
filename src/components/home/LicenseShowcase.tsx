'use client';

import { motion } from 'framer-motion';
import { Shield, Calendar, ExternalLink, Download, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const LicenseShowcase = () => {
  const calculateDaysRemaining = () => {
    const expiryDate = new Date('2026-08-18');
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section className="py-32 bg-bg-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-display-lg font-bold text-text-primary mb-6 tracking-tight"
          >
            Licensed <span className="gradient-text">&</span> Verified
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-body-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Our UAE Free Zone license represents our commitment to regulatory excellence 
            and transparent business practices in the Web3 ecosystem.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Premium License Card */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="card-elevated overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -4
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Premium Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center shadow-accent">
                    <Shield className="w-6 h-6 text-bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-heading-xl font-semibold text-text-primary">UAE Free Zone</h3>
                    <p className="text-text-tertiary font-medium">Business License</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 px-3 py-1.5 bg-success/10 border border-success/20 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-success text-label-md font-medium">Active</span>
                </div>
              </div>

              {/* License Number */}
              <div className="mb-8">
                <p className="text-text-quaternary text-label-md mb-2 font-medium uppercase tracking-wide">License Number</p>
                <p className="text-display-sm font-bold gradient-text tracking-wide">
                  4423555.01
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-text-quaternary text-label-md mb-2 font-medium uppercase tracking-wide">Issued</p>
                  <p className="text-text-secondary font-medium">August 18, 2023</p>
                </div>
                <div>
                  <p className="text-text-quaternary text-label-md mb-2 font-medium uppercase tracking-wide">Expires</p>
                  <p className="text-text-secondary font-medium">August 18, 2026</p>
                </div>
              </div>

              {/* Validity Indicator */}
              <motion.div
                className="glass-surface rounded-lg p-6 border border-accent-primary/20"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255, 133, 51, 0.1)',
                    '0 0 30px rgba(255, 133, 51, 0.2)',
                    '0 0 20px rgba(255, 133, 51, 0.1)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-accent-primary" />
                    <span className="text-text-secondary font-medium">Valid for</span>
                  </div>
                  <span className="text-heading-xl font-bold gradient-text">
                    {calculateDaysRemaining()} days
                  </span>
                </div>
              </motion.div>

              {/* Premium Border Accent */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-tertiary" />
            </motion.div>
          </motion.div>

          {/* Premium Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Authority Info */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-heading-xl font-semibold text-text-primary mb-6">
                Sharjah Publishing City Free Zone
              </h4>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
                A premier UAE business hub offering comprehensive regulatory framework, 
                100% foreign ownership, and streamlined processes for Web3 enterprises 
                seeking excellence in the Middle East market.
              </p>
              
              <div className="space-y-4">
                {[
                  'General Trading Operations',
                  'E-commerce & Digital Solutions',
                  'International Procurement Services',
                  'Medical Facilitation & Coordination',
                  'Global Freight & Logistics Management'
                ].map((activity, index) => (
                  <motion.div
                    key={activity}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-accent-primary rounded-full" />
                    <span className="text-text-secondary font-medium">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium Actions */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="group shadow-accent">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                Verify License
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LicenseShowcase;