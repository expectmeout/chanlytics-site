//our process page

'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle, Map, Settings, Users, BarChartBig, TrendingUp, Zap, Search, MessageSquare, Shuffle, ArrowRight, ChevronRight } from 'lucide-react'
import { HeroHeader } from '@/components/hero5-header'
import ProcessHero from '@/components/process-hero'
import { motion as m } from 'framer-motion'
import BookingCalendar from '@/components/booking-calendar'

interface ProcessStep {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  bgColorClass: string;
  textColorClass: string;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: Search,
    title: "Discovery & Strategic Alignment",
    description: "Understanding your business and defining the path to success.",
    details: [
      "In-depth audit of current marketplace accounts (Amazon/Walmart).",
      "Analysis of operational workflows, pain points, and opportunities.",
      "Collaborative goal setting for VA support and advertising performance.",
      "Development of a tailored strategic roadmap and initial 90-day plan.",
    ],
    bgColorClass: "bg-blue-100 dark:bg-blue-900/30",
    textColorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    step: 2,
    icon: Settings,
    title: "Implementation & Onboarding",
    description: "Setting up your dedicated team and integrating our systems.",
    details: [
      "Recruitment and rigorous training of your dedicated VA(s).",
      "Integration with your existing tools and setup in our proprietary workflow system.",
      "Configuration of performance tracking and reporting dashboards.",
      "Launch of initial advertising campaigns and listing optimizations.",
    ],
    bgColorClass: "bg-purple-100 dark:bg-purple-900/30",
    textColorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    step: 3,
    icon: BarChartBig,
    title: "Proactive Management & Optimization",
    description: "Continuously driving efficiency and performance.",
    details: [
      "Daily task management and quality assurance for VA operations.",
      "Ongoing monitoring of advertising campaigns, budget allocation, and bid adjustments.",
      "Regular performance reporting (weekly/monthly) with actionable insights.",
      "Continuous A/B testing and refinement of strategies based on data.",
    ],
    bgColorClass: "bg-green-100 dark:bg-green-900/30",
    textColorClass: "text-green-600 dark:text-green-400",
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "Scaling & Strategic Growth",
    description: "Identifying new opportunities and expanding your success.",
    details: [
      "Proactive identification of growth levers (new keywords, product launches, etc.).",
      "Strategic recommendations for expanding into new marketplaces or channels.",
      "Adapting team structure and services as your business scales.",
      "Quarterly business reviews to align on long-term strategic goals.",
    ],
    bgColorClass: "bg-yellow-100 dark:bg-yellow-900/30",
    textColorClass: "text-yellow-600 dark:text-yellow-400",
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
};

