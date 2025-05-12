"use client"
import React from "react"
import { motion as m } from "framer-motion"
import BookingCalendar from "@/components/booking-calendar"
import { HeroHeader } from "@/components/hero5-header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import {
  Users,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Briefcase,
  Shield,
  Calendar,
  Megaphone,
  LineChart,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  Zap,
  Check
} from "lucide-react"
import CallToAction from "@/components/call-to-action"

// Management process steps
const steps = [
  { 
    title: "Consultation & Audit", 
    desc: "Comprehensive assessment of your marketplace operations, performance metrics, and growth opportunities.",
    icon: "Target",
    detail: "We analyze your current Amazon and Walmart presence, review account health, identify competitive advantages, and evaluate operational efficiency."
  },
  { 
    title: "Strategy & Planning", 
    desc: "Develop a tailored account management approach with clear KPIs and growth targets.",
    icon: "BarChart3",
    detail: "Our team formulates actionable strategies for catalog optimization, pricing, advertising efficiency, inventory management, and brand protection."
  },
  { 
    title: "Implementation & Setup", 
    desc: "Deploy dedicated account managers and tools with seamless integration into your operations.",
    icon: "Users", 
    detail: "We assign specialized account managers for advertising, catalog, and operations, implementing proprietary tools and systems for efficiency."
  },
  { 
    title: "Monitoring & Reporting", 
    desc: "Track key metrics with custom dashboards and real-time performance monitoring.",
    icon: "LineChart",
    detail: "Gain visibility through daily operational metrics, weekly performance reports, and monthly comprehensive business reviews with actionable insights."
  },
  { 
    title: "Executive Strategy Calls", 
    desc: "Conduct regular high-level reviews and strategy sessions with leadership.",
    icon: "Briefcase",
    detail: "Quarterly business reviews with our leadership team evaluate progress, refine strategies, and address emerging marketplace trends and opportunities."
  },
]

// Key stats and metrics
const stats = [
  { value: '+43%', label: 'Average Revenue Growth', icon: 'TrendingUp' },
  { value: '-18%', label: 'ACoS Reduction', icon: 'PieChart' },
  { value: '24/7', label: 'Account Support', icon: 'Clock' },
]

// Core management capabilities
const capabilities = [
  {
    title: "Marketplace Strategy",
    description: "Comprehensive roadmaps for sustainable growth and competitive positioning on Amazon and Walmart.",
    features: [
      "Market Analysis & Competitive Intelligence",
      "Brand Positioning Strategy",
      "Catalog Expansion Planning",
      "Growth Forecasting",
      "Marketplace Selection & Prioritization"
    ],
    icon: "Target"
  },
  {
    title: "Advertising Management",
    description: "Data-driven campaign management to maximize visibility and ROAS across all ad types.",
    features: [
      "Sponsored Products Optimization",
      "Sponsored Brands & Display",
      "DSP Management",
      "Budget Allocation Strategy",
      "Competitor Conquest Campaigns"
    ],
    icon: "Megaphone"
  },
  {
    title: "Operational Excellence",
    description: "Streamlined systems for inventory, logistics, and marketplace compliance.",
    features: [
      "Inventory Forecasting",
      "FBA/WFS Strategy",
      "Logistics Optimization",
      "Account Health Management",
      "Profit Margin Analysis"
    ],
    icon: "Briefcase"
  },
  {
    title: "Performance Analytics",
    description: "Custom reporting and insights for data-driven decision making.",
    features: [
      "Custom KPI Dashboards",
      "Competitive Benchmarking",
      "Trend Analysis",
      "Sales Velocity Reporting",
      "Attribution Modeling"
    ],
    icon: "BarChart3"
  }
]

// Service tiers
const tiers = [
  {
    name: "Growth",
    price: "$5,999",
    description: "For emerging brands seeking to establish marketplace presence.",
    features: [
      "Dedicated Account Manager",
      "Weekly Reporting",
      "Basic Catalog Optimization",
      "Standard Advertising Management",
      "Quarterly Strategy Sessions",
      "Basic Inventory Planning",
      "Email Support (24-48hr response)"
    ],
    cta: "Best for $500K-$1M annual sales"
  },
  {
    name: "Accelerate",
    price: "$8,999",
    description: "For established brands looking to scale and optimize their marketplace presence.",
    features: [
      "Senior Account Manager",
      "Specialized Advertising Strategist",
      "Weekly Reporting & Biweekly Calls",
      "Advanced Catalog Optimization",
      "Enhanced Advertising Management",
      "Monthly Strategy Sessions",
      "Advanced Inventory Forecasting",
      "Priority Email & Phone Support"
    ],
    cta: "Best for $1M-$5M annual sales",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations requiring comprehensive marketplace management.",
    features: [
      "Director-Level Account Lead",
      "Dedicated Team (Advertising, Catalog, Operations)",
      "Daily Monitoring & Weekly Calls",
      "Complete Catalog Strategy",
      "Premium Advertising Management",
      "Monthly Executive Strategy Sessions",
      "Custom Analytics & Reporting",
      "24/7 Priority Support",
      "Quarterly Executive Business Reviews"
    ],
    cta: "Best for $5M+ annual sales"
  }
]

