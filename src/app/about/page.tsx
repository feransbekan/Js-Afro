import { Metadata } from 'next';
import { CompanyOverview } from '@/components/about/CompanyOverview';
import { MissionVision } from '@/components/about/MissionVision';
import { Leadership } from '@/components/about/Leadership';
import { CompanyValues } from '@/components/about/CompanyValues';
import { LegalInformation } from '@/components/about/LegalInformation';

export const metadata: Metadata = {
  title: 'About Us - JS Afro Trading | Professional International Trading Company',
  description: 'Learn about JS Afro Trading - a professional international trading company providing comprehensive business solutions across multiple industries worldwide.',
};

export default function AboutPage() {
  return (
    <>
      <CompanyOverview />
      <MissionVision />
      <CompanyValues />
      <Leadership />
      <LegalInformation />
    </>
  );
}