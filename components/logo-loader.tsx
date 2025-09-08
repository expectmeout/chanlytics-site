"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Branded geometric loader matching the CHANLYTICS logo gradient and block motif
export const LogoLoader = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 60 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-auto", className)}
    >
      <defs>
        <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <g transform="translate(0 2)" fill="url(#loader-gradient)">
        <rect x="0" y="4" width="12" height="12" rx="2">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.2s" begin="0s" repeatCount="indefinite" />
        </rect>
        <rect x="16" y="8" width="12" height="12" rx="2" opacity="0.8">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
        </rect>
        <rect x="32" y="12" width="12" height="12" rx="2" opacity="0.6">
          <animate attributeName="opacity" values="0.35;1;0.35" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
};

// Small inline shimmer bar you can use as a table-cell skeleton (also gradient-matched)
export const GradientBarLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "rounded-md h-3 w-24 bg-[linear-gradient(90deg,#38bdf8,#3b82f6)]",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        "relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -translate-x-full",
          "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]",
          "animate-[shimmer_1.2s_infinite]"
        )}
      />
      <style jsx>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
};
