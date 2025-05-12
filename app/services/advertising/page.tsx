"use client"
import React, { useState, useRef } from "react"
import { motion as m } from "framer-motion"
import { 
  ArrowRight, 
  BarChart, 
  Check, 
  ChevronRight, 
  Clock, 
  DollarSign, 
  Flag, 
  Info, 
  PieChart, 
  ShoppingCart, 
  Tag, 
  Target, 
  Briefcase, 
  Users, 
  Zap, 
  TrendingUp, 
  Search, 
  Layers, 
  Settings, 
  Award, 
  TrendingDown, 
  AlertCircle, 
  AlertTriangle,
  CheckCircle2,
  X
} from "lucide-react"
import NextImage from "next/image"
import Link from "next/link"
import BookingCalendar from "@/components/booking-calendar"
import { HeroHeader } from "@/components/hero5-header"
import { Button } from "@/components/ui/button"
import FeaturesSection8 from "@/components/features-8"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card as CardUI,
  CardContent as CardContentUI,
  CardHeader as CardHeaderUI,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts"
import Testimonials2 from "@/components/testimonials-2";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { useTheme } from "next-themes";
import { Feature108Demo } from "@/components/features-tab-advertising";
import CallToAction from "../../../../../production-ready-projects/local-ai-packaged/chanlytics-site-files/preview/call-to-action/one/page"
import CallToActionAd from "@/components/advertising-hero"

// Timeline data for our in-house advertising process
const timelineData = [
  {
    title: "Discovery & Strategy",
    description: "We analyze your product, market positioning, and competition to develop a comprehensive advertising strategy tailored to your goals.",
    icon: "Search"
  },
  {
    title: "Implementation & Optimization",
    description: "Our specialists set up campaigns with precision targeting and continuously test and refine them to maximize performance and ROI.",
    icon: "Target"
  },
  {
    title: "Analysis & Growth",
    description: "We provide transparent reporting with actionable insights while identifying new opportunities to scale your marketplace presence.",
    icon: "BarChart"
  }
];

// Key metrics for advertising performance
// const stats = [
//   { label: 'ROAS Improvement', value: '45%+' },
//   { label: 'ACOS Reduction', value: '32%' },
//   { label: 'Conversion Rate Increase', value: '37%' },
// ]

// Sample chart data
const beforeSalesData = [
  { month: "Jan", sales: 32000 },
  { month: "Feb", sales: 34000 },
  { month: "Mar", sales: 31000 },
  { month: "Apr", sales: 33000 },
  { month: "May", sales: 35000 },
  { month: "Jun", sales: 32500 },
];

const afterSalesData = [
  { month: "Jul", sales: 38000 },
  { month: "Aug", sales: 45000 },
  { month: "Sep", sales: 52000 },
  { month: "Oct", sales: 57000 },
  { month: "Nov", sales: 62000 },
  { month: "Dec", sales: 68000 },
];

// Steps for the process diagram
const steps = [
  { title: "Account Analysis", desc: "Deep dive into your marketplace presence and advertising performance metrics." },
  { title: "Market Research", desc: "Competitive analysis and consumer behavior insights specific to your Amazon/Walmart categories." },
  { title: "Strategy Development", desc: "Custom advertising strategy aligned with your business objectives and marketplace dynamics." },
  { title: "Implementation", desc: "Expert execution of campaigns with precise targeting and bidding strategies." },
  { title: "Optimization & Scaling", desc: "Continuous refinement based on performance data to maximize ROI." },
]

// Service offerings specific to marketplace advertising
const adServices = [
  { 
    title: 'Sponsored Products', 
    description: 'Precision keyword targeting and strategic bidding across Amazon & Walmart product ads',
    color: 'from-blue-500/60 to-blue-600/40',
    icon: 'Tag',
    outputs: ['Increased Product Visibility', 'Lower Ad Spend', 'Higher Conversion Rates'],
    platforms: ['Amazon', 'Walmart']
  },
  { 
    title: 'Sponsored Brands', 
    description: 'Custom brand storytelling and headline ads to build recognition across marketplace shoppers',
    color: 'from-purple-500/60 to-purple-600/40',
    icon: 'Flag',
    outputs: ['Brand Recognition', 'Category Leadership', 'New Customer Acquisition'],
    platforms: ['Amazon', 'Walmart']
  },
  { 
    title: 'Sponsored Display', 
    description: 'Advanced audience targeting, competitor targeting, and remarketing campaigns',
    color: 'from-amber-500/60 to-amber-600/40',
    icon: 'Target',
    outputs: ['Expanded Audience Reach', 'Product Remarketing', 'Cross-Selling Opportunities'],
    platforms: ['Amazon', 'Walmart Connect']
  },
  {
    title: 'DSP Management',
    description: 'Programmatic display advertising across marketplace ecosystems and third-party sites',
    color: 'from-emerald-500/60 to-emerald-600/40',
    icon: 'BarChart',
    outputs: ['Advanced Audience Targeting', 'Off-Platform Reach', 'New-to-Brand Customers'],
    platforms: ['Amazon DSP', 'Walmart Connect']
  }
]

