'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Package, ShoppingCart, Briefcase, Heart, Truck, Megaphone } from 'lucide-react';

const services = [
  {
    id: 'trading',
    icon: Package,
    title: 'General Trading',
    description: 'Comprehensive international trading solutions for businesses looking to expand their global reach.',
    features: [
      'Import/Export Services',
      'Market Research & Analysis',
      'Supplier Identification',
      'Trade Documentation',
      'Customs Clearance',
      'Risk Management'
    ],
    benefits: [
      'Access to global markets',
      'Reduced operational complexity',
      'Compliance assurance',
      'Cost optimization'
    ]
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online sales platforms and digital commerce infrastructure for modern businesses.',
    features: [
      'Platform Development',
      'Payment Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Support',
      'Analytics & Reporting'
    ],
    benefits: [
      'Increased sales reach',
      'Automated processes',
      'Better customer insights',
      'Scalable solutions'
    ]
  },
  {
    id: 'procurement',
    icon: Briefcase,
    title: 'Procurement Consulting',
    description: 'Strategic sourcing and procurement optimization services for businesses worldwide.',
    features: [
      'Supplier Evaluation',
      'Cost Analysis',
      'Contract Negotiation',
      'Quality Assurance',
      'Supply Chain Optimization',
      'Vendor Management'
    ],
    benefits: [
      'Cost reduction',
      'Quality improvement',
      'Risk mitigation',
      'Process efficiency'
    ]
  },
  {
    id: 'medical',
    icon: Heart,
    title: 'Medical Facilitation',
    description: 'Healthcare coordination and medical treatment facilitation services for patients worldwide.',
    features: [
      'Treatment Coordination',
      'Hospital Partnerships',
      'Medical Tourism',
      'Insurance Processing',
      'Travel Arrangements',
      'Follow-up Care'
    ],
    benefits: [
      'Access to quality care',
      'Cost-effective treatment',
      'Seamless coordination',
      'Personalized support'
    ]
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics & Freight Forwarding',
    description: 'Global freight forwarding and comprehensive logistics management solutions.',
    features: [
      'Air & Sea Freight',
      'Warehousing',
      'Distribution',
      'Tracking & Monitoring',
      'Insurance Coverage',
      'Customs Handling'
    ],
    benefits: [
      'Reliable delivery',
      'Cost optimization',
      'Real-time tracking',
      'Global network'
    ]
  },
  {
    id: 'advertising',
    icon: Megaphone,
    title: 'Advertising & Gifts Trading',
    description: 'Marketing solutions and corporate gift trading services for brand promotion.',
    features: [
      'Corporate Gifts',
      'Promotional Materials',
      'Brand Merchandise',
      'Marketing Campaigns',
      'Custom Manufacturing',
      'Global Distribution'
    ],
    benefits: [
      'Brand visibility',
      'Customer engagement',
      'Cost-effective marketing',
      'Quality products'
    ]
  }
];

export function ServicesList() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-elevated"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                      <service.icon size={32} className="text-accent-blue" />
                    </div>
                    <div>
                      <h2 className="text-display-md text-primary">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-body-lg text-secondary mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-heading-lg text-primary mb-4">Key Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                            <span className="text-body-sm text-secondary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary inline-flex">
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-heading-lg text-primary mb-6">Service Features</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                        </div>
                        <span className="text-body-md text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}