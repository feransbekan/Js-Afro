'use client';

import { Package, ShoppingCart, Briefcase, Heart, Truck, Megaphone } from 'lucide-react';
import { DivisionCard } from '../ui/DivisionCard';

const divisions = [
  {
    icon: Package,
    title: 'International Trading',
    subtitle: 'Global Commerce Hub',
    description: 'Global commodity trading and international business development across emerging markets.',
    services: ['Import/Export Services', 'Market Research', 'Supplier Networks', 'Trade Documentation'],
    stats: { clients: '200+', projects: '1000+', countries: '30+' },
    iconColor: 'blue' as const,
    featured: true,
    ctaText: 'Explore Trading Solutions',
  },
  {
    icon: ShoppingCart,
    title: 'Digital Commerce',
    subtitle: 'E-commerce Excellence',
    description: 'E-commerce platforms, online sales solutions, and digital marketplace management.',
    services: ['Platform Development', 'Payment Systems', 'Inventory Management', 'Digital Marketing'],
    stats: { clients: '150+', projects: '500+', platforms: '50+' },
    iconColor: 'orange' as const,
    featured: true,
    ctaText: 'Launch Your Platform',
  },
  {
    icon: Briefcase,
    title: 'Consulting Services',
    subtitle: 'Strategic Optimization',
    description: 'Strategic procurement consulting and business optimization for international clients.',
    services: ['Procurement Strategy', 'Vendor Management', 'Cost Optimization', 'Process Improvement'],
    stats: { clients: '100+', projects: '300+', savings: '25%' },
    iconColor: 'purple' as const,
    featured: true,
    ctaText: 'Get Strategic Advice',
  },
  {
    icon: Heart,
    title: 'Healthcare Services',
    subtitle: 'Medical Facilitation',
    description: 'Medical treatment facilitation and healthcare coordination services worldwide.',
    services: ['Treatment Coordination', 'Medical Tourism', 'Insurance Processing', 'Care Management'],
    stats: { patients: '1000+', hospitals: '50+', countries: '20+' },
    iconColor: 'blue' as const,
    featured: true,
    ctaText: 'Access Healthcare',
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    subtitle: 'Global Movement',
    description: 'Comprehensive freight forwarding and global logistics management solutions.',
    services: ['Freight Forwarding', 'Warehousing', 'Distribution', 'Supply Chain Optimization'],
    stats: { shipments: '10K+', routes: '100+', partners: '200+' },
    iconColor: 'green' as const,
    featured: true,
    ctaText: 'Ship Worldwide',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Advertising',
    subtitle: 'Brand Amplification',
    description: 'Corporate advertising solutions and promotional gift trading services.',
    services: ['Brand Development', 'Corporate Gifts', 'Marketing Campaigns', 'Promotional Materials'],
    stats: { campaigns: '300+', brands: '150+', products: '1000+' },
    iconColor: 'gold' as const,
    featured: true,
    ctaText: 'Boost Your Brand',
  },
];

export function DivisionsList() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-lg text-primary mb-6">
            Our Specialized Divisions
          </h2>
          <p className="text-body-lg text-secondary max-w-3xl mx-auto">
            Each division operates as a center of excellence, delivering specialized expertise 
            and tailored solutions for your industry-specific needs.
          </p>
        </div>

        {/* All Divisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <DivisionCard
              key={index}
              icon={division.icon}
              title={division.title}
              subtitle={division.subtitle}
              description={division.description}
              services={division.services}
              stats={division.stats}
              iconColor={division.iconColor}
              ctaText={division.ctaText}
              featured={true}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}