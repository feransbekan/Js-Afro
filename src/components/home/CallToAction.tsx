'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PremiumCard } from '../ui/PremiumCard';

const contactOptions = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our experts',
    contact: '+971 56 820 8574',
    href: 'tel:+971568208574',
    iconColor: 'blue' as const,
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get detailed information',
    contact: 'info@jsafrotrading.com',
    href: 'mailto:info@jsafrotrading.com',
    iconColor: 'gold' as const,
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant support available',
    contact: 'Start Chat',
    href: '#',
    iconColor: 'purple' as const,
  },
];

export function CallToAction() {
  return (
    <section className="section-padding bg-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/[0.10] rounded-3xl p-12 shadow-xl shadow-black/30"
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400 rounded-full opacity-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <h2 className="text-display-lg text-primary mb-4">
                  Ready to Start Your Business Journey?
                </h2>
                <div className="w-12 h-12 rounded-xl mx-auto bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
              </div>
              
              <div className="flex justify-center mb-12">
                <p className="text-body-lg text-secondary max-w-4xl leading-relaxed text-center">
                  Join hundreds of businesses worldwide who trust JS Afro Trading for their international commerce, procurement, and business development needs.
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactOptions.map((option, index) => (
                  <PremiumCard
                    key={index}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                    iconColor={option.iconColor}
                    delay={index * 0.1}
                    variant="minimal"
                  >
                    <Link 
                      href={option.href} 
                      className="inline-flex items-center space-x-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 group/link"
                    >
                      <span>{option.contact}</span>
                      <ArrowRight 
                        size={14} 
                        className="transition-transform duration-300 group-hover/link:translate-x-1" 
                      />
                    </Link>
                  </PremiumCard>
                ))}
              </div>

              {/* Primary CTA */}
              <motion.div
                className="space-y-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/contact" className="btn-cta group">
                  <Sparkles className="w-5 h-5" />
                  Request Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <p className="text-body-sm text-white/60 leading-relaxed">
                  No commitment required • Response within 24 hours • Free initial consultation
                </p>
              </motion.div>

              {/* Trust Elements */}
              <motion.div
                className="pt-8 border-t border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {[
                    { label: 'Licensed & Regulated', color: 'bg-emerald-400' },
                    { label: '500+ Satisfied Clients', color: 'bg-blue-400' },
                    { label: '4+ Years Experience', color: 'bg-amber-400' },
                    { label: '24/7 Support', color: 'bg-purple-400' },
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="trust-badge"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className={`w-2 h-2 ${badge.color} rounded-full`}></div>
                      <span>{badge.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}