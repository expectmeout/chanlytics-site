"use client"

import { Cpu, Lock, Sparkles, Zap, TrendingUp, TrendingDown, Award } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import Faqs3 from '@/components/faqs-3'
import FeaturesSection from '@/components/features-9'
import WallOfLoveSection from '@/components/testimonials'
import ContentFiveSection from '@/components/content-5'
import BookingCalendar from '@/components/booking-calendar'
import IntegrationsSection from '@/components/integrations'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import {
  Card as CardUI,
  CardHeader as CardHeaderUI,
  CardTitle,
  CardDescription,
  CardContent as CardContentUI,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { AlertCircle, AlertTriangle, CheckCircle2, X } from 'lucide-react'
import { Label } from "@/components/ui/label"

interface CaseStudy {
  image: string;
  stat1: string;
  stat1Label: string;
  stat1LabelShort: string;
  stat2: string;
  stat2Label: string;
  stat2LabelShort: string;
  stat3: string;
  stat3Label: string;
  stat3LabelShort: string;
  title: string;
  description: string;
  logo: string;
  ctaUrl: string;
  details: string;
}

const caseStudies: CaseStudy[] = [
  {
    image: "/earos-banner.png",
    stat1: "↑127%",
    stat1Label: "Sales Growth YoY",
    stat1LabelShort: "Sales",
    stat2: "-24%",
    stat2Label: "ACoS Reduction",
    stat2LabelShort: "ACoS",
    stat3: "#3",
    stat3Label: "Top 3 Category Rank",
    stat3LabelShort: "Rank",
    title: "Skyrocketing Sales",
    description: "Transformed stagnant sales into exponential growth within 6 months.",
    logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
    ctaUrl: "#",
    details: "Bag Nation partnered with Chanlytics to optimize their Amazon presence, resulting in a 127% profit increase and lower ACoS in under 90 days. Our strategies included...",
  },
  {
    image: "/wisebond-banner.jpg",
    stat1: "↑85%",
    stat1Label: "Profit Margin Increase",
    stat1LabelShort: "Profit",
    stat2: "-18%",
    stat2Label: "Ad Spend Decrease",
    stat2LabelShort: "Ad Spend",
    stat3: "#1",
    stat3Label: "Best Seller Rank Acquired",
    stat3LabelShort: "BSR",
    title: "Profitability Mastered",
    description: "Achieved #1 Best Seller Rank while significantly boosting profit margins.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Beau_Lashes_logo.png",
    ctaUrl: "#",
    details: "Beau Lashes saw a 98.6% sales growth after implementing Chanlytics' keyword and creative strategy. We focused on...",
  },
  {
    image: "/darcase-banner.png",
    stat1: "↑210%",
    stat1Label: "Revenue Growth Q/Q",
    stat1LabelShort: "Revenue",
    stat2: "+40%",
    stat2Label: "Conversion Rate Uplift",
    stat2LabelShort: "CVR",
    stat3: "5 Star",
    stat3Label: "Avg. Product Rating",
    stat3LabelShort: "Rating",
    title: "Market Domination",
    description: "Rapid revenue expansion and conversion rate optimization.",
    logo: "https://images.unsplash.com/photo-1550482768-48bd99fefc52?auto=format&fit=crop&w=100&q=80",
    ctaUrl: "#",
    details: "HealthTech was struggling with high advertising costs and inconsistent ROAS. Our team implemented a comprehensive PPC strategy that reduced their ACoS by 62% while maintaining sales volume. This involved restructuring campaigns, optimizing keyword targeting, and implementing automated bidding strategies.",
  },
  {
    image: "/creative-banner.png",
    stat1: "3.2x",
    stat1Label: "Revenue Growth YoY",
    stat1LabelShort: "Revenue",
    stat2: "-15%",
    stat2Label: "Ad Spend Decrease",
    stat2LabelShort: "Ad Spend",
    stat3: "#2",
    stat3Label: "Top 2 Category Rank",
    stat3LabelShort: "Rank",
    title: "Cross-Marketplace Expansion",
    description: "Expanded to new marketplaces while maintaining sales growth.",
    logo: "Client logo",
    ctaUrl: "#",
    details: "FitGear wanted to expand beyond Amazon to Walmart and other marketplaces. Our cross-platform strategy involved tailored content optimization, inventory management solutions, and marketplace-specific pricing strategies. Within 6 months, their overall e-commerce revenue increased 3.2x, with successful launches on three new marketplaces.",
  }
]

export default function ExampleBody() {
  const [beforeAfterTab, setBeforeAfterTab] = useState('before')

  // Chart data for before/after comparison
  const beforeSalesData = [
    { month: "Jan", sales: 24350 },
    { month: "Feb", sales: 25100 },
    { month: "Mar", sales: 23800 },
    { month: "Apr", sales: 24500 },
    { month: "May", sales: 24200 },
    { month: "Jun", sales: 24350 }
  ]

  const afterSalesData = [
    { month: "Jul", sales: 25000 },
    { month: "Aug", sales: 28000 },
    { month: "Sep", sales: 32000 },
    { month: "Oct", sales: 40000 },
    { month: "Nov", sales: 47000 },
    { month: "Dec", sales: 55000 },
    { month: "Jan", sales: 62000 },
  ]

  return (
    <>
      <div className="main-content">
        <div className="bg-zinc-50 py-12 md:py-20 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
            <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
              <h2 className="text-4xl font-medium lg:text-5xl">Specialized Teams. Unified Data. One Interface.</h2>
              <p>The first conversational AI platform for business operations. Chanlytics lets you monitor, automate, and manage operations through simple conversation—whether you're scaling e-commerce or running a local business.</p>
            </div>

            <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
              <div className="space-y-4">
                <div className="text-5xl font-bold">Expert</div>
                <p>Teams for Specialized Tasks</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold">Unified</div>
                <p>AI Engine for Data & Control</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-bold">Strategic</div>
                <p>Growth & Automation Solutions</p>
              </div>
            </div>
          </div>
        </div>
        <section id="marketplace-solution-faqs">
          <Faqs3 />
        </section>

        <FeaturesSection />
        <div id="client-success-stories" className="bg-zinc-50 py-16 md:py-22 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl">Our Client Success Stories</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">See how our integrated AI solutions have transformed e-commerce brands with unified operations and strategic growth. We're now bringing similar automation power to empower local businesses.</p>
            </div>
            
            <div className="relative px-2 sm:px-4"> 
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="relative"
              >
                <CarouselContent className="overflow-visible gap-2 px-4"> {/* Reduced gap */}
                  {caseStudies.map((cs, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                      <div className="p-0.5 sm:p-1"> 
                        <CardUI className="card-glow relative z-10 h-full overflow-hidden flex flex-col dark:bg-black p-0">
                          <div className="w-full h-48 overflow-hidden relative rounded-t-lg m-0 p-0">
                            <img 
                              src={cs.image} 
                              alt={cs.title} 
                              className="w-full h-full object-cover rounded-t-lg" 
                              style={{display: 'block', margin: 0}}
                            />
                            {/* Bottom gradient fade overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                            {/* Overlay metrics on image */}
                            <div className="absolute inset-0 bg-black/40 flex items-start justify-between px-4 py-4">
                              {/* Number on the left */}
                              <div className="text-white text-3xl font-bold mt-0.5 py-0">
                                {cs.stat1}
                              </div>
                              {/* Badge on the right */}
                              <div className="bg-blue-600 rounded-full px-3.5 py-1 text-xs text-white font-medium mt-2">
                                {cs.stat1Label.split(' ')[0]}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col flex-grow p-0">
                            <CardHeaderUI className="mt-0 pt-4 pb-2 px-6">
                              <CardTitle className="text-lg leading-tight text-primary mt-0 pt-0">{cs.title}</CardTitle>
                              <CardDescription className="text-sm mt-1 text-muted-foreground leading-snug min-h-[56px] line-clamp-2">{cs.description}</CardDescription>
                            </CardHeaderUI>
                            
                            <CardContentUI className="pt-0 px-6 flex flex-col gap-3 mt-0 flex-grow">
                              <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/30">
                                  <h4 className="text-sm font-medium text-muted-foreground">Performance Metrics</h4>
                                  <div className="text-xs text-primary/80 flex items-center">
                                    <TrendingUp className="h-3 w-3 mr-1" /> 
                                    <span>Results</span>
                                  </div>
                                </div>
                                
                                <div className="group flex items-center justify-between py-2.5 px-1 rounded-md transition-colors duration-300 hover:bg-muted/40">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                                      <TrendingUp className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                      <div className="text-base font-bold text-primary">
                                        {cs.stat1}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {cs.stat1Label}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="h-7 w-14 flex items-center opacity-80">
                                    <svg viewBox="0 0 100 25" className="h-full w-full">
                                      <path 
                                        d="M0,25 L10,20 L20,22 L30,15 L40,18 L50,12 L60,10 L70,5 L80,3 L90,2 L100,0" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        className="text-green-500 dark:text-green-400"
                                      />
                                    </svg>
                                  </div>
                                </div>

                                <div className="group flex items-center justify-between py-2.5 px-1 rounded-md transition-colors duration-300 hover:bg-muted/40">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center">
                                      <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                      <div className="text-base font-bold text-primary">
                                        {cs.stat2}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {cs.stat2Label}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="h-7 w-14 flex items-center opacity-80">
                                    <svg viewBox="0 0 100 25" className="h-full w-full">
                                      <path 
                                        d="M0,0 L10,2 L20,3 L30,5 L40,7 L50,10 L60,12 L70,15 L80,18 L90,20 L100,25" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        className="text-red-500 dark:text-red-400"
                                      />
                                    </svg>
                                  </div>
                                </div>

                                <div className="group flex items-center justify-between py-2.5 px-1 rounded-md transition-colors duration-300 hover:bg-muted/40">
                                  <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center">
                                      <Award className="h-3.5 w-3.5 text-yellow-600 dark:text-yellow-400" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                      <div className="text-base font-bold text-primary">
                                        {cs.stat3}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {cs.stat3Label}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center justify-end w-14">
                                    <div className="flex items-center space-x-1">
                                      {[...Array(3)].map((_, i) => (
                                        <div 
                                          key={i} 
                                          className={`w-2 h-2 rounded-full ${i < parseInt(cs.stat3.replace(/\D/g, '') || '3') ? 'bg-yellow-500' : 'bg-muted'}`} 
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex-grow" />
                            </CardContentUI>

                            
                          </div>
                        </CardUI>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 sm:-left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md dark:bg-blue-700 dark:hover:bg-blue-600 h-7 w-7 sm:h-9 sm:w-9" />
                <CarouselNext className="absolute right-0 sm:-right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md dark:bg-blue-700 dark:hover:bg-blue-600 h-7 w-7 sm:h-9 sm:w-9" />
              </Carousel>
            </div>
          </div>
        </div>

        <IntegrationsSection />

        <div className="py-8 md:py-12">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
            <WallOfLoveSection />
          </div>
        </div>

        <div className="py-16 md:py-14">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-normal lg:text-5xl">Connect With an Automation & Growth Expert</h2>
              <p className="mt-2 text-muted-foreground">Schedule a free consultation to discuss your business's automation and growth needs.</p>
              
              <div className="flex justify-center gap-4 mt-6 mb-10">
                <Button
                  size="lg"
                  className="px-8"
                  onClick={() => {
                    const solutionSection = document.getElementById('marketplace-solution-faqs');
                    if (solutionSection) {
                      solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}>
                  <span>How it Works</span>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const caseStudiesSection = document.getElementById('client-success-stories');
                    if (caseStudiesSection) {
                      caseStudiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}>
                  <span>View Our Case Studies</span>
                </Button>
              </div>
              
              <div className="mt-12">
                <BookingCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
