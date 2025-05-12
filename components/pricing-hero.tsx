import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CallToActionPricing() {
    return (
        <section className="py-8 md:py-10 mt-16 mb-2">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                <Badge variant="secondary" className="mb-4">Our Proven Process</Badge>
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Specialized Advertising, We Never Outsourced</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">High-volume Amazon & Walmart sellers no longer need to risk their business with one or two costly specialists. Our specialized VA teams excel in their specific operations—FBA management, listing optimization, and content creation—all following the Chanlytics framework customized to your needs.</p>

                </div>
            </div>
        </section>
    )
}