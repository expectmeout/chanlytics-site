'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#marketplace-solution-faqs' },
    { name: 'Pricing', href: '#booking' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact Us', href: '#booking' },
];

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const id = targetId.substring(1); // Remove '#' from id
        const targetElement = document.getElementById(id);

        if (isHomePage) {
            if (targetElement) {
                const offset = 80; // Height of the sticky header
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        } else {
            window.location.href = `/#${id}`;
        }

        if (menuState) {
            setMenuState(false); // Close menu on click if it's open
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-[1400px] px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <div className="flex items-center gap-2 lg:hidden">
                                <ModeToggle />
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 block cursor-pointer p-2.5">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-[15px]">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        {
                                            item.href.startsWith('/') ? (
                                                <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer">
                                                    <span>{item.name}</span>
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    onClick={(e) => handleScroll(e, item.href)}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer">
                                                    <span>{item.name}</span>
                                                </a>
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-[17px]">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {
                                                item.href.startsWith('/') ? (
                                                    <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer">
                                                        <span>{item.name}</span>
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href={item.href}
                                                        onClick={(e) => handleScroll(e, item.href)}
                                                        className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer">
                                                        <span>{item.name}</span>
                                                    </a>
                                                )
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {/* Mode toggle visible on desktop only */}
                                <div className="hidden lg:block">
                                    <ModeToggle />
                                </div>

                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="https://portal.chanlytics.com/auth/sign-up">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="https://portal.chanlytics.com/auth/sign-up">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}