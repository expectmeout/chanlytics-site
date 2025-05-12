import { Button } from '@/components/ui/button'
import { Cpu, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'

const tableData = [
    {
        feature: 'Campaign Management',
        basic: true,
        standard: true,
        premium: true,
    },
    {
        feature: 'Keyword Optimization',
        basic: true,
        standard: true,
        premium: true,
    },
    {
        feature: 'ASIN Targeting',
        basic: false,
        standard: true,
        premium: true,
    },
    {
        feature: 'Monthly Ad Budget',
        basic: 'Up to $5K',
        standard: 'Up to $25K',
        premium: 'Unlimited',
    },
    {
        feature: 'Campaign Types',
        basic: 'Sponsored Products',
        standard: 'All Campaign Types',
        premium: 'All + Custom',
    },
    {
        feature: 'Reporting Frequency',
        basic: 'Monthly',
        standard: 'Bi-Weekly',
        premium: 'Weekly',
    },
    {
        feature: 'Target ROAS',
        basic: '',
        standard: 'Standard',
        premium: 'Premium',
    },
]

export default function ComparatorAdvertising() {
    return (
        <section className="py-8 md:py-12">
            <div className="mx-auto max-w-5xl px-0">
                <div className="w-full overflow-auto lg:overflow-visible">
                    <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
                        <thead className="bg-background sticky top-0">
                            <tr className="*:py-4 *:text-left *:font-medium">
                                <th className="lg:w-2/5"></th>
                                <th className="space-y-3">
                                    <span className="block">Basic</span>

                                    <Button asChild variant="outline" size="sm">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </th>
                                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                                    <span className="block">Standard</span>
                                    <Button asChild size="sm">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </th>
                                <th className="space-y-3">
                                    <span className="block">Premium</span>
                                    <Button asChild variant="outline" size="sm">
                                        <Link href="#">Get Started</Link>
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-caption text-sm">
                            <tr className="*:py-3">
                                <td className="flex items-center gap-2 font-medium">
                                    <Target className="size-4" />
                                    <span>Campaign Features</span>
                                </td>
                                <td></td>
                                <td className="bg-muted border-none px-4"></td>
                                <td></td>
                            </tr>
                            {tableData.slice(0, 3).map((row, index) => (
                                <tr key={index} className="*:border-b *:py-3">
                                    <td className="text-muted-foreground">{row.feature}</td>
                                    <td>
                                        {row.basic === true ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            row.basic
                                        )}
                                    </td>
                                    <td className="bg-muted border-none px-4">
                                        <div className="-mb-3 border-b py-3">
                                            {row.standard === true ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                row.standard
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        {row.premium === true ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            row.premium
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr className="*:pb-3 *:pt-8">
                                <td className="flex items-center gap-2 font-medium">
                                    <Sparkles className="size-4" />
                                    <span>Service Details</span>
                                </td>
                                <td></td>
                                <td className="bg-muted border-none px-4"></td>
                                <td></td>
                            </tr>
                            {tableData.slice(3).map((row, index) => (
                                <tr key={index} className="*:border-b *:py-3">
                                    <td className="text-muted-foreground">{row.feature}</td>
                                    <td>
                                        {row.basic === true ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            row.basic
                                        )}
                                    </td>
                                    <td className="bg-muted border-none px-4">
                                        <div className="-mb-3 border-b py-3">
                                            {row.standard === true ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                row.standard
                                            )}
                                        </div>
                                    </td>
                                    <td>
                                        {row.premium === true ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            row.premium
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr className="*:py-6">
                                <td></td>
                                <td></td>
                                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}