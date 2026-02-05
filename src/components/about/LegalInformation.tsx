'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, Building, CheckCircle } from 'lucide-react';

export function LegalInformation() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-primary mb-4">
            Legal & Regulatory Information
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            We operate with full transparency and maintain all required licenses and certifications for international trading operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building size={24} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-heading-lg text-primary mb-2">
                    Company Registration
                  </h3>
                  <p className="text-body-md text-secondary">
                    JS Afro Trading is a legally registered international trading company, 
                    incorporated and operating in full compliance with all applicable laws and regulations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-heading-lg text-primary mb-2">
                    Licensing & Compliance
                  </h3>
                  <p className="text-body-md text-secondary">
                    We maintain all required licenses for international trading operations and 
                    undergo regular compliance audits to ensure adherence to regulatory standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-purple bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={24} className="text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-heading-lg text-primary mb-2">
                    Documentation & Transparency
                  </h3>
                  <p className="text-body-md text-secondary">
                    All business documentation, contracts, and regulatory filings are maintained 
                    with complete transparency and are available for review by authorized parties.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-elevated"
          >
            <h3 className="text-heading-xl text-primary mb-6 text-center">
              Compliance Certifications
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">International Trading License</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">Import/Export Certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">ISO Quality Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">Financial Services Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">Healthcare Services Authorization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">Logistics & Freight Forwarding</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-default">
              <p className="text-body-sm text-tertiary text-center">
                All certifications are current and subject to regular renewal and audit processes.
                Documentation available upon request for verification purposes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}