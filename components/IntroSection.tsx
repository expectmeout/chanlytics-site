'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { AuroraText } from '@/components/magicui/aurora-text';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Use a fixed array to ensure consistent hook calls
const words = ['Stop', 'Losing', 'Leads.', 'Start', 'Automating'];

export default function IntroSection() {
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
  
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end']
  });

  // Create all color transforms at component level to avoid hook order issues
  const colorTransformsLight = words.map((_, i) => {
    const start = i / words.length;
    const end = (i + 1) / words.length;
    return useTransform(scrollYProgress, [start, end], ['#9CA3AF', '#101828']);
  });
  
  const colorTransformsDark = words.map((_, i) => {
    const start = i / words.length;
    const end = (i + 1) / words.length;
    return useTransform(scrollYProgress, [start, end], ['#4A5568', '#FFFFFF']);
  });

  const wordSpans = words.map((word, i) => {
    return (
      <motion.span key={i} className="transition-colors duration-200">
        <motion.span style={{ color: colorTransformsLight[i] }} className="dark:hidden">
          {word}{' '}
        </motion.span>
        <motion.span style={{ color: colorTransformsDark[i] }} className="hidden dark:inline">
          {word}{' '}
        </motion.span>
      </motion.span>
    );
  });

  return (
    <section className='py-3 overflow-clip bg-white dark:bg-[#09090B] relative'>      
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            [--white-gradient:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%)]
            [--aurora:repeating-linear-gradient(100deg,#0ea5e9_10%,#3b82f6_15%,#06b6d4_20%,#8b5cf6_25%,#0ea5e9_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-30 will-change-transform
            [mask-image:radial-gradient(ellipse_at_50%_50%,black_20%,transparent_80%)]
          "
        ></div>
      </div>
      <div className='w-full py-6 relative z-10'>
        <div className='container mx-auto px-6'>
        <div className='sticky top-28 lg:top-32'>
          <div className='text-6xl md:text-7xl lg:text-8xl text-balance text-center font-semibold mt-6 text-gray-600 dark:text-gray-400'>
            <div>
              {wordSpans}
              {' '}<AuroraText colors={["#0070F3", "#38bdf8"]}>Growth.</AuroraText>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-8 max-w-2xl mx-auto">
              Chanlytics is your all-in-one AI platform to capture every lead, and get visibility into your business performance—24/7.
            </p>
            <Button size="lg" className="mt-8 text-base" onClick={scrollToBooking}>
              Book Your Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className='h-[135vh]' ref={scrollTarget} />
      </div>
      </div>
    </section>
  );
}