// Case study metrics
const caseStudies = [
  {
    title: 'Beauty Brand',
    image: '/earos-banner.png',
    logo: 'NatureWell',
    description: 'Transformed Amazon advertising strategy for a premium beauty brand, implementing a full-funnel approach with targeted keywords and audience segmentation.',
    details: 'A premium beauty brand struggled with high advertising costs and poor conversion rates on Amazon. Their products had good reviews but weren\'t achieving visibility or sales targets despite significant ad spend.',
    stat1: '57%',
    stat1Label: 'Revenue Increase',
    stat2: '-23%',
    stat2Label: 'ACOS Reduction',
    stat3: '4.2%',
    stat3Label: 'Conversion Rate'
  },
  {
    title: 'Kitchen Products',
    image: '/wisebond-banner.jpg',
    logo: 'KitchenCraft',
    description: 'Developed and executed a comprehensive Walmart advertising strategy, increasing category ranking and dominating competitive keywords.',
    details: 'A kitchen products manufacturer was struggling to gain traction on Walmart Marketplace despite success on other platforms. Their products were lost among competitors and sales were stagnant.',
    stat1: '42%',
    stat1Label: 'Sales Growth', 
    stat2: '62%',
    stat2Label: 'New Customers',
    stat3: '3.5x',
    stat3Label: 'ROI'
  },
  {
    title: 'Athletic Apparel',
    image: '/darcase-banner.png',
    logo: 'FlexFit',
    description: 'Scaled Amazon ad campaigns during peak season, dramatically improving visibility and sales while maintaining efficient ad spend.',
    details: 'An athletic apparel brand wanted to maximize their peak season performance but was struggling with rising advertising costs and diminishing returns on their existing Amazon campaigns.',
    stat1: '83%',
    stat1Label: 'Revenue Growth',
    stat2: '127%',
    stat2Label: 'Traffic Increase',
    stat3: '6.2x',
    stat3Label: 'ROAS'
  }
]

