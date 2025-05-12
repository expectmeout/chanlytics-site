import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function BrandsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Chanlytics ecosystem brings together our models.</h2>
                <div className="relative">
                    {/* Text container - pushed to the right */}
                    <div className="relative z-10 space-y-4 md:w-1/2 md:ml-auto">
                        <p className="text-body">
                            Chanlytics Dashboard <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.
                        </p>
                        <p>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Faaast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Powerful</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                            </div>
                        </div>
                    </div>
                    {/* Image container - positioned on the left with larger width */}
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:left-0 md:w-[100%] md:mt-0">
                        {/* Flipped gradient direction for left positioning */}
                        <div aria-hidden className="bg-linear-to-r z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/charts.png" className="hidden rounded-[12px] dark:block w-full h-auto" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/charts-light.png" className="rounded-[12px] shadow dark:hidden w-full h-auto" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}