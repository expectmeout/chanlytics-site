"use client"

import { Cpu, Lock, Sparkles, Zap, TrendingUp, TrendingDown, Award, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { Faqs3 } from '@/components/faqs-3'
import ContentFiveSection from '@/components/content-5'
import BookingCalendar from '@/components/booking-calendar'
import IntegrationsSection from '@/components/integrations'
import FeatureBentoGrid from '@/components/feature-bento-grid'
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
import AiAgentHero from '@/components/ai-agent-hero';
import PersonalAiAssistant from '@/components/personal-ai-assistant';

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
        <AiAgentHero />
      <section id="features">
        <PersonalAiAssistant />
      </section>
        <section id="integrations">
          <IntegrationsSection />
        </section>

        <section id="marketplace-solution-faqs">
          <Faqs3 />
        </section>
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
                      // Adjust scroll to account for sticky header if necessary
                      const headerOffset = 70; // Example offset, adjust as needed
                      const elementPosition = solutionSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
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
                      // Adjust scroll to account for sticky header if necessary
                      const headerOffset = 70; // Example offset, adjust as needed
                      const elementPosition = caseStudiesSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}>
                  <span>View Our Case Studies</span>
                </Button>
              </div>
              
              <div id="booking" className="mt-12">
                <BookingCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
