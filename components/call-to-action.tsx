"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="bg-primary/5 dark:bg-primary/10 py-16 rounded-xl border border-primary/10">
      <div className="mx-auto max-w-5xl px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Streamline Your Marketplace Operations?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our specialized virtual assistants and AI-powered interface will transform how you manage your Amazon and Walmart business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#book">
            <Button size="lg" className="gap-2">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
