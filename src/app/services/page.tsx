import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesList } from '@/components/services/ServicesList';
import { ServiceProcess } from '@/components/services/ServiceProcess';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Our Services - JS Afro Trading | Comprehensive Business Solutions',
  description: 'Explore our comprehensive range of international trading, e-commerce, procurement, medical facilitation, logistics, and advertising services.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceCTA />
    </>
  );
}