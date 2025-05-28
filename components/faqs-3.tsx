'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

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

export default function Faqs3() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'help-circle',
            question: 'What is Chanlytics and how can it help my business?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Chanlytics is an AI-powered automation company that helps businesses streamline operations, enhance client engagement, and drive growth through integrated intelligent systems.</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="shopping-cart" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">For E-commerce Businesses:</p>
                            <p className="text-sm text-muted-foreground">Our three-pillar system combines specialized VA teams, the Chanlytics AI framework, and in-house advertising expertise to optimize your marketplace performance on Amazon and Walmart.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="building" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">For Local Service Businesses:</p>
                            <p className="text-sm text-muted-foreground">Our integrated AI ecosystem automates your entire client lifecycle - from lead capture and onboarding to communication and referral generation - replacing tedious CRMs and manual management.</p>
                        </div>
                    </div>
                    
                    <div className="mt-3 rounded-lg border bg-muted/50 p-3">
                        <p className="text-xs font-medium">The Chanlytics Difference</p>
                        <p className="text-sm">We unite advanced AI technology with specialized human expertise to deliver tailored solutions, not just generic tools. Everything is accessible through intuitive interfaces like our ChatGPT plugin, eliminating the need for multiple dashboards and complex systems.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-2',
            icon: 'message-square',
            question: 'How does the ChatGPT plugin work and what can I do with it?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Our ChatGPT plugin is the unified interface that puts all your business data at your fingertips. No more switching between platforms or learning complex dashboards – just ask questions in natural language.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Card className="p-3">
                            <div className="mb-2 flex items-center space-x-2">
                                <DynamicIcon name="database" className="h-4 w-4 text-primary" />
                                <p className="text-sm font-semibold">Unified Access</p>
                            </div>
                            <p className="text-xs text-muted-foreground">Chat with your business data directly in ChatGPT instead of logging into separate apps and complex dashboards</p>
                        </Card>
                        
                        <Card className="p-3">
                            <div className="mb-2 flex items-center space-x-2">
                                <DynamicIcon name="message-square" className="h-4 w-4 text-primary" />
                                <p className="text-sm font-semibold">Natural Conversation</p>
                            </div>
                            <p className="text-xs text-muted-foreground">Simply ask questions about your business in everyday language and get immediate insights and updates</p>
                        </Card>
                    </div>
                    
                    <div>
                        <p className="mb-2 font-medium">Example Tasks You Can Accomplish:</p>
                        <ol className="ml-5 list-decimal space-y-1 text-sm">
                            <li><strong>E-commerce:</strong> "Show me today's VA team updates for product listings"</li>
                            <li><strong>E-commerce:</strong> "What's the current inventory status for my top 5 SKUs?"</li>
                            <li><strong>Local Business:</strong> "What's John Doe's current tax filing status?"</li>
                            <li><strong>Local Business:</strong> "How many new clients did we onboard last month?"</li>
                            <li><strong>General:</strong> "Summarize this week's marketing performance"</li>
                        </ol>
                    </div>
                    
                    <div className="rounded-md border p-3">
                        <div className="flex items-center space-x-2">
                            <DynamicIcon name="zap" className="h-4 w-4 text-amber-500" />
                            <p className="text-sm font-medium">Available Via WhatsApp & ChatGPT</p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Access your business data through familiar interfaces you already use. No new apps to learn.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-3',
            icon: 'users',
            question: 'What types of businesses can benefit from Chanlytics services?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Chanlytics solutions are designed for two main business categories, each with unique automation needs:</p>
                    
                    <div className="overflow-hidden rounded-lg border">
                        <div className="bg-muted p-3">
                            <p className="font-medium">E-commerce Businesses</p>
                        </div>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Amazon and Walmart marketplace sellers looking to scale operations</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Brands struggling with operational complexity across multiple platforms</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Businesses seeking to reduce overhead while improving marketplace performance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg border">
                        <div className="bg-muted p-3">
                            <p className="font-medium">Local Service Businesses</p>
                        </div>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Professional services (tax consultants, law firms, accounting, etc.)</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Healthcare providers (medical clinics, dental offices, wellness centers)</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Service providers (home services, salons, restaurants) that need better client management</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border p-3 text-sm">
                        <p className="font-medium mb-1">Ideal For:</p>
                        <p className="text-muted-foreground">Businesses that value operational efficiency, want to eliminate tedious manual processes, and seek to leverage AI technology for growth without the overhead of complex systems or additional staff.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-4',
            icon: 'lightbulb',
            question: 'What specific problems does Chanlytics solve?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Our solutions address the most common pain points that prevent businesses from operating efficiently and scaling effectively:</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Card className="p-3">
                            <div className="mb-2 flex items-center space-x-2">
                                <DynamicIcon name="layers" className="h-4 w-4 text-red-500" />
                                <p className="text-sm font-semibold">Tool Fragmentation</p>
                            </div>
                            <p className="text-xs text-muted-foreground">Eliminates the chaos of multiple logins, dashboards, and disconnected systems that waste time and create information silos</p>
                        </Card>
                        
                        <Card className="p-3">
                            <div className="mb-2 flex items-center space-x-2">
                                <DynamicIcon name="dollar-sign" className="h-4 w-4 text-red-500" />
                                <p className="text-sm font-semibold">Expensive Staffing</p>
                            </div>
                            <p className="text-xs text-muted-foreground">Reduces the need for costly full-time employees by providing specialized expertise only when you need it</p>
                        </Card>
                        
                        <Card className="p-3">
                            <div className="mb-2 flex items-center space-x-2">
                                <DynamicIcon name="phone-missed" className="h-4 w-4 text-red-500" />
                                <p className="text-sm font-semibold">Missed Opportunities</p>
                            </div>
                            <p className="text-xs text-muted-foreground">Captures every potential lead through 24/7 AI systems and automates follow-up to prevent prospects from falling through cracks</p>
                        </Card>
                        
                        <Card className="p-3">
                            <div className="mb-2 flex items-center space-x-2">
                                <DynamicIcon name="bar-chart" className="h-4 w-4 text-red-500" />
                                <p className="text-sm font-semibold">Data Overload</p>
                            </div>
                            <p className="text-xs text-muted-foreground">Transforms overwhelming data into actionable insights through AI-powered analysis and natural language interactions</p>
                        </Card>
                    </div>
                    
                    <div className="rounded-md border p-3">
                        <p className="mb-2 text-sm font-medium">How Our Solutions Transform Your Workflow:</p>
                        <div className="flex items-center justify-between flex-wrap">
                            <div className="flex flex-col items-center text-center p-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="clock" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Save Time</p>
                            </div>
                            <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground hidden sm:block" />
                            <div className="flex flex-col items-center text-center p-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="shield" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Reduce Errors</p>
                            </div>
                            <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground hidden sm:block" />
                            <div className="flex flex-col items-center text-center p-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="users" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Delight Clients</p>
                            </div>
                            <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground hidden sm:block" />
                            <div className="flex flex-col items-center text-center p-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="trending-up" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Grow Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-5',
            icon: 'rocket',
            question: 'How do I get started and what is the implementation process?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Getting started with Chanlytics is straightforward, with a structured implementation process designed for minimal disruption to your business:</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <span className="text-sm font-semibold">1</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">Initial Consultation (Free)</h4>
                                <p className="text-xs text-muted-foreground">We'll discuss your business needs, current challenges, and identify which Chanlytics solutions would provide the most value.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <span className="text-sm font-semibold">2</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">Custom Solution Design (Week 1-2)</h4>
                                <p className="text-xs text-muted-foreground">Our team creates a tailored implementation plan for your business, whether you're an e-commerce seller or local service provider.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <span className="text-sm font-semibold">3</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">System Integration (Week 2-4)</h4>
                                <p className="text-xs text-muted-foreground">We set up the Chanlytics AI Engine with your existing tools, CRM systems, and operational workflows. No need to change your current software.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <span className="text-sm font-semibold">4</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">Team Training & Optimization (Week 5-8)</h4>
                                <p className="text-xs text-muted-foreground">We train your team on using the ChatGPT plugin and other systems, then continually refine the setup based on your feedback and changing needs.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border p-3">
                        <div className="flex items-center space-x-2">
                            <DynamicIcon name="calendar" className="h-4 w-4 text-primary" />
                            <p className="text-sm font-medium">90-Day Initial Commitment</p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Our standard agreement starts with a 90-day implementation and optimization period. During this time, we fine-tune all systems to your specific needs. After this period, you can continue with a monthly subscription or take over system management yourself.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-6',
            icon: 'dollar-sign',
            question: 'What are the pricing options and expected ROI?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Chanlytics pricing is structured to scale with your business and provide a clear return on investment through efficiency gains and growth opportunities:</p>
                    
                    <div className="overflow-hidden rounded-lg border">
                        <div className="bg-muted p-3">
                            <p className="font-medium">E-commerce Pricing Structure</p>
                        </div>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span><strong>Starting at $2,500/month</strong> for core operational services (specialized VA teams, ChatGPT integration)</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span><strong>Advertising Management:</strong> 10-15% of ad spend based on marketplace volume</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Custom packages available for sellers with special needs or larger operations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg border">
                        <div className="bg-muted p-3">
                            <p className="font-medium">Local Business Automation Suite</p>
                        </div>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span><strong>Starting at $1,200/month</strong> for the core AI automation suite</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Additional capacity and features available for larger client volumes</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Implementation fee varies based on complexity of existing systems ($1,500-3,000)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border p-3">
                        <div className="flex items-center space-x-2">
                            <DynamicIcon name="bar-chart-2" className="h-4 w-4 text-primary" />
                            <p className="text-sm font-medium">Typical ROI Timeframes</p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Most clients see positive ROI within 90-120 days through reduced operational costs, higher conversion rates, improved advertising efficiency, and time savings that allow business owners to focus on strategic growth rather than daily management.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-7',
            icon: 'award',
            question: 'What results can I expect from Chanlytics?',
            answer: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Our clients consistently achieve measurable improvements across key business metrics:</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="overflow-hidden rounded-lg border">
                            <div className="bg-muted p-3">
                                <p className="font-medium">E-commerce Results</p>
                            </div>
                            <div className="p-3">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start">
                                        <DynamicIcon name="trending-up" className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                                        <span><strong>30-60% reduction</strong> in operational management time</span>
                                    </li>
                                    <li className="flex items-start">
                                        <DynamicIcon name="trending-up" className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                                        <span><strong>15-25% increase</strong> in advertising ROAS (Return on Ad Spend)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <DynamicIcon name="trending-up" className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                                        <span><strong>20-40% cost savings</strong> vs. full-time employees</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="overflow-hidden rounded-lg border">
                            <div className="bg-muted p-3">
                                <p className="font-medium">Local Business Results</p>
                            </div>
                            <div className="p-3">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start">
                                        <DynamicIcon name="trending-up" className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                                        <span><strong>35-50% increase</strong> in lead capture effectiveness</span>
                                    </li>
                                    <li className="flex items-start">
                                        <DynamicIcon name="trending-up" className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                                        <span><strong>70-90% improvement</strong> in online review ratings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <DynamicIcon name="trending-up" className="mr-2 mt-0.5 h-4 w-4 text-green-500" />
                                        <span><strong>25-40% increase</strong> in client referrals</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border p-3">
                        <div className="flex items-center space-x-2">
                            <DynamicIcon name="users" className="h-4 w-4 text-primary" />
                            <p className="text-sm font-medium">Client Testimonial</p>
                        </div>
                        <p className="mt-1 text-xs italic text-muted-foreground">"Switching from expensive full-time employees to Chanlytics' specialized VAs cut our operational costs by 60% while their ChatGPT plugin has saved our team hours of dashboard hunting every day. The AI systems just work - it's like having a 24/7 digital employee who never takes a day off."</p>
                        <p className="mt-1 text-xs text-muted-foreground">— Jonathan Yombo, E-commerce Lead at a National Brand</p>
                    </div>
                </div>
            ),
        }
    ]

    return (
        <section className="bg-white dark:bg-background py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 id="integrated-marketplace" className="mt-4 text-3xl font-bold">Chanlytics: Your Partner in AI-Powered Automation</h2>
                            <p className="text-muted-foreground mt-4">
                                Chanlytics offers powerful AI automation solutions tailored for both e-commerce businesses and local service providers. Whether you're looking to optimize marketplace operations or streamline your entire local business client lifecycle, find answers to common questions below. For personalized assistance,{' '}
                                <Link
                                    href="https://schedule.chanlytics.com/schedule/25min"
                                    className="text-primary font-medium hover:underline">
                                    contact our team
                                </Link>{' '}
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
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
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
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
