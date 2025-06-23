"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Zap,
  Target,
  Calendar,
  CheckCircle,
  CreditCard,
  Star,
  Bot,
  ArrowRight,
} from 'lucide-react';  
import { AnimatePresence } from 'framer-motion';

// Enhanced Lead to Customer Flow Component
export function LeadToCustomerFlow() {
    const [activeStage, setActiveStage] = useState(0);
    
    const journey = [
      { 
        stage: 'Lead', 
        icon: <Zap className="h-4 w-4" />, 
        color: 'from-blue-500 to-cyan-500',
        action: "Engaging new leads, and reactivating old clients via all platforms with natural conversation"
      },
      { 
        stage: 'Qualified', 
        icon: <Target className="h-4 w-4" />, 
        color: 'from-cyan-500 to-blue-500',
        action: "Analyzing conversation to qualify lead based on predefined criteria."
      },
      { 
        stage: 'Booked', 
        icon: <Calendar className="h-4 w-4" />, 
        color: 'from-blue-500 to-purple-500',
        action: "Scheduling qualified lead into an available calendar slot, then reminding lead of appointment."
      },
      { 
        stage: 'Serviced', 
        icon: <CheckCircle className="h-4 w-4" />, 
        color: 'from-purple-500 to-pink-500',
        action: "Automating post-service follow-up and logging interaction in the Smart Portal."
      },
      { 
        stage: 'Invoiced', 
        icon: <CreditCard className="h-4 w-4" />, 
        color: 'from-pink-500 to-orange-500',
        action: "Generating and sending the client a detailed invoice for services completed."
      },
      { 
        stage: 'Reviewed', 
        icon: <Star className="h-4 w-4" />, 
        color: 'from-orange-500 to-yellow-500',
        action: "Requesting a Google review and referral from happy customers."
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % journey.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);

    const currentJourney = journey[activeStage];
  
    return (
      <div className="relative rounded-xl bg-gray-50 dark:bg-zinc-800/30 p-4 sm:p-6 lg:p-8 overflow-hidden">
        
        {/* Journey Path - Desktop */}
        <div className="relative mb-6 hidden sm:block">
          <div className="absolute inset-x-0 top-5 h-0.5 bg-gray-200 dark:bg-zinc-700/50" />
          <motion.div
            className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeStage + 1) / journey.length) * 100}%` }}
            transition={{ duration: 1.15, ease: "easeInOut" }}
          />
          
          <div className="relative flex justify-between">
            {journey.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <motion.div
                  animate={{
                    scale: activeStage === idx ? 1.15 : 1,
                    y: activeStage === idx ? -3 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 cursor-pointer",
                    activeStage >= idx
                      ? `bg-gradient-to-br ${item.color} text-white shadow-md`
                      : "bg-gray-200 dark:bg-zinc-800 text-gray-400 dark:text-zinc-600"
                  )}
                  onClick={() => setActiveStage(idx)}
                >
                  {item.icon}
                  {activeStage === idx && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                <motion.span 
                  animate={{ opacity: activeStage === idx ? 1 : 0.6 }}
                  className="mt-2 text-xs font-medium text-gray-700 dark:text-zinc-400 whitespace-nowrap"
                >
                  {item.stage}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Path - Mobile */}
        <div className="sm:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Customer Journey</h3>
            <span className="text-xs text-gray-500 dark:text-zinc-500">{activeStage + 1} of {journey.length}</span>
          </div>
          <div className="relative">
            <div className="h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeStage + 1) / journey.length) * 100}%` }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
                {currentJourney.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{currentJourney.stage}</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* AI Actions Display with fixed height */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">AI Agent</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-zinc-400">
                    <ArrowRight className="h-4 w-4 hidden sm:block flex-shrink-0" />
                    <p className="text-sm leading-relaxed">
                      {currentJourney.action}
                    </p>
                  </div>
                  
                  
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Placeholder to prevent layout shift */}
          <div className="invisible h-0 overflow-hidden">
            <div className="rounded-xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="h-8 w-8" />
                  <span className="text-sm sm:text-base">AI Agent</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Generating and sending invoice automatically
                </p>
                <div className="ml-auto mt-2 sm:mt-0">
                  <span className="px-2.5 py-1 text-xs">1 day later</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats or additional info for desktop */}
        <div className="hidden lg:flex items-center justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
            <div className="text-xs text-gray-500 dark:text-zinc-500">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">&lt; 30s</div>
            <div className="text-xs text-gray-500 dark:text-zinc-500">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
            <div className="text-xs text-gray-500 dark:text-zinc-500">Automated</div>
          </div>
        </div>
      </div>
    );
  }