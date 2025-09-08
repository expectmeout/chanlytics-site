import { cn } from '@/lib/utils'

// Option: Geometric Flow Logo
export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 240 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-[28px] w-auto', className)}>

            <g transform="translate(15 9)" fill="url(#logo-gradient)">
                <rect x="3" y="6" width="10" height="10" rx="2"/>
                <rect x="13" y="10" width="10" height="10" rx="2" opacity=".8"/>
                <rect x="23" y="14" width="10" height="10" rx="2" opacity=".6"/>
            </g>
            
            <text 
                x="52" 
                y="50%" 
                dominantBaseline="middle" 
                fontFamily="'Inter', sans-serif" 
                fontSize="26" 
                fontWeight="450" 
                letterSpacing="0.5" 
                className="fill-current text-gray-900 dark:text-white">
                CHANLYTICS
            </text>
            
            <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#38bdf8"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                </linearGradient>
                <linearGradient id="logo-text-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#0070F3"/>
                    <stop offset="1" stopColor="#38bdf8"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

// Branded geometric loader matching the CHANLYTICS logo gradient and block motif
export const LogoLoader = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 60 24"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-4 w-auto', className)}
        >
            <defs>
                <linearGradient id="logo-loader-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#38bdf8"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                </linearGradient>
            </defs>

            <g transform="translate(0 2)" fill="url(#logo-loader-gradient)">
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
    )
}

// Option: Geometric Flow Icon
export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24" // Standard icon viewBox
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-6', className)}>

            {/* Icon based on the main Logo's geometric element */}
            {/* Centered elements within the 24x24 box */}
            <rect x="4" y="5" width="6" height="6" rx="1.5" fill="url(#new-icon-gradient)" />
            <rect x="10" y="9" width="6" height="6" rx="1.5" fill="url(#new-icon-gradient)" opacity="0.8" />
            <rect x="16" y="13" width="6" height="6" rx="1.5" fill="url(#new-icon-gradient)" opacity="0.6" />

            <defs>
                 {/* Re-using the same gradient style for consistency */}
                <linearGradient
                    id="new-icon-gradient"
                     x1="0" y1="0" x2="1" y2="1"
                    gradientUnits="objectBoundingBox">
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
        </svg>
    )
}

// Option: Minimalist Stroke/Line Icon
export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            // Slightly larger viewBox for stroke icon design
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-8 w-8', className)}>

             {/* Abstract line representation of data/analytics */}
            <path
                d="M4 24 L10 18 L16 20 L22 14 L28 16" // Simple polyline
                stroke="url(#new-stroke-gradient)"
                strokeWidth="2.5" // Bold stroke
                strokeLinecap="round"
                strokeLinejoin="round"
            />
             {/* Subtle points */}
            <circle cx="10" cy="18" r="1.5" fill="url(#new-stroke-gradient)" opacity="0.7"/>
            <circle cx="22" cy="14" r="1.5" fill="url(#new-stroke-gradient)" opacity="0.7"/>


            <defs>
                 {/* Consistent gradient */}
                <linearGradient
                    id="new-stroke-gradient"
                    x1="0" y1="0" x2="1" y2="0" // Horizontal gradient for the line
                    gradientUnits="userSpaceOnUse" // Use coordinate system
                    spreadMethod="pad"
                    gradientTransform="translate(4 14) scale(24 10)" // Map gradient roughly to path bounds
                    >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
        </svg>
    )
}