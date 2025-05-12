import { cn } from '@/lib/utils'

// Option: Geometric Flow Logo
export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            // Adjusted viewBox for new icon/text ratio
            viewBox="0 0 260 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Adjust height/width as needed via className
            className={cn('h-6 w-auto', className)}>

            {/* Geometric Icon: Representing flow/data points */}
            <g transform="translate(10, 13)"> {/* Group and position the icon */}
                <rect width="8" height="8" rx="2" fill="url(#new-logo-gradient)" />
                <rect x="12" y="6" width="8" height="8" rx="2" fill="url(#new-logo-gradient)" opacity="0.8" />
                <rect x="24" y="12" width="8" height="8" rx="2" fill="url(#new-logo-gradient)" opacity="0.6" />
            </g>

            {/* Text: Using Poppins font */}
            <text
                // Positioned text relative to the icon
                x="155" // Centered in the remaining space
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                // Consider using a font like 'Poppins' (ensure it's loaded)
                fontFamily="'Playwright Display', sans-serif"
                fontSize="28" // Slightly smaller font size for balance
                fontWeight="400"
                letterSpacing="1"
                fill="currentColor">
                CHANLYTICS
            </text>

            <defs>
                <linearGradient
                    id="new-logo-gradient"
                    x1="0" y1="0" x2="1" y2="1" // Diagonal gradient
                    gradientUnits="objectBoundingBox"> {/* Makes gradient scale with element */}
                    <stop stopColor="#4A6CF7" />
                    {/* <stop offset="0.5" stopColor="#5E54AC" /> Optional middle color */}
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
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