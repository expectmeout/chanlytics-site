"use client";

import React, { useState, useEffect } from 'react'
import { Mail, SendHorizonal, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from '@/components/hero5-header'
import LogoCloud from '@/components/logo-cloud'
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
    const [showTraditionalView, setShowTraditionalView] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 900); // match TextEffect animation duration
        return () => clearTimeout(timer);
    }, []);

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
                    <div className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            {/* AI Models Badge */}
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mb-8"
                            >
                                <Link
                                    href="#link"
                                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 has-[input:focus]:ring-2"
                                >
                                    <span className="text-foreground text-sm">Introducing Our Unified Analytics Dashboard</span>
                                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedGroup>

                            {/* Headline: two lines, animation and typewriter inline on second line, centered */}
                            <h1 className="text-balance text-7xl font-medium sm:text-7xl md:text-7xl text-center">
                            
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
                                        className=""
                                        style={{ display: 'inline' }}
                                    >
                                        &nbsp;
                                    </TextEffect>
                                    <span
                                        className={`text-primary transition-opacity duration-500 ${showTypewriter ? 'opacity-100' : 'opacity-0'}`}
                                        aria-hidden={!showTypewriter}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {showTypewriter ? (
                                            <Typewriter
                                                words={[
                                                    'with Chanlytics',
                                                    'with Expert VAs',
                                                    'with Smart Advertising',
                                                    'with AI-Powered Insights',
                                                    'with Unified Analytics'
                                                ]}
                                                loop={0}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={60}
                                                deleteSpeed={45}
                                                delaySpeed={700}
                                            />
                                        ) : (
                                            'Partner'
                                        )}
                                    </span>
                                </span>
                            </h1>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12"
                            >
                                <form
                                    action=""
                                    className="mx-auto max-w-sm"
                                >
                                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2"
                                    >
                                        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                                        <input
                                            placeholder="Enter your email"
                                            className="h-12 w-full bg-transparent pl-12 focus:outline-none"
                                            type="email"
                                        />

                                        <div className="md:pr-1.5 lg:pr-0"
                                        >
                                            <Button
                                                aria-label="submit"
                                                size="sm"
                                                className="rounded-(--radius)"
                                            >
                                                <span className="hidden md:block">Book a Demo</span>
                                                <SendHorizonal
                                                    className="relative mx-auto size-5 md:hidden"
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </AnimatedGroup>
                        </div>

                        {/* Two-column comparison section -  Will be converted to toggle */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="relative z-20 mt-16 mb-24"
                        >
                            <div className="relative px-2">
                                <div className="relative mx-auto max-w-6xl">
                                    {/* Section Heading */}
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl font-semibold tracking-tight mb-3">Simplify Your Marketplace Intelligence</h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto">From complicated dashboards to a single, intuitive chat interface</p>
                                    </div>

                                    {/* Toggle Button */}
                                    <div className="flex justify-center mb-8">
                                        <Button 
                                            onClick={() => setShowTraditionalView(!showTraditionalView)}
                                            variant="secondary"
                                            className="px-6 py-3 text-lg"
                                        >
                                            {showTraditionalView ? "View AI Chat" : "View Traditional Dashboards"}
                                        </Button>
                                    </div>
                                    
                                    {/* Conditional Rendering for Views */}
                                    {showTraditionalView ? (
                                        // {/* Left Column - Traditional Dashboards */} (Now 'Before' view)
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
                                                        
                                                        {/* Main content */}
                                                        <div className="ml-[180px] p-3">
                                                            <div className="flex justify-between items-center mb-3">
                                                                <div className="font-medium">Campaign Manager</div>
                                                                <div className="bg-[#FF9900] text-white text-xs py-1 px-3 rounded-sm">Create Campaign</div>
                                                            </div>
                                                            
                                                            <div className="mb-3 border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
                                                                <div className="bg-gray-100 dark:bg-gray-800 p-2 text-xs font-medium border-b border-gray-200 dark:border-gray-700">Campaign Summary</div>
                                                                <div className="grid grid-cols-4 gap-0 text-xs">
                                                                    <div className="p-2 border-r border-gray-200 dark:border-gray-700">
                                                                        <div className="text-gray-500 dark:text-gray-400 mb-1">Campaigns</div>
                                                                        <div className="font-medium">27</div>
                                                                    </div>
                                                                    <div className="p-2 border-r border-gray-200 dark:border-gray-700">
                                                                        <div className="text-gray-500 dark:text-gray-400 mb-1">Spend</div>
                                                                        <div className="font-medium">$1,245.86</div>
                                                                    </div>
                                                                    <div className="p-2 border-r border-gray-200 dark:border-gray-700">
                                                                        <div className="text-gray-500 dark:text-gray-400 mb-1">Sales</div>
                                                                        <div className="font-medium">$8,643.29</div>
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <div className="text-gray-500 dark:text-gray-400 mb-1">ACOS</div>
                                                                        <div className="font-medium">14.41%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="border border-gray-200 dark:border-gray-700 rounded-sm">
                                                                <div className="bg-gray-100 dark:bg-gray-800 p-2 text-xs font-medium flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                                                                    <div>Campaigns</div>
                                                                    <div className="flex space-x-2">
                                                                        <div className="text-gray-500 dark:text-gray-400">Filter</div>
                                                                        <div className="text-gray-500 dark:text-gray-400">Export</div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <table className="w-full text-xs">
                                                                    <thead className="bg-gray-50 dark:bg-gray-900/50">
                                                                        <tr>
                                                                            <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Campaign Name</th>
                                                                            <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Status</th>
                                                                            <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Budget</th>
                                                                            <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Spend</th>
                                                                            <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Sales</th>
                                                                            <th className="p-2 text-left font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">ACOS</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                                            <td className="p-2 text-blue-600 dark:text-blue-400">Organic Shampoo - Sponsored Products</td>
                                                                            <td className="p-2"><span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 py-0.5 px-1.5 rounded-sm text-[10px]">RUNNING</span></td>
                                                                            <td className="p-2">$80.00</td>
                                                                            <td className="p-2">$76.32</td>
                                                                            <td className="p-2">$412.45</td>
                                                                            <td className="p-2">18.50%</td>
                                                                        </tr>
                                                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                                            <td className="p-2 text-blue-600 dark:text-blue-400">Hair Care Bundle - Sponsored Brands</td>
                                                                            <td className="p-2"><span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 py-0.5 px-1.5 rounded-sm text-[10px]">RUNNING</span></td>
                                                                            <td className="p-2">$120.00</td>
                                                                            <td className="p-2">$98.64</td>
                                                                            <td className="p-2">$756.28</td>
                                                                            <td className="p-2">13.04%</td>
                                                                        </tr>
                                                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                                            <td className="p-2 text-blue-600 dark:text-blue-400">Natural Skin Care - Sponsored Display</td>
                                                                            <td className="p-2"><span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 py-0.5 px-1.5 rounded-sm text-[10px]">PAUSED</span></td>
                                                                            <td className="p-2">$50.00</td>
                                                                            <td className="p-2">$0.00</td>
                                                                            <td className="p-2">$0.00</td>
                                                                            <td className="p-2">0.00%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Overlay gradient */}
                                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/80 z-10"></div>
                                                
                                                {/* Pain points list */}
                                                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-20">
                                                    <div className="bg-red-100/80 dark:bg-red-950/80 text-red-800 dark:text-red-200 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm mb-2">Complex & Time-Consuming</div>
                                                    <div className="bg-red-100/80 dark:bg-red-950/80 text-red-800 dark:text-red-200 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm">Multiple Screens & Logins</div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // {/* Right Column - AI Chat Interface */} (Now 'After' view)
                                        <div className="flex flex-col">
                                            <div className="mb-6 flex items-center">
                                                <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                                    <span className="font-bold">2</span>
                                                </div>
                                                <h3 className="text-xl font-medium">AI-Powered Chat Interface</h3>
                                            </div>
                                            
                                            <div className="relative flex-grow">
                                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-black relative overflow-hidden rounded-xl border border-zinc-800 shadow-md h-full">
                                                    {/* Chat Interface - Header */}
                                                    <div className="absolute top-0 right-0 left-0 h-12 bg-zinc-900 flex items-center justify-between px-4 border-b border-zinc-800">
                                                        <div className="flex items-center">
                                                            <div className="text-white font-bold text-sm">Chatbot</div>
                                                        </div>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="flex space-x-1.5">
                                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                                            </div>
                                                            <div className="text-xs text-gray-400">ChatGPT</div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="pt-16 px-4 pb-24 h-full overflow-y-auto flex flex-col">
                                                        {/* Chat interface main content area */}
                                                        <div className="mb-6 text-center">
                                                            <div className="text-xs text-gray-500">Today</div>
                                                        </div>
                                                        
                                                        {/* Starting message */}
                                                        <div className="flex justify-center mb-6">
                                                            <div className="bg-zinc-800 text-white text-xs py-1 px-3 rounded-full">
                                                                Your conversations will appear here once you start chatting!
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Main chat message */}
                                                        <div className="flex justify-center mb-8">
                                                            <div className="max-w-[85%] text-center">
                                                                <div className="bg-zinc-800/80 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
                                                                    <p className="mb-4">Access marketplace data, track VA performance, and monitor key metrics across your e-commerce operations. Optimize your business by identifying growth opportunities with real-time unique insights.</p>
                                                                    
                                                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                                                        <div className="bg-zinc-900/80 rounded-lg p-3 text-left">
                                                                            <p className="text-xs text-gray-400 mb-1">Summarize VA tasks</p>
                                                                            <p className="text-xs">What is Danny working on</p>
                                                                        </div>
                                                                        <div className="bg-zinc-900/80 rounded-lg p-3 text-left">
                                                                            <p className="text-xs text-gray-400 mb-1">Check status of</p>
                                                                            <p className="text-xs">inbound FBA shipments</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="grid grid-cols-2 gap-3">
                                                                        <div className="bg-zinc-900/80 rounded-lg p-3 text-left">
                                                                            <p className="text-xs text-gray-400 mb-1">Analyze past orders</p>
                                                                            <p className="text-xs">Which cities are ordering the most</p>
                                                                        </div>
                                                                        <div className="bg-zinc-900/80 rounded-lg p-3 text-left">
                                                                            <p className="text-xs text-gray-400 mb-1">Show performance metrics</p>
                                                                            <p className="text-xs">for top selling products</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Chat input */}
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black border-t border-zinc-800">
                                                        <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2">
                                                            <input type="text" placeholder="Send a message..." className="flex-1 bg-transparent border-0 focus:ring-0 text-sm text-white focus:outline-none" readOnly />
                                                            <div className="flex items-center space-x-2">
                                                                <button className="text-gray-400 hover:text-white">
                                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Benefits list */}
                                                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-20">
                                                    <div className="bg-green-100/80 dark:bg-green-950/80 text-green-800 dark:text-green-200 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm mb-2">Simple Natural Language</div>
                                                    <div className="bg-green-100/80 dark:bg-green-950/80 text-green-800 dark:text-green-200 text-sm py-1.5 px-4 rounded-full font-medium backdrop-blur-sm">All Data in One Place</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Arrow connecting the two - REMOVED */}
                                    {/* 
                                    <div className="hidden md:flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="bg-background shadow-lg rounded-full p-3 border">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                                                <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </AnimatedGroup>

                        {/* Commenting out the original image that might be causing conflicts */}
                        {/* <div className="mx-auto md:-mt-24 lg:-mt-44"
                        >
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-6"
                            >
                                <div className="-rotate-30 aspect-3/2 relative mx-auto lg:w-2/3"
                                >
                                    <div className="bg-linear-to-b to-background from-background absolute inset-0 via-transparent"></div>
                                    <div className="bg-linear-to-l to-background from-background absolute inset-0 via-transparent"></div>
                                    <Image
                                        src=""
                                        alt="Phone Background"
                                        width="6240"
                                        height="4160"
                                    />
                                </div>
                            </AnimatedGroup>
                        </div> */}
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}