export default function OurProcessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroHeader />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted/30 to-background">
        <ProcessHero />
      </div>

      {/* Moving banner - Marquee effect */}
      <div className="relative overflow-hidden bg-[#FAFAFA] dark:bg-[#101012] py-3 border-y border-border/30">
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {Array(12).fill(0).map((_, i) => (
            <span key={i} className="text-sm font-medium text-muted-foreground flex items-center gap-2 mx-4">
              <ArrowRight className="h-4 w-4" /> Strategic planning 
              <ArrowRight className="h-4 w-4" /> Dedicated teams
              <ArrowRight className="h-4 w-4" /> Data-driven
              <ArrowRight className="h-4 w-4" /> Transparent
              <ArrowRight className="h-4 w-4" /> Results-focused
            </span>
          ))}
        </div>
      </div>

      {/* Process Steps Journey */}
      <section className="py-16 md:py-0 mt-24 overflow-hidden relative">
        {/* Animated blue gradient glow */}
        <m.div 
          className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
          initial={{ opacity: 0.01 }}
          animate={{ 
            opacity: [0.01, 0.05, 0.01],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-[#155DFC]/10 dark:from-[#155DFC]/20 via-transparent to-transparent" style={{ top: '20%', left: '30%', width: '40%', height: '40%' }}></div>
          <div className="absolute inset-0 bg-gradient-radial from-[#155DFC]/10 dark:from-[#155DFC]/15 via-transparent to-transparent" style={{ top: '50%', left: '10%', width: '30%', height: '30%' }}></div>
          <div className="absolute inset-0 bg-gradient-radial from-[#155DFC]/10 dark:from-[#155DFC]/15 via-transparent to-transparent" style={{ top: '30%', left: '60%', width: '40%', height: '40%' }}></div>
        </m.div>
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-15 dark:opacity-10 pointer-events-none">
          {Array(12).fill(0).map((_, i) => (
            <m.div 
              key={i} 
              className="col-span-1 h-full border-r border-primary/50 dark:border-primary/70"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.2
              }}
            ></m.div>
          ))}
          {Array(12).fill(0).map((_, i) => (
            <m.div 
              key={i} 
              className="absolute h-px w-full border-t border-primary/50 dark:border-primary/70" 
              style={{ top: `${(i+1) * 8}%` }}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.15
              }}
            ></m.div>
          ))}
        </div>
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal tracking-tight mb-3 sm:text-4xl">Your Journey With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach designed to maximize your success on Amazon and Walmart Marketplace.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical connecting line with glow effect - more subtle on desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-16 w-px md:w-[1px] bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 dark:from-primary/60 dark:via-primary/40 dark:to-primary/10 rounded-full md:-translate-x-1/2 md:opacity-30"></div>

            <m.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {processSteps.map((step, index) => (
                <m.div 
                  key={step.step} 
                  variants={itemVariants}
                  className={`relative flex items-start gap-6 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-16`}
                >
                  {/* Icon & Step Number - Matching card theme (lighter) */}
                  <div className={`sticky top-28 flex flex-col items-center z-20 ${index % 2 !== 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className={`z-10 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-background/20 dark:border-primary/40 bg-primary/80 dark:bg-primary/30 shadow-lg`}>
                      <step.icon className="h-6 w-6 md:h-8 md:w-8 text-white/90 dark:text-primary-foreground/80" />
                      {/* Center dot removed */}
                    </div>
                    <div className="mt-2 text-xs font-semibold bg-primary/10 dark:bg-white/10 px-2 py-1 rounded-full text-primary dark:text-white">STEP {step.step}</div>
                  </div>

                  {/* Connection to center timeline - horizontal line (more subtle on desktop) */}
                  <div className="absolute md:block hidden left-1/2 top-8">
                    {/* Horizontal connection line with gradient */}
                    <div 
                      className={`absolute top-0 h-px w-8 md:w-16 ${index % 2 === 0 ? '-right-8 md:-right-16' : '-left-8 md:-left-16'}`}
                      style={{
                        background: `linear-gradient(${index % 2 === 0 ? 'to left' : 'to right'}, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.05))`
                      }}
                    ></div>
                  </div>

                  {/* Animated data flow dots */}
                  <m.div 
                    className="absolute top-8 w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary/60 hidden md:block"
                    style={{
                      left: index % 2 === 0 ? '50%' : 'auto',
                      right: index % 2 === 0 ? 'auto' : '50%'
                    }}
                    animate={{
                      x: index % 2 === 0 ? [-5, -40] : [5, 40],
                      opacity: [0.6, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />

                  {/* Node glow effect */}
                  <m.div 
                    className={`absolute md:${index % 2 === 0 ? 'ml-36' : 'mr-36'} inset-0 rounded-xl blur-md opacity-10 dark:opacity-20 z-0`}
                    initial={{ opacity: 0.05 }}
                    animate={{ 
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.01, 1]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.7
                    }}
                  >
                    <div className="h-full w-full rounded-xl bg-gradient-to-b from-primary/10 to-primary/3 dark:from-primary/20 dark:to-primary/5"></div>
                  </m.div>

                  {/* Content Card - with gradient background and glow effect */}
                  <div className={`md:${index % 2 === 0 ? 'mr-16' : 'ml-16'} relative flex-1 z-10`}>
                    <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/3 dark:from-primary/20 dark:to-primary/5 border border-primary/10 dark:border-primary/20 shadow-lg relative z-10">
                      {/* Step badge in top right */}
                      <div className="absolute top-2 right-2 text-xs text-white dark:text-white/90 bg-primary/70 dark:bg-primary/60 rounded-full px-2.5 py-0.5 font-medium">
                        Step {step.step}
                      </div>
                      
                      {/* Step title */}
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-white/80 mt-1 mb-4 italic">{step.description}</p>
                      
                      {/* Process border line */}
                      <div className="h-px w-full bg-gray-200/40 dark:bg-white/10 my-3"></div>
                      
                      {/* Key features */}
                      <div className="mt-4">
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      {/* Client Testimonial Banner */}
      <section className="bg-[#FAFAFA] dark:bg-[#101012] py-12 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg italic text-muted-foreground mb-4">
            "Chanlytics completely transformed our marketplace operations. Their process is clear, their team is responsive, and the results speak for themselves."
          </p>
          <p className="font-medium">— Sarah Johnson, Director of E-commerce at HomeStyle Living</p>
        </div>
      </section>

      {/* 4. Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">Get Started</Badge>
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Ready to Experience a Better Way?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our structured process remove the burden of marketplace management and unlock your growth potential. See how easy it can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact">Discuss Your Needs</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:bg-background/80 transition-all duration-300">
                  <Link href="/examples/services">Explore Our Services</Link>
              </Button>
            </div>
            <BookingCalendar />
          </m.div>
        </div>
      </section>
    </main>
  )
}

// Add keyframe animation for the marquee effect
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
  
.animate-marquee {
  animation: marquee 30s linear infinite;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);
}