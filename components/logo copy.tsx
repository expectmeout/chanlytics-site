'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Main Animated Logo with Neural Network Design
export const Logo = ({ className }: { className?: string }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(prev => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <svg
            viewBox="0 0 320 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-[40px] w-auto', className)}>
            
            {/* Neural Network Icon */}
            <g transform="translate(10, 15)">
                {/* Nodes */}
                <circle cx="10" cy="15" r="4" fill="url(#pulse-gradient)" className={isAnimating ? "animate-pulse" : ""}>
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="25" cy="8" r="3" fill="url(#pulse-gradient)" opacity="0.9">
                    <animate attributeName="r" values="3;5;3" dur="2s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="25" cy="22" r="3" fill="url(#pulse-gradient)" opacity="0.9">
                    <animate attributeName="r" values="3;5;3" dur="2s" begin="0.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="40" cy="15" r="4" fill="url(#pulse-gradient)">
                    <animate attributeName="r" values="4;6;4" dur="2s" begin="0.9s" repeatCount="indefinite" />
                </circle>
                
                {/* Connections */}
                <path d="M14 15 L21 8" stroke="url(#connection-gradient)" strokeWidth="1.5" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M14 15 L21 22" stroke="url(#connection-gradient)" strokeWidth="1.5" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
                </path>
                <path d="M29 8 L36 15" stroke="url(#connection-gradient)" strokeWidth="1.5" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
                </path>
                <path d="M29 22 L36 15" stroke="url(#connection-gradient)" strokeWidth="1.5" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" begin="0.9s" repeatCount="indefinite" />
                </path>
                
                
            </g>
            
            {/* Modern Typography with Gradient */}
            <text 
                x="65" 
                y="50%" 
                dominantBaseline="middle" 
                fontFamily="'Inter', -apple-system, system-ui, sans-serif" 
                fontSize="24" 
                fontWeight="400" 
                letterSpacing="-0.5"
                className="fill-current text-gray-900 dark:text-gray-100">
                CHANLYTICS
            </text>
            
            {/* Subtle Tech Line */}

            
            <defs>
                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8">
                        <animate attributeName="stopColor" values="#38bdf8;#3b82f6;#38bdf8" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#3b82f6">
                        <animate attributeName="stopColor" values="#3b82f6;#38bdf8;#3b82f6" dur="3s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                
                <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                
                <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                
                <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

// Minimalist Icon with Morphing Effect
export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-8', className)}>
            
            {/* Morphing Shape */}
            <path fill="url(#icon-gradient)" opacity="0.9">
                <animate 
                    attributeName="d" 
                    values="
                        M8 16 Q16 8 24 16 Q16 24 8 16;
                        M12 12 Q16 12 20 12 Q20 16 20 20 Q16 20 12 20 Q12 16 12 12;
                        M8 16 Q16 8 24 16 Q16 24 8 16
                    " 
                    dur="6s" 
                    repeatCount="indefinite" />
            </path>
            
            {/* Center Pulse */}
            <circle cx="16" cy="16" r="3" fill="#fff" opacity="0.8">
                <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            
            <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

// Futuristic Loading/Splash Logo
export const LogoAnimated = ({ className }: { className?: string }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => (prev + 1) % 101);
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)}>
            <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute">
                
                {/* Outer Ring */}
                <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="url(#ring-gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="502"
                    strokeDashoffset={502 - (502 * progress) / 100}
                    transform="rotate(-90 100 100)"
                    opacity="0.8"
                />
                
                {/* Inner Hexagon */}
                <path
                    d="M100 40 L140 65 L140 115 L100 140 L60 115 L60 65 Z"
                    fill="none"
                    stroke="url(#hex-gradient)"
                    strokeWidth="2"
                    opacity="0.6">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 100 100"
                        to="360 100 100"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </path>
                
                {/* Center Logo Mark */}
                <g transform="translate(70, 85)">
                    <circle cx="15" cy="15" r="8" fill="url(#center-gradient)">
                        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="30" cy="8" r="6" fill="url(#center-gradient)" opacity="0.8" />
                    <circle cx="30" cy="22" r="6" fill="url(#center-gradient)" opacity="0.8" />
                    <circle cx="45" cy="15" r="8" fill="url(#center-gradient)">
                        <animate attributeName="r" values="8;12;8" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                </g>
                
                <defs>
                    <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    
                    <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    
                    <radialGradient id="center-gradient">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </radialGradient>
                </defs>
            </svg>
            
            <div className="text-center mt-32">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    CHANLYTICS
                </div>
                <div className="text-xs text-gray-500 mt-1">{progress}%</div>
            </div>
        </div>
    );
};

// Dark Mode Variant
export const LogoDark = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 280 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-[35px] w-auto', className)}>
            
            {/* Glowing Orb Effect */}
            <circle cx="25" cy="25" r="20" fill="url(#glow-gradient)" opacity="0.3">
                <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* AI Brain Pattern */}
            <g transform="translate(10, 10)">
                <path
                    d="M15 5 Q20 0 25 5 Q30 10 25 15 Q20 20 15 15 Q10 10 15 5"
                    fill="none"
                    stroke="url(#neon-gradient)"
                    strokeWidth="2">
                    <animate 
                        attributeName="stroke-dasharray" 
                        values="0 100;100 0;0 100" 
                        dur="4s" 
                        repeatCount="indefinite" />
                </path>
                
                {/* Data Points */}
                <circle cx="15" cy="15" r="2" fill="#38bdf8" />
                <circle cx="25" cy="10" r="2" fill="#3b82f6" />
                <circle cx="20" cy="20" r="2" fill="#60a5fa" />
            </g>
            
            {/* Futuristic Text */}
            <text 
                x="55" 
                y="50%" 
                dominantBaseline="middle" 
                fontFamily="'Inter', sans-serif" 
                fontSize="28" 
                fontWeight="700" 
                letterSpacing="-1"
                fill="#ffffff">
                CHANLYTICS
            </text>
            
            {/* Tech Accent */}
            <rect x="55" y="35" width="0" height="2" fill="url(#scan-gradient)">
                <animate attributeName="width" values="0;140;0" dur="3s" repeatCount="indefinite" />
                <animate attributeName="x" values="55;55;195" dur="3s" repeatCount="indefinite" />
            </rect>
            
            <defs>
                <radialGradient id="glow-gradient">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                
                <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                
                <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

