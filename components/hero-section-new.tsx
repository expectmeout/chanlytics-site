"use client";

import React, { useState, useEffect, useMemo } from 'react'
import { Mail, SendHorizonal, ArrowRight, MonitorCheck, MessageSquare, ArrowUp, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from '@/components/hero5-header'
import { LogoCloud } from '@/components/logo-cloud'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import { ShineBorder } from '@/components/magicui/shine-border'
import { useTheme } from "next-themes";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const [showTypewriter, setShowTypewriter] = useState(false);
    const { theme } = useTheme();
    
    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 900); // match TextEffect animation duration
        return () => clearTimeout(timer);
    }, []);

    // Memoized email form to keep static on toggle
    const formElement = useMemo(() => (
        <div className="mt-12">
            <form action="" className="mx-auto max-w-sm">
                <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />
                    <input placeholder="Enter your email" className="h-12 w-full bg-transparent pl-12 focus:outline-none" type="email" />
                    <div className="md:pr-1.5 lg:pr-0">
                        <Button aria-label="submit" size="sm" className="rounded-(--radius)">
                            <span className="hidden md:block">Book a Demo</span>
                            <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    ), []);

    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate z-10 hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-36">
                        <div className="mx-auto text-center">
                            {/* Headline: two lines, animation and typewriter inline on second line, centered */}
                            <h1 className="text-balance text-6xl font-medium sm:text-6xl md:text-6xl text-center mb-6">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    className="block"
                                    style={{ display: 'block' }}
                                >
                                    Scale Amazon & Walmart
                                </TextEffect>
                                <span className="block">
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="span"
                                        className="mr-2"
                                    >
                                        with
                                    </TextEffect>
                                    {showTypewriter && (
                                        <Typewriter
                                            words={[
                                                'Unified Analytic',
                                                'AI-Powered Insights',
                                                'Unified Analytics'
                                            ]}
                                            loop={0}
                                            cursor
                                            cursorStyle="|"
                                        />
                                    )}
                                </span>
                            </h1>

                            {/* Dashboard to AI Interface Transition */}
                            <div className="mx-auto text-center mt-16 mb-16">
                                <h2 className="text-2xl font-medium mb-6">From Multiple Dashboards to One Unified Interface</h2>
                                
                                {/* Complexity meter at top */}
                                <div className="flex justify-between w-full mb-2 px-8 text-xs text-gray-400">
                                    <div>Low Complexity</div>
                                    <div className="font-medium">High Complexity</div>
                                </div>
                                
                                {/* Dashboard Cards Row */}
                                <div className="relative">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
                                        {/* Amazon Seller Central */}
                                        <div className="bg-[#3c2412] p-6 rounded-lg shadow border border-[#5c3a20] transition-all relative overflow-hidden">
                                            <div className="flex justify-center mb-4">
                                                <div className="bg-[#5c3a20] p-2 rounded-lg">
                                                    <div className="text-white text-2xl">📊</div>
                                                </div>
                                            </div>
                                            <h3 className="text-white text-center font-medium mb-1">Amazon Seller Central</h3>
                                            <div className="text-xs text-center text-red-300 my-1">Complex Learning Curve</div>
                                            <p className="text-xs text-center text-gray-400 mt-2">Multiple dashboards, complicated navigation</p>
                                        </div>
                                        
                                        {/* Spreadsheets & Reports */}
                                        <div className="bg-[#102040] p-6 rounded-lg shadow border border-[#1e3a6a] transition-all relative overflow-hidden">
                                            <div className="flex justify-center mb-4">
                                                <div className="bg-[#1e3a6a] p-2 rounded-lg">
                                                    <div className="text-white text-2xl">📑</div>
                                                </div>
                                            </div>
                                            <h3 className="text-white text-center font-medium mb-1">Spreadsheets & Reports</h3>
                                            <div className="text-xs text-center text-blue-300 my-1">Complex Learning Curve</div>
                                            <p className="text-xs text-center text-gray-400 mt-2">Manual data entry, formula errors</p>
                                        </div>
                                        
                                        {/* Team Management */}
                                        <div className="bg-[#2a1e43] p-6 rounded-lg shadow border border-[#3d2b60] transition-all relative overflow-hidden">
                                            <div className="flex justify-center mb-4">
                                                <div className="bg-[#3d2b60] p-2 rounded-lg">
                                                    <div className="text-white text-2xl">👥</div>
                                                </div>
                                            </div>
                                            <h3 className="text-white text-center font-medium mb-1">Team Management</h3>
                                            <div className="text-xs text-center text-purple-300 my-1">Complex Learning Curve</div>
                                            <p className="text-xs text-center text-gray-400 mt-2">Task tracking silos, multiple logins</p>
                                        </div>
                                        
                                        {/* Analytics Dashboards */}
                                        <div className="bg-[#3b1f32] p-6 rounded-lg shadow border border-[#542c48] transition-all relative overflow-hidden">
                                            <div className="flex justify-center mb-4">
                                                <div className="bg-[#542c48] p-2 rounded-lg">
                                                    <div className="text-white text-2xl">📈</div>
                                                </div>
                                            </div>
                                            <h3 className="text-white text-center font-medium mb-1">Analytics Dashboards</h3>
                                            <div className="text-xs text-center text-pink-300 my-1">Complex Learning Curve</div>
                                            <p className="text-xs text-center text-gray-400 mt-2">Data silos, technical skills required</p>
                                        </div>
                                    </div>
                                    
                                    {/* Connection Lines */}
                                    <div className="absolute inset-0 h-[calc(100%+80px)] pointer-events-none">
                                        <svg width="100%" height="100%" viewBox="0 0 800 170" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100,80 L400,150" stroke="#666" strokeWidth="1.5" strokeDasharray="4 2" />
                                            <path d="M270,80 L400,150" stroke="#666" strokeWidth="1.5" strokeDasharray="4 2" />
                                            <path d="M530,80 L400,150" stroke="#666" strokeWidth="1.5" strokeDasharray="4 2" />
                                            <path d="M700,80 L400,150" stroke="#666" strokeWidth="1.5" strokeDasharray="4 2" />
                                        </svg>
                                    </div>
                                </div>
                                
                                {/* Downward Arrow and Simplified Text */}
                                <div className="relative py-6 flex flex-col items-center">
                                    <div className="bg-[#04b15e] p-3 rounded-full relative z-10 shadow-md">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 5L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="mt-4 mb-1 text-gray-300">Simplified with AI</div>
                                </div>
                                
                                {/* Green Feature Badges */}
                                <div className="flex flex-col space-y-2 items-center z-20 mt-2 mb-12">
                                    <div className="bg-[#04b15e] px-4 py-1.5 rounded-full text-sm text-white font-medium">Simple Natural Language</div>
                                    <div className="bg-[#04b15e] px-4 py-1.5 rounded-full text-sm text-white font-medium">All Data in One Place</div>
                                </div>
                            </div>

                            {/* AI Chat Interface */}
                            <div className="mt-10 mb-16 max-w-[62rem] mx-auto">
                                <div className="relative min-h-[500px]">
                                    <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-black relative overflow-hidden rounded-xl border border-zinc-800 shadow-md h-full">
                                        {/* Chat Interface - Header */}
                                        <div className="h-12 bg-zinc-900 flex items-center justify-between px-4 border-b border-zinc-800">
                                            <div className="flex items-center">
                                                <MessageSquare className="h-4 w-4 text-white mr-2" />
                                                <div className="text-white font-bold text-sm">Chatbot</div>
                                            </div>
                                            <div className="flex items-center space-x-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                            </div>
                                        </div>
                                        <div className="pt-16 px-4 pb-24 h-full overflow-y-auto flex flex-col">
                                            {/* Chat content placeholder */}
                                            <div className="mb-6 text-center">
                                                <div className="text-xs text-gray-500">Today</div>
                                            </div>
                                            
                                            {/* Example query */}
                                            <div className="flex self-end max-w-[80%] mb-4">
                                                <div className="bg-zinc-700 text-white text-xs py-2 px-3 rounded-lg rounded-br-none">
                                                    Show me the performance metrics for our top 5 products this month
                                                </div>
                                            </div>
                                            
                                            {/* AI Response with chart */}
                                            <div className="flex self-start max-w-[85%] mb-8">
                                                <div className="bg-zinc-800/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
                                                    <p className="mb-4">Here are the performance metrics for your top 5 products this month:</p>
                                                    
                                                    {/* Chart visualization */}
                                                    <div className="bg-zinc-900/80 rounded-lg p-4 mb-4">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <p className="text-xs font-medium">Product Performance - May 2025</p>
                                                            <div className="text-xs text-gray-400">+12.4% overall</div>
                                                        </div>
                                                        
                                                        {/* Bar chart */}
                                                        <div className="space-y-3">
                                                            {/* Product 1 */}
                                                            <div>
                                                                <div className="flex justify-between text-xs mb-1">
                                                                    <span>Premium Wireless Earbuds</span>
                                                                    <div className="flex items-center text-green-400">
                                                                        <ArrowUp className="h-3 w-3 mr-1" />
                                                                        <span>24%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '86%' }}></div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Product 2 */}
                                                            <div>
                                                                <div className="flex justify-between text-xs mb-1">
                                                                    <span>Smart Home Assistant</span>
                                                                    <div className="flex items-center text-green-400">
                                                                        <ArrowUp className="h-3 w-3 mr-1" />
                                                                        <span>18%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '72%' }}></div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Product 3 */}
                                                            <div>
                                                                <div className="flex justify-between text-xs mb-1">
                                                                    <span>Organic Cotton T-Shirt</span>
                                                                    <div className="flex items-center text-green-400">
                                                                        <ArrowUp className="h-3 w-3 mr-1" />
                                                                        <span>15%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '65%' }}></div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Product 4 */}
                                                            <div>
                                                                <div className="flex justify-between text-xs mb-1">
                                                                    <span>Fitness Tracker Pro</span>
                                                                    <div className="flex items-center text-red-400">
                                                                        <ArrowDown className="h-3 w-3 mr-1" />
                                                                        <span>3%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '58%' }}></div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Product 5 */}
                                                            <div>
                                                                <div className="flex justify-between text-xs mb-1">
                                                                    <span>Portable Bluetooth Speaker</span>
                                                                    <div className="flex items-center text-green-400">
                                                                        <ArrowUp className="h-3 w-3 mr-1" />
                                                                        <span>9%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '52%' }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <p>The Premium Wireless Earbuds continue to be your top performer with a 24% increase in sales this month. Would you like me to analyze the growth factors or compare with previous months?</p>
                                                    
                                                    {/* Quick action buttons */}
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        <button className="bg-zinc-700 hover:bg-zinc-600 text-white text-xs py-1 px-2 rounded-md transition-colors">
                                                            Analyze growth factors
                                                        </button>
                                                        <button className="bg-zinc-700 hover:bg-zinc-600 text-white text-xs py-1 px-2 rounded-md transition-colors">
                                                            Compare with April
                                                        </button>
                                                        <button className="bg-zinc-700 hover:bg-zinc-600 text-white text-xs py-1 px-2 rounded-md transition-colors">
                                                            View inventory levels
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Chat input */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black border-t border-zinc-800">
                                            <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2">
                                                <input type="text" placeholder="Send a message..." className="flex-1 bg-transparent border-0 focus:ring-0 text-sm text-white focus:outline-none" readOnly />
                                                <button className="text-gray-400 hover:text-white ml-2">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}
