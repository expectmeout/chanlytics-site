"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from '@/components/hero5-header'
import { LogoCloud } from '@/components/logo-cloud'
import { Typewriter } from 'react-simple-typewriter'
import { AIChatMockup } from './ai-chat-mockup'
import InterfaceTransition from './interface-transition'

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

function HeroSection() {
    const [showTypewriter, setShowTypewriter] = useState(false);
    
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
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 sm:pt-20 md:pt-24 lg:pt-32">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            {/* Background element - image removed to fix 404 error */}
                            <div 
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block h-full w-full bg-gradient-to-b from-background/5 via-background/10 to-background/20"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#integrated-marketplace"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">ChatGPT Plugin for Businesses</span>
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

                                <h1 className="mt-4 text-balance text-4xl sm:text-5xl md:text-6xl lg:mt-8 xl:text-[5.25rem]">
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="span"
                                        className="block">
                                        AI-Powered Amazon Solution
                                    </TextEffect>
                                    {/* Create a completely separate block for the typewriter with explicit bounds */}
                                    <div className="block mt-0 overflow-hidden" style={{height: '1.2em'}}>
                                        <TextEffect
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="span"
                                            delay={0.3}
                                            className="opacity-0 absolute">
                                            {/* Empty TextEffect to trigger the animation timing */}
                                            &nbsp;
                                        </TextEffect>
                                        <div className={`text-primary transition-opacity duration-500 ${showTypewriter ? 'opacity-100' : 'opacity-0'}`} style={{display: 'inline-block', maxWidth: '100%'}}>
                                            {showTypewriter ? (
                                                <span className="inline-block overflow-hidden whitespace-nowrap">
                                                    <Typewriter
                                                        words={[
                                                            'Less Complexity',
                                                            'More Insights',
                                                            'Better Decisions',
                                                            'Faster Growth'
                                                        ]}
                                                        loop={0}
                                                        cursor={false}
                                                        typeSpeed={70}
                                                        deleteSpeed={50}
                                                        delaySpeed={1000}
                                                    />
                                                </span>
                                            ) : <span>Less Complexity</span>}
                                        </div>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        
                        {/* Two-column layout for animation and chat interface */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4 lg:gap-8 -mt-6 sm:-mt-3 lg:mt-0 max-w-6xl mx-auto">
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.5,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}>
                                <div className="flex items-center justify-center h-full relative z-10 flex-col pt-0 pb-0">
                                    <div className="-mt-3 sm:mt-0">
                                        <InterfaceTransition />
                                    </div>
                                    {/* Desktop L-Connector */}
                                    <div className="hidden lg:block mt-2 relative">
                                        {/* Vertical Line (centered) with subtle pulsing glow effect */}
                                        <div className="h-48 w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 mx-auto relative">
                                            {/* Subtle glow behind vertical line */}
                                            <motion.div 
                                                className="absolute inset-0 w-3 h-full bg-primary/10 rounded-full blur-sm -z-10"
                                                animate={{ 
                                                    opacity: [0.1, 0.3, 0.1],
                                                }}
                                                transition={{ 
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut" 
                                                }}
                                            ></motion.div>
                                            
                                            {/* No top connector dot - creating a funnel effect */}
                                            
                                            {/* Animated data flow dots moving down the vertical line */}
                                            <motion.div 
                                                className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/80"
                                                animate={{
                                                    y: [0, 185],
                                                    opacity: [0.8, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeIn",
                                                    delay: 0.5,
                                                }}
                                            />
                                            <motion.div 
                                                className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/80"
                                                animate={{
                                                    y: [0, 185],
                                                    opacity: [0.8, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeIn",
                                                    delay: 2,
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Horizontal Line extending right from bottom of vertical line within the column */}
                                        <div className="absolute bottom-0 left-1/2 h-1 w-[12rem] bg-gradient-to-r from-primary/50 via-primary/30 to-primary/5">
                                            {/* Subtle glow behind horizontal line */}
                                            <motion.div 
                                                className="absolute inset-0 w-full h-3 bg-primary/10 rounded-full blur-sm -z-10"
                                                animate={{ 
                                                    opacity: [0.1, 0.3, 0.1],
                                                }}
                                                transition={{ 
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1.5,
                                                }}
                                            ></motion.div>
                                            
                                            {/* Dot at the junction of vertical and horizontal lines with subtle pulse */}
                                            <motion.div 
                                                className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/60 rounded-full border border-white/10"
                                                animate={{ 
                                                    boxShadow: ['0 0 0px rgba(var(--primary-rgb), 0.2)', '0 0 4px rgba(var(--primary-rgb), 0.6)', '0 0 0px rgba(var(--primary-rgb), 0.2)'],
                                                }}
                                                transition={{ 
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1,
                                                }}
                                            ></motion.div>
                                            
                                            {/* Enhanced funnel outflow effect at the end of the horizontal line */}
                                            <div className="absolute right-0 h-8 w-6 top-1/2 transform translate-x-0 -translate-y-1/2 overflow-hidden">
                                                {/* Outflow particle effect */}
                                                <motion.div
                                                    className="absolute left-0 top-1/2 w-1.5 h-1.5 rounded-full bg-primary/50 transform -translate-y-1/2"
                                                    animate={{
                                                        x: [0, 20],
                                                        y: [-3, 3, -3],
                                                        opacity: [0.8, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        ease: "easeOut",
                                                        delay: 0.2
                                                    }}
                                                />
                                                <motion.div
                                                    className="absolute left-0 top-1/2 w-1 h-1 rounded-full bg-primary/40 transform -translate-y-1/2"
                                                    animate={{
                                                        x: [0, 20],
                                                        y: [2, -2, 2],
                                                        opacity: [0.7, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.3,
                                                        repeat: Infinity,
                                                        ease: "easeOut",
                                                        delay: 0.7
                                                    }}
                                                />
                                                <motion.div
                                                    className="absolute left-0 top-1/2 w-1 h-1 rounded-full bg-primary/40 transform -translate-y-1/2"
                                                    animate={{
                                                        x: [0, 20],
                                                        y: [0, 4, 0],
                                                        opacity: [0.7, 0]
                                                    }}
                                                    transition={{
                                                        duration: 1.2,
                                                        repeat: Infinity,
                                                        ease: "easeOut",
                                                        delay: 1.1
                                                    }}
                                                />
                                            </div>
                                            
                                            {/* Animated data flow dots moving along the horizontal line */}
                                            <motion.div 
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/80"
                                                animate={{
                                                    x: [0, 190],
                                                    opacity: [0.8, 0],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "easeIn",
                                                    delay: 3,
                                                }}
                                            />
                                            <motion.div 
                                                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/80"
                                                animate={{
                                                    x: [0, 190],
                                                    opacity: [0.8, 0],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "easeIn",
                                                    delay: 1,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedGroup>
                            
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
                                }}>
                                <div className="relative overflow-hidden z-10 -mt-3 sm:mt-0">
                                    <AIChatMockup />
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
                <div className="pt-14 sm:pt-24 md:pt-32 lg:pt-44">  {/* Responsive padding-top */}
                    <LogoCloud />
                </div>
            </main>
        </>
    )
}

export default HeroSection;
