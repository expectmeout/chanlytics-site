import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Instagram, 
  MessageSquare, 
  TrendingUp, 
  Bot, 
  Calendar, 
  Bell, 
  DollarSign, 
  Star, 
  Activity, 
  ArrowRight, 
  Users, 
  BarChart3,
  CheckCircle2, 
  X,
  Zap,
  Sparkles,
  BrainCircuit,
  Clock,
  Target,
  Shield,
  Workflow
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EnhancedFeaturesSection = () => {
  const [activeDemo, setActiveDemo] = useState('chat');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Before & After Comparison Data
  const problems = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Missed calls during off-hours",
      description: "Potential customers call when you're unavailable, leading to lost opportunities"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Manual follow-up processes",
      description: "Time-consuming manual outreach that often gets forgotten or delayed"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "No visibility into lead sources",
      description: "Unable to track which marketing channels are driving actual revenue"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours spent on repetitive questions",
      description: "Team members answering the same customer questions repeatedly"
    }
  ];

  const solutions = [
    {
      icon: <Bot className="h-5 w-5" />,
      title: "24/7 AI agents capture every lead",
      description: "Automated response system that never sleeps, ensuring no opportunity is missed"
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Smart automated follow-up sequences",
      description: "Intelligent nurturing that adapts based on prospect behavior and engagement"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Real-time ROI tracking by channel",
      description: "Clear visibility into which marketing efforts drive the most valuable customers"
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "AI handles common queries instantly",
      description: "Intelligent responses that free up your team for high-value conversations"
    }
  ];

  // Core Features Data
  const coreFeatures = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Multi-Platform AI Agents",
      description: "Deploy intelligent agents across phone, SMS, social media, and web chat",
      benefits: ["Instagram DM automation", "Facebook Messenger", "WhatsApp integration", "Phone call handling"],
      demo: "chat"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-Time Analytics Dashboard",
      description: "Monitor performance, track conversions, and optimize your lead generation",
      benefits: ["Live activity feeds", "Conversion tracking", "ROI by channel", "Performance insights"],
      demo: "analytics"
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Personal AI Business Assistant",
      description: "Get instant answers about your business metrics in plain English",
      benefits: ["Natural language queries", "Instant insights", "Performance summaries", "Trend analysis"],
      demo: "assistant"
    }
  ];

  const renderDemo = () => {
    switch(activeDemo) {
      case 'chat':
        return (
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-zinc-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AI Agent</h4>
                  <p className="text-sm text-green-500">● Online</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-900 dark:text-white">Hi! I'm interested in your services. Can you tell me about pricing?</p>
                    <span className="text-xs text-gray-500">2:34 PM</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-blue-500 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">Hi there! I'd be happy to help you with pricing information. Let me get you connected with the right details.</p>
                    <span className="text-xs text-blue-100">2:34 PM</span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-blue-500 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">I've also scheduled a quick 15-minute call for tomorrow at 2 PM. You'll receive a calendar invite shortly!</p>
                    <span className="text-xs text-blue-100">2:35 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-zinc-800">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Live Activity Feed</h4>
              
              {[
                { name: "Sarah Johnson", action: "Booked appointment", time: "2 min ago", platform: "Instagram" },
                { name: "Tech Wizards Inc", action: "Completed intake form", time: "5 min ago", platform: "Website" },
                { name: "Mike Chen", action: "Requested pricing info", time: "8 min ago", platform: "Facebook" },
                { name: "Global Solutions", action: "Downloaded case study", time: "12 min ago", platform: "Email" }
              ].map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.name}</p>
                    <p className="text-xs text-gray-600 dark:text-zinc-400">{activity.action} via {activity.platform}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </motion.div>
              ))}
              
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-zinc-800">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">127</p>
                  <p className="text-xs text-gray-600 dark:text-zinc-400">Today</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
                  <p className="text-xs text-gray-600 dark:text-zinc-400">This Week</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">98%</p>
                  <p className="text-xs text-gray-600 dark:text-zinc-400">Response Rate</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'assistant':
        return (
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-zinc-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="h-6 w-6 text-blue-500" />
                <h4 className="font-semibold text-gray-900 dark:text-white">AI Business Assistant</h4>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                  <p className="text-gray-600 dark:text-zinc-400 text-xs mb-1">Your question</p>
                  <p className="text-gray-900 dark:text-white text-sm">"How many appointments did we book this week?"</p>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    <p className="text-blue-700 dark:text-blue-300 text-xs">AI Response</p>
                  </div>
                  <p className="text-gray-900 dark:text-white text-sm">You booked 42 appointments this week - that's a 23% increase from last week! Your top performing channel was Instagram with 18 bookings.</p>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {["Show revenue breakdown", "Compare to last month", "Top performing times"].map((suggestion, i) => (
                    <button
                      key={i}
                      className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            🔄 Before & After
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl mb-6">
            The old way vs the smart way
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            See how businesses transform their lead generation and customer engagement with AI-powered automation.
          </p>
        </motion.div>

        {/* Before & After Comparison */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Without Chanlytics */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <X className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Without Chanlytics</h3>
            </div>
            
            <div className="bg-white dark:bg-zinc-900/50 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800">
              <div className="space-y-6">
                {problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{problem.title}</h4>
                      <p className="text-gray-600 dark:text-zinc-400 text-sm">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mock notification - missed call */}
              <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm font-medium">
                    P
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">Potential Client</p>
                    <p className="text-red-600 dark:text-red-400 text-sm">Missed Call</p>
                  </div>
                  <span className="text-gray-500 text-sm">34m ago</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* With Chanlytics */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">With Chanlytics</h3>
            </div>
            
            <div className="bg-white dark:bg-zinc-900/50 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800">
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{solution.title}</h4>
                      <p className="text-gray-600 dark:text-zinc-400 text-sm">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mock notifications - successful bookings */}
              <div className="mt-8 space-y-3">
                {[
                  { service: "Hair Styling & Blowout appointment", time: "34m ago" },
                  { service: "Men's haircut - premium fade appointment", time: "2h ago" },
                  { service: "Hair Coloring appointment", time: "3h ago" }
                ].map((booking, i) => (
                  <div key={i} className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white text-sm">New Event Scheduled</p>
                        <p className="text-blue-600 dark:text-blue-400 text-xs">{booking.service}</p>
                      </div>
                      <span className="text-gray-500 text-xs">{booking.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Features Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful features that drive results
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the complete automation system that transforms how you capture, nurture, and convert leads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Feature List */}
            <div className="space-y-6">
              {coreFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                    activeDemo === feature.demo 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' 
                      : 'bg-white dark:bg-zinc-900/50 border-gray-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800'
                  }`}
                  onClick={() => setActiveDemo(feature.demo)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      activeDemo === feature.demo 
                        ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' 
                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-zinc-400 mb-4">
                        {feature.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-zinc-400">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Demo */}
            <div className="lg:sticky lg:top-8">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {renderDemo()}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "24/7", label: "Availability", icon: <Clock className="h-6 w-6" /> },
              { metric: "<30s", label: "Response Time", icon: <Zap className="h-6 w-6" /> },
              { metric: "100%", label: "Lead Capture", icon: <Target className="h-6 w-6" /> },
              { metric: "3.2x", label: "Conversion Rate", icon: <TrendingUp className="h-6 w-6" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white dark:bg-zinc-900/50 rounded-xl border border-gray-200 dark:border-zinc-800"
              >
                <div className="flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.metric}
                </div>
                <div className="text-gray-600 dark:text-zinc-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              See How It Works
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedFeaturesSection;
