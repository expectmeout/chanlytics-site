export default function TestimonialSection() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-blue-600">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl">
                <blockquote>
                <p className="text-lg font-semibold sm:text-xl md:text-3xl">Our partnership with Chanlytics transformed our Amazon and Walmart business. Their expertise in marketplace management, compliance, and creative strategy resulted in record-breaking sales and operational efficiency. Highly recommended for brands seeking real results in e-commerce.</p>

                <div className="mt-12 flex items-center gap-6">
                  <img
                    className="h-7 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                  <div className="space-y-1 border-l pl-6">
                    <cite className="font-medium">John Doe</cite>
                    <span className="text-muted-foreground block text-sm">CEO, National Brand</span>
                  </div>
                </div>
              </blockquote>
                </div>
            </div>
        </section>
    )
}
