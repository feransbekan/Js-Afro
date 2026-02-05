'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Compass } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-primary mb-4">
            Our Purpose & Direction
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            Guided by clear principles and focused on sustainable growth, we are committed to excellence in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Target size={32} className="text-accent-blue" />
            </div>
            <h3 className="text-heading-xl text-primary mb-4">Our Mission</h3>
            <p className="text-body-md text-secondary">
              To provide professional, reliable, and compliant international trading solutions that enable businesses to thrive in the global marketplace while maintaining the highest standards of ethics and transparency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Eye size={32} className="text-accent-orange" />
            </div>
            <h3 className="text-heading-xl text-primary mb-4">Our Vision</h3>
            <p className="text-body-md text-secondary">
              To become the most trusted international trading partner, recognized for our expertise, integrity, and commitment to client success across all industries we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-accent-purple bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Compass size={32} className="text-accent-purple" />
            </div>
            <h3 className="text-heading-xl text-primary mb-4">Our Values</h3>
            <p className="text-body-md text-secondary">
              Professionalism, transparency, compliance, and client success guide every decision we make. We believe in building lasting relationships through consistent excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}