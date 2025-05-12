"use client"
import React, { useState } from "react"
import { motion as m } from "framer-motion"
import { Briefcase, Zap, Users, TrendingUp, CheckCircle2, X, MessageSquare, Database, Bot, BarChart2, Bell, AlertCircle, Award, TrendingDown } from "lucide-react"
import BookingCalendar from "@/components/booking-calendar"
import { HeroHeader } from "@/components/hero5-header"
import FeaturesSection8 from "@/components/features-8"
import FeaturesSection8AI from "@/components/features-8-ai"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RetroGrid } from "@/components/magicui/retro-grid"
import LogoCloud3 from "@/components/logo-cloud-3"
import FAQsFour from "@/components/faqs-4"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import CallToActionAI from "@/components/ai-hero"

// Automation workflows for the diagram
const automationWorkflows = [
  { 
    title: 'Reporting Agent', 
    description: 'ChatGPT assistant that delivers insights and notifications directly through chat',
    color: 'from-green-500/60 to-green-600/40',
    icon: 'MessageSquare',
    outputs: ['Real-time Reports', 'Instant Notifications']
  },
  { 
    title: 'Database Management', 
    description: 'Unified system connecting emails, CRM tools, and cloud storage platforms',
    color: 'from-red-500/60 to-red-600/40',
    icon: 'Database',
    outputs: ['CRM Integration', 'File Storage Access']
  },
  { 
    title: 'Workflow Engine', 
    description: 'Custom automation rules for your specific business needs',
    color: 'from-cyan-500/60 to-cyan-600/40',
    icon: 'Zap',
    outputs: ['Task Automation', 'Process Triggers']
  }
]

// Steps for the process timeline
const steps = [
  { title: "Discovery & Mapping", desc: "We audit your workflows and data sources to identify automation opportunities." },
  { title: "Custom Integration", desc: "Our team builds AI bots, RPA scripts, and connects your preferred channels." },
  { title: "Deployment & Training", desc: "Live rollout with comprehensive team training and monitored test runs." },
  { title: "Optimization & Scaling", desc: "Continuous improvement through AI-driven insights and performance monitoring." },
  { title: "Ongoing Support", desc: "Dedicated team ensures your automations evolve with your business needs." },
]

const uspCards = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />, 
    title: "Instant Deployment", 
    desc: "Launch automations in days, not months, with our ready-to-integrate AI modules."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />, 
    title: "Scalable Performance", 
    desc: "Our systems grow with your business, handling increasing workloads effortlessly."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />, 
    title: "Human-in-the-Loop", 
    desc: "Blend AI efficiency with expert oversight for the best results."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />, 
    title: "White Label Ready", 
    desc: "Offer automation as your own service—no technical expertise required."
  },
]

const features = [
  { 
    icon: <Zap className="w-5 h-5 text-primary" />, 
    title: "End-to-End Automation", 
    desc: "Streamline marketing, sales, and support tasks with intelligent workflows that adapt to your business." 
  },
  { 
    icon: <MessageSquare className="w-5 h-5 text-primary" />, 
    title: "Multi-Channel Notifications", 
    desc: "Stay updated via WhatsApp, SMS, email, or your CRM - choose what works for your team." 
  },
  { 
    icon: <Database className="w-5 h-5 text-primary" />, 
    title: "Smart Database Management", 
    desc: "Automatic data capture, deduplication, and historical tracking keep your records clean and current." 
  },
  { 
    icon: <Bot className="w-5 h-5 text-primary" />, 
    title: "AI Analytics Chatbot", 
    desc: "Get instant insights by asking questions in plain language - no complex queries needed." 
  },
]

