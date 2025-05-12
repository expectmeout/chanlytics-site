import React from 'react';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1.5 } },
  },
};

export function DashboardMockup() {
  return (
    <AnimatedGroup variants={transitionVariants} className="mt-6">
      <div className="flex flex-col">
        <div className="mb-6 flex items-center">
          <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 w-8 h-8 rounded-full flex items-center justify-center mr-3">
            <span className="font-bold">1</span>
          </div>
          <h3 className="text-xl font-medium">Traditional Dashboards</h3>
        </div>
        <div className="relative flex-grow">
          <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative overflow-hidden rounded-xl border shadow-md h-full">
            {/* Amazon Seller Central Dashboard Mockup */}
            <div className="absolute top-0 right-0 left-0 h-12 bg-[#232f3e] flex items-center px-4">
              <div className="flex items-center">
                <div className="text-white font-bold text-lg mr-6">amazon seller</div>
                <div className="text-gray-300 text-xs mx-3">Catalog</div>
                <div className="text-gray-300 text-xs mx-3">Inventory</div>
                <div className="text-gray-300 text-xs mx-3">Pricing</div>
                <div className="text-gray-300 text-xs mx-3">Orders</div>
                <div className="text-white text-xs font-medium mx-3">Advertising</div>
                <div className="text-gray-300 text-xs mx-3">Reports</div>
              </div>
            </div>
            <div className="pt-12 h-full">
              {/* Left sidebar */}
              <div className="absolute left-0 top-12 bottom-0 w-[180px] bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-2 text-xs">
                <div className="font-medium text-xs p-2 mb-1">ADVERTISING</div>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded-sm mb-1">Campaign Manager</div>
                <div className="text-gray-700 dark:text-gray-300 p-2 mb-1">Bulk Operations</div>
                <div className="text-gray-700 dark:text-gray-300 p-2 mb-1">Product Targeting</div>
                <div className="text-gray-700 dark:text-gray-300 p-2 mb-1">Stores</div>
                <div className="text-gray-700 dark:text-gray-300 p-2 mb-1">Reports</div>
                <div className="text-gray-700 dark:text-gray-300 p-2 mb-1">Brand Dashboard</div>
              </div>
              <div className="ml-[180px] p-3">
                {/* Main content: Summary grid and table as before */}
                {/* Copy the original summary grid and table code here */}
              </div>
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/80 z-10" />
            {/* Pain points list */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-20">
              <div className="bg-red-100/80 dark:bg-red-950/80 text-red-800 dark:text-red-200 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm mb-2">
                Complex & Time-Consuming
              </div>
              <div className="bg-red-100/80 dark:bg-red-950/80 text-red-800 dark:text-red-200 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm">
                Multiple Screens & Logins
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedGroup>
  );
}
