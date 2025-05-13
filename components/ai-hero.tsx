import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CallToActionAI() {
    return (
        <section className="py-8 md:py-10 mt-16 mb-2">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                <Badge variant="secondary" className="mb-4">Amazon Automation System</Badge>
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">AI Automation Built For Amazon Sellers & Agencies</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Our purpose-built automation system connects to your Amazon seller accounts, automating repetitive tasks and delivering AI-powered insights that save sellers and agencies hours of manual work every week.</p>

                </div>
            </div>
        </section>
    )
}