'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display-xl text-primary mb-6">
            Contact Our Expert Team
          </h1>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto mb-8">
            Ready to discuss your business needs? Our professional team is here to provide 
            personalized solutions and answer all your questions about our services.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-accent-blue" />
              <span className="text-body-sm text-secondary font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-accent-orange" />
              <span className="text-body-sm text-secondary font-medium">24h Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle size={16} className="text-accent-purple" />
              <span className="text-body-sm text-secondary font-medium">Expert Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}