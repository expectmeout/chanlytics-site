"use client"

import React, { useMemo, useState, useEffect } from "react"
import { motion as m } from "framer-motion"
import { BlurredBackground } from "@/components/blurred-background"
import AccountManagementPricing from "@/components/account-management-pricing"
import ComparatorAdvertising from "@/components/comparator-advertising"
import ComparatorVA from "@/components/comparator-va"
import ComparatorManagement from "@/components/comparator-management"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  Target,
  Layers,
  ShieldCheck,
  BarChart,
  Clock,
  Zap,
  TrendingUp, // More relevant for growth/advertising?
  Cog,      // More relevant for systems/VA?
  Award,
  TrendingDown,
  Check,
} from "lucide-react"
import type { Service, ServiceIconName } from "@/types"
import { HeroHeader } from "@/components/hero5-header"
import BookingCalendar from '@/components/booking-calendar'


/* -------------------------------------------------------------------------- */
/*                               DATA & CONFIG                                */
/* -------------------------------------------------------------------------- */

// Updated Icon map for core services & benefits
const iconMap: Record<ServiceIconName | string, React.ComponentType<{ className?: string }>> = {
  Users,
  Target,
  Layers,
  Zap,
  TrendingUp,
  Cog,
  Award,
  TrendingDown,
  Check,
}

// Animation Variants
const sectionTitleVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const cardHover = { scale: 1.03, transition: { duration: 0.2 } }
const itemFadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
})

// CORE SERVICES DATA (Simplified)
const coreServicesData: Service[] = [
  {
    hash: "advertising",
    icon: "Target",
    title: "Performance Advertising & Campaign Management",
    description: "Maximize ROI with data-driven advertising strategies across Amazon & Walmart.",
    features: [
      "Holistic Campaign Management", 
      "Advanced Keyword & ASIN Targeting", 
      "ROAS Optimization & Reporting",
      "Full Performance Reporting"
    ],
    stat1: "↑42%",
    stat1Label: "Sales Growth",
    stat2: "-18%",
    stat2Label: "ACoS Reduction",
    stat3: "#1",
    stat3Label: "Top Rank Position",
    bgColorClass: "bg-primary/5",
  },
  {
    hash: "va-systems",
    icon: "Users",
    title: "Virtual Assistant Daily Operation Systems",
    description: "Delegate tasks to a fully trained VA team integrated with our proprietary automated system.",
    features: [
      "Custom Workflow Design", 
      "Dedicated VA Recruitment & Training", 
      "Performance Metrics & Reports",
      "Quality Assurance Systems"
    ],
    stat1: "↑65%",
    stat1Label: "Productivity",
    stat2: "-40%",
    stat2Label: "Operational Costs",
    stat3: "24/7",
    stat3Label: "Support Coverage",
    bgColorClass: "bg-primary/5",
  },
]