// Demo Component
export default function LogoShowcase() {
    const [selectedLogo, setSelectedLogo] = useState('main');
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        CHANLYTICS Logo Suite
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Next-generation AI-powered branding
                    </p>
                </div>
                
                {/* Logo Selector */}
                <div className="flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => setSelectedLogo('main')}
                        className={cn(
                            "px-4 py-2 rounded-lg transition-all",
                            selectedLogo === 'main' 
                                ? "bg-blue-500 text-white" 
                                : "bg-gray-200 dark:bg-gray-800"
                        )}>
                        Main Logo
                    </button>
                    <button
                        onClick={() => setSelectedLogo('icon')}
                        className={cn(
                            "px-4 py-2 rounded-lg transition-all",
                            selectedLogo === 'icon' 
                                ? "bg-blue-500 text-white" 
                                : "bg-gray-200 dark:bg-gray-800"
                        )}>
                        Icon
                    </button>
                    <button
                        onClick={() => setSelectedLogo('animated')}
                        className={cn(
                            "px-4 py-2 rounded-lg transition-all",
                            selectedLogo === 'animated' 
                                ? "bg-blue-500 text-white" 
                                : "bg-gray-200 dark:bg-gray-800"
                        )}>
                        Loading Animation
                    </button>
                    <button
                        onClick={() => setSelectedLogo('dark')}
                        className={cn(
                            "px-4 py-2 rounded-lg transition-all",
                            selectedLogo === 'dark' 
                                ? "bg-blue-500 text-white" 
                                : "bg-gray-200 dark:bg-gray-800"
                        )}>
                        Dark Mode
                    </button>
                </div>
                
                {/* Display Area */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-12 min-h-[300px] flex items-center justify-center">
                    {selectedLogo === 'main' && <Logo className="h-16" />}
                    {selectedLogo === 'icon' && <LogoIcon className="size-16" />}
                    {selectedLogo === 'animated' && <LogoAnimated />}
                    {selectedLogo === 'dark' && (
                        <div className="bg-gray-900 p-8 rounded-xl">
                            <LogoDark className="h-12" />
                        </div>
                    )}
                </div>
                
                {/* Usage Examples */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                        <h3 className="font-semibold mb-4">Header Usage</h3>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <Logo className="h-8" />
                        </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                        <h3 className="font-semibold mb-4">App Icon</h3>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-4">
                            <LogoIcon className="size-10" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Perfect for favicons and app icons
                            </span>
                        </div>
                    </div>
                </div>
                
                {/* Features */}
                <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p>✨ Animated neural network visualization</p>
                    <p>🎨 Dynamic gradients matching your brand colors</p>
                    <p>🌓 Dark mode optimized variants</p>
                    <p>⚡ Lightweight SVG with CSS animations</p>
                    <p>🔄 Multiple variants for different use cases</p>
                </div>
            </div>
        </div>
    );
}