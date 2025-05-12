"use client"
import React, { useState } from "react"
import { motion as m } from "framer-motion"
import BookingCalendar from "@/components/booking-calendar"
import { HeroHeader } from "@/components/hero5-header"
import { Briefcase, Clock, Users, Zap, TrendingUp, TrendingDown, Award, Search, Image, AlertCircle, AlertTriangle, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CallToAction from "@/components/call-to-action"
import FeaturesSection8 from "@/components/features-8"
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
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

// Key metrics for VA operations
const stats = [
  { label: 'Orders Managed', value: '100k+' },
  { label: 'Support Availability', value: '24/7' },
  { label: 'Accuracy in Fulfillment', value: '98%' },
]
// Detailed timeline steps
const timeline = [
  { title: 'Account Setup & Access', desc: 'Securely onboard your Amazon & Walmart accounts with all necessary credentials.' },
  { title: 'Backend Audit', desc: 'Compare current efforts against the Chanlytics framework for optimization guidelines.' },
  { title: 'CRM Workload Organization', desc: 'Structure and organize VA tasks in our CRM for transparent client tracking and management.' },
  { title: 'Integration & Implementation', desc: 'Execute the optimized strategy with dedicated VA teams and proprietary systems.' },
  { title: 'Ongoing Reporting & Insights', desc: 'Receive weekly performance reports with actionable insights for continuous growth.' },
]
// Steps for the diagram
const steps = [
  { title: "Discovery & Onboarding", desc: "Understand your business and establish access." },
  { title: "Workflow Design", desc: "Map out VA processes and standard operating procedures." },
  { title: "Recruitment & Training", desc: "Hire and train a dedicated VA team tailored to your needs." },
  { title: "Integration & Automation", desc: "Implement task automation and system integrations." },
  { title: "Monitoring & Optimization", desc: "Track performance and refine workflows continuously." },
]

// Service workflows for the diagram
const workflows = [
  { 
    title: 'Supply Chain', 
    description: 'FBA/WFS inventory management, shipping & logistics coordination',
    color: 'from-blue-500/60 to-blue-600/40',
    icon: 'Briefcase',
    outputs: ['Inventory Tracking', 'Shipping Coordination']
  },
  { 
    title: 'Listing Optimization', 
    description: 'Content, keywords, images, pricing & competitive analysis',
    color: 'from-purple-500/60 to-purple-600/40',
    icon: 'Search',
    outputs: ['Enhanced Listings', 'Keyword Strategy']
  },
  { 
    title: 'Content Creation', 
    description: 'Product videos, A+ content, infographics & store design',
    color: 'from-amber-500/60 to-amber-600/40',
    icon: 'Image',
    outputs: ['Product Videos', 'A+ Content']
  }
]

export default function OperationsPage() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      

      {/* HERO SECTION */}
 
      <CallToAction />

      {/* WORKFLOW DIAGRAM */}
      <section className="py-16 bg-[#FAFAFA] dark:bg-[#101012] overflow-hidden relative">
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
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">Integrated Workflow Management</h2>
          
          {/* Brand Node at Top */}
          <div className="relative mb-24">
            <m.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-48 h-48 rounded-lg bg-gradient-to-b from-primary/10 dark:from-primary/30 to-primary/5 dark:to-primary/10 flex items-center justify-center border-2 border-primary/20 dark:border-primary/40 z-10 relative shadow-lg"
            >
              <div className="text-center">
                <div className="font-bold text-xl mb-1 text-gray-800 dark:text-white">YOUR BRAND</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Centralized Control Hub</div>
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
            
            {workflows.map((flow, idx) => (
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
                    idx === 0 ? 'bg-blue-500/10 dark:bg-blue-500/20' : 
                    idx === 1 ? 'bg-purple-500/10 dark:bg-purple-500/20' : 
                    'bg-amber-500/10 dark:bg-amber-500/20'
                  }`}
                >
                  {/* Node header with icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/60 dark:bg-gray-800/50 flex items-center justify-center">
                      {flow.icon === 'Briefcase' && <Briefcase className={`w-4 h-4 ${idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-purple-500' : 'text-amber-500'}`} />}
                      {flow.icon === 'Search' && <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-purple-500' : 'text-amber-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>}
                      {flow.icon === 'Image' && <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-purple-500' : 'text-amber-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>}
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
                          idx === 0 ? 'bg-gradient-to-b from-blue-500/60 to-blue-600/40' : 
                          idx === 1 ? 'bg-gradient-to-b from-purple-500/60 to-purple-600/40' : 
                          'bg-gradient-to-b from-amber-500/60 to-amber-600/40'
                        }`}></div>
                        <span className="text-xs text-gray-700 dark:text-white font-medium">{output}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Node ID badge */}
                  <div className={`absolute top-2 right-2 text-xs px-2 py-0.5 font-medium rounded ${
                    idx === 0 ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 
                    idx === 1 ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 
                    'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}>
                    Node {idx + 1}
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
            
            <div className="absolute top-24 w-48 h-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-primary/10 to-primary/3 dark:from-primary/20 dark:to-primary/5 rounded-lg border border-primary/20 dark:border-primary/30 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-800 dark:text-white">Seamless Integration</span>
            </div>
            
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
      </section>

      {/* INNOVATIVE PROCESS TIMELINE */}
      <section className="py-16 bg-[#FAFAFA] dark:bg-[#101012] overflow-hidden relative">
        {/* Animated blue gradient glow - similar to workflow diagram */}
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
        
        {/* Background grid pattern - matching workflow diagram */}
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
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">Innovative Process Timeline</h2>
          
          <div className="relative">
            {/* Center timeline line with glow effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 dark:from-primary/60 dark:via-primary/40 dark:to-primary/10 rounded-full" />
            
            {timeline.map((item, idx) => (
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
      </section>

      {/* FEATURES & BENEFITS */}
      <section className="py-7 bg-white dark:bg-[#101012] dark:bg-gradient-to-b dark:from-[#101012] dark:to-[#09090B] overflow-hidden relative">
        {/* Subtle gradient background - similar to workflow diagram */}
        <m.div 
          className="absolute inset-0 opacity-3 dark:opacity-5 pointer-events-none"
          initial={{ opacity: 0.01 }}
          animate={{ 
            opacity: [0.01, 0.03, 0.01],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-[#155DFC]/5 dark:from-[#155DFC]/10 via-transparent to-transparent" style={{ top: '30%', left: '50%', width: '60%', height: '60%' }}></div>
        </m.div>
        
        {/* Background grid pattern - matching workflow diagram but more subtle */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 dark:opacity-5 pointer-events-none">
          {Array(12).fill(0).map((_, i) => (
            <m.div 
              key={i} 
              className="col-span-1 h-full border-r border-primary/40 dark:border-primary/30"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.2
              }}
            ></m.div>
          ))}
        </div>
        
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <div className="text-center mb-12 relative">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">What You Get</h2>
            <div className="relative h-1 w-24 mx-auto">
              <div className="absolute h-1 bg-[#155DFC] w-full rounded-full"></div>
              <div className="absolute h-1 bg-[#155DFC]/30 w-full rounded-full blur-sm"></div>
              <m.div 
                className="absolute h-1 bg-[#155DFC]/20 w-[140%] -left-[20%] rounded-full blur-md"
                animate={{
                  left: ['-20%', '0%', '-20%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Simple hover effect - no animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 rounded-xl p-6 shadow-md relative z-10 h-full transition-all duration-300 group-hover:border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium mb-0 text-gray-800 dark:text-white group-hover:text-primary/90 transition-colors duration-300">Expert Virtual Assistants</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground ml-[52px]">Get access to a team of highly trained virtual assistants.</p>
              </div>
            </m.div>
            
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Simple hover effect - no animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 rounded-xl p-6 shadow-md relative z-10 h-full transition-all duration-300 group-hover:border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium mb-0 text-gray-800 dark:text-white group-hover:text-primary/90 transition-colors duration-300">Time-Saving Automation</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground ml-[52px]">Streamline tasks with our proprietary automation system.</p>
              </div>
            </m.div>
            
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Simple hover effect - no animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 rounded-xl p-6 shadow-md relative z-10 h-full transition-all duration-300 group-hover:border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium mb-0 text-gray-800 dark:text-white group-hover:text-primary/90 transition-colors duration-300">Dedicated Support Team</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground ml-[52px]">Get support from our team of experts whenever you need it.</p>
              </div>
            </m.div>
            
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Simple hover effect - no animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 rounded-xl p-6 shadow-md relative z-10 h-full transition-all duration-300 group-hover:border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium mb-0 text-gray-800 dark:text-white group-hover:text-primary/90 transition-colors duration-300">Continuous Improvement</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground ml-[52px]">Stay ahead of the curve with our continuous improvement process.</p>
              </div>
            </m.div>
          </div>
        </div>
      </section>
<FeaturesSection8 />
      {/* BOOKING CTA */}
      <section id="book" className="py-16 bg-background mt-8">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Streamline Your Marketplace Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Select a convenient time to speak with one of our VA operations specialists.</p>
          <BookingCalendar />
        </div>
      </section>
    </main>
  )
}