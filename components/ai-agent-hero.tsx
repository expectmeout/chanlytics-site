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
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AiAgentHero() {
  const features = [
    { icon: <Zap className="h-4 w-4" />, label: "Instant Response" },
    { icon: <Shield className="h-4 w-4" />, label: "24/7 Available" },
    { icon: <BarChart3 className="h-4 w-4" />, label: "Smart Analytics" },
    { icon: <Sparkles className="h-4 w-4" />, label: "AI Powered" },
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
  
  const platforms = [
    {
      name: "Instagram DM",
      icon: Instagram,
      color: "from-[#2B7FFE] to-blue-500",
      bgColor: "bg-gradient-to-br from-[#2B7FFE]/10 to-blue-500/10",
      messages: [
        { role: "lead", text: "Hey! Saw your ad, any openings this week?" },
        { role: "agent", text: "Hi! Yes, I have several slots. Which service?" },
        { role: "lead", text: "Premium package looks great!" },
        { role: "agent", text: "Perfect! Tomorrow 2PM or Thursday 10AM?" },
      ],
    },
    {
      name: "WhatsApp Business",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      messages: [
        { role: "lead", text: "Help with lead management?" },
        { role: "agent", text: "Our AI system handles that 24/7!" },
        { role: "lead", text: "How does it work?" },
        { role: "agent", text: "Responds automatically, books meetings, follows up 🚀" },
      ],
    },
    {
      name: "Facebook Messenger",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
      messages: [
        { role: "lead", text: "Good for dental practices?" },
        { role: "agent", text: "Perfect fit! Handles bookings and reminders." },
        { role: "lead", text: "How fast to set up?" },
        { role: "agent", text: "Within 48 hours! When's good for a demo? 🦷" },
      ],
    },
  ];

  const nextPlatform = () => {
    setCurrentPlatform((prev) => (prev + 1) % platforms.length);
  };

  const prevPlatform = () => {
    setCurrentPlatform((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextPlatform, 8000); // Auto-advance every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const currentPlatformData = platforms[currentPlatform];
  const PlatformIcon = currentPlatformData.icon;

  return (
    <div className="relative">
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
              {platforms.map((_, idx) => (
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
          <div className="flex h-[calc(100%-92px)] flex-col-reverse justify-start bg-zinc-50 p-4 dark:bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlatform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                {currentPlatformData.messages.map((message, idx) => (
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
                    {[0, 1, 2].map((i) => (
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