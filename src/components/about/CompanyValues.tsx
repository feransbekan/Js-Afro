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

        {/* Gap Separator */}
        <div className="h-8 md:h-10 lg:h-12" />

        {/* Corporate Environmental & Ethical Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="card-elevated max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent-green bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-accent-green" />
              </div>
              <h3 className="text-display-md text-primary mb-4">
                🚨 Corporate Environmental & Ethical Responsibility
              </h3>
            </div>
            
            <div className="prose prose-lg max-w-none text-secondary leading-relaxed">
              <p className="text-body-lg mb-6">
                We conduct our general trading, procurement, and logistics operations in line with the principles of the 
                <strong className="text-primary"> United Nations Global Compact</strong> and the 
                <strong className="text-primary"> UN Sustainable Development Goals (SDGs)</strong>. 
                We are strictly committed to ethical sourcing and confirm that we are not involved in toxic, hazardous, 
                or environmentally harmful activities, nor in child or underage labor of any kind.
              </p>
              
              <p className="text-body-lg">
                We promote responsible procurement, the use of recyclable and environmentally friendly materials, 
                and work with partners who share our commitment to sustainability, safety, and regulatory compliance. 
                Through responsible logistics and continuous improvement, we aim to minimize environmental impact 
                and contribute to a cleaner, safer, and more sustainable global supply chain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-default">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield size={24} className="text-accent-blue" />
                </div>
                <h4 className="text-heading-md text-primary mb-2">Ethical Sourcing</h4>
                <p className="text-body-sm text-secondary">Zero tolerance for harmful or unethical practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe size={24} className="text-accent-green" />
                </div>
                <h4 className="text-heading-md text-primary mb-2">Sustainable Operations</h4>
                <p className="text-body-sm text-secondary">Environmentally responsible logistics and procurement</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={24} className="text-accent-orange" />
                </div>
                <h4 className="text-heading-md text-primary mb-2">UN Global Compact</h4>
                <p className="text-body-sm text-secondary">Aligned with international sustainability standards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}