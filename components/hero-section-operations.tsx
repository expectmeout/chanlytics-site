"use client";

import React, { useState, useEffect } from 'react'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from '@/components/hero5-header'
import LogoCloud from '@/components/logo-cloud'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'

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

export default function HeroSectionOperations() {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTypewriter(true), 900); // match TextEffect animation duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

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
                            {/* Headline: two lines, animation and typewriter inline on second line, centered */}
                            <h1 className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl text-center">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    className="block"
                                    style={{ display: 'block' }}
                                >
                                    Your Amazon and Walmart
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
                                                    'Growth Partner',
                                                    'Sales Strategists',
                                                    'Management Agency',
                                                    'Technical Specialists',
                                                    'E-Commerce Gurus',
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
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-12 max-w-2xl text-pretty text-lg"
                            >
                                Leveraging e-commerce success for
                                18 years. Leading national brands into
                                the digital era with unparalleled
                                marketing and management
                                expertise.
                            </TextEffect>

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
                                            placeholder="Your mail address"
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
                                                <span className="hidden md:block">Get Started</span>
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
                        <div className="mx-auto md:-mt-24 lg:-mt-44"
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
                                        src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605545/phone-backgroudn_xqgg5g.jpg"
                                        alt="Phone Background"
                                        width="6240"
                                        height="4160"
                                    />
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}