export default function AdvertisingPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudies[0] | null>(null);
  const theme = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  const scrollToProcess = () => {
    const targetElement = document.getElementById('advertising-process');
    if (targetElement) {
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="flex flex-col">
      <HeroHeader ref={headerRef} /> 
      
      {/* Spacer for additional vertical space */}
      
      {/* KINETIC HERO SECTION WITH PARALLAX LAYERS */}
      <section className="relative overflow-hidden bg-white dark:bg-[#09090B]">
        {/* Animated gradient orbs in background - visible in both modes */}
        <m.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0.01 }}
          animate={{ 
            opacity: [0.01, 0.03, 0.01],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 dark:from-primary/20 via-transparent to-transparent" style={{ top: '20%', left: '30%', width: '40%', height: '40%' }}></div>
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 dark:from-primary/15 via-transparent to-transparent" style={{ top: '50%', left: '10%', width: '30%', height: '30%' }}></div>
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 dark:from-primary/15 via-transparent to-transparent" style={{ top: '30%', left: '60%', width: '40%', height: '40%' }}></div>
        </m.div>
        
        {/* Background grid pattern - visible in both modes */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-15 pointer-events-none">
          {Array(12).fill(0).map((_, i) => (
            <m.div 
              key={i} 
              className="col-span-1 h-full border-r border-primary/50 dark:border-primary/70"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ 
                duration: 8, 
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
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.15
              }}
            ></m.div>
          ))}
        </div>
        
        {/* RetroGrid background - visible in both modes */}
        <div className="absolute inset-0 z-0 opacity-65 pointer-events-none">
          <RetroGrid 
            cellSize={80} 
            opacity={0.45} 
            lightLineColor="rgba(107, 114, 128, 0.6)" 
            darkLineColor="rgba(160, 174, 192, 0.7)" 
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10">
            <div className="select-text">
                <CallToActionAd />
            </div>
        </div>
      </section>

      {/* MARKETPLACE ADVERTISING SERVICES */}
      <section className="pt-0 pb-24 bg-gradient-to-b from-white to-[#FAFAFA] dark:from-[#09090B] dark:to-[#101012] overflow-hidden relative" id="services">
        {/* Animated orbs in background */}
        <m.div 
          className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none"
          initial={{ opacity: 0.01 }}
          animate={{ 
            opacity: [0.01, 0.03, 0.01],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-gradient-radial from-blue-500/20 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-gradient-radial from-purple-500/20 to-transparent"></div>
        </m.div>
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Feature108Demo Component */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 mb-16 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>
            
            <div className="relative z-10 transition-all duration-300 group-hover:border-primary/10">
              <Feature108Demo />
            </div>
          </m.div>
          
          {/* USP Banner */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-16 group flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl max-w-3xl mx-auto"></div>
            
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 rounded-xl p-8 shadow-md relative z-10 transition-all duration-300 group-hover:border-primary/10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary/90 transition-colors duration-300">100% In-House Advertising Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                    We never outsource your advertising. Our in-house team brings specialized expertise to every campaign, maximizing marketplace success.
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* IN-HOUSE ADVERTISING PROCESS - MOVED ABOVE CASE STUDIES */}
      <section id="advertising-process" className="py-16 bg-[#FAFAFA] dark:bg-[#101012] overflow-hidden relative">
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
        
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">Our In-house Advertising Process</h2>
          
          <div className="relative">
            {/* Center timeline line with glow effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 dark:from-primary/60 dark:via-primary/40 dark:to-primary/10 rounded-full" />
            
            {timelineData.map((item, idx) => (
              <m.div 
                key={idx} 
                className={`relative flex items-start ${idx % 2 === 0 ? 'justify-end md:justify-start' : 'justify-end'} mb-16`} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Card positioning based on screen size */}
                <div className={`md:${idx % 2 === 0 ? 'mr-16' : 'ml-16'} relative`}>
                  {/* Node glow effect - matching workflow cards */}
                  <m.div 
                    className="absolute inset-0 rounded-xl blur-md opacity-10 dark:opacity-20 z-0"
                    initial={{ opacity: 0.05 }}
                    animate={{ 
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.01, 1]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: idx * 0.7
                    }}
                  >
                    <div className="h-full w-full rounded-xl bg-gradient-to-b from-primary/10 to-primary/3 dark:from-primary/20 dark:to-primary/5"></div>
                  </m.div>
                  
                  {/* Timeline Card - styled like workflow nodes */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/3 dark:from-primary/30 dark:to-primary/5 border border-primary/20 dark:border-primary/30 shadow-xl relative z-10 w-80">
                    {/* Step title */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                    </div>
                    
                    {/* Process border line */}
                    <div className="absolute top-[60px] left-0 right-0 h-px bg-gray-300/40 dark:bg-white/20"></div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-700 dark:text-white/80 mt-4">{item.description}</p>
                    
                    {/* Key features */}
                    <div className="mt-5 pt-2">
                      <ul className="space-y-2">
                        {(() => {
                          let features: string[] = [];
                          if (idx === 0) {
                            features = [
                              "Comprehensive market analysis", 
                              "Competitive positioning review", 
                              "Goal-aligned strategy development",
                              "Custom campaign structures",
                              "Platform-specific optimizations"
                            ];
                          } else if (idx === 1) {
                            features = [
                              "Precision targeting and bidding", 
                              "Strategic audience segmentation", 
                              "A/B testing across variables",
                              "Continuous performance analysis",
                              "Incremental optimizations"
                            ];
                          } else if (idx === 2) {
                            features = [
                              "Comprehensive KPI tracking", 
                              "Attribution modeling", 
                              "Growth opportunity identification",
                              "ROI analysis and reporting",
                              "Strategy refinement"
                            ];
                          }
                          
                          return features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="h-3 w-3 text-primary" />
                              <span className="text-gray-700 dark:text-gray-300 text-xs">{feature}</span>
                            </li>
                          ));
                        })()}
                      </ul>
                    </div>
                    
                    {/* Node ID badge */}
                    <div className="absolute top-2 right-2 text-xs text-gray-700 dark:text-white/90 bg-white/60 dark:bg-background/40 rounded px-2 py-0.5 font-medium">
                      Step {idx + 1}
                    </div>
                  </div>
                </div>
                
                {/* Connection to center timeline */}
                <div className="absolute left-1/2 top-6 hidden md:block">
                  {/* Horizontal connection line with gradient */}
                  <div 
                    className={`absolute top-0 h-px w-16 ${idx % 2 === 0 ? '-right-16' : '-left-16'}`}
                    style={{
                      background: `linear-gradient(${idx % 2 === 0 ? 'to left' : 'to right'}, rgba(var(--primary-rgb), 0.3), rgba(var(--primary-rgb), 0.05))`
                    }}
                  ></div>
                  
                  {/* Center node with inner glow */}
                  <div className="absolute top-0 w-6 h-6 bg-primary/80 dark:bg-primary/90 rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-white/20 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white/90 rounded-full"></div>
                  </div>
                  
                  {/* Very subtle glow behind node */}
                  <div className="absolute top-0 w-8 h-8 bg-primary/5 dark:bg-primary/10 rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                </div>
                
                {/* Animated data flow dots */}
                <m.div 
                  className="absolute top-6 w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-primary/60 hidden md:block"
                  style={{
                    left: idx % 2 === 0 ? '50%' : 'auto',
                    right: idx % 2 === 0 ? 'auto' : '50%'
                  }}
                  animate={{
                    x: idx % 2 === 0 ? [-5, -40] : [5, 40],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: idx * 0.5
                  }}
                />
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table with glow effect - MOVED ABOVE CASE STUDIES */}
      <section id="comparison-table" className="py-16 bg-[#FAFAFA] dark:bg-[#101012] overflow-hidden relative">
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
        
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-white">
              The Difference: Superior In-House Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our creative-first approach and dedicated in-house team deliver superior results through specialized expertise and integrated workflows.
            </p>
          </m.div>

          {/* Redesigned comparison table */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 overflow-hidden bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200/60 dark:border-white/10 rounded-xl shadow-sm relative"
          >
            {/* Subtle glow behind the active column */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-[25%] w-[25%] h-full bg-primary/[0.03] dark:bg-primary/[0.06]"></div>
            </div>
            
            {/* Header row */}
            <div className="grid grid-cols-4 border-b border-gray-200/60 dark:border-white/10">
              <div className="col-span-1 p-4 font-medium text-gray-600 dark:text-gray-400 text-sm">
                Capability
              </div>
              <div className="col-span-1 p-4 font-semibold text-center text-primary bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10 text-sm">
                Our Agency
              </div>
              <div className="col-span-1 p-4 font-medium text-center text-gray-700 dark:text-gray-300 text-sm">
                Other Agencies
              </div>
              <div className="col-span-1 p-4 font-medium text-center text-gray-700 dark:text-gray-300 border-l border-gray-200/60 dark:border-white/10 text-sm">
                In-House Teams
              </div>
            </div>
            
            {/* Dedicated Account Managers */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Dedicated Specialists
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Keyword Research */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Keyword Research
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Competitor Analysis */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Competitor Analysis
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* DSP Management */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Demand-Side Platform (DSP)
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* ROAS Forecasting */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                ROAS Forecasting
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Walmart Connect */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Walmart Connect
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Daily Optimization */}
            <div className="grid grid-cols-4 border-b border-gray-200/40 dark:border-white/5">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Daily Optimization
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <div className="inline-flex items-center justify-center">
                  <X className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Price */}
            <div className="grid grid-cols-4 bg-gray-50/50 dark:bg-white/[0.01]">
              <div className="col-span-1 p-4 font-medium text-gray-700 dark:text-gray-300">
                Price
              </div>
              <div className="col-span-1 p-4 text-center bg-primary/[0.03] dark:bg-primary/[0.06] border-x border-gray-200/60 dark:border-white/10">
                <span className="text-sm font-medium text-primary">Competitive</span>
              </div>
              <div className="col-span-1 p-4 text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Premium</span>
              </div>
              <div className="col-span-1 p-4 text-center border-l border-gray-200/60 dark:border-white/10">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Variable</span>
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-zinc-50 py-16 md:py-20 dark:bg-zinc-900/50" id="case-studies">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl">Our Client Success Stories</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">See how we've helped brands achieve remarkable growth with our data-driven strategies and marketplace expertise.</p>
            </div>
            
            <div className="relative pl-3 pr-0 px-4"> 
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="relative"
              >
                <CarouselContent className="overflow-visible gap-2 px-4"> {/* Reduced gap */}
                  {caseStudies.map((cs, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <div className="p-1"> 
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
                                        <div key={i} className="w-2 h-2 rounded-full bg-yellow-500" />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex-grow" />
                            </CardContentUI>

                            <CardFooter className="grid grid-cols-2 items-end px-0 pb-2 py-1 mb-2 mt-auto">
                              <div className="flex items-end justify-start h-full pl-6 pb-2">
                                {/* Client logos removed */}
                              </div>
                              <div className="flex items-end justify-end h-full mr-4">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-150 cursor-pointer flex items-center justify-center px-4 py-2 rounded-md">
                                      <span className="text-white font-medium">Read Case Study</span>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[800px] max-h-[85vh] overflow-y-auto">
                                    <DialogHeader>
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-blue-600 font-bold">{cs.stat1}</span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="font-bold">{cs.stat1Label}</span>
                                      </div>
                                      <DialogTitle>{cs.title}</DialogTitle>
                                      <DialogDescription>{cs.description}</DialogDescription>
                                    </DialogHeader>
                                    
                                    <div className="space-y-6">
                                      <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                                        <img 
                                          src={cs.image} 
                                          alt="" 
                                          className="w-full h-64 object-cover rounded-lg" 
                                        />
                                      </div>
                                      
                                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary italic text-muted-foreground">
                                        "Their team didn't just manage our Amazon ads, they completely transformed them. They gave us strategic insights that significantly improved our ROAS and helped us dominate our category."
                                      </div>
                                      
                                      <div className="rounded-lg border overflow-hidden mb-6">
                                        <div className="bg-muted px-4 py-3 font-medium flex items-center space-x-2">
                                          <AlertCircle className="w-4 h-4" /> 
                                          <span>The Challenge</span>
                                        </div>
                                        <div className="p-4">
                                          <p className="text-sm mb-4">{cs.details}</p>
                                          
                                          <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="bg-muted/30 p-4 rounded-md">
                                              <h5 className="text-sm font-medium mb-3 flex items-center">
                                                <AlertTriangle className="w-4 h-4 text-amber-500 mr-2" />
                                                Key Issues We Uncovered
                                              </h5>
                                              <ul className="text-sm space-y-2">
                                                <li className="flex items-start">
                                                  <span className="text-red-500 mr-2">•</span>
                                                  <span>Poor keyword targeting with ineffective SEO strategy</span>
                                                </li>
                                                <li className="flex items-start">
                                                  <span className="text-red-500 mr-2">•</span>
                                                  <span>High ACoS of 38% with unsustainable ROAS</span>
                                                </li>
                                                <li className="flex items-start">
                                                  <span className="text-red-500 mr-2">•</span>
                                                  <span>Low product rankings (averaging position #32)</span>
                                                </li>
                                                <li className="flex items-start">
                                                  <span className="text-red-500 mr-2">•</span>
                                                  <span>Limited product visibility and conversion rate</span>
                                                </li>
                                              </ul>
                                            </div>
                                            
                                            <div className="bg-background border rounded-lg p-4">
                                              <div className="flex items-center justify-between mb-2">
                                                <div className="font-medium text-sm">Sales Performance (Pre-Chanlytics)</div>
                                                <div className="flex items-center text-red-500 text-xs">
                                                  <TrendingDown className="w-3 h-3 mr-1" /> Stagnant
                                                </div>
                                              </div>
                                              <div className="h-48">
                                                <ResponsiveContainer width="100%" height="100%">
                                                  <LineChart
                                                    data={beforeSalesData}
                                                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                                                  >
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                                                    <XAxis 
                                                      dataKey="month" 
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tickMargin={10}
                                                      stroke="#888888"
                                                    />
                                                    <YAxis 
                                                      tickFormatter={(value) => `$${value/1000}k`}
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tickMargin={10}
                                                      stroke="#888888"
                                                    />
                                                    <Tooltip 
                                                      formatter={(value) => [`$${value}`, 'Sales']}
                                                      contentStyle={{
                                                        backgroundColor: 'white', 
                                                        borderRadius: '0.375rem',
                                                        border: '1px solid #e2e8f0',
                                                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                                                      }}
                                                    />
                                                    <Line 
                                                      type="monotone" 
                                                      dataKey="sales" 
                                                      stroke="#ff5252" 
                                                      strokeWidth={2}
                                                      dot={{ fill: '#ff5252', strokeWidth: 2, r: 4 }}
                                                      activeDot={{ r: 6 }}
                                                    />
                                                  </LineChart>
                                                </ResponsiveContainer>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="rounded-lg border overflow-hidden mb-6">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-3 font-medium">Results Timeline</div>
                                        
                                        <div className="p-4">
                                          <h5 className="text-base font-medium mb-4">Our 4-Step Methodology</h5>
                                          
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="bg-muted/20 p-4 rounded-lg border border-muted">
                                              <div className="flex items-center mb-2">
                                                <div className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center font-bold mr-2 text-sm">1</div>
                                                <div className="font-medium">Custom Keyword Strategy</div>
                                              </div>
                                              <p className="text-xs text-muted-foreground">Advanced keyword research tailored to product niche and competitive landscape</p>
                                            </div>
                                            
                                            <div className="bg-muted/20 p-4 rounded-lg border border-muted">
                                              <div className="flex items-center mb-2">
                                                <div className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center font-bold mr-2 text-sm">2</div>
                                                <div className="font-medium">Listing Optimization</div>
                                              </div>
                                              <p className="text-xs text-muted-foreground">Enhanced content with strategic backend keywords and search-optimized structure</p>
                                            </div>
                                            
                                            <div className="bg-muted/20 p-4 rounded-lg border border-muted">
                                              <div className="flex items-center mb-2">
                                                <div className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center font-bold mr-2 text-sm">3</div>
                                                <div className="font-medium">Strategic PPC Management</div>
                                              </div>
                                              <p className="text-xs text-muted-foreground">Data-driven campaign adjustments with automated bidding strategies</p>
                                            </div>
                                            
                                            <div className="bg-muted/20 p-4 rounded-lg border border-muted">
                                              <div className="flex items-center mb-2">
                                                <div className="bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center font-bold mr-2 text-sm">4</div>
                                                <div className="font-medium">Competitive Analysis</div>
                                              </div>
                                              <p className="text-xs text-muted-foreground">Comprehensive positioning strategy based on marketplace data</p>
                                            </div>
                                          </div>
                                          
                                          <div className="border rounded-lg bg-background">
                                            <div className="flex items-center justify-between p-4 border-b">
                                              <div className="font-medium text-sm">Sales Performance (Post-Chanlytics)</div>
                                              <div className="flex items-center text-blue-600 text-xs">
                                                <TrendingUp className="w-3 h-3 mr-1" /> {cs.stat1} Growth
                                              </div>
                                            </div>
                                            <div className="p-4">
                                              <div className="h-56">
                                                <ResponsiveContainer width="100%" height="100%">
                                                  <LineChart
                                                    data={afterSalesData}
                                                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                                                  >
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                                                    <XAxis 
                                                      dataKey="month" 
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tickMargin={10}
                                                      stroke="#888888"
                                                    />
                                                    <YAxis 
                                                      tickFormatter={(value) => `$${value/1000}k`}
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tickMargin={10}
                                                      stroke="#888888"
                                                    />
                                                    <Tooltip 
                                                      formatter={(value) => [`$${value}`, 'Sales']}
                                                      contentStyle={{
                                                        backgroundColor: 'white', 
                                                        borderRadius: '0.375rem',
                                                        border: '1px solid #e2e8f0',
                                                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                                                      }}
                                                    />
                                                    <Line 
                                                      type="monotone" 
                                                      dataKey="sales" 
                                                      stroke="#2563eb" 
                                                      strokeWidth={2}
                                                      dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                                                      activeDot={{ r: 6 }}
                                                    />
                                                    <ReferenceLine 
                                                      y={beforeSalesData[0].sales}
                                                      stroke="#ff5252" 
                                                      strokeDasharray="3 3"
                                                      label={{ value: 'Pre-Chanlytics', position: 'insideBottomRight', fill: '#ff5252', fontSize: 10 }}
                                                    />
                                                  </LineChart>
                                                </ResponsiveContainer>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-background border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                                          <div className="text-2xl font-bold text-primary mb-1">{cs.stat1}</div>
                                          <div className="text-sm text-muted-foreground">Sales Growth</div>
                                        </div>
                                        <div className="bg-background border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                                          <div className="text-2xl font-bold text-blue-600">-24%</div>
                                          <div className="text-sm text-muted-foreground">ACoS Reduction</div>
                                        </div>
                                        <div className="bg-background border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                                          <div className="text-2xl font-bold text-amber-500">#3</div>
                                          <div className="text-sm text-muted-foreground">Average Ranking</div>
                                        </div>
                                      </div>
                                      
                                      <div className="rounded-lg border overflow-hidden mb-6">
                                        <div className="bg-muted px-4 py-3 font-medium">Results Timeline</div>
                                        <div className="overflow-x-auto">
                                          <table className="w-full border-collapse">
                                            <thead>
                                              <tr className="bg-muted/50">
                                                <th className="border px-4 py-2 text-left font-medium">Timeframe</th>
                                                <th className="border px-4 py-2 text-left font-medium">Sales Growth</th>
                                                <th className="border px-4 py-2 text-left font-medium">ACoS</th>
                                                <th className="border px-4 py-2 text-left font-medium">Ranking</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td className="border px-4 py-2">30 Days</td>
                                                <td className="border px-4 py-2 text-blue-600">+42%</td>
                                                <td className="border px-4 py-2 text-blue-600">-8%</td>
                                                <td className="border px-4 py-2">Top 10</td>
                                              </tr>
                                              <tr className="bg-muted/30">
                                                <td className="border px-4 py-2">60 Days</td>
                                                <td className="border px-4 py-2 text-blue-600">+78%</td>
                                                <td className="border px-4 py-2 text-blue-600">-15%</td>
                                                <td className="border px-4 py-2">Top 5</td>
                                              </tr>
                                              <tr>
                                                <td className="border px-4 py-2">90 Days</td>
                                                <td className="border px-4 py-2 text-blue-600">{cs.stat1}</td>
                                                <td className="border px-4 py-2 text-blue-600">-24%</td>
                                                <td className="border px-4 py-2">Top 3</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      
                                      <div className="bg-primary/5 rounded-lg p-6 text-center">
                                        <h4 className="text-lg font-semibold mb-2">Ready to Achieve Similar Results?</h4>
                                        <p className="text-sm text-muted-foreground mb-4 mx-auto max-w-md">Let us analyze your marketplace performance and show you how we can transform your e-commerce business.</p>
                                        <DialogClose asChild>
                                          <Button 
                                            className="bg-blue-600 text-white hover:bg-blue-700"
                                            onClick={scrollToProcess}
                                          >
                                            View Our Advertising Process
                                          </Button>
                                        </DialogClose>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </CardFooter>
                          </div>
                        </CardUI>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md dark:bg-blue-700 dark:hover:bg-blue-600 h-9 w-9" />
                <CarouselNext className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md dark:bg-blue-700 dark:hover:bg-blue-600 h-9 w-9" />
              </Carousel>
            </div>
          </div>
        </section>

      {/* READY TO TRANSFORM */}
      <section className="py-16 bg-transparent dark:bg-transparent overflow-hidden relative" id="book">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-8 max-w-6xl relative z-10 py-0">
          <div className="relative">
            {/* Background - Removed */}
            
            <div className="relative p-8 md:p-12 overflow-visible">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
              
              <div className="relative z-10 text-center mb-12">
                <m.span 
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Limited Availability
                </m.span>
                <m.h2 
                  className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Ready to Transform Your Marketplace Advertising?
                </m.h2>
                <m.p 
                  className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Book a Personalized Consultation Below
                </m.p>
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 flex flex-wrap justify-center gap-4"
                >
                  <Button
                    size="lg"
                    className="px-8 py-6 text-base font-medium group"
                    onClick={scrollToProcess}
                  >
                    <span>See Our Process</span>
                    <m.span
                      className="inline-block ml-2" 
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </m.span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-base font-medium"
                  >
                    <Link href="#case-studies">
                      View Our Case Studies
                    </Link>
                  </Button>
                </m.div>
              </div>
              
              <div className="relative z-10">
                <BookingCalendar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}