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

export default function FAQsFour() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'users-2',
            question: 'How do your Upwork VAs specialize in marketplace operations?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our Upwork VAs are highly specialized and only focus on their specific role in your business. They live and breathe their area of expertise:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">FBA Supply Chain VAs</p>
                            <p className="text-sm text-muted-foreground">Dedicated to handling all fulfillment processes including reimbursements, reconciliation, inventory forecasting, and shipping logistics.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Listing Optimization VAs</p>
                            <p className="text-sm text-muted-foreground">Experts in Amazon flat files and spec sheets who maintain your catalog by creating, updating, and optimizing product listings and variations.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Creative VAs</p>
                            <p className="text-sm text-muted-foreground">Specialists who create high-converting A+ content and product photography specifically designed for Amazon and Walmart marketplaces.</p>
                        </div>
                    </div>
                    
                    <div className="mt-3 rounded-lg border bg-muted/50 p-3">
                        <p className="text-xs font-medium">Average Operational Time Saved</p>
                        <p className="text-lg font-bold">30+ hours/week</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-2',
            icon: 'target',
            question: 'What does your FBA Supply Chain VA handle day-to-day?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our FBA Supply Chain VAs are dedicated specialists who handle every aspect of your Amazon fulfillment operations:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Inventory Management</p>
                            <p className="text-sm text-muted-foreground">Daily monitoring, restock planning, and inventory forecasting to prevent stockouts.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Reimbursement Recovery</p>
                            <p className="text-sm text-muted-foreground">Proactively files and tracks claims for lost or damaged inventory, recovering thousands in potential lost revenue.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Shipment Processing</p>
                            <p className="text-sm text-muted-foreground">Creates and manages FBA shipments, coordinates with suppliers, and ensures proper labeling and preparation.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Reconciliation & Reporting</p>
                            <p className="text-sm text-muted-foreground">Maintains accurate inventory records and provides regular reporting on key supply chain metrics.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-3',
            icon: 'image',
            question: 'What makes our Creative VAs different from general designers?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our Creative VAs specialize exclusively in marketplace content and know exactly what drives conversions:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Amazon A+ Content Experts</p>
                            <p className="text-sm text-muted-foreground">They understand Amazon's specific content requirements and create high-converting product stories that drive sales.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Sales-Focused Photography</p>
                            <p className="text-sm text-muted-foreground">They create product images that highlight benefits, address customer questions, and overcome objections.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Marketplace-Specific Knowledge</p>
                            <p className="text-sm text-muted-foreground">They understand the unique requirements and best practices for Amazon and Walmart content that general designers don't know.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Conversion Expertise</p>
                            <p className="text-sm text-muted-foreground">Every design choice is made to maximize click-through rates and conversion, not just for aesthetic appeal.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-4',
            icon: 'file-text',
            question: 'What skills do your Listing Optimization VAs bring to the table?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our Listing Optimization VAs are experts in the technical side of marketplace listings:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Amazon Flat File Masters</p>
                            <p className="text-sm text-muted-foreground">They understand every column and requirement in even the most complex Amazon inventory files.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Variation Relationship Experts</p>
                            <p className="text-sm text-muted-foreground">They can create and manage complex parent-child relationships across your entire product catalog.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Product Copy Optimization</p>
                            <p className="text-sm text-muted-foreground">They write keyword-rich titles, bullets, and descriptions that balance search optimization with conversion.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Error Resolution</p>
                            <p className="text-sm text-muted-foreground">They quickly identify and fix listing errors, suppressed ASINs, and category requirement issues.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-5',
            icon: 'calendar',
            question: 'How quickly can a VA start working in my business?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our VA placement is fast and seamless, with specialists ready to integrate into your operations:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Pre-Trained Virtual Assistants</p>
                            <p className="text-sm text-muted-foreground">Unlike agencies that hire after you sign, our VAs are already hired, trained, and ready to start within days.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">No Training Required</p>
                            <p className="text-sm text-muted-foreground">Our VAs already know how to handle Amazon and Walmart operations - they just need your account access.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Simple Onboarding Process</p>
                            <p className="text-sm text-muted-foreground">We handle the onboarding, access setup, and initial audit of your accounts to identify immediate improvement areas.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Typical Timeline</p>
                            <p className="text-sm text-muted-foreground">Discovery call → Match with specialized VA → VA starts work within 3-5 business days.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-6',
            icon: 'shield',
            question: 'How do our VAs handle account violations and compliance issues?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our VAs are experts in marketplace compliance and can quickly resolve issues that arise:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Proactive Account Monitoring</p>
                            <p className="text-sm text-muted-foreground">VAs regularly check for potential policy violations before they trigger Amazon action.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Rapid Response Protocol</p>
                            <p className="text-sm text-muted-foreground">When issues occur, VAs implement our proven appeal process with 90%+ resolution rate.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Claims Management</p>
                            <p className="text-sm text-muted-foreground">VAs address customer complaints and product authenticity issues before they escalate.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Documentation Expertise</p>
                            <p className="text-sm text-muted-foreground">VAs maintain proper records for appeals, authenticity verification, and trademark issues.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-7',
            icon: 'refresh-ccw',
            question: 'How do your VAs handle marketplace transitions (1P/3P/DSV)?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our VAs are specialists in marketplace transitions and can handle the complexities of changing business models:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Amazon 1P to 3P Transitions</p>
                            <p className="text-sm text-muted-foreground">Specialized VAs handle the complex process of transitioning from Vendor Central to Seller Central while maintaining listings and rankings.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Hybrid Model Management</p>
                            <p className="text-sm text-muted-foreground">VAs with experience in both 1P and 3P operations can coordinate inventory and listings across both platforms.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Walmart DSV to Marketplace</p>
                            <p className="text-sm text-muted-foreground">VAs skilled in Walmart's systems help transition from dropship to marketplace selling with minimal disruption.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Cross-Marketplace Expansion</p>
                            <p className="text-sm text-muted-foreground">VAs adapt your product catalog and fulfillment processes when expanding to new marketplaces.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-8',
            icon: 'scale',
            question: 'How do your VAs scale with my business growth?',
            answer: (
                <div className="space-y-4">
                    <p className="text-muted-foreground">Our VA model is designed to grow with your business needs without the typical staffing challenges:</p>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Flexible Team Expansion</p>
                            <p className="text-sm text-muted-foreground">We can quickly add additional VAs with specialized skills as your business grows, with no recruiting delays.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Specialized Task Distribution</p>
                            <p className="text-sm text-muted-foreground">As your catalog grows, we split responsibilities among specialized VAs rather than hiring generalists.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Extended Hours Coverage</p>
                            <p className="text-sm text-muted-foreground">We add VA coverage across multiple time zones for larger accounts needing 24/7 support.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="check" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Tailored Growth Plans</p>
                            <p className="text-sm text-muted-foreground">Each quarter, we evaluate your business needs and adjust your VA team composition to match your current phase of growth.</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <section className="bg-white dark:bg-background py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Specialized Upwork VA Teams</h2>
                            <p className="text-muted-foreground mt-4">
                                Have questions about our specialized Upwork VAs who handle marketplace operations? Find answers below or{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    contact our team
                                </Link>{' '}
                                for personalized assistance.
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
