import { Metadata } from 'next';
import { BusinessesHero } from '@/components/businesses/BusinessesHero';
import { DivisionsList } from '@/components/businesses/DivisionsList';
import { OrganizationalStructure } from '@/components/businesses/OrganizationalStructure';

export const metadata: Metadata = {
  title: 'Business Divisions - JS Afro Trading | Specialized Industry Expertise',
  description: 'Explore our specialized business divisions across trading, e-commerce, procurement, medical facilitation, logistics, and advertising industries.',
};

export default function BusinessesPage() {
  return (
    <>
      <BusinessesHero />
      <DivisionsList />
      <OrganizationalStructure />
    </>
  );
}