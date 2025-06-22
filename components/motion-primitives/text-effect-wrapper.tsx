'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, TargetAndTransition, Transition, Variant, Variants } from 'motion/react'
import React, { ReactNode } from 'react'

type TextEffectWrapperProps = {
    children: ReactNode
    as?: keyof React.JSX.IntrinsicElements
    variants?: {
        container?: Variants
        item?: Variants
    }
    className?: string
    preset?: 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide'
    delay?: number
    speedReveal?: number
    speedSegment?: number
    trigger?: boolean
    onAnimationComplete?: () => void
    onAnimationStart?: () => void
    containerTransition?: Transition
    style?: React.CSSProperties
}

export function TextEffectWrapper({
    children,
    as = 'div',
    variants,
    className,
    preset = 'fade',
    delay = 0,
    speedReveal = 1,
    speedSegment = 1,
    trigger = true,
    onAnimationComplete,
    onAnimationStart,
    containerTransition,
    style
}: TextEffectWrapperProps) {
    const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

    const baseVariants = {
        container: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.05,
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                },
            },
        },
        item: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    duration: 0.5,
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.3,
                },
            },
        },
    }


    const computedVariants = {
        container: {
            ...baseVariants.container,
            ...variants?.container,
            visible: {
                ...baseVariants.container.visible,
                ...(variants?.container as any)?.visible,
                transition: {
                    ...baseVariants.container.visible.transition,
                    delayChildren: delay,
                    ...containerTransition,
                },
            },
        },
        item: {
            ...baseVariants.item,
            ...variants?.item,
        },
    }

    return (
        <AnimatePresence mode="popLayout">
            {trigger && (
                <MotionTag
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={computedVariants.container}
                    className={className}
                    onAnimationComplete={onAnimationComplete}
                    onAnimationStart={onAnimationStart}
                    style={style}
                >
                    {children}
                </MotionTag>
            )}
        </AnimatePresence>
    )
}
