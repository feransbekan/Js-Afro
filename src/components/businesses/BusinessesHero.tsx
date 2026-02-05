'use client';

import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp } from 'lucide-react';
import { StatCard } from '../ui/PremiumCard';

export function BusinessesHero() {
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
              Our Business Divisions
            </h1>
            <p className="text-body-lg text-secondary mb-8">
              Organized for excellence across multiple industries, our specialized divisions 
              ensure focused expertise and dedicated service delivery for every client.
            </p>
            
            {/* Value Proposition */}
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
              <p className="text-body-md text-primary font-medium">
                🎯 <strong>Six specialized divisions</strong> each maintaining deep expertise in their industry vertical.
                <br />
                🌟 <strong>Consistent excellence</strong> across all service areas with proven track records.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <StatCard
                icon={Building2}
                value="6"
                label="Specialized Divisions"
                iconColor="blue"
                delay={0.1}
              />
              
              <StatCard
                icon={Users}
                value="500+"
                label="Active Clients"
                iconColor="orange"
                delay={0.2}
              />
              
              <StatCard
                icon={TrendingUp}
                value="95%"
                label="Growth Rate"
                iconColor="green"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}