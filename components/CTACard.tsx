'use client'

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTACard() {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-teal-200 dark:bg-gray-900/80 dark:border-gray-700 dark:hover:border-teal-800/50 mx-auto max-w-5xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hover effect overlay */}
      <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-teal-50/30 dark:via-teal-900/10 to-transparent transition-all duration-700 ease-in-out group-hover:left-full" />
      
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-[#101828] bg-clip-text text-transparent dark:text-white sm:text-4xl mb-4">
          Stop Losing Leads. Start Automating Growth.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-8">
          Chanlytics is your all-in-one AI platform to capture every lead, automate workflows, and get full visibility into your business performance—24/7.
        </p>
        <Button 
          size="lg" 
          className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-700 hover:to-teal-600 transition-all duration-300"
          onClick={() => {
            const bookingElement = document.getElementById('booking');
            if (bookingElement) {
              bookingElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="relative z-10">Book a Demo</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </motion.div>
  );
}
