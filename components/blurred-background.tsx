import React from "react"
import { cn } from "@/lib/utils"    // your tailwind merge helper

export function BlurredBackground({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("relative isolate", className)}>
      {/* noisy gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary/20)_0%,transparent_70%)] opacity-70 blur-3xl"
      />
      {children}
    </div>
  )
}
