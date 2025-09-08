"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Star, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffectWrapper } from '@/components/motion-primitives/text-effect-wrapper'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from './header'
import { Typewriter } from 'react-simple-typewriter';
import { AuroraText } from '@/components/magicui/aurora-text';
import { ShineBorder } from '@/components/magicui/shine-border';

import LogoCloud from './logo-cloud';
import { RetroGrid } from "@/components/magicui/retro-grid";

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
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 80; // Adjust for sticky header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <RetroGrid className="-z-20" />
                        <div className="mx-auto max-w-[1400px] px-6">
                        </div>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:bg-zinc-800/50 dark:border-zinc-700 dark:hover:bg-zinc-800">
                                        <span className="text-foreground text-sm">AI Sales & Automation System</span>
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

                                <h1 className="mt-4 text-balance font-bold text-[40px] md:text-[52px] lg:text-[60px] xl:text-[67px] 2xl:text-[78px] leading-none text-gray-900 dark:text-white">
                                    <span className="whitespace-normal sm:whitespace-nowrap">Supercharge Your Business With</span> <AuroraText colors={["#0070F3", "#38bdf8"]}>AI Assistants</AuroraText>
                                </h1>
                                <div className="mt-0 h-[4.5em] md:h-[5em] flex items-start justify-center">
                                    <TextEffectWrapper
                                        preset="fade-in-blur"
                                        delay={0.3}
                                        className="text-gray-600 dark:text-gray-300 font-medium text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[56px] text-center w-full inline-block mt-0">
                                        <Typewriter
                                            words={[
                                                'Multi-channel Conversations',
                                                'Qualification & Booking',
                                                'Automated Follow-ups',
                                                'Live Business Analytics'
                                            ]}
                                            loop={0}
                                            cursor={false}
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </TextEffectWrapper>
                                </div>

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
                                    className="mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <Button
                                        key={1}
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-5 text-base">
                                        <Link href="https://portal.chanlytics.com/auth/sign-up">
                                            <span className="text-nowrap">Get Started</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <Link href="#features" onClick={(e) => handleScroll(e, 'features')}>
                                            <span className="text-nowrap">See Features</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                                {/* Trust Bar */}
                                <div className="mt-3 flex flex-col items-center gap-1 text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-4" aria-label="Trust indicators">
                                    <div className="inline-flex items-center gap-1.5">
                                        <Star className="h-3.5 w-3.5 text-yellow-500" aria-hidden="true" />
                                        <span>Handles all lead communications (calls, chats, DMs)</span>
                                    </div>
                                    <div className="hidden sm:block h-3 w-px bg-muted-foreground/30" aria-hidden="true" />
                                    <div className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                                        <span>Personal AI assistant for live business insights</span>
                                    </div>
                                    <div className="hidden sm:block h-3 w-px bg-muted-foreground/30" aria-hidden="true" />
                                    <div className="inline-flex items-center gap-1.5">
                                        <ShieldCheck className="h-3.5 w-3.5 text-sky-500" aria-hidden="true" />
                                        <span>AI video tool + content calendar automation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                            <div className="relative -mr-56 mt-4 overflow-hidden px-2 sm:mr-0 sm:mt-8 md:mt-16">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-7xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <div
                                        className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/3"
                                        style={{
                                            background: 'radial-gradient(ellipse 50% 50% at 50% 0%, #277DFC, transparent 80%)',
                                            filter: 'blur(60px)',
                                        }}
                                    />
                                    <div className="relative z-10">
                                        <Image
                                            src="/chanlytics-portal-light.png"
                                            alt="Chanlytics Portal"
                                            width={1920}
                                            height={1080}
                                            className="block dark:hidden rounded-xl w-full h-auto"
                                            priority
                                        />
                                        <Image
                                            src="/chanlytics-portal-dark.png"
                                            alt="Chanlytics Portal"
                                            width={1920}
                                            height={1080}
                                            className="hidden dark:block rounded-xl w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    <ShineBorder borderWidth={1.5} shineColor={["#277DFC", "#0E7490"]} />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-[10px] pt-4 md:pb-[8px]">
                    <div className="relative m-auto max-w-[1400px] px-6">
                        <LogoCloud />
                    </div>
                </section>
            </main>
        </>
    )
}
