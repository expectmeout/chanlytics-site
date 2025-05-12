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

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'users-2',
            question: 'How does your three-pillar system work together?',
            answer: (
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="users" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Pillar 1: Specialized VA Teams</p>
                            <p className="text-sm text-muted-foreground">Our VAs are specialists in specific aspects of Amazon operations (FBA supply chain, listing optimization, creative) rather than generalists trying to wear multiple hats.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="target" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Pillar 2: Chanlytics Framework</p>
                            <p className="text-sm text-muted-foreground">We automate backend processes so your business data is accessible through a ChatGPT plugin, eliminating the need for multiple dashboards and complex interfaces.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <DynamicIcon name="brain" className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">Pillar 3: In-house Advertising</p>
                            <p className="text-sm text-muted-foreground">Once your operations are streamlined, our in-house advertising team (never outsourced) implements strategies that leverage your optimized business foundation.</p>
                        </div>
                    </div>
                    
                    <div className="mt-3 rounded-lg border bg-muted/50 p-3">
                        <p className="text-xs font-medium">The Key Difference</p>
                        <p className="text-sm">While others offer expensive generalists or fragmented solutions, our system delivers specialized expertise, unified data, and streamlined operations, all accessible through familiar chat interfaces.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-2',
            icon: 'brain',
            question: 'How does your ChatGPT plugin streamline business operations?',
            answer: (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
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
                            <li>"Show me today's VA team updates for product listings"</li>
                            <li>"What's the current inventory status for my top 5 SKUs?"</li>
                            <li>"Summarize this week's advertising performance"</li>
                            <li>"Which operational bottlenecks need immediate attention?"</li>
                        </ol>
                    </div>
                    
                    <Badge className="mt-2" variant="outline">Eliminates the Need for Multiple Dashboard Logins</Badge>
                </div>
            ),
        },
        {
            id: 'item-3',
            icon: 'workflow',
            question: 'How does your chanlytics framework make specialized VAs more effective?',
            answer: (
                <div className="space-y-4">
                    <div className="rounded-lg border bg-muted/30 p-3">
                        <div className="mb-2 flex items-center gap-2">
                            <DynamicIcon name="git-branch" className="h-4 w-4 text-primary" />
                            <p className="font-medium">The Specialized Expertise Advantage</p>
                        </div>
                        <p className="text-sm">Our VAs focus on their area of expertise while our Chanlytics framework connects all the data for a unified view in ChatGPT.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                        <div>
                            <p className="font-medium flex items-center">
                                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">1</span>
                                Specialized VAs → Data Collection
                            </p>
                            <p className="text-xs text-muted-foreground">FBA specialists, listing optimizers, and creative teams each master their domain</p>
                        </div>
                        
                        <div>
                            <p className="font-medium flex items-center">
                                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">2</span>
                                Chanlytics → Unified Data
                            </p>
                            <p className="text-xs text-muted-foreground">Our framework connects all operational data into a coherent system</p>
                        </div>
                        
                        <div>
                            <p className="font-medium flex items-center">
                                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">3</span>
                                ChatGPT → Accessible Insights
                            </p>
                            <p className="text-xs text-muted-foreground">Business owners access everything through familiar chat interfaces</p>
                        </div>
                        
                        <div>
                            <p className="font-medium flex items-center">
                                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">4</span>
                                In-house Advertising
                            </p>
                            <p className="text-xs text-muted-foreground">Our advertising team uses the streamlined operation data for optimal campaigns</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-4',
            icon: 'message-square',
            question: 'How does the ChatGPT plugin compare to traditional dashboards?',
            answer: (
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Daily Operation Updates</Badge>
                        <Badge variant="secondary">VA Team Activities</Badge>
                        <Badge variant="secondary">Inventory Status</Badge>
                        <Badge variant="secondary">Ad Performance</Badge>
                        <Badge variant="secondary">Business Bottlenecks</Badge>
                        <Badge variant="secondary">Growth Recommendations</Badge>
                    </div>
                    
                    <div className="rounded-md border p-3">
                        <p className="mb-2 text-sm font-medium">How Our ChatGPT Plugin Simplifies Your Workflow:</p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="log-in" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">One Login</p>
                            </div>
                            <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="message-square" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Ask Anything</p>
                            </div>
                            <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="lightbulb" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Get Answers</p>
                            </div>
                            <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <DynamicIcon name="zap" className="h-4 w-4 text-primary" />
                                </div>
                                <p className="mt-1 text-xs">Take Action</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded border p-2">
                            <p className="font-medium">Traditional Dashboards</p>
                            <p className="text-xs text-muted-foreground">Multiple logins, complex interfaces, steep learning curves, and disconnected data sources</p>
                        </div>
                        <div className="rounded border p-2">
                            <p className="font-medium">Our ChatGPT Plugin</p>
                            <p className="text-xs text-muted-foreground">One familiar interface, natural conversation, instant answers, and comprehensive business overview</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-5',
            icon: 'line-chart',
            question: 'Why are specialized VAs more effective than generalist employees?',
            answer: (
                <div className="space-y-3">
                    <div className="overflow-hidden rounded-lg border">
                        <div className="bg-muted p-3">
                            <p className="font-medium">Traditional Employee Problems</p>
                        </div>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <DynamicIcon name="x" className="mr-2 mt-0.5 h-4 w-4 text-red-500" />
                                    <span>Expensive generalists wearing multiple hats with mixed expertise</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="x" className="mr-2 mt-0.5 h-4 w-4 text-red-500" />
                                    <span>Inconsistent performance across various Amazon operational areas</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="x" className="mr-2 mt-0.5 h-4 w-4 text-red-500" />
                                    <span>Higher costs with lower specialized expertise in critical areas</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg border">
                        <div className="bg-muted p-3">
                            <p className="font-medium">Our Specialized VA Advantages</p>
                        </div>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Each VA specializes in one critical area (FBA, creative, listings, etc.)</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>Higher quality work in each specialized domain at lower total cost</span>
                                </li>
                                <li className="flex items-start">
                                    <DynamicIcon name="check" className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                                    <span>All VA activities unified through our Chanlytics framework and accessible via ChatGPT</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border p-3 text-sm">
                        <p className="font-medium mb-1">The Result:</p>
                        <p className="text-muted-foreground">A more cost-effective team of specialists who excel in their specific domains, combined with a unified data framework that keeps everything accessible through a simple chat interface.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-6',
            icon: 'shield',
            question: 'How does the Chanlytics framework work with your ChatGPT plugin?',
            answer: (
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-md border p-3">
                            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                                <DynamicIcon name="database" className="h-4 w-4" />
                            </div>
                            <p className="text-xs font-medium">Data Collection</p>
                            <p className="text-xs text-muted-foreground">From all VA teams</p>
                        </div>
                        
                        <div className="rounded-md border p-3">
                            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <DynamicIcon name="combine" className="h-4 w-4" />
                            </div>
                            <p className="text-xs font-medium">Unification</p>
                            <p className="text-xs text-muted-foreground">Connects all systems</p>
                        </div>
                        
                        <div className="rounded-md border p-3">
                            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <DynamicIcon name="message-square" className="h-4 w-4" />
                            </div>
                            <p className="text-xs font-medium">ChatGPT Access</p>
                            <p className="text-xs text-muted-foreground">Simple chat interface</p>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-sm font-medium">How It All Works Together:</p>
                        <div className="space-y-2 rounded-md border p-3">
                            <div className="flex items-center justify-between border-b pb-2">
                                <p className="text-xs font-medium">Specialized VA Activities</p>
                                <Badge variant="outline" className="text-xs">Data Source</Badge>
                            </div>
                            <div className="flex items-center justify-between border-b pb-2">
                                <p className="text-xs font-medium">Chanlytics Framework</p>
                                <Badge variant="outline" className="text-xs">Integration Layer</Badge>
                            </div>
                            <div className="flex items-center justify-between border-b pb-2">
                                <p className="text-xs font-medium">Advertisement Performance</p>
                                <Badge variant="outline" className="text-xs">Data Source</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-medium">ChatGPT Plugin</p>
                                <Badge variant="outline" className="text-xs">User Interface</Badge>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-lg bg-muted/30 p-3 text-xs">
                        <p className="font-medium">The Power of Simplicity:</p>
                        <p className="mt-1">Our Chanlytics framework takes all the complex operational data from specialized VA teams and advertising activities and makes it accessible through a familiar chat interface. No dashboards to learn, no complex analytics to understand—just ask ChatGPT about your business and get instant answers.</p>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-7',
            icon: 'refresh-ccw',
            question: 'How do specialized VAs and ChatGPT work together for Amazon operations?',
            answer: (
                <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg border">
                        <div className="flex items-center justify-between border-b p-3">
                            <div className="flex items-center space-x-2">
                                <DynamicIcon name="toggle-left" className="h-5 w-5 text-primary" />
                                <p className="font-medium">Streamlined Amazon Operations</p>
                            </div>
                        </div>
                        <div className="divide-y">
                            <div className="flex items-center p-3">
                                <div className="w-7 text-center">
                                    <DynamicIcon name="truck" className="mx-auto h-4 w-4 text-primary" />
                                </div>
                                <p className="text-sm"><span className="font-medium">FBA Supply Chain VAs:</span> Manage inventory replenishment, shipping logistics, and FBA compliance</p>
                            </div>
                            <div className="flex items-center p-3">
                                <div className="w-7 text-center">
                                    <DynamicIcon name="file-text" className="mx-auto h-4 w-4 text-primary" />
                                </div>
                                <p className="text-sm"><span className="font-medium">Listing Optimization VAs:</span> Perfect product listings with keyword research and compelling content</p>
                            </div>
                            <div className="flex items-center p-3">
                                <div className="w-7 text-center">
                                    <DynamicIcon name="image" className="mx-auto h-4 w-4 text-primary" />
                                </div>
                                <p className="text-sm"><span className="font-medium">Creative VAs:</span> Develop professional product photography and infographics</p>
                            </div>
                            <div className="flex items-center p-3">
                                <div className="w-7 text-center">
                                    <DynamicIcon name="message-square" className="mx-auto h-4 w-4 text-green-500" />
                                </div>
                                <p className="text-sm"><span className="font-medium">ChatGPT Interface:</span> Access all VA activities and data through simple conversation</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <p className="mb-1 text-sm font-medium">Common Amazon Operations We Handle:</p>
                            <ol className="ml-5 list-decimal space-y-1 text-xs">
                                <li>FBA inventory management and optimization</li>
                                <li>Product listing creation and enhancements</li>
                                <li>Brand content and A+ creation</li>
                                <li>Advertising campaign management</li>
                                <li>Account health monitoring</li>
                            </ol>
                        </div>
                        
                        <div className="space-y-2 rounded border p-3">
                            <p className="text-sm font-medium">The ChatGPT Integration Advantage:</p>
                            <div className="flex items-start space-x-2">
                                <DynamicIcon name="check" className="mt-0.5 h-3 w-3 text-primary" />
                                <p className="text-xs">Morning updates with a simple chat prompt</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <DynamicIcon name="check" className="mt-0.5 h-3 w-3 text-primary" />
                                <p className="text-xs">Quick inventory status checks anytime</p>
                            </div>
                            <div className="flex items-start space-x-2">
                                <DynamicIcon name="check" className="mt-0.5 h-3 w-3 text-primary" />
                                <p className="text-xs">Real-time feedback to VA teams through chat</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: 'item-8',
            icon: 'scale',
            question: 'How does your service scale as my Amazon business grows?',
            answer: (
                <div className="space-y-4">
                    <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                        <div className="flex min-w-[120px] flex-col items-center rounded-lg border p-3 text-center">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <DynamicIcon name="users" className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">VA Team Expansion</p>
                            <p className="text-xs text-muted-foreground">Add specialists as needed</p>
                        </div>
                        
                        <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                        
                        <div className="flex min-w-[120px] flex-col items-center rounded-lg border p-3 text-center">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <DynamicIcon name="database" className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">Chanlytics Growth</p>
                            <p className="text-xs text-muted-foreground">Expanded data integration</p>
                        </div>
                        
                        <DynamicIcon name="arrow-right" className="h-4 w-4 text-muted-foreground" />
                        
                        <div className="flex min-w-[120px] flex-col items-center rounded-lg border p-3 text-center">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <DynamicIcon name="target" className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">Ad Sophistication</p>
                            <p className="text-xs text-muted-foreground">Enhanced strategies</p>
                        </div>
                    </div>
                    
                    <div className="rounded-lg border">
                        <div className="border-b p-3">
                            <p className="font-medium">Our System Grows With Your Business</p>
                        </div>
                        <div className="p-3">
                            <div className="mb-3 space-y-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs">New Seller Phase</p>
                                    <p className="text-xs font-medium">Core VA Team + Basic ChatGPT Integration</p>
                                </div>
                                <div className="h-2 w-full rounded-full bg-muted">
                                    <div className="h-2 w-1/4 rounded-full bg-primary"></div>
                                </div>
                            </div>
                            
                            <div className="mb-3 space-y-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs">Growth Phase</p>
                                    <p className="text-xs font-medium">Expanded VA Team + Advanced Advertising</p>
                                </div>
                                <div className="h-2 w-full rounded-full bg-muted">
                                    <div className="h-2 w-2/4 rounded-full bg-primary"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs">Enterprise Phase</p>
                                    <p className="text-xs font-medium">Comprehensive Strategy + Multi-marketplace</p>
                                </div>
                                <div className="h-2 w-full rounded-full bg-muted">
                                    <div className="h-2 w-full rounded-full bg-primary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded border p-3">
                        <div className="flex items-center space-x-2">
                            <DynamicIcon name="zap" className="h-4 w-4 text-amber-500" />
                            <p className="text-sm font-medium">The Cost-Effective Scaling Advantage</p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Unlike hiring full-time employees where costs grow linearly with your business, our specialized VA approach allows you to add exactly the expertise you need, when you need it. The ChatGPT interface remains consistent, becoming more powerful as your business grows while keeping your learning curve flat.</p>
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
                            <h2 id="integrated-marketplace" className="mt-4 text-3xl font-bold">Our Integrated Marketplace Solution</h2>
                            <p className="text-muted-foreground mt-4">
                                Have questions about our three-pillar system of VA Management, Strategic Advertising, and AI-Powered Analytics? Find answers below or{' '}
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
