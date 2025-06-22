import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ExampleBodyExtras() {
  return (
    <>
      {/* Example Section: Product Stats */}
      <section className="bg-zinc-100 py-16 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-4xl font-medium lg:text-5xl">Why Choose Us?</h2>
            <p>Discover the advantages of our platform and how it can help your business grow.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-2">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">99.99%</div>
              <p>Uptime Guarantee</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">24/7</div>
              <p>Support</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-primary">500+</div>
              <p>Integrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section: Testimonial */}
      <section className="py-16 md:py-32 bg-white dark:bg-zinc-800/30">
        <div className="mx-auto max-w-4xl px-6">
          <blockquote className="rounded-xl border p-8 shadow-lg dark:border-zinc-700">
            <p className="text-xl font-medium">“This platform has revolutionized the way we do business. The features are robust and the support team is always there when we need them.”</p>
            <div className="mt-6 flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <cite className="font-medium">John Smith</cite>
                <span className="block text-sm text-muted-foreground">CTO, ExampleCorp</span>
              </div>
            </div>
          </blockquote>
        </div>
      </section>

      {/* Example Section: Call to Action */}
      <section className="py-16 md:py-32 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900 dark:to-teal-900">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to get started?</h2>
          <p className="mb-8 text-lg">Join thousands of satisfied customers using our platform to supercharge their workflow.</p>
          <Button asChild size="lg" className="mr-4">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
