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
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                        <span className="text-blue-700 dark:text-blue-300">24/7 Operation</span>
                    </Badge>
                    <Badge variant="outline" className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                        <span className="text-green-700 dark:text-green-300">15+ Hours Saved</span>
                    </Badge>
                    <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                        <span className="text-purple-700 dark:text-purple-300">Instant Response</span>
                    </Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Handles every lead across Instagram, WhatsApp, website chat, and phone calls</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Instantly engages, qualifies, and books qualified appointments</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Stop working nights and weekends chasing leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Focus on closing deals while AI handles the front-end</span>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'item-2',
        icon: 'settings-2',
        question: 'Is this just another CRM?',
        answer: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Traditional CRMs</h4>
                        <ul className="text-xs space-y-1 text-red-700 dark:text-red-400">
                            <li>• Passive databases</li>
                            <li>• Manual data entry</li>
                            <li>• You manage everything</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">Chanlytics</h4>
                        <ul className="text-xs space-y-1 text-green-700 dark:text-green-400">
                            <li>• Active growth engine</li>
                            <li>• AI-powered automation</li>
                            <li>• Works for you 24/7</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-medium text-gray-900 dark:text-white">Key Differences:</p>
                    <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5">→</span>
                            <span>AI doesn't just store data - it actively uses it to grow your business</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5">→</span>
                            <span>Automates entire workflow from lead capture to client reviews</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5">→</span>
                            <span>Actively increases revenue while giving you back your time</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        id: 'item-3',
        icon: 'plug-zap',
        question: 'How does this integrate with my existing tools?',
        answer: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-2">
                            <DynamicIcon name="link" className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <h4 className="font-semibold text-green-800 dark:text-green-300">Seamless Integration</h4>
                        </div>
                        <ul className="space-y-1 text-xs text-green-700 dark:text-green-400">
                            <li>• HubSpot, Salesforce, Slack</li>
                            <li>• Instagram, Facebook, LinkedIn</li>
                            <li>• QuickBooks, Google Workspace</li>
                            <li>• 1000+ apps supported</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2">
                            <DynamicIcon name="settings" className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <h4 className="font-semibold text-blue-800 dark:text-blue-300">No Disruption</h4>
                        </div>
                        <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-400">
                            <li>• Keep your existing tools</li>
                            <li>• Zero learning curve</li>
                            <li>• Everything works better</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-gray-900 dark:text-white mb-2">What This Means:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span><strong>Zero disruption:</strong> Your current tools stay exactly as they are</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span><strong>Everything unified:</strong> Chanlytics connects all your tools automatically</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span><strong>Better together:</strong> Your existing apps work smarter as one system</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'item-4',
        icon: 'rocket',
        question: 'What does the onboarding process look like?',
        answer: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <DynamicIcon name="clock" className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto mb-1" />
                        <p className="text-sm font-medium text-green-800 dark:text-green-300">Fast Setup</p>
                        <p className="text-xs text-green-600 dark:text-green-400">White-glove service</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <DynamicIcon name="graduation-cap" className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Full Training</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Complete support</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                        <DynamicIcon name="shield-check" className="h-5 w-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                        <p className="text-sm font-medium text-purple-800 dark:text-purple-300">Risk-Free</p>
                        <p className="text-xs text-purple-600 dark:text-purple-400">Full support</p>
                    </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800">
                        <p className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">What We Handle:</p>
                        <ul className="space-y-1 text-xs">
                            <li>• Complete AI script setup</li>
                            <li>• Workflow automation configuration</li>
                            <li>• Full team training and onboarding</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-800">
                        <p className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Your Guarantee:</p>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                            <li>• Risk-free trial with our full support</li>
                            <li>• Dedicated success manager on day one</li>
                            <li>• Everything to gain, nothing to lose</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'item-5',
        icon: 'shield-check',
        question: 'How secure is my company and client data?',
        answer: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2">
                            <DynamicIcon name="lock" className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <h4 className="font-semibold text-blue-800 dark:text-blue-300">Encryption</h4>
                        </div>
                        <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-400">
                            <li>• End-to-end encryption</li>
                            <li>• Data encrypted in transit</li>
                            <li>• Data encrypted at rest</li>
                        </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-2">
                            <DynamicIcon name="shield" className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <h4 className="font-semibold text-green-800 dark:text-green-300">Access Control</h4>
                        </div>
                        <ul className="space-y-1 text-xs text-green-700 dark:text-green-400">
                            <li>• Strict access controls</li>
                            <li>• Role-based permissions</li>
                            <li>• Enterprise-grade security</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                            <span className="text-purple-700 dark:text-purple-300">GDPR Compliant</span>
                        </Badge>
                        <Badge variant="outline" className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                            <span className="text-orange-700 dark:text-orange-300">SOC 2 Type II</span>
                        </Badge>
                        <Badge variant="outline" className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
                            <span className="text-teal-700 dark:text-teal-300">ISO 27001</span>
                        </Badge>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-gray-900 dark:text-white mb-2">Security Features:</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span><strong>Enterprise-grade cloud:</strong> Built on secure, certified infrastructure</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span><strong>Compliance:</strong> Fully compliant with GDPR, SOC 2, and major regulations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span><strong>Best practices:</strong> Industry-leading security protocols and monitoring</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    ]

    return (
        <section id="marketplace-solution-faqs" className="pt-2 pb-20 md:pt-10 md:pb-28 bg-white dark:bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
                        Find answers to common questions about Chanlytics AI automation services. If you don't see your question here, feel free to{' '}
                        <button
                            type="button"
                            onClick={scrollToBooking}
                            className="cursor-pointer text-primary font-medium hover:underline bg-transparent border-none p-0">
                            contact our team
                        </button>.
                    </p>
                </div>
                <div className="space-y-4 max-w-4xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-4">
                        {faqItems.map((item) => (
                            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0070F3]/10 to-[#38bdf8]/10 backdrop-blur-lg border border-[#0070F3]/20 dark:border-[#38bdf8]/30 shadow-lg shadow-black/10 dark:shadow-black/30 transition-all duration-300 hover:shadow-xl">
                                {/* Hover effect overlay */}
                                <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-teal-50/30 dark:via-teal-900/10 to-transparent transition-all duration-700 ease-in-out group-hover:left-full" />
                                <AccordionItem
                                    value={item.id}
                                    className="border-b-0">
                                    <AccordionTrigger className="group/trigger cursor-pointer items-center py-5 hover:no-underline px-6 transition-colors duration-200">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0070F3]/20 to-[#38bdf8]/20 text-[#0070F3] dark:text-[#38bdf8] transition-colors duration-300">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="h-4 w-4"
                                                />
                                            </div>
                                            <span className="text-base text-left text-gray-900 group-hover/trigger:text-[#0070F3] dark:text-white dark:group-hover/trigger:text-[#38bdf8] transition-colors">{item.question}</span>
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
        </section>
    )
}
