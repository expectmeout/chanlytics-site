import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from './motion-primitives/progressive-blur'
import Image from 'next/image'

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-12 md:pb-22 -mt-12 md:-mt-24 lg:-mt-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Featured Products</p>
                    </div>
                    <div className="relative py-0 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={15}
                            speed={30}
                            gap={64}>
                    <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/hairdrop-care.png"
                                        alt="Hair Care Product"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/enzyme-supplement.png"
                                        alt="Enzyme Supplement"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/stroller.png"
                                        alt="Stroller"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/earplug.png"
                                        alt="Ear Plugs"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div> 

                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/guasha-beauty.png"
                                        alt="Guasha Beauty Tool"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/joint-supplement.png"
                                        alt="Joint Supplement"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/epoxy-product.png"
                                        alt="Epoxy Product"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/sheets-light.png"
                                        alt="Sheets Light"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="mx-auto w-36 h-36 relative">
                                    <Image
                                        src="/sheets-dark.png"
                                        alt="Sheets Dark"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
