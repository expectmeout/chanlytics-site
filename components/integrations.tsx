import { ShineBorder } from '@/components/magicui/shine-border';
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useCallback, type ComponentType } from 'react'
import {
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Users,
  Database,
  Check
} from 'lucide-react'

// Brand icons from react-icons
import {
  SiSlack,
  SiHubspot,
  SiSalesforce,
  SiNotion,
  SiAsana,
  SiTrello,
  SiDiscord,
  SiGmail,
  SiGooglesheets,
  SiGoogledrive,
  SiInstagram,
  SiFacebook,
  SiX,
  SiLinkedin,
  SiYoutube,
  SiTiktok,
  SiWhatsapp,
  SiTelegram,
  SiStripe,
  SiPaypal,
  SiShopify,
  SiWoocommerce,
  SiMailchimp,
  SiZoom,
  SiCalendly
} from 'react-icons/si'

// Integration logos with brand colors - organized into 3 rows
const integrations = [
  // Row 1
  [
    { name: 'Slack', icon: SiSlack, bg: 'bg-[#4A154B]', color: 'text-white' },
    { name: 'HubSpot', icon: SiHubspot, bg: 'bg-[#FF7A59]', color: 'text-white' },
    { name: 'Salesforce', icon: SiSalesforce, bg: 'bg-[#00A1E0]', color: 'text-white' },
    { name: 'Notion', icon: SiNotion, bg: 'bg-gray-800', color: 'text-white' },
    { name: 'Asana', icon: SiAsana, bg: 'bg-[#F06A6A]', color: 'text-white' },
    { name: 'Trello', icon: SiTrello, bg: 'bg-[#0052CC]', color: 'text-white' },
    { name: 'Discord', icon: SiDiscord, bg: 'bg-[#5865F2]', color: 'text-white' },
    { name: 'Gmail', icon: SiGmail, bg: 'bg-[#EA4335]', color: 'text-white' },
    { name: 'Google Sheets', icon: SiGooglesheets, bg: 'bg-[#0F9D58]', color: 'text-white' },
  ],
  // Row 2
  [
    { name: 'Google Drive', icon: SiGoogledrive, bg: 'bg-[#4285F4]', color: 'text-white' },
    { name: 'Instagram', icon: SiInstagram, bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', color: 'text-white' },
    { name: 'Facebook', icon: SiFacebook, bg: 'bg-[#1877F2]', color: 'text-white' },
    { name: 'Twitter/X', icon: SiX, bg: 'bg-gray-900', color: 'text-white' },
    { name: 'LinkedIn', icon: SiLinkedin, bg: 'bg-[#0A66C2]', color: 'text-white' },
    { name: 'YouTube', icon: SiYoutube, bg: 'bg-[#FF0000]', color: 'text-white' },
    { name: 'TikTok', icon: SiTiktok, bg: 'bg-black', color: 'text-white' },
    { name: 'WhatsApp', icon: SiWhatsapp, bg: 'bg-[#25D366]', color: 'text-white' },
    { name: 'Telegram', icon: SiTelegram, bg: 'bg-[#26A5E4]', color: 'text-white' },
  ],
  // Row 3
  [
    { name: 'Stripe', icon: SiStripe, bg: 'bg-[#635BFF]', color: 'text-white' },
    { name: 'PayPal', icon: SiPaypal, bg: 'bg-[#003087]', color: 'text-white' },
    { name: 'Shopify', icon: SiShopify, bg: 'bg-[#96BF48]', color: 'text-white' },
    { name: 'WooCommerce', icon: SiWoocommerce, bg: 'bg-[#7F54B3]', color: 'text-white' },
    { name: 'MailChimp', icon: SiMailchimp, bg: 'bg-[#FFE01B]', color: 'text-black' },
    { name: 'Zoom', icon: SiZoom, bg: 'bg-[#2D8CFF]', color: 'text-white' },
    { name: 'Calendly', icon: SiCalendly, bg: 'bg-[#006BFF]', color: 'text-white' },
  ]
];

interface IntegrationCardProps {
  name: string;
  icon: ComponentType<any>;
  bg: string;
  color: string;
}

const IntegrationCard = ({ name, icon: Icon, bg, color }: IntegrationCardProps) => (
  <div className="group relative flex-shrink-0 px-3">
    <div className={cn(
      "relative w-16 h-16 rounded-xl transition-all duration-500",
      "hover:scale-110 hover:shadow-2xl cursor-pointer",
      "border border-gray-700/30",
      bg
    )}>
      <div className={cn(
        "absolute inset-0 rounded-xl flex items-center justify-center",
        color
      )}>
        <Icon className="w-8 h-8" />
      </div>
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <span className="text-xs text-gray-300 whitespace-nowrap bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded shadow-lg border border-gray-700/50">
        {name}
      </span>
    </div>
  </div>
);

const IntegrationsSection = () => {
  const scrollToBooking = useCallback(() => {
    const targetElement = document.getElementById('booking');
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
    <section className="py-20 overflow-hidden bg-gray-900">
      <style>{`
        .scroll-container {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .scroll-content {
          display: flex;
          animation: scroll 80s linear infinite;
        }
        
        .scroll-content-reverse {
          display: flex;
          animation: scroll-reverse 80s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .scroll-container:hover .scroll-content,
        .scroll-container:hover .scroll-content-reverse {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Works With Your Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect your CRM, calendars, messaging channels, and business tools—no heavy lift. AI coordinates conversations, bookings, and follow‑ups across them all.
          </p>
        </div>

        {/* Sliding Integrations Grid */}
        <div className="relative mb-16">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
          
          <div className="space-y-8">
            {integrations.map((row, rowIndex) => (
              <div key={rowIndex} className="scroll-container">
                <div className={rowIndex % 2 === 0 ? "scroll-content" : "scroll-content-reverse"}>
                  {/* Duplicate the items multiple times to ensure seamless scrolling */}
                  {[...Array(6)].map((_, duplicateIndex) => (
                    <div key={duplicateIndex} className="flex">
                      {row.map((integration, idx) => (
                        <IntegrationCard key={`${duplicateIndex}-${idx}`} {...integration} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <ShineBorder shineColor={["#0070F3", "#38bdf8"]} />
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Omni‑Channel AI Agent
            </h3>
            <p className="text-gray-400">
              Conversations across DMs, SMS, email, WhatsApp, and calls—qualified and booked automatically, 24/7.
            </p>
          </div>

          <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-300">
            <ShineBorder shineColor={["#f59e0b", "#fde68a"]} />
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Workflow Automations
            </h3>
            <p className="text-gray-400">
              Trigger outreach, follow‑ups, reminders, and handoffs—no manual work. Just outcomes.
            </p>
          </div>

          <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <ShineBorder shineColor={["#a855f7", "#d8b4fe"]} />
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Database className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Live Analytics & Insights
            </h3>
            <p className="text-gray-400">
              Track bookings, conversion, and pipeline in real time. Ask your data questions—get instant answers.
            </p>
          </div>

          <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
            <ShineBorder shineColor={["#22c55e", "#86efac"]} />
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Check className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Works With Your Stack
            </h3>
            <p className="text-gray-400">
              Connects to your CRM, calendars, and messaging tools—no heavy lift. Everything stays in sync.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Connecting Apps
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={scrollToBooking} className="px-8 py-6 text-lg font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;