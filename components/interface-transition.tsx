"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Table, FileSpreadsheet, ShoppingCart, BarChart3, FileText, Mail } from 'lucide-react';
import { AnimatedShinyText } from './magicui/animated-shiny-text';

const InterfaceTransition = () => {
  // Platform data with icons
  const platforms = [
    { name: 'Charts & Analytics', icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { name: 'Database Reports', icon: <Table className="mr-2 h-4 w-4" /> },
    { name: 'Documents & PDFs', icon: <FileText className="mr-2 h-4 w-4" /> },
    { name: 'Email Inbox', icon: <Mail className="mr-2 h-4 w-4" /> },
    { name: 'Amazon Seller Central', icon: <ShoppingCart className="mr-2 h-4 w-4" /> },
    { name: 'Inventory Management', icon: <Table className="mr-2 h-4 w-4" /> },
    { name: 'POS Systems', icon: <ShoppingCart className="mr-2 h-4 w-4" /> },
    { name: 'Scheduling Software', icon: <FileText className="mr-2 h-4 w-4" /> },
    { name: 'Invoices & Contracts', icon: <FileSpreadsheet className="mr-2 h-4 w-4" /> },
    { name: 'CRM Dashboards', icon: <BarChart3 className="mr-2 h-4 w-4" /> },
    { name: 'Excel Spreadsheets', icon: <FileSpreadsheet className="mr-2 h-4 w-4" /> }
  ];
  
  // Display all platforms
  const cycleItems = Array.from({ length: platforms.length }, (_, i) => i); // Include all platforms
  
  return (
    <div className="pt-8 pb-4 overflow-visible max-w-3xl mx-auto text-center">
      <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400 mb-3">
        <div>
          <AnimatedShinyText>Replacing multiple complex tools with one simple interface</AnimatedShinyText>
        </div>
      </div>

      {/* Platform grid display */}
      <div className="relative mx-auto mb-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 pt-2">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center bg-background/80 backdrop-blur-sm px-2 py-1.5 rounded-lg border shadow-sm transition-all hover:shadow-md hover:bg-background/90">
              {platform.icon}
              <span className="text-xs font-medium truncate">{platform.name}</span>
            </div>
          ))}
        </div>
        
        {/* Original animation container - hidden but keeps same structure */}
        <div className="hidden absolute inset-0 flex items-center justify-center">
          {/* Left platform */}
          <div className="absolute flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm">
            {platforms[0].icon}
            <span className="text-xs font-medium">{platforms[0].name}</span>
          </div>

          {/* Center platform */}
          <div className="absolute flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm z-10">
            {platforms[1].icon}
            <span className="text-xs font-medium">{platforms[1].name}</span>
          </div>

          {/* Right platform */}
          <div className="absolute flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm">
            {platforms[2].icon}
            <span className="text-xs font-medium">{platforms[2].name}</span>
          </div>
        </div>

        {/* Very slow flowing particles to connect with AI Chat */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          {/* Just a few slow-moving particles */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-primary/20 rounded-full"
              style={{
                width: 4,
                height: 4,
                left: `${40 + (i - 1) * 10}%`
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [30, 60, 90],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                delay: i * 1.5,
                repeatDelay: 0.5, // Shorter delay for smoother transition
                ease: "easeInOut", // Changed from linear for smoother motion
                times: [0, 0.5, 1] // Control timing of keyframes for smoother transitions
              }}
            />
          ))}
        </div>

        {/* Slow pulse down arrow */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-primary opacity-70"
          animate={{
            y: [4, 8, 4],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default InterfaceTransition;
