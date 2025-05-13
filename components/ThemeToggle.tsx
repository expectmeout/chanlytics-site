'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export const ThemeToggle = () => {
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" className="flex size-8 items-center justify-center rounded-full">
                <div className="relative size-4 flex items-center justify-center">
                    <Sun className="size-4 opacity-0" />
                </div>
            </Button>
        )
    }

    return (
        <Button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            variant="ghost" 
            className="flex size-8 items-center justify-center rounded-full overflow-hidden"
        >
            <div className="relative flex items-center justify-center size-4">
                <Sun 
                    className={`absolute size-4 transition-all duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} 
                />
                <Moon 
                    className={`absolute size-4 transition-all duration-300 ease-in-out ${theme === 'dark' ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} 
                />
            </div>
        </Button>
    )
}
