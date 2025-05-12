import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Strategic Marketplace Management for Brand Growth</h2>
                    <p>Chanlytics delivers comprehensive marketplace solutions that drive sustainable growth. Our expert team handles everything from account optimization to creative strategy, giving you the competitive edge on Amazon and Walmart.</p>
                </div>
                <img className="rounded-(--radius)" src="/adcampaigns.png" alt="ad campaigns" height="" width="" loading="lazy" />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Fast Results</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">See meaningful growth metrics within weeks of implementation.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Data-Driven</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Advanced analytics guide every decision for maximum ROI.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Brand Protection</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Safeguard your listings and brand integrity across marketplaces.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Creative Excellence</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Stand out with premium listing content that converts browsers to buyers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
