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
        quote: 'Switching from expensive full-time employees to Chanlytics\' specialized VAs cut our operational costs by 60%. Their AI system streamlined our entire logistics process while improving compliance.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Brand Manager',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'The ChatGPT plugin is revolutionary. I can check operations, analyze sales data, and generate reports with a simple chat prompt - no more switching between complex dashboards and spreadsheets.',
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'Marketplace Operations',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'Their specialized optimization systems increased our conversion rates by 28%. The unified ChatGPT interface keeps me updated on progress without endless status meetings.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Marketplace Director',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        quote: 'Before Chanlytics, we wasted hours tracking team work across multiple tools. Now their ChatGPT plugin gives me real-time updates and generates performance charts instantly.',
    },
    {
        name: 'Marcus Lee',
        role: 'Operations Manager',
        image: 'https://randomuser.me/api/portraits/men/21.jpg',
        quote: 'Their AI automation has been a game-changer for both our online store and physical location. The ChatGPT plugin creates detailed reports instantly that previously took days of compiling data.',
    },
    {
        name: 'Priya Patel',
        role: 'Owner, Artisan Home Goods',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: 'We replaced multiple software systems with Chanlytics\' AI automation and actually improved our client relationships. Their platform makes managing both online and in-store operations effortless.',
    },
    {
        name: 'David Kim',
        role: 'Founder, Professional Services Firm',
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        quote: 'Their AI Receptionist has transformed our client intake process. I love that I can check on all client communications through their ChatGPT interface without logging into multiple systems.',
    },
    {
        name: 'Sofia Martinez',
        role: 'Creative Director',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'Their specialized creative systems deliver amazing content while the ChatGPT interface keeps me updated on progress. I love being able to request changes through the same chat I use for everything else.',
    },
    {
        name: 'James Carter',
        role: 'Founder, UrbanEssentials',
        image: 'https://randomuser.me/api/portraits/men/23.jpg',
        quote: 'Streamlining our operations with Chanlytics\' AI automation saved us over $120K annually in staffing while improving our marketplace performance. The unified interface is brilliant for managing everything.',
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
                        <h2 className="text-title text-3xl font-semibold">Trusted by E-commerce & Local Businesses</h2>
                        <p className="text-body mt-6">Our AI systems deliver measurable growth, operational clarity, and enhanced client experiences for both online sellers and local service providers.</p>
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
