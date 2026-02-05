'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-elevated">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-accent-blue bg-opacity-10 rounded-lg flex items-center justify-center">
                <MessageSquare size={24} className="text-accent-blue" />
              </div>
              <div>
                <h2 className="text-display-md text-primary">Send us a Message</h2>
                <p className="text-body-md text-secondary">We&apos;ll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-md font-medium text-primary mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-md font-medium text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-body-md font-medium text-primary mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-md font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
                      placeholder="+971 56 820 8574"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-md font-medium text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-body-md font-medium text-primary mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="trading">General Trading</option>
                  <option value="ecommerce">E-Commerce Solutions</option>
                  <option value="procurement">Procurement Consulting</option>
                  <option value="medical">Medical Facilitation</option>
                  <option value="logistics">Logistics & Freight Forwarding</option>
                  <option value="advertising">Advertising & Gifts</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-body-md font-medium text-primary mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-default rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                  required
                />
              </div>

              <button type="submit" className="btn-cta w-full">
                <Send size={16} />
                Send Message
              </button>

              <p className="text-body-sm text-tertiary text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}