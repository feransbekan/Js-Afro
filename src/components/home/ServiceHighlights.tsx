'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Monitor, 
  Briefcase, 
  Heart, 
  Truck, 
  Globe2,
  ArrowRight,
  Zap
} from 'lucide-react';
import { ServiceCard } from '../ui/PremiumCard';

const ServiceHighlights = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Next-generation digital commerce platforms powered by blockchain technology and AI-driven analytics.',
      href: '/services/ecommerce',
      iconColor: 'orange' as const,
    },
    {
      icon: Monitor,
      title: 'IT Solutions',
      description: 'Enterprise-grade Web3 infrastructure and decentralized applications for the future of business.',
      href: '/services/it',
      iconColor: 'blue' as const,
    },
    {
      icon: Briefcase,
      title: 'Procurement Consulting',
      description: 'Smart contract-enabled supply chain optimization with transparent, automated processes.',
      href: '/services/procurement',
      iconColor: 'purple' as const,
    },
    {
      icon: Heart,
      title: 'Medical Facilitation',
      description: 'Secure healthcare coordination using blockchain for patient data privacy and interoperability.',
      href: '/services/medical',
      iconColor: 'green' as const,
    },
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'IoT-enabled global logistics with real-time tracking and automated compliance verification.',
      href: '/services/freight',
      iconColor: 'blue' as const,
    },
    {
      icon: Globe2,
      title: 'General Trading',
      description: 'Cross-border commerce facilitated by digital assets and smart contract automation.',
      href: '/services/trading',
      iconColor: 'gold' as const,
    }
  ];

  return (
    <section className="py-40 bg-secondary">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-display-lg font-bold text-primary mb-8">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          
          <p className="text-body-xl text-secondary max-w-4xl mx-auto">
            Cutting-edge business solutions designed for the Web3 era, 
            combining traditional excellence with blockchain innovation.
          </p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
              delay={index * 0.1}
            >
              <Link
                href={service.href}
                className="
                  inline-flex items-center space-x-2
                  text-white/70 hover:text-white
                  text-sm font-medium
                  transition-colors duration-300
                  group/link
                "
              >
                <span>Learn More</span>
                <ArrowRight 
                  size={14} 
                  className="transition-transform duration-300 group-hover/link:translate-x-1" 
                />
              </Link>
            </ServiceCard>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="
            text-center max-w-5xl mx-auto
            bg-white/[0.03] backdrop-blur-xl
            border border-white/[0.10]
            rounded-3xl p-16
            shadow-xl shadow-black/30
          "
        >
          <div className="flex items-center justify-center mb-8">
            <div className="
              w-12 h-12 rounded-xl mr-4
              bg-gradient-to-br from-orange-400 to-amber-400
              flex items-center justify-center
            ">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-display-sm font-bold text-primary">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h3>
          </div>
          
          <p className="text-body-xl text-secondary mb-12 max-w-3xl mx-auto">
            Connect with our Web3 experts to discover how blockchain technology 
            can revolutionize your operations and unlock new possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-cta group flex items-center space-x-3">
              <Zap className="w-5 h-5" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="btn-secondary">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;