// Case studies for AI automation
const caseStudies = [
  {
    image: "/earos-banner.png",
    stat1: "↑85%",
    stat1Label: "Task Automation Rate",
    stat1LabelShort: "Automation",
    stat2: "-70%",
    stat2Label: "Manual Workload",
    stat2LabelShort: "Workload",
    stat3: "24/7",
    stat3Label: "Operational Coverage",
    stat3LabelShort: "Coverage",
    title: "Streamlined Operations",
    description: "AI-powered automation reduced manual tasks by 70% while increasing efficiency.",
    logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
    ctaUrl: "#",
    details: "Global e-commerce brand struggled with scaling operations as they expanded. Our AI automation system handled inventory updates, order processing, and customer service inquiries automatically.",
  },
  {
    image: "/wisebond-banner.jpg",
    stat1: "↑210%",
    stat1Label: "Analytics Efficiency",
    stat1LabelShort: "Analytics",
    stat2: "-65%",
    stat2Label: "Reporting Time",
    stat2LabelShort: "Reporting",
    stat3: "#1",
    stat3Label: "Real-time Insights",
    stat3LabelShort: "Insights",
    title: "Data-Driven Decision Making",
    description: "AI analytics engine transformed business intelligence with real-time insights.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Beau_Lashes_logo.png",
    ctaUrl: "#",
    details: "Marketing agency needed better insights into campaign performance across multiple platforms. Our AI system consolidated data sources and provided real-time analytics dashboards.",
  },
  {
    image: "/darcase-banner.png",
    stat1: "↑150%",
    stat1Label: "Customer Engagement",
    stat1LabelShort: "Engagement",
    stat2: "95%",
    stat2Label: "Resolution Rate",
    stat2LabelShort: "Resolution",
    stat3: "5 min",
    stat3Label: "Avg. Response Time",
    stat3LabelShort: "Response",
    title: "AI-Powered Support System",
    description: "WhatsApp automation bot handled 95% of customer inquiries automatically.",
    logo: "https://images.unsplash.com/photo-1550482768-48bd99fefc52?auto=format&fit=crop&w=100&q=80",
    ctaUrl: "#",
    details: "Retail brand struggled with high volume of customer service inquiries. Our AI chatbot system provided instant responses 24/7 and seamlessly escalated complex issues to human agents.",
  },
  {
    image: "/creative-banner.png",
    stat1: "2.8x",
    stat1Label: "Process Efficiency",
    stat1LabelShort: "Efficiency",
    stat2: "-40%",
    stat2Label: "Operational Costs",
    stat2LabelShort: "Costs",
    stat3: "99.7%",
    stat3Label: "Accuracy Rate",
    stat3LabelShort: "Accuracy",
    title: "Intelligent Workflow Engine",
    description: "Custom automation rules saved 40% on operational costs with near-perfect accuracy.",
    logo: "Client logo",
    ctaUrl: "#",
    details: "Manufacturing firm needed to streamline quality control processes. Our AI system automated inspections and connected inventory systems with production workflows.",
  }
]

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

// FAQ items
const faqs = [
  {
    q: "Which notification channels can I use?",
    a: "We support WhatsApp, SMS, email, Slack, and most major CRM platforms. You can use any or all channels based on your team's preferences."
  },
  {
    q: "How does the analytics chatbot learn our metrics?",
    a: "Our AI models are trained on your historical data and business KPIs, learning your specific terminology and reporting needs."
  },
  {
    q: "Can you integrate with my existing CRM?",
    a: "Yes, we support all major CRMs including Salesforce, HubSpot, and Zoho, plus custom integrations for proprietary systems."
  },
  {
    q: "What security measures are in place?",
    a: "We employ enterprise-grade encryption, regular security audits, and comply with GDPR, CCPA, and other relevant data protection standards."
  },
  {
    q: "What's the typical timeline and cost?",
    a: "Most automations are live within 2-4 weeks. Pricing scales with usage, starting from $499/month for basic automation packages."
  }
]

