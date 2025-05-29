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
  
  // State to manage the current batch of platforms to display
  const numBatches = Math.ceil(platforms.length / 3);
  const [currentBatchIndex, setCurrentBatchIndex] = React.useState(0);

  // Effect to cycle through batches
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBatchIndex(prevBatchIndex => (prevBatchIndex + 1) % numBatches);
    }, 9000); // Duration of one full animation cycle for a set of 3 platforms

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [platforms.length, numBatches]);

  // Determine the indices for the current batch
  const currentIndices = [
    (currentBatchIndex * 3 + 0) % platforms.length,
    (currentBatchIndex * 3 + 1) % platforms.length,
    (currentBatchIndex * 3 + 2) % platforms.length,
  ];

  return (
    <div className="pt-8 pb-4 overflow-visible max-w-3xl mx-auto text-center">
      <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400 mb-3">
        <div>
          <AnimatedShinyText>Replacing multiple complex tools with one simple interface</AnimatedShinyText>
        </div>
      </div>
      
      {/* Slow, clear wave pattern animation */}
      <div className="relative h-48 mx-auto mb-8">
        {/* Container for platform animations */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Left platform */}
          <motion.div
            className="absolute flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm"
            initial={{ opacity: 0, x: -60, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.3, 0],
              y: [-10, 0, 70, 120, 140],
              x: -60
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              repeatDelay: 0, // Remove delay between animations for smoother loop
              ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
              times: [0, 0.2, 0.7, 0.9, 1] // Control timing of keyframes for smoother transitions
            }}
          >
            {platforms[currentIndices[0]].icon}
            <span className="text-xs font-medium">{platforms[currentIndices[0]].name}</span>
          </motion.div>

          {/* Center platform - appears after left */}
          <motion.div
            className="absolute flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 1, 1, 0.3, 0],
              y: [-20, 0, 60, 120, 140],
              x: 0
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              delay: 3,
              repeatDelay: 0, // Remove delay between animations for smoother loop
              ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
              times: [0, 0.2, 0.7, 0.9, 1] // Control timing of keyframes for smoother transitions
            }}
          >
            {platforms[currentIndices[1]].icon}
            <span className="text-xs font-medium">{platforms[currentIndices[1]].name}</span>
          </motion.div>

          {/* Right platform - appears after center */}
          <motion.div
            className="absolute flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm"
            initial={{ opacity: 0, x: 60, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0.3, 0],
              y: [-10, 0, 70, 120, 140],
              x: 60
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              delay: 6,
              repeatDelay: 0, // Remove delay between animations for smoother loop
              ease: [0.4, 0, 0.2, 1], // Custom easing for smoother animation
              times: [0, 0.2, 0.7, 0.9, 1] // Control timing of keyframes for smoother transitions
            }}
          >
            {platforms[currentIndices[2]].icon}
            <span className="text-xs font-medium">{platforms[currentIndices[2]].name}</span>
          </motion.div>
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
