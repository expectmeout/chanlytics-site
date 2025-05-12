"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
  ...props
}: AnimatedShinyTextProps) {
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div 
        className="absolute inset-0 z-5 w-full translate-x-[-100%] animate-[shine_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[rgba(var(--primary-rgb),0.3)] to-transparent"
        style={{ 
          width: `${shimmerWidth}%`,
        }}
      />
    </div>
  );
}
