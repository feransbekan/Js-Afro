import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us - JS Afro Trading | Get in Touch for Business Solutions',
  description: 'Contact JS Afro Trading for professional international trading, e-commerce, procurement, and business solutions. Get your free consultation today.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}