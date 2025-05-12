import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import ServiceWorkerInit from '@/components/ServiceWorkerInit'
import FooterSection from '@/components/footer'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
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
            <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <FooterSection />
                <ServiceWorkerInit />
            </body>
            <GoogleAnalytics gaId="G-6KY6TLKXKY" />
        </html>
    )
}
