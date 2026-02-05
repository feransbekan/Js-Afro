'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Shield, Globe } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['International Business Hub', 'Global Operations Center'],
    color: 'text-accent-blue',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['+971 56 820 8574', 'Available 24/7'],
    color: 'text-accent-orange',
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@js-afro.com', 'Response within 24 hours'],
    color: 'text-accent-purple',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Weekend: By appointment'],
    color: 'text-accent-green',
  },
];

export function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-display-md text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-body-lg text-secondary">
              Our expert team is ready to discuss your business needs and provide 
              tailored solutions for your success.
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${detail.color} bg-current bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <detail.icon size={24} className={detail.color} />
                  </div>
                  <div>
                    <h3 className="text-heading-lg text-primary mb-2">
                      {detail.title}
                    </h3>
                    {detail.details.map((item, idx) => (
                      <p key={idx} className="text-body-md text-secondary">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="card-elevated">
            <h3 className="text-heading-xl text-primary mb-6 text-center">
              Why Choose Us
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield size={20} className="text-accent-green" />
                <span className="text-body-md text-secondary">Licensed & Regulated Business</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={20} className="text-accent-blue" />
                <span className="text-body-md text-secondary">International Operations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-accent-orange" />
                <span className="text-body-md text-secondary">4+ Years of Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-accent-purple" />
                <span className="text-body-md text-secondary">24/7 Professional Support</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-default text-center">
              <p className="text-body-sm text-tertiary">
                Trusted by 500+ businesses worldwide for professional trading and business solutions.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:+971568208574"
              className="btn-primary text-center"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="mailto:info@js-afro.com"
              className="btn-secondary text-center"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}