"use client";

import React from 'react';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';
import { ChevronDown, MessageSquare, Plus, LayoutGrid } from 'lucide-react';
import { ShineBorder } from "@/components/magicui/shine-border";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1.5 } },
  },
};

export function AIChatMockup() {
  return (
    <AnimatedGroup variants={transitionVariants} className="mt-6">
      <div className="flex flex-col">
        {/* Header removed */}
        
        <div className="relative flex-grow">
          
          <div className="dark:bg-black bg-background relative overflow-hidden rounded-xl border dark:border-[#333333] shadow-md dark:shadow-gray-950 h-full">
            {/* Fade out overlay only at the very bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background dark:from-black to-transparent pointer-events-none z-10"></div>
            {/* Chat Interface - Header */}
            <div className="h-12 bg-background dark:bg-black flex items-center justify-between px-4 border-b dark:border-[#333333]">
              <div className="flex items-center">
                <span className="font-medium text-foreground">Chatbot</span>
                <button className="ml-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              <div className="flex items-center">
                
                <button className="flex items-center text-sm text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-[#333333] rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-[#222222]">
                  <LayoutGrid className="h-3.5 w-3.5 mr-1.5" />
                  <span>ChatGPT</span>
                  <ChevronDown className="h-3.5 w-3.5 ml-1.5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 pb-16 h-full overflow-y-auto flex flex-col">
              {/* Placeholder text */}
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Your conversations will appear here once you start chatting!
              </div>
              
              {/* Chat content centered with icon */}
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1a1a1a]">
                  <MessageSquare className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
              
              {/* Main description */}
              <div className="text-center text-sm mb-8 max-w-md mx-auto">
                <p>Access marketplace data, track performance metrics, and monitor your e-commerce operations from a single unified interface.</p>
              </div>
              
              {/* Example queries in a single grid with 4 cells */}
              <div className="grid grid-cols-2 gap-3 mx-auto max-w-md mb-10">
                <div className="bg-gray-100 dark:bg-[#1a1a1a] p-3 rounded-lg border dark:border-[#333333]">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Summarize VA tasks</p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">What is Danny working on</p>
                </div>
                <div className="bg-gray-100 dark:bg-[#1a1a1a] p-3 rounded-lg border dark:border-[#333333]">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Check status of</p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">inbound FBA shipments</p>
                </div>
                <div className="bg-gray-100 dark:bg-[#1a1a1a] p-3 rounded-lg border dark:border-[#333333]">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Analyze past orders</p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">Which cities are ordering the most</p>
                </div>
                <div className="bg-gray-100 dark:bg-[#1a1a1a] p-3 rounded-lg border dark:border-[#333333]">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Show performance metrics</p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">for top selling products</p>
                </div>
              </div>
            </div>
            
            {/* Chat input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background dark:bg-black border-t dark:border-[#333333]">
              <div className="flex items-center rounded-lg border dark:border-[#333333] hover:border-gray-300 dark:hover:border-[#444444] bg-gray-50 dark:bg-[#1a1a1a] px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Send a message..." 
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-sm outline-none dark:text-gray-300 dark:placeholder-gray-500"
                  readOnly 
                />
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0 ml-2 h-6 w-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Benefits */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-20">
            
            <div className="bg-[#155DFC]/10 dark:bg-[#155DFC]/20 text-[#155DFC] dark:text-[#155DFC]/90 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm mb-2">Simple Natural Language</div>
            <div className="bg-[#155DFC]/10 dark:bg-[#155DFC]/20 text-[#155DFC] dark:text-[#155DFC]/90 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm">All Data in One Place</div>
          </div>
        </div>
      </div>
    </AnimatedGroup>
  );
}