export default function ManagementPage() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      {/* HERO SECTION */}
      <section className="bg-background pt-32 pb-16">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <m.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl font-semibold mb-4">
            Enterprise Account Management
          </m.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Full-service management with dedicated senior account managers and strategic planning.
          </p>
        </div>
      </section>

      {/* PROCESS ROADMAP */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Process</h2>
          {/* Advanced Interactive Timeline */}
          <div className="relative mt-16">
            {/* Center timeline line with glow effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 dark:from-primary/60 dark:via-primary/40 dark:to-primary/10 rounded-full" />
            
            {steps.map((step, idx) => (
              <m.div 
                key={idx} 
                className={`relative flex items-start ${idx % 2 === 0 ? 'justify-end md:justify-start' : 'justify-end'} mb-16`} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Card positioning based on screen size */}
                <div className={`md:${idx % 2 === 0 ? 'mr-16' : 'ml-16'} relative w-full md:w-auto md:max-w-md`}>
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
                  
                  {/* Timeline Card */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/3 dark:from-primary/20 dark:to-primary/5 border border-primary/20 dark:border-primary/30 shadow-xl relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/70 dark:bg-background/40 flex items-center justify-center">
                        {step.icon === 'Target' && <Target className="w-5 h-5 text-primary/80" />}
                        {step.icon === 'BarChart3' && <BarChart3 className="w-5 h-5 text-primary/80" />}
                        {step.icon === 'Users' && <Users className="w-5 h-5 text-primary/80" />}
                        {step.icon === 'LineChart' && <LineChart className="w-5 h-5 text-primary/80" />}
                        {step.icon === 'Briefcase' && <Briefcase className="w-5 h-5 text-primary/80" />}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{step.title}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-700 dark:text-white/80 mt-2">{step.desc}</p>
                    
                    {/* Expandable detail section */}
                    <div className="mt-4 pt-4 border-t border-gray-300/30 dark:border-white/10">
                      <p className="text-xs text-gray-600 dark:text-white/70">{step.detail}</p>
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
                  
                  {/* Subtle glow behind node */}
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

      {/* KEY METRICS SECTION */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-8">
          <div className="text-center mb-12">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-3"
            >
              Proven Results for Marketplace Sellers
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our account management services consistently deliver measurable performance improvements
            </m.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-muted/30 rounded-xl p-6 shadow-md border border-gray-100/50 dark:border-gray-800/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {stat.icon === 'TrendingUp' && <TrendingUp className="w-6 h-6 text-primary" />}
                    {stat.icon === 'PieChart' && <PieChart className="w-6 h-6 text-primary" />}
                    {stat.icon === 'Clock' && <Clock className="w-6 h-6 text-primary" />}
                  </div>
                  <m.div 
                    className="h-8 w-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                  >
                    {/* Simple chart visualization */}
                    <div className="h-full w-full flex items-end justify-end gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <div 
                          key={i} 
                          className="h-full w-2 bg-primary/20 rounded-sm relative overflow-hidden"
                          style={{ height: `${20 + Math.random() * 80}%` }}
                        >
                          <m.div 
                            className="absolute bottom-0 left-0 right-0 bg-primary"
                            initial={{ height: "0%" }}
                            animate={{ height: `${40 + Math.random() * 60}%` }}
                            transition={{ duration: 1, delay: 1 + idx * 0.1 + i * 0.1 }}
                          />
                        </div>
                      ))}
                    </div>
                  </m.div>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-8">
          <div className="text-center mb-12">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-3"
            >
              Core Management Capabilities
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive solutions for every aspect of your marketplace presence
            </m.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-muted/30 rounded-xl p-6 shadow-md border border-gray-100/50 dark:border-gray-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {capability.icon === 'Target' && <Target className="w-5 h-5 text-primary" />}
                    {capability.icon === 'Megaphone' && <Megaphone className="w-5 h-5 text-primary" />}
                    {capability.icon === 'Briefcase' && <Briefcase className="w-5 h-5 text-primary" />}
                    {capability.icon === 'BarChart3' && <BarChart3 className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-medium">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{capability.description}</p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-8">
          <div className="text-center mb-12">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-3"
            >
              Pricing Tiers
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the plan that best fits your business needs
            </m.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, idx) => (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white dark:bg-muted/30 rounded-xl p-6 shadow-md border border-gray-100/50 dark:border-gray-800/50 ${tier.highlighted ? 'bg-primary/10 dark:bg-primary/20' : ''}`}
              >
                <h3 className="text-lg font-medium mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <p className="text-2xl font-bold mb-2">{tier.price}</p>
                <ul className="space-y-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4">{tier.cta}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BOOKING SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-8">
          <BookingCalendar />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-8">
          <CallToAction />
        </div>
      </section>
    </main>
  )
}