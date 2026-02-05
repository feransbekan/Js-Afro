'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function ServiceCTA() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        <div className="card-elevated text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-lg text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-body-lg text-secondary mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and learn how our professional services 
              can help your business achieve its goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/contact" className="btn-cta">
                Request Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Phone size={20} className="text-accent-blue" />
                <div className="text-left">
                  <div className="text-body-sm text-tertiary">Call us directly</div>
                  <div className="text-body-md text-primary font-medium">+971 56 820 8574</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail size={20} className="text-accent-orange" />
                <div className="text-left">
                  <div className="text-body-sm text-tertiary">Email us</div>
                  <div className="text-body-md text-primary font-medium">info@js-afro.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}