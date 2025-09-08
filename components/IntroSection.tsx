'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { AuroraText } from '@/components/magicui/aurora-text';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ShineBorder } from '@/components/magicui/shine-border';

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
    <section className='py-12 md:py-16 overflow-clip bg-white dark:bg-[#09090B] relative'>      
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
      <div className='w-full relative z-10'>
        <div className='max-w-5xl mx-auto px-6'>
        <div className='sticky top-28 lg:top-32'>
          <div className='text-6xl md:text-7xl lg:text-8xl text-balance text-center font-semibold mt-4 text-gray-600 dark:text-gray-400'>
            <div>
              {wordSpans}
              {' '}<AuroraText colors={["#0070F3", "#38bdf8"]}>Growth.</AuroraText>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-6 max-w-2xl mx-auto">
              AI that turns inbound interest into confirmed bookings—and reactivates old leads—while giving you live analytics in your pocket.
            </p>
            <div className="mt-6 inline-flex rounded-lg bg-white/90 dark:bg-gray-800/60 shadow-sm border border-gray-600/30 dark:border-gray-600/30 relative overflow-hidden">
              <ShineBorder borderWidth={1.5} shineColor={["#0070F3", "#38bdf8"]} />
              <Button size="lg" className="text-base" onClick={scrollToBooking}>
                Book Your Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className='h-[135vh]' ref={scrollTarget} />
      </div>
      </div>
    </section>
  );
}
