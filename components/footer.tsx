'use client';
import React from 'react';
import Link from 'next/link';

const links = [
    { title: 'Features', href: '#features' },
    { title: 'FAQ', href: '#marketplace-solution-faqs' },
    { title: 'Pricing', href: '#booking' },
    { title: 'Contact Us', href: '#booking' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
];

export default function FooterSection() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            const offset = -80; // Adjust this value to account for the sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <footer className="border-b bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Chanlytics, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => {
                            const isAnchor = link.href.startsWith('#');
                            if (isAnchor) {
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="text-muted-foreground hover:text-primary block duration-150 cursor-pointer"
                                    >
                                        <span>{link.title}</span>
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary block duration-150 cursor-pointer"
                                >
                                    <span>{link.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
