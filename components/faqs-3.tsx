'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import { useCallback } from 'react'


// Custom Badge component since @/components/ui/badge is not available
const Badge = ({ 
    children, 
    variant = "default",
    className = "" 
}: { 
    children: React.ReactNode, 
    variant?: "default" | "secondary" | "outline", 
    className?: string 
}) => {
    const variantClasses = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
    }
    
    return (
        <span className={`inline-flex items-center rounded-md px-2.5 py-0.5
                         text-xs font-semibold ${variantClasses[variant]} ${className}`}>
            {children}
        </span>
    )
}

// Custom Card component since @/components/ui/card is not available
const Card = ({
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div className={`rounded-lg border bg-card text-card-foreground shadow ${className}`}>
            {children}
        </div>
    )
}

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: React.ReactNode
}

export function Faqs3() {
    const scrollToBooking = useCallback(() => {
        const targetElement = document.getElementById('booking-calendar-container');
        if (targetElement) {
            const headerOffset = 70;
            const buffer = 20;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset - buffer;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, []);

    const faqItems: FAQItem[] = [
    {
        id: 'item-1',
        icon: 'bot',
        question: 'What is the AI Agent System and how does it capture leads?',
        answer: (
            <div className="space-y-3 text-sm text-muted-foreground">
                <p>Our AI Agent System works 24/7 across multiple platforms (website chat, social media DMs, SMS, calls) to instantly engage with potential customers. It intelligently qualifies leads, answers common questions, and seamlessly books appointments directly into your calendar, ensuring you never miss an opportunity.</p>
                <p>Key benefits include:</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>Instant responses to inquiries, day or night.</li>
                    <li>Automated appointment scheduling and qualification.</li>
                    <li>Consistent brand voice across all communication channels.</li>
                    <li>Significant reduction in missed leads and follow-up delays.</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'item-2',
        icon: 'settings-2',
        question: 'How do Backend AI Automations streamline my operations?',
        answer: (
            <div className="space-y-3 text-sm text-muted-foreground">
                <p>Chanlytics' Backend AI Automations handle the repetitive, time-consuming tasks that bog down your business. This includes automated appointment reminders, invoice generation and sending, payment collection, and even requesting client reviews or referrals post-service.</p>
                <p>This system helps you:</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>Reduce manual data entry and administrative workload.</li>
                    <li>Improve cash flow with automated invoicing and payment reminders.</li>
                    <li>Enhance client experience with timely communications.</li>
                    <li>Systematically build social proof through automated review requests.</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'item-3',
        icon: 'layout-dashboard',
        question: 'What insights can I get from the Smart Portal?',
        answer: (
            <div className="space-y-3 text-sm text-muted-foreground">
                <p>The Smart Portal is your central hub for understanding business performance and client interactions. It provides real-time analytics, tracks AI agent performance (e.g., call/chat transcripts, conversion rates), and offers insights into customer behavior and operational efficiency.</p>
                <p>With the Smart Portal, you can:</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>Monitor key performance indicators (KPIs) at a glance.</li>
                    <li>Review AI agent interactions for quality assurance and training.</li>
                    <li>Identify trends and opportunities for business growth.</li>
                    <li>Access all your critical business data in one organized place.</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'item-4',
        icon: 'brain-circuit',
        question: 'How does the Personal AI Assistant help me manage my business?',
        answer: (
            <div className="space-y-3 text-sm text-muted-foreground">
                <p>Think of the Personal AI Assistant as your internal "ChatGPT" fine-tuned on your specific business data. You can ask it questions in natural language like "How many appointments did we book last week?" or "What's the status of Ashley's invoice?" and get instant, accurate answers.</p>
                <p>It allows you to:</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>Get quick answers without sifting through spreadsheets or multiple apps.</li>
                    <li>Access client details and project statuses on the go.</li>
                    <li>Improve decision-making with readily available information.</li>
                    <li>Empower your team with self-serve access to business intelligence.</li>
                </ul>
            </div>
        ),
    },
    {
        id: 'item-5',
        icon: 'git-fork',
        question: 'What does it mean that Chanlytics is an "Integrated System"?',
        answer: (
            <div className="space-y-3 text-sm text-muted-foreground">
                <p>The Integrated System is the backbone that connects all Chanlytics features and, crucially, your existing business tools (like HubSpot, QuickBooks, Google Calendar, etc.). It ensures a seamless flow of information from lead capture to service delivery and beyond, creating a unified automation hub.</p>
                <p>This integration means:</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>No more data silos; information is shared across all platforms.</li>
                    <li>A complete A-Z process management from onboarding to upselling.</li>
                    <li>Reduced manual data transfer between different software.</li>
                    <li>A holistic view of your business operations and customer journey.</li>
                </ul>
            </div>
        ),
    },
    ]

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 id="integrated-marketplace" className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                            Find answers to common questions about Chanlytics AI automation services. If you don't see your question here, feel free to{' '}
                                <button
                                    type="button"
                                    onClick={scrollToBooking}
                                    className="cursor-pointer text-primary font-medium hover:underline bg-transparent border-none p-0">
                                    contact our team
                                </button>{' '}
                                .
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <div key={item.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 shadow-md backdrop-blur-sm transition-shadow dark:bg-zinc-900/60 dark:border-zinc-800">
                                    {/* Glow gradient overlay */}
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
                                    </div>
                                    <AccordionItem
                                        value={item.id}
                                        className="border-b-0">
                                        <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-6">
                                                    <DynamicIcon
                                                        name={item.icon}
                                                        className="m-auto size-4"
                                                    />
                                                </div>
                                                <span className="text-base">{item.question}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-5">
                                            <div className="px-9">
                                                {item.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
