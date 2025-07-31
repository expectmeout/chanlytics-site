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
  title: 'AI Operating System for Small Business | Chanlytics',
  description:
    'Complete AI automation for small businesses. Capture leads from every channel—email, phone, SMS, WhatsApp, Instagram DMs. Automate lead nurturing, appointment booking, payments, reviews & reactivations. Real-time insights & AI assistant included.',
  keywords:
    'AI operating system, small business automation, omnichannel lead capture, AI lead management, automated appointment booking, WhatsApp automation, Instagram DM automation, Facebook messenger automation, email automation, SMS automation, voice call AI, lead nurturing automation, payment collection automation, review management, customer reactivation, AI business assistant, real-time business insights, KPI tracking, conversation analytics, AI agent monitoring',
  openGraph: {
    title: 'AI Operating System for Small Business | Chanlytics',
    description:
      'Capture & convert leads 24/7 from every channel. AI agents handle email, calls, texts, WhatsApp, social DMs—from first contact to payment & reviews. Monitor everything with real-time analytics.',
    url: 'https://chanlytics.com',
    siteName: 'Chanlytics',
    images: [
      {
        url: 'https://chanlytics.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chanlytics – Complete AI Operating System for Small Business'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Operating System for Small Business | Chanlytics',
    description:
      'One AI system captures leads from every channel & automates your entire customer journey. Real-time insights, AI assistant & complete business automation.',
    images: ['https://chanlytics.com/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://chanlytics.com',
  },
};

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