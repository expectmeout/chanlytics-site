'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MessageSquare, CheckCircle, Lightbulb, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type FAQItem = {
  id: string
  question: string
  answer: React.ReactNode
}

export default function OnboardingFAQs() {
  const faqItems: FAQItem[] = [
    {
      id: 'process',
      question: 'What does the 90-day onboarding process look like?',
      answer: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Our 90-day onboarding process is structured to ensure you get maximum value as quickly as possible:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex gap-2 items-start">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary">1</span>
              </div>
              <div>
                <p className="text-sm font-medium">Initial Audit & Analysis (Days 1-14)</p>
                <p className="text-xs text-muted-foreground">We review your current Amazon operations, identify opportunities and set clear goals</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary">2</span>
              </div>
              <div>
                <p className="text-sm font-medium">VA Team Assembly (Days 15-30)</p>
                <p className="text-xs text-muted-foreground">We recruit, train and deploy specialized VA team members tailored to your specific needs</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary">3</span>
              </div>
              <div>
                <p className="text-sm font-medium">ChatGPT Plugin Setup (Days 30-45)</p>
                <p className="text-xs text-muted-foreground">We connect your data sources and configure your custom ChatGPT interface</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary">4</span>
              </div>
              <div>
                <p className="text-sm font-medium">Optimization & Training (Days 46-90)</p>
                <p className="text-xs text-muted-foreground">We refine processes, train your team, and ensure you're comfortable with the system</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'data',
      question: 'How do you handle our Amazon business data?',
      answer: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            We take data security seriously while ensuring you get maximum value from your business information:
          </p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">Secure data connections with role-based permissions to your Amazon accounts</p>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">Automated data organization with our Chanlytics framework</p>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">End-to-end encryption with the ChatGPT plugin integration</p>
            </div>
            <div className="flex gap-2 items-start">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">Simple access through natural language queries in ChatGPT</p>
            </div>
          </div>
          <Badge variant="outline" className="mt-2">Your data remains yours - we just make it useful</Badge>
        </div>
      ),
    },
    {
      id: 'custom',
      question: 'How is the ChatGPT plugin customized for our business?',
      answer: (
        <div className="space-y-3">
          <div className="flex gap-3 p-3 rounded-md bg-muted/50">
            <MessageSquare className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Your Custom ChatGPT Experience</p>
              <p className="text-sm text-muted-foreground">
                We create a personalized ChatGPT plugin tailored to your specific Amazon operations. 
                During onboarding, we'll identify key questions you ask daily and build custom prompts 
                that pull the exact data you need. The plugin connects to your Amazon seller account, 
                VA team activities, and advertising performance for a complete business overview.
              </p>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium">Example queries you'll be able to ask:</p>
            <ul className="mt-1 space-y-1 list-disc pl-5 text-muted-foreground">
              <li>"Show me today's inventory status for my top 5 products"</li>
              <li>"What tasks did my VA team complete yesterday?"</li>
              <li>"How are my advertising campaigns performing this week?"</li>
              <li>"What operational issues need my attention right now?"</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'time',
      question: 'How much time will I need to invest during onboarding?',
      answer: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Minimal Time Investment</p>
              <p className="text-sm text-muted-foreground">
                We've designed our onboarding to respect your time while ensuring you get maximum value.
                After initial setup meetings (2-3 hours total over the first two weeks), you'll only need:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="p-3 border rounded-md">
              <p className="text-lg font-bold text-primary">30 min</p>
              <p className="text-xs text-muted-foreground">Weekly check-in during initial setup</p>
            </div>
            <div className="p-3 border rounded-md">
              <p className="text-lg font-bold text-primary">15 min</p>
              <p className="text-xs text-muted-foreground">Daily for quick questions via ChatGPT</p>
            </div>
            <div className="p-3 border rounded-md">
              <p className="text-lg font-bold text-primary">1 hour</p>
              <p className="text-xs text-muted-foreground">Monthly strategy review after launch</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Our goal is to save you time, not create more work. The system is designed to 
            reduce your daily management burden while keeping you informed.
          </p>
        </div>
      ),
    },
    {
      id: 'results',
      question: 'When will I start seeing results?',
      answer: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Phased Results Timeline</p>
              <p className="text-sm text-muted-foreground">
                You'll see improvements roll out in phases, with each milestone bringing new benefits:
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2 items-center">
                <ArrowRight className="h-4 w-4 text-primary" /> 
                <p className="text-sm font-medium">Immediate (Week 1-2)</p>
              </div>
              <p className="text-xs text-muted-foreground">Clear visibility into your business metrics</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2 items-center">
                <ArrowRight className="h-4 w-4 text-primary" /> 
                <p className="text-sm font-medium">Short-term (Days 30-45)</p>
              </div>
              <p className="text-xs text-muted-foreground">Operational efficiency improvements</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2 items-center">
                <ArrowRight className="h-4 w-4 text-primary" /> 
                <p className="text-sm font-medium">Medium-term (Days 45-90)</p>
              </div>
              <p className="text-xs text-muted-foreground">VA team fully operational with measurable output</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex gap-2 items-center">
                <ArrowRight className="h-4 w-4 text-primary" /> 
                <p className="text-sm font-medium">Long-term (90+ days)</p>
              </div>
              <p className="text-xs text-muted-foreground">Revenue growth and scalable operations</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Most clients see a measurable improvement in operational efficiency within 30 days, 
            with significant growth impact by the end of the 90-day implementation.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3">Frequently Asked Questions</Badge>
          <h2 className="text-3xl font-bold">Your Onboarding Journey</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Common questions about how we'll transform your Amazon business with specialized VA teams and AI-powered tools.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-background shadow-sm rounded-lg border px-4">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
