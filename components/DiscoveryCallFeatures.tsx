'use client';

import React from 'react';
import {
  ClipboardList,
  PlayCircle,
  BrainCircuit,
  LineChart,
  MessagesSquare,
} from 'lucide-react';
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';

const PROCESS_PHASES = [
  {
    id: 'phase-1',
    icon: ClipboardList,
    title: 'Full Process Audit',
    description:
      'A comprehensive review of your current lead-to-revenue workflow to identify key opportunities and bottlenecks.',
  },
  {
    id: 'phase-2',
    icon: PlayCircle,
    title: 'Personalized AI OS Demo',
    description:
      'Experience the Chanlytics platform firsthand, tailored to show you how it solves your specific challenges.',
  },
  {
    id: 'phase-3',
    icon: BrainCircuit,
    title: 'Tailored Automation Strategy',
    description:
      'Receive a concrete, actionable plan designed to automate your most critical and time-consuming workflows.',
  },
  {
    id: 'phase-4',
    icon: LineChart,
    title: 'Clear ROI Projection',
    description:
      'We’ll provide a data-driven forecast showing the potential return on investment for your business.',
  },
  {
    id: 'phase-5',
    icon: MessagesSquare,
    title: 'No-Obligation Q&A',
    description:
      'Get all your questions answered by our experts in a transparent, pressure-free environment.',
  },
];

export default function DiscoveryCallFeatures() {
  return (
    <div className="container py-2 lg:hidden bg-white dark:bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left, sticky column with all text */}
        <div className="lg:sticky lg:top-24 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What’s Inside Your Free Discovery Call?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A transparent, value-packed session designed for your growth.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-[#0070F3] dark:text-[#38bdf8]">
              Our 5-Step Call Framework
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              We’ll guide you through each phase live on the call—ending with a roadmap you can implement
              immediately, whether or not you work with us.
            </p>
          </div>
        </div>

        {/* Right column with scrollable cards */}
        <ContainerScroll className="w-full min-h-[200vh] space-y-8">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 1}
              className="rounded-2xl p-8 backdrop-blur-lg bg-gradient-to-r from-[#0070F3]/10 to-[#38bdf8]/10 border border-[#0070F3]/20 dark:border-[#38bdf8]/30 shadow-lg shadow-black/10 dark:shadow-black/30"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-[#0070F3] dark:text-[#38bdf8]">
                  {String(index + 1).padStart(2, '0')}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
}