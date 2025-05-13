import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ProcessHero() {
    return (
        <section className="py-8 md:py-10 mt-16 mb-2">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                <Badge variant="secondary" className="mb-4">Transformational Approach</Badge>
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">How We Transform Your Amazon Business</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">From discovery to continuous optimization, our structured process identifies your unique needs and builds a tailored solution. Your dedicated team of specialized VAs, custom ChatGPT integration, and transparent reporting work in harmony to overcome marketplace challenges and drive sustainable growth.</p>

                </div>
            </div>
        </section>
    )
}