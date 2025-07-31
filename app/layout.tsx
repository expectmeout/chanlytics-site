import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import ServiceWorkerInit from '@/components/ServiceWorkerInit'
import FooterSection from '@/components/footer'
import Script from "next/script";
import { cn } from '@/lib/utils';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Chanlytics | Marketplace Growth Through Virtual Assistants & AI',
    description: 'Our three-pillar system combines specialized VA teams, a unified ChatGPT interface, and strategic advertising for efficient marketplace growth.',
    keywords: 'virtual assistants, VA management, Amazon FBA, Walmart marketplace, ChatGPT plugin, business operations, e-commerce, marketplace optimization, listing optimization, AI interface, business analytics, remote teams, upwork, specialized VAs',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body className={`${inter.variable} overflow-x-hidden antialiased`}>
                <div aria-hidden="true" className="absolute inset-0 isolate contain-strict">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <FooterSection />
                <ServiceWorkerInit />

                <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
            </body>
        <GoogleAnalytics gaId="G-6KY6TLKXKY" />
        </html>
    )
}
