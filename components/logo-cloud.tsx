import Image from 'next/image'

export default function LogoCloud() {
    return (
        <section className="bg-background py-4">
            <div className="mx-auto max-w-5xl px-4">
                <h2 className="text-center text-lg font-medium">Your favorite companies are working with us.</h2>
                <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height={20} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-4 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height={16} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-4 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height={16} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height={20} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-4 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height={16} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-7 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height={28} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height={20} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-6 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height={24} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-4 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height={16} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height={20} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                    <Image className="h-5 w-auto dark:invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height={20} width={80} loading="lazy" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px" />
                </div>
            </div>
        </section>
    )
}