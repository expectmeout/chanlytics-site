import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'E-commerce Lead, National Brand',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'Switching from expensive full-time employees to Chanlytics\' specialized VAs cut our operational costs by 60%. Their FBA shipping experts streamlined our entire logistics process while improving compliance.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Brand Manager',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'The ChatGPT plugin is revolutionary. I can check VA progress, analyze sales data, and generate reports with a simple chat prompt - no more switching between Monday.com and Excel spreadsheets.',
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'Marketplace Operations',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'Their specialized Upwork VAs for listing optimization increased our conversion rates by 28%. The unified ChatGPT interface keeps me updated on their progress without endless status meetings.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Marketplace Director',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        quote: 'Before Chanlytics, we wasted hours in systems like Monday.com tracking VA work. Now their ChatGPT plugin gives me real-time updates and generates performance charts instantly.',
    },
    {
        name: 'Oketa Fred',
        role: 'Head of Marketplace Strategy',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        quote: 'Their specialized VA team reduced our FBA chargebacks by 32% through focused compliance work. The ChatGPT interface lets me monitor their efforts without micromanaging.',
    },
    {
        name: 'Zeki',
        role: 'Founder, DTC Brand',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: 'What impressed me most was how their VAs became specialists in Amazon support cases. They\'ve resolved issues I couldn\'t for months, all while I track progress through simple ChatGPT conversations.',
    },
    {
        name: 'Ava Chen',
        role: 'Director of E-commerce, NaturePure Wellness',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'The combination of skilled Upwork VAs with the ChatGPT interface transformed our operations. I can instantly pull inventory reports, check listing status, and monitor VA productivity in one place.',
    },
    {
        name: 'Marcus Lee',
        role: 'Marketplace Compliance Manager',
        image: 'https://randomuser.me/api/portraits/men/21.jpg',
        quote: 'Their VA team specializing in compliance has been a game-changer. The ChatGPT plugin creates detailed reports instantly that previously took days of compiling data from multiple systems.',
    },
    {
        name: 'Priya Patel',
        role: 'Head of Digital, Artisan Home Goods',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: 'We replaced three full-time employees with Chanlytics\' specialized VAs and actually improved our listing quality. The ChatGPT interface makes managing them effortless compared to traditional tools.',
    },
    {
        name: 'David Kim',
        role: 'VP of Marketplace Expansion',
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        quote: 'The real-time company data through their ChatGPT plugin has eliminated countless hours of report generation. I can instantly check how our VA team is performing across all marketplaces.',
    },
    {
        name: 'Sofia Martinez',
        role: 'Creative Director',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'Their specialized creative VAs deliver amazing listing content while the ChatGPT interface keeps me updated on progress. I love being able to request changes through the same chat I use for everything else.',
    },
    {
        name: 'James Carter',
        role: 'Founder, UrbanEssentials',
        image: 'https://randomuser.me/api/portraits/men/23.jpg',
        quote: 'Streamlining our operations with Chanlytics\' specialized VAs and ChatGPT integration saved us over $120K annually in staffing while improving our Amazon performance. The unified interface is brilliant.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-8 md:py-0">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Trusted by Leading Marketplace Brands</h2>
                        <p className="text-body mt-6">Our in-house team delivers measurable growth, operational clarity, and creative strategy for brands on Amazon & Walmart.</p>
                    </div>
                    <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3 *:border-none *:shadow-none">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