/* -------------------------------------------------------------------------- */
/*                               PAGE COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
  const transitionOptions = useMemo(() => ({ duration: 0.8, ease: "easeOut" }), [])
  const [selectedService, setSelectedService] = React.useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  // Handle dialog open/close
  const openComparator = (service: string) => {
    setSelectedService(service)
    setDialogOpen(true)
  }

  // Add event listener for custom event
  useEffect(() => {
    const handleCustomEvent = (e: any) => {
      if (e.detail) {
        openComparator(e.detail);
      }
    };
    
    window.addEventListener('openComparator', handleCustomEvent);
    return () => {
      window.removeEventListener('openComparator', handleCustomEvent);
    };
  }, []);

  return (
    <main className="flex flex-col">
      {/* ---------- HERO SECTION ---------- */}
      <HeroHeader />

      {/* ---------- SERVICES SECTION (UNIFIED) ---------- */}
      <section className="bg-background pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-8">
       
          <m.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl tracking-tight lg:text-4xl text-center mb-2"
          >
            Tailored Solutions for Amazon & Walmart Sellers
          </m.h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Choose from our specialized service packages or comprehensive account management
          </p>

          {/* Core Solutions Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
              {/* Left side - Core Services */}
              <div className="lg:col-span-12">
                {/* Core Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {coreServicesData.map((svc, index) => (
                    <div key={index}>
                      <Card className="card-glow relative z-10 h-full overflow-hidden flex flex-col bg-white dark:bg-muted/30 p-0 text-black dark:text-white border-0 shadow-xl">
                        {/* Banner with icon */}
                        <div className="p-6 relative">
                          <div className="text-black dark:text-white">
                            <div className="flex justify-center md:justify-start items-center mb-4">
                              <div className="bg-blue-600/20 p-2 rounded-full">
                                {React.createElement(iconMap[svc.icon] || iconMap["Target"], { className: "h-7 w-7 text-blue-400" })}
                              </div>
                            </div>
                            <div className="text-center md:text-left">
                              <h3 className="text-xl font-semibold text-black dark:text-white">{svc.title}</h3>
                              <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
                                {svc.description}
                              </p>
                            </div>
                            <div className="mt-4 flex justify-center md:justify-start">
                              <span className="text-2xl font-bold tracking-tight text-black dark:text-white">${svc.hash === "advertising" ? "1,999" : "1,999"}<span className="text-sm text-zinc-600 dark:text-zinc-300">/mo</span></span>
                            </div>
                            <div className="mt-3 flex flex-col gap-3 text-center md:text-left">
                              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                                {svc.hash === "advertising" 
                                  ? "Tailored pricing based on account size and advertising budget" 
                                  : "Flexible pricing based on operational scope and VA requirements"}
                              </p>
                              <div>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0 w-full">
                                  {svc.hash === "advertising" ? "Request Audit" : "Book Demo"}
                                </Button>
                              </div>
                            </div>
                            <h4 className="text-sm font-medium text-blue-400 mt-6 mb-3">Core Features</h4>
                            <ul role="list" className="space-y-2">
                              {svc.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <Check className="h-2.5 w-2.5 text-blue-400" />
                                  </div>
                                  <span className="text-zinc-700 dark:text-zinc-300 text-xs">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="text-center text-xs text-zinc-600 dark:text-zinc-500 mt-5">
                              {svc.hash === "advertising" 
                                ? "For sellers generating $10,000+ monthly ad spend seeking growth and ROAS improvement" 
                                : "For established brands looking to streamline operations and reduce overhead costs"}
                            </p>
                            <div className="mt-5">
                              <Button 
                                className="w-full bg-white dark:bg-black hover:bg-blue-50 dark:hover:bg-zinc-900 text-black dark:text-white border border-blue-200 dark:border-blue-800 font-medium h-10"
                                onClick={() => openComparator(svc.hash)}
                              >
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                  <div>
                    <AccountManagementPricing />
                  </div>
                </div>
              </div>
              
              {/* White Label AI Solutions Header */}
              <div className="lg:col-span-12 mx-auto max-w-5xl px-8 text-center mt-8 mb-0">
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm text-blue-500 font-medium uppercase tracking-wider mb-2 block"
                >
                  White Label Solutions
                </m.span>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-0 text-center">
                  White label automation systems for agencies and companies looking to streamline lead generation and client management
                </p>
              </div>
              
              {/* AI Automation for Agencies - Horizontal Card - Full Width */}
              <div className="lg:col-span-12 mt-0">
                <Card className="card-glow relative z-10 overflow-hidden flex flex-col bg-white dark:bg-[#16141d] border-0 shadow-xl rounded-xl transition duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  {/* Background effects */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-transparent light:opacity-100 dark:opacity-40 animate-gradient"></div>
                    <div className="hidden dark:block absolute top-1/4 left-0 w-1/3 h-32 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                    <div className="hidden dark:block absolute bottom-1/4 right-0 w-1/3 h-32 bg-blue-600/20 rounded-full filter blur-3xl"></div>
                    <div className="hidden dark:block absolute top-1/3 right-1/4 w-24 h-24 bg-blue-700/20 rounded-full filter blur-3xl"></div>
                    
                    {/* Network effect lines */}
                    <div className="absolute inset-0 dark:opacity-10 light:opacity-0">
                      <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                      <div className="absolute top-1/3 left-1/5 w-3/5 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                      <div className="absolute top-2/3 left-1/5 w-3/5 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    </div>
                   </div>
                   
                   {/* Content */}
                   <div className="relative z-10 px-6 py-12 flex flex-col items-center text-center text-black dark:text-white">
                     {/* Badge */}
                     <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-full px-4 py-1.5 flex items-center space-x-2 mb-6">
                       <Zap className="h-4 w-4 text-white" />
                       <span className="text-sm font-medium text-white">NEW AI-Powered Automations</span>
                     </div>
                     
                     {/* Title and description */}
                     <h2 className="text-3xl font-semibold text-black dark:text-white mb-3">Intelligent Automation Systems</h2>
                     <p className="text-zinc-600 dark:text-gray-300 max-w-2xl mb-8">
                       Complete automation solutions for agencies to streamline lead generation, client management, and sales processes. Our systems integrate seamlessly with your existing tech stack.
                     </p>
                     
                     {/* Integration icons - simulated with circles */}
                     <div className="grid grid-cols-5 gap-8 mb-8">
                       {[
                         { name: "Lead Generation", icon: "MessageSquare" },
                         { name: "Proposal Engine", icon: "FileText" },
                         { name: "Client Onboarding", icon: "UserPlus" },
                         { name: "Voice & Chat Agents", icon: "Headset" },
                         { name: "Pipeline Automation", icon: "GitMerge" }
                       ].map((service, i) => (
                         <div key={i} className="w-12 h-12 rounded-full bg-blue-600/20 dark:bg-gray-800/80 border border-blue-300/50 dark:border-gray-700/50 flex items-center justify-center relative group">
                           <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity w-32 text-xs text-blue-500 dark:text-blue-300 font-medium">
                             {service.name}
                           </div>
                           {service.icon === "MessageSquare" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                           {service.icon === "FileText" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                           {service.icon === "UserPlus" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>}
                           {service.icon === "Headset" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                           {service.icon === "GitMerge" && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>}
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-full animate-pulse"></div>
                         </div>
                       ))}
                     </div>
                     
                     {/* Starting price and CTA */}
                     <div className="flex flex-col items-center mt-4">
                       <div className="grid grid-cols-3 gap-8 mb-6">
                         <div className="text-center">
                           <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">Personalized</p>
                           <p className="text-zinc-600 dark:text-gray-300 text-sm">Email, Voice & Chat Automation</p>
                         </div>
                         <div className="text-center">
                           <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">Integrations</p>
                           <p className="text-zinc-600 dark:text-gray-300 text-sm">CRM, Scheduling & Analytics</p>
                         </div>
                         <div className="text-center">
                           <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">Full Service</p>
                           <p className="text-zinc-600 dark:text-gray-300 text-sm">Setup & Monthly Management</p>
                         </div>
                       </div>
                       
                       <div className="mb-6">
                         <p className="text-blue-500 dark:text-blue-400 text-sm uppercase tracking-wider">Monthly Retainer</p>
                         <p className="text-2xl font-bold tracking-tight text-black dark:text-white">$3,999<span className="text-sm text-zinc-600 dark:text-gray-400">/mo</span></p>
                       </div>
                       
                       <div className="flex gap-4 max-w-md mx-auto w-full">
                         <Button 
                           className="flex-1 bg-white dark:bg-black hover:bg-blue-50 dark:hover:bg-zinc-900 text-black dark:text-white border border-blue-200 dark:border-blue-800 font-medium h-10"
                           onClick={() => openComparator("ai-automation")}
                         >
                           Learn More
                         </Button>
                         <Button 
                           className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-0 h-10"
                         >
                           Schedule A Call
                         </Button>
                       </div>
                     </div>
                   </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparator Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen} modal={false}>
        <DialogContent 
          className="sm:max-w-4xl" 
          onClick={() => setDialogOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-xl mb-2">
              {selectedService === "advertising" && "Performance Advertising & Campaign Management"}
              {selectedService === "va-systems" && "VA Systems & Management"}
              {selectedService === "account-management" && "Account Management"}
              {selectedService === "ai-automation" && "AI-Powered Automations for Agencies"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedService === "advertising" && "Compare our advertising packages and features across tiers."}
              {selectedService === "va-systems" && "Compare our virtual assistant packages and features across tiers."}
              {selectedService === "account-management" && "Compare our account management packages and features across tiers."}
              {selectedService === "ai-automation" && "Compare our AI-powered automation packages and features across tiers."}
            </DialogDescription>
          </DialogHeader>
          <div className="p-1 mt-4">
            {selectedService === "advertising" && <ComparatorAdvertising />}
            {selectedService === "va-systems" && <ComparatorVA />}
            {selectedService === "account-management" && <ComparatorManagement />}
            {selectedService === "ai-automation" && (
              <div className="p-4">
                <h3 className="text-lg text-center mb-6">AI-Powered Lead Management & Automation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-blue-100 dark:border-blue-900/20 rounded-lg p-4 bg-white dark:bg-muted/30">
                    <div className="text-center mb-3">
                      <h4 className="text-base text-blue-800 dark:text-blue-300">Lead Acquisition</h4>
                      <p className="text-3xl mt-2">$1,499<span className="text-sm text-muted-foreground">/mo</span></p>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {["Multi-channel Lead Capture", "Data Validation", "Basic Enrichment", "Lead Scoring", "Email Notifications"].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-blue-500 rounded-lg p-4 bg-white dark:bg-muted/30 shadow-lg relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      RECOMMENDED
                    </div>
                    <div className="text-center mb-3">
                      <h4 className="text-base text-blue-800 dark:text-blue-300">Full Automation</h4>
                      <p className="text-3xl mt-2">$3,999<span className="text-sm text-muted-foreground">/mo</span></p>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {["All Lead Acquisition Features", "AI Proposal Generation", "Omni-channel Communication", "CRM Integration", "Voice Capabilities", "Human-in-the-loop", "Custom Workflows"].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-blue-100 dark:border-blue-900/20 rounded-lg p-4 bg-white dark:bg-muted/30">
                    <div className="text-center mb-3">
                      <h4 className="text-base text-blue-800 dark:text-blue-300">Enterprise</h4>
                      <p className="text-3xl mt-2">Custom<span className="text-sm text-muted-foreground">/mo</span></p>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {["All Full Automation Features", "White-labeled Solutions", "Advanced Integrations", "Dedicated Account Manager", "Custom AI Training", "API Access", "Priority Support"].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Our AI-powered automations can be customized to fit your specific agency needs.
                </p>
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Close</Button>
            <Button className="bg-white dark:bg-black hover:bg-blue-50 dark:hover:bg-zinc-900 text-black dark:text-white border border-blue-200 dark:border-blue-800">
              {selectedService === "account-management" ? "Customize Plan" : "Get Started"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ---------- KEY ADVANTAGES (Simplified) ---------- */}
      <section className="py-4 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <m.h2
            className="mb-16 text-center text-3xl sm:text-4xl"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Your Strategic Advantage
          </m.h2>

          {/* Simplified benefits grid - less text */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[ // Focused benefits for the two services
              {
                icon: "TrendingUp",
                title: "Accelerated Growth",
                desc: "Drive higher ROI and market share with expert ad management.",
              },
              {
                icon: "Zap",
                title: "Operational Efficiency",
                desc: "Reclaim time and reduce overhead with streamlined VA systems.",
              },
              {
                icon: "Target", // Re-using icons is fine
                title: "Data-Driven Decisions",
                desc: "Leverage actionable insights for continuous performance improvement.",
              },
              {
                icon: "Users",
                title: "Scalable Expertise",
                desc: "Access trained professionals and systems that grow with you.",
              },
              {
                icon: "Cog",
                title: "Customized Solutions",
                desc: "Tailored strategies and workflows built around your specific needs.",
              },
              {
                icon: "Layers", // Maybe 'Shield' for reliability?
                title: "Integrated Approach",
                desc: "Synergize advertising and operations for maximum impact.",
              },
            ].map((b, idx) => (
              <m.div
                key={b.title}
                className="rounded-xl border border-border/15 bg-muted/30 p-6 text-center transition-shadow duration-300 hover:shadow-md"
                variants={itemFadeInUp(idx * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={cardHover}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {iconMap[b.icon] && React.createElement(iconMap[b.icon], { className: "h-6 w-6" })}
                </div>
                <h3 className="mb-1 text-base">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-14">
          <div className="mx-auto max-w-5xl px-6 mt-10">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-normal lg:text-5xl">Ready to Elevate Your Marketplace Performance?</h2>
              <p className="mt-2 text-muted-foreground">Select a convenient time to speak with one of our marketplace specialists</p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg">
                  <Link href="/">
                    <span>Request a Consultation</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline">
                  <Link href="/">
                    <span>See Our Case Studies</span>
                  </Link>
                </Button>
              </div>
              
              <div className="mt-12">
                <BookingCalendar />
              </div>
            </div>
          </div>
        </section>

    </main>
  )
}