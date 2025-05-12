"use client"

import React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { m } from "framer-motion"
import {
  Check,
  Users,
  Target,
  Palette,
  ShieldCheck,
  Zap,
  BarChart,
  Layers,
  Clock,
  TrendingUp,
  Cog,
} from "lucide-react"
import type { Service, ServiceIconName } from "@/types"

// Map icon names (strings) to actual components
const iconMap: Record<ServiceIconName, React.ComponentType<{ className?: string }>> = {
  Users,
  Target,
  Palette,
  ShieldCheck,
  Zap,
  BarChart,
  Layers,
  Clock,
  TrendingUp,
  Cog,
}

export default function ServiceSpotlight({ items }: { items: Service[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div ref={emblaRef} className="embla min-h-[360px]">
      <div className="embla__container">
        {items.map((svc, idx) => {
          const IconComponent = iconMap[svc.icon]
          return (
            <m.article
              key={svc.title}
              id={svc.hash}
              className="embla__slide flex flex-col rounded-xl border border-border/20 bg-background/60 p-8 shadow-lg backdrop-blur-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg ${svc.bgColorClass}`}
              >
                {IconComponent ? (
                  <IconComponent className={`h-6 w-6 ${svc.textColorClass}`} />
                ) : (
                  <span className="text-xs text-red-500">?</span>
                )}
              </div>

              <h3 className="mb-2 text-xl font-semibold">{svc.title}</h3>
              <p className="mb-6 flex-grow text-muted-foreground text-sm">
                {svc.description}
              </p>

              <ul className="space-y-3 mt-auto text-sm">
                {svc.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </m.article>
          )
        })}
      </div>
    </div>
  )
}
