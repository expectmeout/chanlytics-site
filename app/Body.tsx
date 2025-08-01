'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Import the new and existing components
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import IntegrationsSection from '@/components/integrations';
import { Faqs3 } from '@/components/faqs-3';
const BookingCalendar = dynamic(() => import('@/components/booking-calendar'), {
  ssr: false,
  loading: () => <div className="w-full h-[700px] bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
});
import { ElevenLabsConvai } from '@/components/ElevenLabsConvai';
import DiscoveryCallFeatures from '@/components/DiscoveryCallFeatures';
import Testimonials from '@/components/Testimonials';

export default function ExampleBody() {

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      const headerOffset = 80; // Adjust for sticky header
      const elementPosition = bookingElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="main-content bg-gray-50 dark:bg-background">
      
      {/* 1. Hero Section */}
      <Hero />

      <IntroSection />

      {/* 2. Interactive Product Showcase (The "How") */}
      <InteractiveShowcase />

      {/* 3. The Integration Engine */}
      <IntegrationsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* 4. The Clear Offer & Call to Action */}
      <section id="booking" className="py-8 lg:py-20 bg-white dark:bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="hidden sm:block text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              Ready to Automate Your Growth?
            </h2>
            <p className="hidden sm:block text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pick a time that works for you. Our team will show you exactly how Chanlytics can be tailored to your business to help you save time and increase revenue.
            </p>
          </motion.div>

          <div className="mt-6 lg:mt-16">
            <DiscoveryCallFeatures />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <BookingCalendar />
              <div className="mt-4">
                <ElevenLabsConvai agent-id="agent_01jyh5yg3vf0jtxq1tge80nkhn" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Overcoming Objections (FAQs) */}
      <Faqs3 />

    </div>
  );
}