import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Business Divisions', href: '/businesses' },
      { name: 'Why Choose Us', href: '/why-choose-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'General Trading', href: '/services#trading' },
      { name: 'E-Commerce Solutions', href: '/services#ecommerce' },
      { name: 'Procurement Consulting', href: '/services#procurement' },
      { name: 'Medical Facilitation', href: '/services#medical' },
      { name: 'Logistics & Freight', href: '/services#logistics' },
      { name: 'Advertising & Gifts', href: '/services#advertising' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help Center', href: '/resources' },
      { name: 'FAQs', href: '/resources#faq' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Request Quote', href: '/contact#quote' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Licensing', href: '/licensing' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-default">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <span className="text-heading-lg text-primary font-semibold">
                  JS Afro Trading
                </span>
              </Link>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-500" />
                  <span className="text-body-sm text-secondary">info@js-afro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-500" />
                  <span className="text-body-sm text-secondary">+971 56 820 8574</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-500" />
                  <span className="text-body-sm text-secondary">Sharjah, United Arab Emirates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe size={16} className="text-primary-500" />
                  <span className="text-body-sm text-secondary">Serving Clients Worldwide</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-heading-lg text-primary font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-body-sm text-secondary hover:text-primary-500 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="py-8 border-t border-default">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-4">
              <div className="trust-badge">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                Licensed & Regulated
              </div>
              <div className="trust-badge">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                International Operations
              </div>
              <div className="trust-badge">
                <div className="w-3 h-3 bg-accent-orange rounded-full"></div>
                Compliance Certified
              </div>
            </div>
            
            <div className="text-body-sm text-tertiary">
              Established 2020 • Trusted by businesses worldwide
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-default">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-body-sm text-tertiary">
              © 2024 JS Afro Trading. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}