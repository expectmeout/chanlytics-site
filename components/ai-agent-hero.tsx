import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  Bot,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  Linkedin,
  Mail,
  Slack,
  MessageSquare,
  Twitter,
  Store,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";

interface Message {
  role: "lead" | "agent";
  text: string;
}

interface Platform {
  name: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  color: string;
  bgColor: string;
  messages: Message[];
}

type BusinessType = "local" | "agency";

export default function AiAgentHero() {
  const features = [
    { icon: <Zap className="h-4 w-4" />, label: "Speed to Lead" },
    { icon: <Sparkles className="h-4 w-4" />, label: "AI-Powered" },
    { icon: <BarChart3 className="h-4 w-4" />, label: "Smart Dashboard" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white pt-[26px] pb-24 dark:from-zinc-950 dark:to-zinc-900 sm:pt-[58px] sm:pb-32">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-zinc-950/10 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#2B7FFE]/20 to-blue-600/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-24">
        {/* Copy block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-[#2B7FFE] dark:bg-blue-900/30 dark:text-blue-300">
            <Bot className="h-4 w-4" />
            AI-Powered Lead Management
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
            Never Miss a Lead with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-[#2B7FFE] bg-clip-text text-transparent">
              Chanlytics AI
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Your AI agents engage instantly across every platform – booking meetings, 
            answering questions, and nurturing relationships 24/7 while you focus on 
            growing your business.
          </p>

          {/* Feature pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {features.map(({ icon, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80"
              >
                {icon}
                {label}
              </motion.div>
            ))}
          </div>


        </motion.div>

        {/* Enhanced Phone Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <PhoneCarousel />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneCarousel() {
  const [currentPlatform, setCurrentPlatform] = React.useState(0);
  const [businessType, setBusinessType] = React.useState<BusinessType>("local");
  const [direction, setDirection] = React.useState(0);

  const swipeVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };
  
  const platformsData: Record<BusinessType, Platform[]> = {
    local: [
      {
        name: "Instagram DM",
        icon: Instagram,
        color: "from-[#2B7FFE] to-blue-500",
        bgColor: "bg-gradient-to-br from-[#2B7FFE]/10 to-blue-500/10",
        messages: [
          { role: "lead", text: "Hi! Do you have any appointments for a haircut tomorrow?" },
          { role: "agent", text: "Hello! Yes, I have slots at 10 AM, 2 PM, and 4 PM. Which works best for you?" },
          { role: "lead", text: "2 PM would be perfect!" },
          { role: "agent", text: "Great! I've booked you for 2 PM tomorrow. You'll receive a confirmation text shortly! 💇‍♀️" },
        ],
      },
      {
        name: "WhatsApp",
        icon: MessageCircle,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        messages: [
          { role: "lead", text: "Is your restaurant open for delivery tonight?" },
          { role: "agent", text: "Yes! We're open until 10 PM. Would you like to see our menu?" },
          { role: "lead", text: "Yes please! Also do you have vegan options?" },
          { role: "agent", text: "Absolutely! Here's our menu link. We have a full vegan section. Order now and get 10% off! 🌱" },
        ],
      },
      {
        name: "Facebook Page",
        icon: Facebook,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
        messages: [
          { role: "lead", text: "What are your dental cleaning prices?" },
          { role: "agent", text: "Our standard cleaning is $120. First-time patients get 20% off!" },
          { role: "lead", text: "That sounds good. When can I come in?" },
          { role: "agent", text: "I can book you as early as tomorrow at 9 AM or Thursday at 3 PM. Which works better? 🦷" },
        ],
      },
      {
        name: "Google Business",
        icon: MessageSquare,
        color: "from-red-500 to-orange-500",
        bgColor: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
        messages: [
          { role: "lead", text: "Do you repair iPhone screens?" },
          { role: "agent", text: "Yes! iPhone screen repairs starting at $89. Same-day service available." },
          { role: "lead", text: "How long does it take?" },
          { role: "agent", text: "Usually 30-45 minutes. Can you drop by today? We're open until 7 PM 📱" },
        ],
      },
      {
        name: "Twitter DM",
        icon: Twitter,
        color: "from-sky-400 to-sky-500",
        bgColor: "bg-gradient-to-br from-sky-400/10 to-sky-500/10",
        messages: [
          { role: "lead", text: "Saw your tweet about the gym membership deal!" },
          { role: "agent", text: "Great timing! 50% off for new members this week only 💪" },
          { role: "lead", text: "What's included?" },
          { role: "agent", text: "Full gym access, all classes, and a free PT session. Want to book a tour?" },
        ],
      },
    ],
    agency: [
      {
        name: "LinkedIn DM",
        icon: Linkedin,
        color: "from-blue-600 to-blue-700",
        bgColor: "bg-gradient-to-br from-blue-600/10 to-blue-700/10",
        messages: [
          { role: "lead", text: "Your AI lead management solution looks interesting. How does it work?" },
          { role: "agent", text: "Thanks for reaching out! We help agencies automate client interactions across all platforms." },
          { role: "lead", text: "What's the typical ROI for agencies?" },
          { role: "agent", text: "Agencies see 3-5x ROI within 90 days. Can I show you a 15-min demo tomorrow? 📈" },
        ],
      },
      {
        name: "Slack Connect",
        icon: Slack,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
        messages: [
          { role: "lead", text: "Team needs better lead tracking. Can your system integrate with our CRM?" },
          { role: "agent", text: "Absolutely! We integrate with HubSpot, Salesforce, and 20+ other CRMs." },
          { role: "lead", text: "What about custom APIs?" },
          { role: "agent", text: "Yes, full API access included. Our team can help with custom integrations too! 🔧" },
        ],
      },
      {
        name: "Email",
        icon: Mail,
        color: "from-gray-600 to-gray-700",
        bgColor: "bg-gradient-to-br from-gray-600/10 to-gray-700/10",
        messages: [
          { role: "lead", text: "Following up on your AI automation proposal." },
          { role: "agent", text: "Thanks! Our solution can handle 1000+ conversations simultaneously." },
          { role: "lead", text: "What about multilingual support?" },
          { role: "agent", text: "We support 50+ languages with native-level responses. Let's discuss your specific needs? 🌍" },
        ],
      },
      {
        name: "WhatsApp",
        icon: MessageCircle,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        messages: [
          { role: "lead", text: "Need AI solution for our 50+ clients. Volume pricing?" },
          { role: "agent", text: "Yes! Enterprise plans start at $2k/month for unlimited clients." },
          { role: "lead", text: "White label options?" },
          { role: "agent", text: "Full white label included! Your branding, our AI power. Demo this week? 🚀" },
        ],
      },
      {
        name: "Twitter DM",
        icon: Twitter,
        color: "from-sky-400 to-sky-500",
        bgColor: "bg-gradient-to-br from-sky-400/10 to-sky-500/10",
        messages: [
          { role: "lead", text: "Your AI thread got our attention. B2B focused?" },
          { role: "agent", text: "Absolutely! Built specifically for B2B lead nurturing and qualification." },
          { role: "lead", text: "Integration timeline?" },
          { role: "agent", text: "48 hours from signup to full deployment. Our team handles everything! ⚡" },
        ],
      },
    ],
  };

  const platforms = platformsData[businessType];

  const nextPlatform = () => {
    setDirection(1);
    setCurrentPlatform((prev) => (prev + 1) % platforms.length);
  };

  const prevPlatform = () => {
    setDirection(-1);
    setCurrentPlatform((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextPlatform, 8000); // Auto-advance every 8 seconds
    return () => clearInterval(timer);
  }, [businessType, platforms.length]);

  // Reset to first platform when switching business type
  React.useEffect(() => {
    setCurrentPlatform(0);
  }, [businessType]);

  const currentPlatformData = platforms[currentPlatform];
  const PlatformIcon = currentPlatformData.icon;

  return (
    <div className="relative">
      {/* Business Type Tabs */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
          <button
            onClick={() => setBusinessType("local")}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
              businessType === "local"
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            )}
          >
            <Store className="h-4 w-4" />
            Local Businesses
          </button>
          <button
            onClick={() => setBusinessType("agency")}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
              businessType === "agency"
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            )}
          >
            <Building2 className="h-4 w-4" />
            Agencies
          </button>
        </div>
      </div>

      {/* Phone Frame */}
      <div className="relative mx-auto h-[600px] w-[300px] rounded-[3rem] border-8 border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
        {/* Screen with Status Bar */}
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-800">
          {/* Status Bar */}
          <div className="flex h-8 items-center justify-between bg-zinc-100 px-5 dark:bg-zinc-800">
            <div className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">9:41 AM</div>
            <div className="mx-auto h-4 w-16 rounded-full bg-zinc-800 dark:bg-zinc-900"></div>
            <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
              <div className="text-[10px]">100%</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="12" x="3" y="6" rx="2" />
                <line x1="23" x2="23" y1="13" y2="11" />
              </svg>
            </div>
          </div>
          
          {/* Platform Header */}
          <div className={cn(
            "flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-700",
            currentPlatformData.bgColor
          )}>
            <div className="flex items-center gap-2">
              <div className={cn(
                "rounded-full p-2 text-white",
                `bg-gradient-to-br ${currentPlatformData.color}`
              )}>
                <PlatformIcon className="h-5 w-5" />
              </div>
              <span className="font-semibold text-zinc-800 dark:text-white">
                {currentPlatformData.name}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {platforms.map((_: Platform, idx: number) => (
                <div
                  key={idx}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all",
                    idx === currentPlatform
                      ? "w-4 bg-zinc-800 dark:bg-white"
                      : "bg-zinc-300 dark:bg-zinc-600"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="relative h-[calc(100%-92px)] overflow-hidden bg-zinc-50 dark:bg-zinc-900">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`${businessType}-${currentPlatform}`}
                variants={swipeVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -50) {
                    nextPlatform();
                  } else if (offset.x > 50) {
                    prevPlatform();
                  }
                }}
                className="absolute inset-0 flex flex-col justify-end gap-3 p-4"
              >
                {currentPlatformData.messages.map((message: Message, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: message.role === "lead" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.15 }}
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                      message.role === "lead"
                        ? "ml-auto bg-gradient-to-br from-blue-500 to-[#2B7FFE] text-white"
                        : "mr-auto bg-white text-zinc-800 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                    )}
                  >
                    {message.text}
                  </motion.div>
                ))}
                
                {/* AI Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: currentPlatformData.messages.length * 0.15 + 0.3 }}
                  className="mr-auto mt-1 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm dark:bg-zinc-800"
                >
                  <Bot className="h-4 w-4 text-[#2B7FFE]" />
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">AI Agent is typing...</span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i: number) => (
                      <motion.div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-[#2B7FFE]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevPlatform}
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextPlatform}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}