const comparisonRows = [
  { label: "24/7 Operation", ai: true, manual: false },
  { label: "Error Reduction", ai: true, manual: false },
  { label: "Scalability", ai: true, manual: false },
  { label: "Custom Integrations", ai: true, manual: true },
  { label: "Human Oversight", ai: true, manual: true },
  { label: "Cost Efficiency", ai: true, manual: false },
  { label: "Speed", ai: true, manual: false },
]

export default function AIAutomationsPage() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      
      {/* Using CallToActionAI component instead of the previous hero section */}
      <CallToActionAI />

      {/* WORKFLOW DIAGRAM */}
      <section id="ai-automation-workflow" className="py-16 bg-[#FAFAFA] dark:bg-[#101012] overflow-hidden relative pb-0">
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
          <h2 id="ai-automation-ecosystem" className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">AI Automation Ecosystem</h2>
          
          {/* Brand Node at Top */}
          <div className="relative mb-24">
            <m.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-48 h-48 rounded-lg bg-gradient-to-b from-primary/10 dark:from-primary/30 to-primary/5 dark:to-primary/10 flex items-center justify-center border-2 border-primary/20 dark:border-primary/40 z-10 relative shadow-lg"
            >
              <div className="text-center">
                <div className="font-bold text-xl mb-1 text-gray-800 dark:text-white">YOUR BUSINESS</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Centralized Automation Hub</div>
                {/* Pulsing effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-primary/10 dark:border-primary/20 animate-pulse"></div>
              </div>
            </m.div>
            
            {/* Connection Points */}
            <div className="absolute left-1/2 top-[90%] w-4 h-4 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary transform -translate-x-1/2 translate-y-1"></div>
            <div className="absolute left-1/2 top-[90%] w-px h-12 bg-gradient-to-b from-primary/40 dark:from-primary/60 to-primary/5 dark:to-primary/10 transform -translate-x-1/2 translate-y-4"></div>
            
            {/* Data flow dots */}
            <m.div 
              className="absolute left-1/2 top-[90%] w-2 h-2 rounded-full bg-primary transform -translate-x-1/2 translate-y-4"
              animate={{
                y: [4, 16],
                opacity: [1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          {/* Workflow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Top Line */}
            <div className="hidden md:block absolute left-[16.67%] right-[16.67%] top-0 h-1 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 dark:from-primary/10 dark:via-primary/40 dark:to-primary/10 transform -translate-y-[15px] rounded-full"></div>
            
            {/* Vertical Connecting Lines */}
            <div className="hidden md:block absolute left-[16.67%] top-[-10px] w-1 h-[25px] bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform translate-x-[50%] rounded-full"></div>
            <div className="hidden md:block absolute left-1/2 top-[-10px] w-1 h-[25px] bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform -translate-x-[50%] rounded-full"></div>
            <div className="hidden md:block absolute right-[16.67%] top-[-10px] w-1 h-[25px] bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform -translate-x-[150%] rounded-full"></div>
            
            {/* Connection points */}
            <div className="hidden md:block absolute left-[16.67%] top-[-10px] w-3 h-3 rounded-full bg-primary transform translate-x-[50%] -translate-y-[50%]"></div>
            <div className="hidden md:block absolute left-1/2 top-[-10px] w-3 h-3 rounded-full bg-primary transform -translate-x-[50%] -translate-y-[50%]"></div>
            <div className="hidden md:block absolute right-[16.67%] top-[-10px] w-3 h-3 rounded-full bg-primary transform -translate-x-[150%] -translate-y-[50%]"></div>
            
            {automationWorkflows.map((flow, idx) => (
              <div key={idx} className="relative">
                {/* Node glow effect */}
                <m.div 
                  className="absolute inset-0 rounded-xl blur-xl opacity-20 dark:opacity-40 z-0"
                  initial={{ opacity: 0.15 }}
                  animate={{ 
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.7
                  }}
                >
                  <div className={`h-full w-full rounded-xl bg-gradient-to-b ${flow.color}`}></div>
                </m.div>

                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-xl backdrop-blur-sm border border-gray-100/50 dark:border-gray-800/50 shadow-xl relative z-10 ${
                    idx === 0 ? 'bg-green-500/10 dark:bg-green-500/20' : 
                    idx === 1 ? 'bg-red-500/10 dark:bg-red-500/20' : 
                    'bg-cyan-500/10 dark:bg-cyan-500/20'
                  }`}
                >
                  {/* Node header with icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/60 dark:bg-gray-800/50 flex items-center justify-center">
                      {flow.icon === 'MessageSquare' && <MessageSquare className={`w-4 h-4 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-red-500' : 'text-cyan-500'}`} />}
                      {flow.icon === 'Database' && <Database className={`w-4 h-4 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-red-500' : 'text-cyan-500'}`} />}
                      {flow.icon === 'Zap' && <Zap className={`w-4 h-4 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-red-500' : 'text-cyan-500'}`} />}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{flow.title}</h3>
                  </div>
                  
                  {/* Process border line */}
                  <div className="absolute top-[60px] left-0 right-0 h-px bg-gray-200/50 dark:bg-gray-800/50"></div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-white/80 mb-6 mt-2">{flow.description}</p>
                  
                  {/* Output ports */}
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="text-xs uppercase tracking-wider text-gray-700 dark:text-white/80 mb-1 font-semibold">Outputs</div>
                    {flow.outputs.map((output, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          idx === 0 ? 'bg-gradient-to-b from-green-500/60 to-green-600/40' : 
                          idx === 1 ? 'bg-gradient-to-b from-red-500/60 to-red-600/40' : 
                          'bg-gradient-to-b from-cyan-500/60 to-cyan-600/40'
                        }`}></div>
                        <span className="text-xs text-gray-700 dark:text-white font-medium">{output}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Node ID badge */}
                  <div className={`absolute top-2 right-2 text-xs px-2 py-0.5 font-medium rounded ${
                    idx === 0 ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 
                    idx === 1 ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 
                    'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                  }`}>
                    Module {idx + 1}
                  </div>
                  
                  {/* Bottom connection points */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/70 dark:bg-gray-800/50 rounded-full border border-gray-200/60 dark:border-gray-700/50"></div>
                </m.div>
                
                {/* Mobile connection line (only visible on mobile) */}
                <div className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-300/50 dark:bg-gray-700/30"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom flow connections */}
          <div className="mt-16 relative hidden md:block">
            <div className="absolute top-0 left-[16.67%] w-px h-12 bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform translate-x-[50%]"></div>
            <div className="absolute top-0 left-1/2 w-px h-12 bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform -translate-x-[50%]"></div>
            <div className="absolute top-0 right-[16.67%] w-px h-12 bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform -translate-x-[150%]"></div>
            
            <div className="absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 dark:from-primary/10 dark:via-primary/40 dark:to-primary/10"></div>
            
            <div className="absolute top-12 left-1/2 w-px h-12 bg-gradient-to-b from-primary/20 to-primary/5 dark:from-primary/40 dark:to-primary/10 transform -translate-x-[50%]"></div>
            

            
            {/* Animated data flow */}
            <m.div 
              className="absolute top-6 left-1/3 w-2 h-2 rounded-full bg-primary"
              animate={{
                x: [0, 200],
                opacity: [1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <m.div 
              className="absolute top-6 right-1/3 w-2 h-2 rounded-full bg-primary"
              animate={{
                x: [0, -200],
                opacity: [1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
            />
          </div>
        </div>

        {/* INNOVATIVE PROCESS TIMELINE - Moved above logo cloud */}
        <div className="mx-auto max-w-5xl px-8 relative z-10 mt-46 mb-24">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">Our AI Implementation Process</h2>
          
          <div className="relative">
            {/* Center timeline line with glow effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 dark:from-primary/60 dark:via-primary/40 dark:to-primary/10 rounded-full" />
            
            {steps.map((item, idx) => (
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
                    {/* Step numbering with glow */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                    </div>
                    
                    {/* Process border line - matching workflow card styling */}
                    <div className="absolute top-[60px] left-0 right-0 h-px bg-gray-300/40 dark:bg-white/20"></div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-700 dark:text-white/80 mt-4">{item.desc}</p>
                    
                    {/* Node ID badge - matching workflow styling */}
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
        
        {/* Logo Cloud - integrated without background */}
        <div className="mt-8">
          <LogoCloud3 />
        </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
      <section className="py-16 bg-white dark:bg-[#101012]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">AI Automation vs. Manual Solutions</h2>
          <div className="overflow-x-auto rounded-xl shadow border border-gray-100/50 dark:border-white/10">
            <table className="min-w-full bg-white dark:bg-white/5">
              <thead>
                <tr>
                  <th className="p-4 text-left font-medium text-gray-700 dark:text-gray-300">Capability</th>
                  <th className="p-4 text-center font-semibold text-primary">AI Automation</th>
                  <th className="p-4 text-center font-medium text-gray-700 dark:text-gray-300">Manual</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50/50 dark:bg-white/[0.01]" : ""}>
                    <td className="p-4 font-medium text-gray-700 dark:text-gray-300">{row.label}</td>
                    <td className="p-4 text-center">
                      {row.ai ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.manual ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASE STUDIES CAROUSEL */}
      <section id="ai-automation-success-stories" className="py-16 bg-[#FAFAFA] dark:bg-[#101012]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl">AI Automation Success Stories</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">See how our AI-powered automation solutions have transformed operations and boosted efficiency for businesses across various industries.</p>
          </div>
          
          <div className="relative pl-3 pr-0 px-4"> 
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative"
            >
              <CarouselContent className="overflow-visible gap-2 px-4">
                {caseStudies.map((cs, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="p-1"> 
                      <Card className="card-glow relative z-10 h-full overflow-hidden flex flex-col dark:bg-black p-0">
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
                          <CardHeader className="mt-0 pt-4 pb-2 px-6">
                            <CardTitle className="text-lg leading-tight text-primary mt-0 pt-0">{cs.title}</CardTitle>
                            <CardDescription className="text-sm mt-1 text-muted-foreground leading-snug min-h-[56px] line-clamp-2">{cs.description}</CardDescription>
                          </CardHeader>
                          
                          <CardContent className="pt-0 px-6 flex flex-col gap-3 mt-0 flex-grow">
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
                          </CardContent>

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
                                  
                                  {/* DialogContent will go here - simplified for this implementation */}
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
                                      "The AI automation system transformed how we handle daily operations, delivering efficiency beyond our expectations."
                                    </div>
                                    
                                    <div className="bg-primary/5 rounded-lg p-6 text-center">
                                      <h4 className="text-lg font-semibold mb-2">Ready to Transform Your Operations?</h4>
                                      <p className="text-sm text-muted-foreground mb-4">Let us analyze your business workflows and show you how AI automation can save time and boost efficiency.</p>
                                      <DialogClose asChild>
                                        <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                          Schedule a Demo
                                        </Button>
                                      </DialogClose>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </CardFooter>
                        </div>
                      </Card>
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

      {/* FAQs - New Component */}
      <FAQsFour />

      {/* BOOKING CTA */}
      <section id="book" className="py-16 bg-background">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses saving 20+ hours per week with our AI automation platform. Schedule your free consultation today.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="px-8"
              onClick={() => {
                const ecosystemSection = document.getElementById('ai-automation-workflow');
                if (ecosystemSection) {
                  ecosystemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}>
              <span>See How it Works</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const successStoriesSection = document.getElementById('ai-automation-success-stories');
                if (successStoriesSection) {
                  successStoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}>
              <span>See Case Studies</span>
            </Button>
          </div>
          <BookingCalendar />
        </div>
      </section>
    </main>
  )
}
