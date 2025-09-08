'use client'

import React from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { Bot, BarChart3, BrainCircuit, CheckCircle2, X, Sparkles, Zap, Phone, MessageSquare, Instagram, Facebook, MessageCircle, Linkedin, Mail, Slack, Store, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShineBorder } from '@/components/magicui/shine-border';
import type { LucideProps } from 'lucide-react';
import AutomatedBookingDemo from './AutomatedBookingDemo';
import AnalyticsDashboardDemo from './AnalyticsDashboardDemo';

// --- DATA --- //

interface Message {
  role: 'lead' | 'agent';
  text: string;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  platform: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  color: string;
  bgColor: string;
}

interface Platform {
  name: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
  color: string;
  bgColor: string;
  messages: Message[];
}

type BusinessType = 'local' | 'agency';

const platformsData: Record<BusinessType, Platform[]> = {
  local: [
    {
      name: "Instagram DM",
      icon: Instagram,
      color: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      bgColor: "bg-gradient-to-br from-purple-500/10 via-red-500/10 to-yellow-500/10",
      messages: [
        { role: "lead", text: "Hi! Do you have any haircut appointments tomorrow?" },
        { role: "agent", text: "Hello! Yes, I have slots at 10 AM, 2 PM, and 4 PM. Which works best?" },
        { role: "lead", text: "2 PM would be perfect!" },
        { role: "agent", text: "Great! I've booked you for 2 PM. You'll get a confirmation text shortly! 💇‍♀️" },
      ],
    },
    {
      name: "Facebook Messenger",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
      messages: [
        { role: "lead", text: "What are your prices for dental cleaning?" },
        { role: "agent", text: "Our standard cleaning is $120. We can book you today and save you a trip. First-time patients get 20% off!" },
        { role: "lead", text: "Sounds good. When can I come in?" },
        { role: "agent", text: "I can book you for tomorrow at 9 AM or Thursday at 3 PM. Which works? 🦷" },
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
        { role: "lead", text: "Yes please! Do you have vegan options?" },
        { role: "agent", text: "Absolutely! Here's the menu. We have a full vegan section. Order now for 10% off! 🌱" },
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
        { role: "lead", text: "Your AI lead gen solution looks interesting. How does it work?" },
        { role: "agent", text: "Thanks! We help agencies automate client interactions across all platforms." },
        { role: "lead", text: "What's the typical ROI?" },
        { role: "agent", text: "Our partners increase lead conversion by 40% on average. Can I show you a 15-min demo tomorrow? 📈" },
      ],
    },
    {
      name: "Slack Connect",
      icon: Slack,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      messages: [
        { role: "lead", text: "Team needs better lead tracking. Can your system integrate with HubSpot?" },
        { role: "agent", text: "Absolutely! We integrate with HubSpot, Salesforce, and 20+ other CRMs." },
        { role: "lead", text: "What about custom APIs?" },
        { role: "agent", text: "Yes, full API access is included. Our team can help with custom integrations. 🔧" },
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
        { role: "agent", text: "We support 50+ languages with native-level responses. Let's discuss your needs? 🌍" },
      ],
    },
  ],
};

const coreFeatures = {
  conversations: {
    icon: <Bot className="h-8 w-8" />,
    title: "AI-Powered Conversations",
    description: "Deploy AI agents that save 15+ hours a week by capturing, qualifying, and booking leads 24/7. Stop working nights and weekends chasing leads.",
    benefits: ["WhatsApp & SMS", "Website Chat", "Phone Calls"],
    visual: <PhoneCarousel />
  },
  analytics: {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Unified Analytics Dashboard",
    description: "Get a 360° view of your business and identify growth opportunities in minutes, not hours. Track every conversion and see your ROI skyrocket.",
    benefits: ["Live Activity Feeds", "Conversion Tracking", "ROI by Channel", "Performance Insights"],
    visual: (
      <>
        <div className="hidden sm:block">
          <AnalyticsDemo />
        </div>
        <div className="block sm:hidden">
          <AnalyticsDashboardDemo />
        </div>
      </>
    )
  },
  assistant: {
    icon: <BrainCircuit className="h-8 w-8" />,
    title: "Personal AI Business Assistant",
    description: "Make smarter decisions, faster. Get instant, data-driven answers about your business in plain English. Your data is now your competitive advantage.",
    benefits: ["Natural Language Queries", "Instant KPI Insights", "Performance Summaries", "Trend Analysis"],
    visual: <AssistantDemo />
  }
};

