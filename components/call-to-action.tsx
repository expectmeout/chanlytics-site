"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CallToAction() {
  return (
    <section className="py-8 md:py-10 mt-16 mb-2">
    <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">Virtual Assistant Operations</Badge>
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Expert VA Teams Following Our Proven Framework</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            High-volume Amazon & Walmart sellers no longer need to manage operations alone. Our specialized VA teams excel in inventory management, fulfillment coordination, and listing optimization—all following the Chanlytics framework customized to your needs.
          </p>

        </div>
      </div>
    </section>
  )
}
