import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CallToActionAd() {
    return (
        <section className="py-8 md:py-10 mt-16 mb-2">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                <Badge variant="secondary" className="mb-4">100% In-House Expertise</Badge>
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Amazon & Walmart Advertising Built By US Experts</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Unlike agencies that outsource to third-party contractors, our advertising team is 100% in-house and US-based. We've built a specialized team of Amazon and Walmart advertising experts who work directly on your account, creating data-driven campaigns with transparent reporting that consistently outperforms industry benchmarks.</p>

                </div>
            </div>
        </section>
    )
}