import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  TrendingUp, 
  Bot, 
  Calendar, 
  Bell, 
  DollarSign, 
  Star, 
  ShieldCheck, 
  Activity, 
  MessageSquare, 
  ArrowRight, 
  Users, 
  BarChart3,
  Workflow, 
  CheckCircle2, 
  Network,
  Zap,
  Sparkles,
  BrainCircuit
} from 'lucide-react';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Slower animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased from 0.2
    },
  },
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

// Feature 1: AI Agent System
const AIAgentContent = () => {
  const platforms = [
    { icon: <Phone className="h-3.5 w-3.5" />, name: "Phone" },
    { icon: <Instagram className="h-3.5 w-3.5" />, name: "Instagram" },
    { icon: <Facebook className="h-3.5 w-3.5" />, name: "Facebook" },
    { icon: <Twitter className="h-3.5 w-3.5" />, name: "Twitter" },
  ]

  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="space-y-2">
        {platforms.map((platform, i) => (
          <motion.div 
            key={i}
            variants={slideInLeft}
            className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md dark:hover:shadow-none transition-shadow duration-300"
          >
            <div className="flex items-center gap-2.5">
              <div className="text-gray-600 dark:text-zinc-400">{platform.icon}</div>
              <span className="text-gray-900 dark:text-zinc-100 text-sm font-medium">{platform.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Live</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-700 dark:text-blue-400 text-sm font-medium">This Month</p>
            <p className="text-gray-900 dark:text-white text-xl font-bold">347</p>
            <p className="text-gray-600 dark:text-zinc-400 text-xs">leads captured</p>
          </div>
          <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex items-center gap-3 mb-1">
            <Bot className="h-6 w-6 text-gray-700 dark:text-zinc-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI Agent System</h3>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-sm">24/7 lead capture across all platforms</p>
      </div>
    </div>
  )
}

// Feature 2: Backend AI Automations
const AutomationContent = () => {
  const automations = [
    { icon: <Calendar className="h-4 w-4" />, task: "Appointment Booking", status: "completed", time: "2 min ago" },
    { icon: <Bell className="h-4 w-4" />, task: "Reminder Sent", status: "completed", time: "5 min ago" },
    { icon: <DollarSign className="h-4 w-4" />, task: "Invoice Generated", status: "processing", time: "8 min ago" },
    { icon: <Star className="h-4 w-4" />, task: "Review Request", status: "scheduled", time: "Next: 2h" },
  ]

  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="space-y-2.5 flex-1">
        {automations.map((automation, i) => (
          <motion.div 
            key={i}
            variants={fadeInUp}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-md dark:hover:shadow-none transition-all duration-300"
          >
            <div className="text-gray-500 dark:text-zinc-400">{automation.icon}</div>
            <div className="flex-1">
              <p className="text-gray-900 dark:text-white text-sm font-medium">{automation.task}</p>
              <p className="text-gray-500 dark:text-zinc-500 text-xs">{automation.time}</p>
            </div>
            <Badge 
              variant={automation.status === 'completed' ? 'default' : automation.status === 'processing' ? 'secondary' : 'outline'}
              className={cn(
                "text-xs capitalize",
                automation.status === 'completed' && "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
                automation.status === 'processing' && "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
                automation.status === 'scheduled' && "bg-gray-100 text-gray-700 border-gray-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20",
              )}
            >
              {automation.status}
            </Badge>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="text-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
          <p className="text-emerald-700 dark:text-emerald-400 text-xl font-bold">12</p>
          <p className="text-emerald-600 dark:text-emerald-500 text-xs">Today</p>
        </div>
        <div className="text-center p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
          <p className="text-blue-700 dark:text-blue-400 text-xl font-bold">84</p>
          <p className="text-blue-600 dark:text-blue-500 text-xs">This Week</p>
        </div>
        <div className="text-center p-2 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20">
          <p className="text-purple-700 dark:text-purple-400 text-lg font-bold">∞</p>
          <p className="text-purple-600 dark:text-purple-500 text-xs">Scale</p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex items-center gap-3 mb-1">
            <ShieldCheck className="h-6 w-6 text-gray-700 dark:text-zinc-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend AI Automations</h3>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-sm">End-to-end workflow automation</p>
      </div>
    </div>
  )
}

// Feature 3: Smart Portal
const SmartPortalContent = () => {
  const activities = [
    { name: "Sarah Johnson", action: "Completed intake form", time: "2 min ago" },
    { name: "Tech Wizards Inc", action: "Paid invoice #INV-2024-078", time: "5 min ago" },
    { name: "Mike Chen", action: "Booked consultation for tomorrow", time: "8 min ago" },
  ]
  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="space-y-3">
        {activities.map((activity, i) => (
          <motion.div 
            key={i}
            variants={fadeInUp}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md dark:hover:shadow-none transition-shadow duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
              <Activity className="h-4 w-4 text-gray-600 dark:text-zinc-400" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 dark:text-white text-sm font-medium">{activity.name}</p>
              <p className="text-gray-600 dark:text-zinc-400 text-xs">{activity.action}</p>
            </div>
            <p className="text-gray-500 dark:text-zinc-500 text-xs">{activity.time}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <div className="flex items-center gap-3 mb-1">
            <BarChart3 className="h-6 w-6 text-gray-700 dark:text-zinc-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Smart Portal</h3>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-sm">Real-time performance tracking</p>
      </div>
    </div>
  )
}

// Feature 4: Personal Assistant Agent
const PersonalAssistantContent = () => {
  const [query, setQuery] = useState("How many appointments did we book this week?");
  const [response, setResponse] = useState("You booked 42 appointments this week - a 23% increase from last week! Tuesday was your best day with 11 bookings.");

  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="flex-1 flex flex-col gap-3">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
          <p className="text-gray-600 dark:text-zinc-400 text-xs mb-1">Your query</p>
          <p className="text-gray-900 dark:text-white text-sm">{query}</p>
        </div>
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
          <p className="text-blue-700 dark:text-blue-300 text-xs mb-1 flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" /> AI Response
          </p>
          <p className="text-gray-900 dark:text-white text-sm">{response}</p>
        </div>
      </div>
      <div className="mt-auto pt-4">
        <div className="flex items-center gap-3 mb-1">
            <BrainCircuit className="h-6 w-6 text-gray-700 dark:text-zinc-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal AI Assistant</h3>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-sm">Interactive business intelligence</p>
      </div>
    </div>
  )
}

// Feature 5: Integrated System
const IntegratedSystemContent = () => {
  const integrations = [
    { name: "HubSpot", icon: "🏢" },
    { name: "Salesforce", icon: "☁️" },
    { name: "Zapier", icon: "⚡" },
    { name: "Slack", icon: "💬" },
  ]

  const workflows = ["Capture", "Qualify", "Book", "Follow-up", "Upsell"]

  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 shadow-sm">
          <h4 className="text-gray-900 dark:text-white text-sm font-medium mb-2.5 flex items-center gap-2">
            <Workflow className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
            Lead Pipeline
          </h4>
          <div className="flex items-center gap-1.5">
            {workflows.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-zinc-400">{step}</span>
                </div>
                {i < workflows.length - 1 && (
                  <div className="h-0.5 w-full bg-emerald-500 rounded flex-shrink-0"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }} // Increased delay and added duration
              className="p-2 rounded-lg bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 text-center shadow-sm hover:shadow-md dark:hover:shadow-none transition-shadow duration-300"
            >
              <div className="text-lg mb-0.5">{integration.icon}</div>
              <p className="text-gray-900 dark:text-white text-xs font-medium truncate">{integration.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex items-center gap-3 mb-1">
            <Network className="h-6 w-6 text-gray-700 dark:text-zinc-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Integrated System</h3>
        </div>
        <p className="text-gray-600 dark:text-zinc-400 text-sm">Complete business automation hub</p>
      </div>
    </div>
  )
}

export default function FeatureBentoGrid() {
  const features = [
    {
      background: <AIAgentContent />,
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      background: <AutomationContent />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
      background: <SmartPortalContent />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
      background: <PersonalAssistantContent />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      background: <IntegratedSystemContent />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} // Increased from 0.8
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
            Instant business insights
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Capture, nurture, and convert every lead with a complete AI-powered automation system.
          </p>
        </motion.div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature, i) => (
            <BentoCard key={i} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}