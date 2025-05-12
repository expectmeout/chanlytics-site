import { Button } from "@/components/ui/button"
import { Check, ShieldCheck } from "lucide-react"

export default function AccountManagementPricing() {
    return (
        <div className="card-glow bg-white dark:bg-muted/30 relative z-10 rounded-xl border-0 shadow-xl overflow-hidden transition duration-300 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent animate-gradient"></div>
            <div className="p-6 relative">
                <div className="text-black dark:text-white">
                    <div className="flex justify-center md:justify-start items-center mb-4">
                        <div className="bg-blue-600/20 p-2 rounded-full">
                            <ShieldCheck className="h-7 w-7 text-blue-400" />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-black dark:text-white">Enterprise Account Management</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">
                            Strategic account oversight to ensure long-term growth and marketplace compliance.
                        </p>
                    </div>
                    <div className="mt-4 flex justify-center md:justify-start">
                        <span className="text-2xl font-bold tracking-tight text-black dark:text-white">$Custom</span>
                    </div>
                    <div className="mt-3 flex flex-col gap-3 text-center md:text-left">
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Tailored pricing based on account size and needs</p>
                        <div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0 w-full">
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                
                    <h4 className="text-sm font-medium text-blue-400 mt-6 mb-3">Premium Features</h4>
                    <ul role="list" className="space-y-2">
                        {[
                            'Complete Advertising & VA Package',
                            'Dedicated Senior Account Manager',
                            'Strategic Account Planning',
                            'Executive Strategy Calls'
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <Check className="h-2.5 w-2.5 text-blue-400" />
                                </div>
                                <span className="text-zinc-700 dark:text-zinc-300 text-xs">{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <p className="text-center text-xs text-zinc-600 dark:text-zinc-500 mt-5">
                        For brands generating $50,000+ monthly revenue on Amazon & Walmart
                    </p>
                    <div className="mt-5">
                        <Button 
                            className="w-full bg-white dark:bg-black hover:bg-blue-50 dark:hover:bg-zinc-900 text-black dark:text-white border border-blue-200 dark:border-blue-800 font-medium h-10"
                            onClick={() => window.dispatchEvent(new CustomEvent('openComparator', { detail: 'account-management' }))}
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}