// --- SUB-COMPONENTS for Demos --- //

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const prefersReduced = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }

    let frameId: number;
    const duration = 1200; // ms
    const start = performance.now();

    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = value * eased;
      setDisplayValue(current);
      if (t < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [inView, prefersReduced, value]);

  return (
    <span ref={ref} aria-live="polite">
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}{suffix}
    </span>
  );
}

function PhoneCarousel() {
  const [currentPlatform, setCurrentPlatform] = React.useState(0);
  const [businessType, setBusinessType] = React.useState<BusinessType>("local");
  const [direction, setDirection] = React.useState(0);
  const prefersReduced = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const intervalRef = React.useRef<number | null>(null);

  const platforms = platformsData[businessType];

  const paginate = (newDirection: number) => {
    setCurrentPlatform(prev => prev + newDirection);
    setDirection(newDirection);
  };

  const platformIndex = ((currentPlatform % platforms.length) + platforms.length) % platforms.length;
  const currentPlatformData = platforms[platformIndex];
  const PlatformIcon = currentPlatformData.icon;

  // Autoplay with hover/visibility pause and reduced-motion support
  React.useEffect(() => {
    const clear = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!prefersReduced && !isHovered && document.visibilityState === 'visible') {
      intervalRef.current = window.setInterval(() => paginate(1), 7000);
    }

    const handleVisibility = () => {
      if (document.visibilityState !== 'visible') clear();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clear();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [prefersReduced, isHovered, businessType]);

  React.useEffect(() => {
    setCurrentPlatform(0);
  }, [businessType]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="mb-4 pt-0 sm:pt-12 flex justify-center">
        <div className="inline-flex rounded-lg bg-white/90 dark:bg-gray-800/60 shadow-sm border border-gray-600/30 dark:border-gray-600/30 relative overflow-hidden">
            <ShineBorder borderWidth={1.5} shineColor={["#0070F3", "#38bdf8"]} />
          <button
            onClick={() => setBusinessType("local")}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
              businessType === "local"
                ? "bg-white/90 text-gray-900 shadow-sm dark:bg-gray-800/60 dark:text-white dark:border dark:border-gray-600/30"
                : "text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white"
            )}
            aria-pressed={businessType === 'local'}
            aria-label="Show local business conversations"
          >
            <Store className="h-4 w-4" />
            Local Businesses
          </button>
          <button
            onClick={() => setBusinessType("agency")}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
              businessType === "agency"
                ? "bg-white/90 text-gray-900 shadow-sm dark:bg-gray-800/60 dark:text-white dark:border dark:border-gray-600/30"
                : "text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white"
            )}
            aria-pressed={businessType === 'agency'}
            aria-label="Show agency conversations"
          >
            <Building2 className="h-4 w-4" />
            Agencies
          </button>
        </div>
      </div>

      <div
        className="relative mx-auto h-[560px] sm:h-[600px] w-[280px] sm:w-[300px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${businessType} platform conversation carousel`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            paginate(-1);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            paginate(1);
          }
        }}
        ref={containerRef}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(e, info) => {
            const swipe = info.offset.x + info.velocity.x * 0.2;
            if (swipe > 120) paginate(-1);
            else if (swipe < -120) paginate(1);
          }}
          className="h-full w-full rounded-[3rem] border-8 border-gray-200/60 dark:border-gray-700/40 bg-background/40 backdrop-blur-lg p-2 shadow-2xl shadow-gray-900/20 dark:shadow-black/40 overflow-hidden ring-1 ring-black/5 dark:ring-white/5"
        >
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-900/90 backdrop-blur-sm">
          <div className={cn(
            "flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 transition-colors duration-500",
            currentPlatformData.bgColor
          )}>
            <div className="flex items-center gap-2">
              <div className={cn(
                "rounded-full p-2 text-white bg-gradient-to-br shadow-lg",
                currentPlatformData.color
              )}>
                <PlatformIcon className="h-5 w-5" />
              </div>
              <span className="font-semibold text-gray-800 dark:text-white">
                {currentPlatformData.name}
              </span>
            </div>
            <div className="flex items-center gap-1" role="tablist" aria-label="Conversation platforms">
              {platforms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > platformIndex ? 1 : -1);
                    setCurrentPlatform(prev => prev + (idx - platformIndex));
                  }}
                  className={cn(
                    "min-w-11 min-h-11 inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0070F3] dark:focus:ring-[#38bdf8] transition-all", 
                    idx === platformIndex ? "bg-gray-200/60 dark:bg-gray-800/60" : "bg-transparent hover:bg-gray-100/60 dark:hover:bg-gray-800/40"
                  )}
                  role="tab"
                  aria-selected={idx === platformIndex}
                  aria-current={idx === platformIndex ? 'true' : undefined}
                  aria-controls="carousel-panel"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full", 
                      idx === platformIndex ? "w-4 bg-gray-800 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
                    )}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
            <span className="sr-only" aria-live="polite">{`Showing ${currentPlatformData.name} conversation, slide ${platformIndex + 1} of ${platforms.length}`}</span>
          </div>

          <div className="relative h-[calc(100%-52px)] overflow-hidden bg-gray-50 dark:bg-gray-950">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={`${businessType}-${platformIndex}`}
                custom={direction}
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1, zIndex: 1 }}
                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0, zIndex: 0 }}
                transition={{ type: 'spring', stiffness: prefersReduced ? 150 : 260, damping: prefersReduced ? 26 : 32 }}
                className="absolute inset-0 flex flex-col justify-end gap-3 p-4"
                id="carousel-panel"
              >
                {currentPlatformData.messages.map((message, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: prefersReduced ? 0.2 : 0.35, delay: idx * 0.18 }}
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm",
                      message.role === "lead"
                        ? `ml-auto bg-gradient-to-br ${currentPlatformData.color} text-white shadow-lg`
                        : "mr-auto bg-gradient-to-r from-[#0070F3]/40 via-[#0070F3]/20 to-[#38bdf8]/40 text-gray-800 dark:from-[#0070F3]/30 dark:to-[#38bdf8]/30 dark:text-white border border-[#0070F3]/20 dark:border-[#38bdf8]/30"
                    )}
                  >
                    {message.text}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: currentPlatformData.messages.length * 0.18 + 0.25 }}
                  className="mr-auto mt-1 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0070F3]/10 to-[#38bdf8]/10 px-4 py-3 shadow-sm border border-[#0070F3]/20 dark:border-[#38bdf8]/20 dark:from-[#0070F3]/20 dark:to-[#38bdf8]/20"
                  >
                  <Bot className="h-4 w-4 text-[#0070F3] dark:text-[#38bdf8]" />
                  <span className="text-xs text-gray-700 dark:text-gray-300" aria-live="polite">AI Agent is typing...</span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0070F3] to-[#38bdf8]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: prefersReduced ? 1.2 : 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </motion.div>
        <ShineBorder
          className="rounded-[3rem]"
          borderWidth={2}
          shineColor={["#0ea5e9", "#3b82f6", "#06b6d4"]}
          duration={8}
        />
      </div>
      <button
        onClick={() => paginate(-1)}
        className="group absolute -left-1 top-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white/90 dark:bg-gray-800/60 shadow-sm border border-gray-600/30 dark:border-gray-600/30 p-3.5 min-w-11 min-h-11 hover:bg-white/70 dark:hover:bg-gray-800/60 transition-colors"
        aria-label="Previous conversation"
        aria-controls="carousel-panel"
      >
        <ShineBorder borderWidth={1} shineColor={["#0070F3","#38bdf8"]} />
        <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white group-hover:text-[#0070F3] group-active:text-[#0070F3] dark:group-hover:text-[#38bdf8] dark:group-active:text-[#38bdf8] relative transition-colors" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="group absolute -right-1 top-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white/90 dark:bg-gray-800/60 shadow-sm border border-gray-600/30 dark:border-gray-600/30 p-3.5 min-w-11 min-h-11 hover:bg-white/70 dark:hover:bg-gray-800/60 transition-colors"
        aria-label="Next conversation"
        aria-controls="carousel-panel"
      >
        <ShineBorder borderWidth={1} shineColor={["#0070F3","#38bdf8"]} />
        <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white group-hover:text-[#0070F3] group-active:text-[#0070F3] dark:group-hover:text-[#38bdf8] dark:group-active:text-[#38bdf8] relative transition-colors" />
      </button>
    </div>
  );
}

function AnalyticsDemo() {
  const initialActivities: Activity[] = [
    { id: 1, title: "Sarah Johnson", description: "Booked appointment", time: "2 min ago", platform: "Instagram", icon: Instagram, color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-500/10 via-red-500/10 to-yellow-500/10" },
    { id: 2, title: "Tech Wizards Inc", description: "Completed form", time: "5 min ago", platform: "Website", icon: Store, color: "from-blue-500 to-cyan-500", bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { id: 3, title: "Mike Chen", description: "Requested pricing info", time: "8 min ago", platform: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-700", bgColor: "bg-gradient-to-br from-blue-600/10 to-blue-700/10" },
    { id: 4, title: "Global Solutions", description: "Downloaded case study", time: "12 min ago", platform: "Email", icon: Mail, color: "from-gray-600 to-gray-700", bgColor: "bg-gradient-to-br from-gray-600/10 to-gray-700/10" }
  ];

  const newActivityTemplates: Activity[] = [
    { id: 5, title: "Emma Davis", description: "Started free trial", time: "just now", platform: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-700", bgColor: "bg-gradient-to-br from-blue-600/10 to-blue-700/10" },
    { id: 6, title: "Alex Thompson", description: "Scheduled demo call", time: "just now", platform: "WhatsApp", icon: MessageCircle, color: "from-green-500 to-emerald-500", bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10" },
    { id: 7, title: "Digital Pro Agency", description: "Upgraded to Pro plan", time: "just now", platform: "Slack", icon: Slack, color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10" },
    { id: 8, title: "Maria Garcia", description: "Submitted contact form", time: "just now", platform: "Website", icon: Store, color: "from-blue-500 to-cyan-500", bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { id: 9, title: "TechStart LLC", description: "Viewed pricing page", time: "just now", platform: "Instagram", icon: Instagram, color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-500/10 via-red-500/10 to-yellow-500/10" },
    { id: 10, title: "James Wilson", description: "Replied to message", time: "just now", platform: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-700", bgColor: "bg-gradient-to-br from-blue-600/10 to-blue-700/10" }
  ];

  const [activities, setActivities] = React.useState(initialActivities);
  const [nextId, setNextId] = React.useState(11);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const template = newActivityTemplates[Math.floor(Math.random() * newActivityTemplates.length)];
      const newActivity = {
        ...template,
        id: nextId,
        time: "just now"
      };

      setActivities(prev => {
        const updated = [newActivity, ...prev.slice(0, 3)];
        return updated.map((act, index) => ({
          ...act,
          time: index === 0 ? "just now" : 
                index === 1 ? "2 min ago" : 
                index === 2 ? "5 min ago" : 
                "8 min ago"
        }));
      });
      setNextId(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="bg-background/40 backdrop-blur-lg rounded-2xl h-full relative overflow-hidden">
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Live Activity Feed</h4>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500 dark:text-gray-400">Live</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {activities.map((activity, i) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, x: -50, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: 50, 
                    scale: 0.8,
                    transition: {
                      duration: 0.2
                    }
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#0070F3]/40 via-[#0070F3]/20 to-[#38bdf8]/40 dark:from-[#0070F3]/30 dark:to-[#38bdf8]/30 backdrop-blur-xl border border-[#0070F3]/20 dark:border-[#38bdf8]/30 shadow-lg shadow-black/10 dark:shadow-black/30 text-gray-800 dark:text-white cursor-pointer relative overflow-hidden group"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${activity.color.split(' ')[0].replace('from-', '')}, ${activity.color.split(' ')[1].replace('to-', '')})` }}>
                    <IconComponent className="h-4 w-4" style={{
                      color: activity.platform === "Instagram" ? "#E1306C" :
                             activity.platform === "Facebook" ? "#1877F2" :
                             activity.platform === "LinkedIn" ? "#0A66C2" :
                             activity.platform === "WhatsApp" ? "#25D366" :
                             activity.platform === "Email" ? "#EA4335" :
                             activity.platform === "Slack" ? "#4A154B" :
                             activity.platform === "Website" ? "#0070f3" : "white"
                    }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{activity.description} via {activity.platform}</p>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {activity.time}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="relative overflow-hidden cursor-pointer hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200 active:scale-[0.98] bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-gray-700/50">
            <ShineBorder borderWidth={1} shineColor={["#0070F3", "#38bdf8"]} />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Today's Leads</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white"><AnimatedCounter value={350} /></p>
          </div>
          <div className="relative overflow-hidden cursor-pointer hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200 active:scale-[0.98] bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-gray-700/50">
            <ShineBorder borderWidth={1} shineColor={["#0070F3", "#38bdf8"]} />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Leads Converted</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white"><AnimatedCounter value={95} suffix="%" /></p>
          </div>
          <div className="relative overflow-hidden cursor-pointer hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200 active:scale-[0.98] bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 border border-white/20 dark:border-gray-700/50">
            <ShineBorder borderWidth={1} shineColor={["#0070F3", "#38bdf8"]} />
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Response Time</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white"><AnimatedCounter value={2} suffix="s" /></p>
          </div>
        </div>

        <div className="hidden">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Lead Source Breakdown</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="w-24 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Instagram</span>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex-1 relative overflow-hidden">
                <motion.div 
                  initial={{width: 0}} 
                  animate={{width: '45%'}}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-red-500 rounded-full shadow-sm relative"
                />
              </div>
              <motion.span 
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[3rem] text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                45%
              </motion.span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="w-24 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Website</span>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex-1 relative overflow-hidden">
                <motion.div 
                  initial={{width: 0}} 
                  animate={{width: '30%'}}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-blue-500 rounded-full shadow-sm relative"
                />
              </div>
              <motion.span 
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[3rem] text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                30%
              </motion.span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="w-24 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Facebook</span>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex-1 relative overflow-hidden">
                <motion.div 
                  initial={{width: 0}} 
                  animate={{width: '25%'}}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-sky-500 rounded-full shadow-sm relative"
                />
              </div>
              <motion.span 
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-[3rem] text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
              >
                25%
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssistantDemo() {
  // Two separate conversation scripts
  const conversations: {delay:number; role:'user'|'ai'; text:string}[][] = [
    [
      { delay: 0.5, role: 'user', text: 'How many appointments did we book this week from Instagram?' },
      { delay: 2.5, role: 'ai', text: "You booked <strong class='font-bold text-blue-600 dark:text-blue-400'>42 appointments</strong> from Instagram this week. That's a <strong class='text-green-600 dark:text-green-400'>23% increase</strong> from last week!" },
      { delay: 4.5, role: 'user', text: 'What time slots are most popular?' },
      { delay: 6.5, role: 'ai', text: "Peak times: <strong class='text-orange-600 dark:text-orange-400'>Morning 35%</strong>, <strong class='text-purple-600 dark:text-purple-400'>Evening 37%</strong>" }
    ],
    [
      { delay: 0.5, role: 'user', text: 'Generate a quick performance summary for last month.' },
      { delay: 2.5, role: 'ai', text: "Last month: <strong class='font-bold text-blue-600 dark:text-blue-400'>312 clients</strong>, up <strong class='text-green-600 dark:text-green-400'>18%</strong>. Revenue: <strong class='font-bold'>$48,230</strong>" },
      { delay: 4.5, role: 'user', text: 'Which service had the highest growth?' },
      { delay: 6.5, role: 'ai', text: "<strong>Brow Shaping</strong> grew <strong class='text-green-600 dark:text-green-400'>34%</strong> MoM, bringing in $7,200." }
    ],
    [
      { delay: 0.5, role: 'user', text: 'Show me today\'s lead conversion rates.' },
      { delay: 2.5, role: 'ai', text: "Today: <strong class='text-green-600 dark:text-green-400'>73% conversion</strong> from <strong class='font-bold text-blue-600 dark:text-blue-400'>89 leads</strong>. Instagram leads converting at <strong class='text-green-600 dark:text-green-400'>81%</strong>!" },
      { delay: 4.5, role: 'user', text: 'Any follow-ups needed?' },
      { delay: 6.5, role: 'ai', text: "<strong>12 leads</strong> need follow-up calls. <strong>Sarah M.</strong> and <strong>Mike T.</strong> are high-priority prospects." }
    ]
  ];

  const [convIndex, setConvIndex] = React.useState(0);
  const [messages, setMessages] = React.useState<{id:number;role:'user'|'ai';text:string}[]>([]);
  const visibleMessages = messages.slice(-4);
  const [showTyping, setShowTyping] = React.useState(false);

  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    setMessages([]);
    setShowTyping(false);

    const script = conversations[convIndex];
    script.forEach((step, idx) => {
      timers.push(setTimeout(() => {
        if (step.role === 'user') {
          setMessages(prev => [...prev, { id: Date.now() + idx, role: 'user', text: step.text }]);
          if (idx < script.length - 1 && script[idx + 1].role === 'ai') {
            setShowTyping(true);
          }
        } else {
          setShowTyping(false);
          setMessages(prev => [...prev, { id: Date.now() + idx, role: 'ai', text: step.text }]);
        }
      }, step.delay * 1000));
    });

    // switch to next conversation after last delay + 4s buffer
    const lastDelay = script[script.length - 1].delay;
    timers.push(setTimeout(() => setConvIndex((prev) => (prev + 1) % conversations.length), (lastDelay + 3) * 1000));

    return () => timers.forEach(clearTimeout);
  }, [convIndex]);

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 rounded-lg bg-gradient-to-r from-[#0070F3]/10 to-[#38bdf8]/10 border border-[#0070F3]/20 dark:border-[#38bdf8]/20 dark:from-[#0070F3]/20 dark:to-[#38bdf8]/20"
    >
      <div className="flex items-center gap-2 mb-2">
        <Bot className="h-4 w-4 text-[#0070F3] dark:text-[#38bdf8]" />
        <span className="text-xs text-gray-700 dark:text-gray-300">AI is thinking...</span>
        <div className="flex gap-1">
          {[0,0.1,0.2].map((d,i)=>(
            <motion.div key={i} animate={{ y: [0, -5, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: d }} className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0070F3] to-[#38bdf8]" />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-background/40 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/30 h-full relative overflow-hidden">
      <ShineBorder
        className="absolute inset-0"
        shineColor={["#0070F3", "#38bdf8"]}
        borderWidth={2}
      />
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <BrainCircuit className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">AI Business Assistant</h4>
        </div>

        <div className="flex flex-col justify-end space-y-4 h-[420px] overflow-hidden">
          <AnimatePresence>
            {visibleMessages.map((message) => (
              <motion.div layout key={message.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
                {message.role === 'user' ? (
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-1 font-medium">Your question</p>
                    <p className="text-gray-900 dark:text-white text-sm">{message.text}</p>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#0070F3]/10 to-[#38bdf8]/10 border border-[#0070F3]/20 dark:border-[#38bdf8]/20 dark:from-[#0070F3]/20 dark:to-[#38bdf8]/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <p className="text-blue-700 dark:text-blue-300 text-xs font-medium">AI Response</p>
                    </div>
                    <p className="text-gray-900 dark:text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: message.text }} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          <AnimatePresence>{showTyping && <TypingIndicator />}</AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156,163,175,0.3); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156,163,175,0.5); }
      `}</style>
    </div>
  );
}


// --- MAIN COMPONENTS --- //

const FeatureShowcase = ({ title, description, benefits, visual, align = 'left' }: {
    title: string;
    description: string;
    benefits: string[];
    visual: React.ReactNode;
    align?: 'left' | 'right';
}) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-5 items-center gap-8 md:gap-8", align === 'right' ? "md:grid-flow-col-dense" : "")}>
    <motion.div 
      initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-2 md:col-span-3"
    >
      <h3 className={cn(
        "text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4",
        (title === 'Unified Analytics Dashboard' || title === 'Personal AI Business Assistant') && 'pt-12 sm:pt-0'
      )}>{title}</h3>
      <p className={cn(
        "text-lg text-gray-600 dark:text-gray-400",
        (title === 'Unified Analytics Dashboard' || title === 'Personal AI Business Assistant') ? 'mb-0 sm:mb-6' : 'mb-6'
      )}>
        {description.includes('intelligent agents') ? (
          <>
            Deploy <span className="bg-gradient-to-r from-[#0070F3] to-[#38bdf8] bg-clip-text text-transparent font-semibold">intelligent agents</span> that capture, qualify, and book leads <span className="bg-gradient-to-r from-[#13ADC7] to-[#89E1FF] bg-clip-text text-transparent font-semibold">24/7</span> across any channel. Never miss an opportunity again.
          </>
        ) : (
          description
        )}
      </p>
      {title === 'AI-Powered Conversations' ? (
        <>
        {/* extra feature pills */}
        <div className="hidden sm:flex flex-wrap justify-center md:justify-start gap-3 mb-4">
          {[
            { icon: <Zap className="h-4 w-4 text-yellow-500" />, label: 'Speed to Lead' },
            { icon: <Instagram className="h-4 w-4 text-[#F56040]" />, label: 'Instagram & Facebook DMs' },
            { icon: <BarChart3 className="h-4 w-4 text-blue-500" />, label: 'Smart Dashboard' },
          ].map(({icon,label},idx)=>(
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300"
            >
              {icon}
              {label}
            </motion.span>
          ))}
        </div>
        {/* platform pills */}
        <div className="hidden sm:flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          {benefits.map((benefit, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300"
            >
              {(() => {
                const iconMap: Record<string, React.ReactNode> = {
                  'Instagram & Facebook DMs': <Instagram className="h-4 w-4 text-[#F56040]" />,
                  'WhatsApp & SMS': <MessageCircle className="h-4 w-4 text-green-500" />,
                  'Website Chat': <MessageSquare className="h-4 w-4 text-indigo-500" />,
                  'Phone Calls': <Phone className="h-4 w-4 text-emerald-500" />,
                };
                return (
                  <>
                    {iconMap[benefit] ?? <CheckCircle2 className="h-4 w-4" />} {benefit}
                  </>
                );
              })()}
            </motion.span>
          ))}
        </div>
        
        {/* Mobile-only booking demo */}
        <div className="block sm:hidden mt-2">
          <AutomatedBookingDemo />
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600 dark:text-gray-400">
              <Bot className="h-4 w-4 text-blue-500" />
              <span>Why Choose Chanlytics?</span>
            </div>
            <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 mb-8">
              Automate everything, never miss a lead, and scale your business 24/7 with AI-powered conversations.
            </p>
          </div>
        </div>
        
      </> 
       ) : (
        <>
          {/* Desktop pills for Analytics */}
          {title === 'Unified Analytics Dashboard' ? (
        <>
          <div className="hidden sm:flex flex-wrap gap-3 mb-6">
            {benefits.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {b}
              </motion.span>
            ))}
          </div>
          {/* Mobile comparison for Analytics */}
          <div className="block sm:hidden">

          </div>
        </>
          ) : title === 'Personal AI Business Assistant' ? (
            <> 
              {/* Desktop pills for Assistant */}
              <div className="hidden sm:flex flex-wrap gap-3 mb-6">
                {benefits.map((b, i) => (
                  <motion.span
                    key={b}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {b}
                  </motion.span>
                ))}
              </div>
               {/* Mobile comparison for Assistant */}
               <div className="block sm:hidden mt-6">
                 <div className="relative h-[600px] w-full max-w-lg mx-auto bg-background/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-gray-200/60 dark:border-gray-700/40">
                   <img
                     src="/fitness-coach-assistant.png"
                     alt="AI insights comparison"
                     className="w-full h-full object-cover object-[19%_center]"
                   />
                 </div>
               </div>
            </>
          ) : (
            <ul className="space-y-3 sm:hidden">
        {benefits.map((benefit, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <div className="p-1.5 rounded-full bg-gradient-to-r from-[#0070F3] to-[#38bdf8] shadow-md">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 dark:text-gray-200 font-medium">{(() => {
                const iconMap: Record<string, React.ReactNode> = {
                  'Instagram & Facebook DMs': <Instagram className="h-4 w-4 text-[#F56040]" />,
                  'WhatsApp & SMS': <MessageCircle className="h-4 w-4 text-green-500" />,
                  'Website Chat': <MessageSquare className="h-4 w-4 text-indigo-500" />,
                  'Phone Calls': <Phone className="h-4 w-4 text-emerald-500" />,
                };
                return (
                  <>
                    {iconMap[benefit] ?? <CheckCircle2 className="h-4 w-4" />} {benefit}
                  </>
                );
              })()}</span>
          </motion.li>
        ))}
            </ul>
          )}
        </>
      )}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn("md:col-span-2", align === 'right' && 'md:col-start-1')}
    >
      {visual}
    </motion.div>
  </div>
);


export default function InteractiveShowcase() {
  return (
    <section id="features" className="overflow-x-hidden bg-white dark:bg-background pb-16 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="pt-6 space-y-10 lg:space-y-28">
          <FeatureShowcase 
            title={coreFeatures.conversations.title}
            description={coreFeatures.conversations.description}
            benefits={coreFeatures.conversations.benefits}
            visual={coreFeatures.conversations.visual}
            align="left"
          />
          <div className="hidden sm:block mt-16 sm:mt-6"><FeatureShowcase 
            title="Run On Autopilot, Across Every Channel"
            description="Chanlytics connects to your tools and handles lead conversations end‑to‑end—DMs, SMS, email, WhatsApp, and calls. It qualifies, schedules, syncs calendars, and follows up—while you track everything and ask questions on the go."
            benefits={[
              "Integrates with your stack",
              "Multi‑channel conversations",
              "Qualifies and books for you",
              "Live analytics in your pocket"
            ]}
            visual={<AutomatedBookingDemo />}
            align="right"
          /></div>
          <div className="sm:mt-6"><FeatureShowcase 
            title={coreFeatures.analytics.title}
            description={coreFeatures.analytics.description}
            benefits={coreFeatures.analytics.benefits}
            visual={coreFeatures.analytics.visual}
            align="left"
          /></div>
          <div className="-mt-2 sm:mt-0"><FeatureShowcase 
            title={coreFeatures.assistant.title}
            description={coreFeatures.assistant.description}
            benefits={coreFeatures.assistant.benefits}
            visual={coreFeatures.assistant.visual}
            align="right"
          /></div>
        </div>
      </div>

    </section>
  );
}