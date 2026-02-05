'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, Settings, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Initial Consultation',
    description: 'We discuss your requirements and assess how our services can best support your business goals.',
  },
  {
    icon: FileText,
    title: 'Proposal & Planning',
    description: 'We provide a detailed proposal with timelines, costs, and implementation strategy tailored to your needs.',
  },
  {
    icon: Settings,
    title: 'Implementation',
    description: 'Our expert team executes the plan with regular updates and quality checkpoints throughout the process.',
  },
  {
    icon: CheckCircle,
    title: 'Delivery & Support',
    description: 'We deliver results and provide ongoing support to ensure continued success and satisfaction.',
  },
];

export function ServiceProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-primary mb-4">
            Our Service Process
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            We follow a structured, transparent process to ensure every project is delivered 
            on time, within budget, and to the highest quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              <div className="card">
                <div className="w-16 h-16 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon size={32} className="text-accent-blue" />
                </div>
                
                <h3 className="text-heading-lg text-primary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-body-md text-secondary">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-blue bg-opacity-20 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}