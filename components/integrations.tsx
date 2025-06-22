import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/logos'
import { LogoIcon } from '@/components/logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { useCallback } from 'react'
import { 
  FileText, 
  Mailbox, 
  Rss, 
  Cloud, 
  BarChart3, 
  Star, 
  Database, 
  Sparkles,
  Image,
  Link2,
  Figma,
  FileJson,
  ChevronRight,
  Table,
  Wrench,
  Brain,
  Layers,
  GitBranch,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  Hash,
  Globe,
  Slack,
  Code2,
  Palette,
  Music,
  Video,
  Map,
  Heart,
  Activity
} from 'lucide-react'

interface IntegrationCardProps {
  children: React.ReactNode;
  className?: string;
}

const IntegrationCard = ({ children, className }: IntegrationCardProps) => (
  <div className={cn(
    'bg-background relative flex size-16 md:size-20 rounded-2xl border border-border/50 shadow-sm transition-all hover:shadow-md hover:scale-105 hover:border-border',
    className
  )}>
    <div className="m-auto size-fit *:size-7 md:*:size-8">{children}</div>
  </div>
)

export default function IntegrationsSection() {
    const scrollToBooking = useCallback(() => {
        const targetElement = document.getElementById('booking-calendar-container');
        if (targetElement) {
            const headerOffset = 70;
            const buffer = 20;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset - buffer;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, []);

    return (
        <section className="py-0 md:py-6 overflow-hidden">
                {/* Full-width Integration Marquee */}
                <div className="relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />
                    <div className="container mx-auto px-6 pt-0">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-2">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                        Plug AI into your own data &<br />
                        <span className="bg-gradient-to-r from-blue-500 to-[#2B7FFE] bg-clip-text text-transparent">over 500 integrations</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Let our AI seamlessly manage your essential business tools. From your CRM to your accounting software, 
                        Chanlytics connects your backend systems into a single, automated powerhouse.
                    </p>
                </div>
                {/* CTA */}
                <div className="text-center mt-0">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={scrollToBooking}
                        className="text-base mb-14">
                        Get Started
                    </Button>
                </div>
            </div>
                    {/* Multiple rows of sliding integrations */}
                    <div className="space-y-6">
                        {/* Row 1 - Slides Left */}
                        <InfiniteSlider
                            gap={24}
                            speed={30}
                            speedOnHover={20}>
                            <IntegrationCard className="bg-green-100/80 dark:bg-green-900/20">
                                <FileText className="text-green-600 dark:text-green-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Mailbox className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <Rss className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Cloud className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-indigo-100/80 dark:bg-indigo-900/20">
                                <BarChart3 className="text-indigo-600 dark:text-indigo-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <MagicUI />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Database className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Sparkles className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Image className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Link2 className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Figma className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Replit />
                            </IntegrationCard>
                            <IntegrationCard className="bg-green-100/80 dark:bg-green-900/20">
                                <FileText className="text-green-600 dark:text-green-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Mailbox className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <Rss className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Cloud className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-indigo-100/80 dark:bg-indigo-900/20">
                                <BarChart3 className="text-indigo-600 dark:text-indigo-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <MagicUI />
                            </IntegrationCard>
                        </InfiniteSlider>

                        {/* Row 2 - Slides Right */}
                        <InfiniteSlider
                            gap={24}
                            speed={30}
                            speedOnHover={20}
                            reverse>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Star className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Gemini />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <FileJson className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Brain className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Table className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Layers className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Zap className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <ChevronRight className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <VSCodium />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Wrench className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <MediaWiki />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <Palette className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Star className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Gemini />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <FileJson className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Brain className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Table className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Layers className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Star className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Gemini />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <FileJson className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Brain className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Table className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Layers className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                        </InfiniteSlider>

                        {/* Row 3 - Slides Left */}
                        <InfiniteSlider
                            gap={24}
                            speed={30}
                            speedOnHover={20}>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Calendar className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-green-100/80 dark:bg-green-900/20">
                                <MessageSquare className="text-green-600 dark:text-green-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <GooglePaLM />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Shield className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <Hash className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Globe className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Video className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Map className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-green-100/80 dark:bg-green-900/20">
                                <Activity className="text-green-600 dark:text-green-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Slack className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <VSCodium />
                            </IntegrationCard>
                            <IntegrationCard className="bg-indigo-100/80 dark:bg-indigo-900/20">
                                <FileText className="text-indigo-600 dark:text-indigo-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-red-100/80 dark:bg-red-900/20">
                                <Star className="text-red-600 dark:text-red-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Replit />
                            </IntegrationCard>
                            <IntegrationCard className="bg-purple-100/80 dark:bg-purple-900/20">
                                <Calendar className="text-purple-600 dark:text-purple-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-green-100/80 dark:bg-green-900/20">
                                <MessageSquare className="text-green-600 dark:text-green-400" />
                            </IntegrationCard>
                            <IntegrationCard>
                                <GooglePaLM />
                            </IntegrationCard>
                            <IntegrationCard className="bg-blue-100/80 dark:bg-blue-900/20">
                                <Shield className="text-blue-600 dark:text-blue-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-orange-100/80 dark:bg-orange-900/20">
                                <Hash className="text-orange-600 dark:text-orange-400" />
                            </IntegrationCard>
                            <IntegrationCard className="bg-gray-100/80 dark:bg-gray-900/20">
                                <Globe className="text-gray-600 dark:text-gray-400" />
                            </IntegrationCard>
                        </InfiniteSlider>
                    </div>
                </div>
        </section>
    )
}