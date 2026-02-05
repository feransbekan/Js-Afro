'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

export function CompanyOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display-xl text-primary mb-6">
              About JS Afro Trading
            </h1>
            <div className="space-y-4 text-body-lg text-secondary">
              <p>
                JS Afro Trading is a professional international trading company established to provide comprehensive business solutions across multiple industries. We specialize in facilitating global commerce through our diverse portfolio of services.
              </p>
              <p>
                Our company operates with the highest standards of professionalism, transparency, and ethical business practices. We are committed to building long-term partnerships with our clients and delivering exceptional value through our specialized divisions.
              </p>
              <p>
                With operations spanning across continents, we have established ourselves as a trusted partner for businesses seeking reliable, compliant, and efficient trading solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-elevated">
              <h3 className="text-heading-xl text-primary mb-6 text-center">
                Company Facts
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-heading-lg text-primary">Established 2020</div>
                    <div className="text-body-sm text-secondary">4+ years of proven excellence</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <div className="text-heading-lg text-primary">Global Operations</div>
                    <div className="text-body-sm text-secondary">Serving clients in 50+ countries</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-purple bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-accent-purple" />
                  </div>
                  <div>
                    <div className="text-heading-lg text-primary">500+ Clients</div>
                    <div className="text-body-sm text-secondary">Trusted by businesses worldwide</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-green bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-accent-green" />
                  </div>
                  <div>
                    <div className="text-heading-lg text-primary">Licensed & Certified</div>
                    <div className="text-body-sm text-secondary">Fully compliant operations</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}