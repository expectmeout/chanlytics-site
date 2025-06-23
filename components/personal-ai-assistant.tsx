import React, { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AvatarCircles } from '@/components/magicui/avatar-circles';
import { LeadToCustomerFlow } from '@/components/leads-to-customer-flow';
import { cn } from '@/lib/utils';
import {
  TrendingUp,
  BarChart3,
  DollarSign,
  Users,
  Zap,
  Shield,
  Smartphone,
  Headphones,
  GitBranch,
  Bot,
  Activity,
  CreditCard,
  Calendar,
  MessageSquare,
  Phone,
  Instagram,
  Facebook,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  Play,
  Target,
  Star,
  Mic,
  FileText
} from 'lucide-react';
import { LogoIcon } from './logo';

// Unified Platform Response Component
function UnifiedPlatformResponse() {
  const [activeResponse, setActiveResponse] = useState(0);
  const [showingResponse, setShowingResponse] = useState(false);
  
  const platforms = [
    { 
      Icon: Instagram, 
      name: 'Instagram',
      position: { top: '10%', left: '15%' },
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      query: "Hi! Are you available for a consultation?",
      response: "Hello! Yes, I have several slots available this week. What service are you interested in?"
    },
    { 
      Icon: MessageSquare, 
      name: 'WhatsApp',
      position: { top: '10%', right: '15%' },
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      query: "I need help with lead management",
      response: "I'd be happy to help! Our AI system can automatically respond to leads 24/7. Shall I book you a demo?"
    },
    { 
      Icon: Phone, 
      name: 'Phone',
      position: { bottom: '15%', left: '10%' },
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      query: "Calling about your services...",
      response: "Thanks for calling! I can help you schedule an appointment right now. What day works best?"
    },
    { 
      Icon: Facebook, 
      name: 'Facebook',
      position: { bottom: '15%', right: '10%' },
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-600',
      query: "Just saw your ad, tell me more!",
      response: "Great to hear from you! We help businesses never miss a lead. I can show you how it works - are you free tomorrow?"
    },
  ];
  
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setActiveResponse((prev) => {
        const next = (prev + 1) % platforms.length;
        setShowingResponse(true);
        setTimeout(() => setShowingResponse(false), 3000);
        return next;
      });
    }, 4000);
    
    return () => clearInterval(cycleInterval);
  }, []);
  
  const activePlatform = platforms[activeResponse];
  
  return (
    <div className="relative h-80">
      {/* Central AI Hub with Chanlytics Logo */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: showingResponse ? [1, 1.05, 1] : 1
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.5 }
          }}
          className="relative h-24 w-24"
        >
          {/* Glowing background */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-green-500 opacity-20 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-green-500 opacity-30" />
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white dark:bg-black">
            <LogoIcon className="h-10 w-10" />
          </div>
          
          {/* Pulse effect when active */}
          <AnimatePresence>
            {showingResponse && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gray-900 dark:bg-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Response time indicator */}
        <motion.div
          animate={{ 
            opacity: showingResponse ? [0, 1, 1, 0] : 0,
            y: showingResponse ? [10, 0, 0, -10] : 0
          }}
          transition={{ duration: 3, times: [0, 0.1, 0.9, 1] }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gray-100 dark:bg-black px-3 py-1"
        >
          <span className="text-xs font-medium text-green-600 dark:text-green-400">AI Responding</span>
        </motion.div>
      </motion.div>
      
      {/* Platform Icons with smoother interactions */}
      {platforms.map(({ Icon, name, position, color, bgColor }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            delay: idx * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="absolute"
          style={position}
        >
          <motion.div 
            className="relative"
            animate={{
              y: activeResponse === idx ? [-2, 2, -2] : 0
            }}
            transition={{
              duration: 2,
              repeat: activeResponse === idx ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 dark:bg-zinc-800 transition-all duration-300",
                activeResponse === idx && `bg-gradient-to-br ${color}`
              )}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className={cn(
                "h-6 w-6 transition-colors duration-300",
                activeResponse === idx ? "text-white" : "text-gray-600 dark:text-zinc-400"
              )} />
            </motion.div>
            
            {/* Platform label */}
            <span className={cn(
              "absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs transition-all duration-300",
              activeResponse === idx ? "text-gray-900 dark:text-white font-medium" : "text-gray-500 dark:text-zinc-500"
            )}>
              {name}
            </span>
            
            {/* Active pulse - smoother */}
            {activeResponse === idx && (
              <>
                <motion.div
                  className={cn("absolute inset-0 rounded-xl", bgColor)}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <motion.div
                  className={cn("absolute inset-0 rounded-xl", bgColor)}
                  initial={{ scale: 1, opacity: 0.3 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </>
            )}
          </motion.div> 
        </motion.div>
      ))}
      
      {/* Smooth Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2BC8B7" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {platforms.map((_, idx) => (
          <motion.line
            key={idx}
            x1="50%"
            y1="50%"
            x2={idx % 2 === 0 ? '20%' : '80%'}
            y2={idx < 2 ? '20%' : '80%'}
            stroke={activeResponse === idx ? "url(#lineGradient)" : "currentColor"}
            strokeWidth={activeResponse === idx ? "2" : "1"}
            strokeDasharray={activeResponse === idx ? "0" : "5,5"}
            className={activeResponse === idx ? "" : "text-gray-300 dark:text-zinc-700"}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: activeResponse === idx ? 1 : 0.3
            }}
            transition={{ 
              pathLength: { duration: 1, delay: idx * 0.2 },
              opacity: { duration: 0.3 }
            }}
          />
        ))}
      </svg>
      
      {/* Conversation Display with updated colors */}
      <AnimatePresence mode="wait">
        {showingResponse && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-0 left-0 right-0 rounded-lg bg-white/90 dark:bg-zinc-900/90 p-4 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <activePlatform.Icon className="h-4 w-4 text-gray-600 dark:text-zinc-400" />
                <span className="text-xs font-medium text-gray-600 dark:text-zinc-400">{activePlatform.name} Message</span>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-[70%] rounded-lg bg-gray-100 dark:bg-zinc-800 px-3 py-2"
                >
                  <p className="text-sm text-gray-700 dark:text-zinc-300">{activePlatform.query}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="ml-auto max-w-[70%] rounded-lg bg-[#2975E8] px-3 py-2"
                >
                  <p className="text-sm text-white">{activePlatform.response}</p>
                  <span className="mt-1 flex items-center gap-1 text-xs text-white/70">
                    <LogoIcon className="h-3 w-3" />
                    AI Agent • 1.2s response time
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function FeaturesShowcase() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gradient-to-b dark:from-[#09090B] dark:to-[#09090C] pt-[0px] pb-24">
      {/* Subtle gradient background */}

      
      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 mt-16 text-balance text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Built for Growth, Designed for{' '}
            <span className="text-gray-900 dark:text-white">
              Success
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-zinc-400">
            Experience the power of AI-driven automation with features that transform 
            how you manage leads, track performance, and grow your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
  className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black p-8 transition-all hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800/50"
>
  <div className="absolute right-0 top-0 h-32 w-32 bg-green-500/10 blur-3xl" />
  <div className="relative">
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Real-time Activity Feed
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
          Live notifications from your AI agents
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2">
          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="text-xs font-medium text-green-600 dark:text-green-400">Live</span>
      </div>
    </div>
    
    <AnimatedNotificationsList />
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="group relative col-span-full overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black p-8 transition-all hover:border-gray-300 dark:hover:border-zinc-700 lg:col-span-2"
>
  <div className="absolute right-0 top-0 h-48 w-48 bg-gradient-to-br from-blue-500/10 via-blue-500/10 to-green-500/10 blur-3xl" />
  <div className="relative">
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          AI Response System Across All Platforms
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
          Instant AI-powered responses on every channel, booking appointments 24/7
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        <span className="text-xs font-medium text-green-600 dark:text-green-400">Active</span>
      </div>
    </div>
    
    <UnifiedPlatformResponse />
    
    {/* Response Metrics */}
    <div className="mt-6 grid grid-cols-4 gap-3">
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
        <p className="text-xs text-gray-600 dark:text-zinc-400">Avg Response</p>
        <p className="text-lg font-bold text-gray-900 dark:text-white">&lt;2s</p>
      </div>
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
        <p className="text-xs text-gray-600 dark:text-zinc-400">Booking Rate</p>
        <p className="text-lg font-bold text-gray-900 dark:text-white">89%</p>
      </div>
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
        <p className="text-xs text-gray-600 dark:text-zinc-400">Active Convos</p>
        <p className="text-lg font-bold text-gray-900 dark:text-white">147</p>
      </div>
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
        <p className="text-xs text-gray-600 dark:text-zinc-400">Satisfaction</p>
        <p className="text-lg font-bold text-gray-900 dark:text-white">98%</p>
      </div>
    </div>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="group relative col-span-full overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black p-8 transition-all hover:border-gray-300 dark:hover:border-zinc-700 lg:col-span-2"
>
  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-blue-500/10 to-blue-500/10 blur-3xl" />
  <div className="relative">
    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
      Intelligent Lead-to-Customer Journey
    </h3>
    <p className="mb-6 text-sm text-gray-600 dark:text-zinc-400">
      AI orchestrates the complete journey from first contact to loyal customer, automating every touchpoint.
    </p>
    
    <LeadToCustomerFlow />
    
    <div className="mt-6 grid grid-cols-3 gap-4">
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-4">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">3.2x</p>
        <p className="text-xs text-gray-600 dark:text-zinc-500">Lead Conversion</p>
      </div>
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-4">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">89%</p>
        <p className="text-xs text-gray-600 dark:text-zinc-500">Show Up Rate</p>
      </div>
      <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-4">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">4.9★</p>
        <p className="text-xs text-gray-600 dark:text-zinc-500">Customer Rating</p>
      </div>
    </div>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6 }}
  className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black p-8 transition-all hover:border-gray-300 dark:hover:border-zinc-700"
>
  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-blue-500/10 to-blue-500/10 blur-3xl" />
  <div className="relative">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        24/7 AI Business Assistant
      </h3>
      <span className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        Online
      </span>
    </div>
    <p className="mb-6 text-sm text-gray-600 dark:text-zinc-400">
      Ask anything about your business - type or speak, get instant insights.
    </p>
    
    <AIChatInterface />
  </div>
</motion.div>



        </div>
      </div>
    </section>
  );
}

// Animated Notifications List Component
interface NotificationItem {
  id: string;
  client: string;
  type: string;
  status: string;
  description: string;
  time: string;
  icon: React.ReactNode; // Or JSX.Element
  color: string;
}

function AnimatedNotificationsList() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  
  // Generate sample notifications
  useEffect(() => {
    const sampleNotifications: NotificationItem[] = [
      {
        id: '1',
        client: 'Sarah Johnson',
        type: 'form',
        status: 'completed',
        description: 'Completed intake form',
        time: '2 min ago',
        icon: <FileText className="h-4 w-4" />,
        color: '#10b981',
      },
      {
        id: '2',
        client: 'Tech Wizards Inc',
        type: 'invoice',
        status: 'paid',
        description: 'Paid invoice #INV-2024-078',
        time: '5 min ago',
        icon: <CreditCard className="h-4 w-4" />,
        color: '#3b82f6',
      },
      {
        id: '3',
        client: 'Mike Chen',
        type: 'appointment',
        status: 'booked',
        description: 'Booked consultation for tomorrow',
        time: '8 min ago',
        icon: <Calendar className="h-4 w-4" />,
        color: '#8b5cf6',
      },
      {
        id: '4',
        client: 'Global Solutions',
        type: 'message',
        status: 'responded',
        description: 'AI responded to inquiry',
        time: '12 min ago',
        icon: <MessageSquare className="h-4 w-4" />,
        color: '#f59e0b',
      },
      {
        id: '5',
        client: 'Alice Thompson',
        type: 'review',
        status: 'received',
        description: 'Left 5-star review',
        time: '15 min ago',
        icon: <Star className="h-4 w-4" />,
        color: '#facc15',
      },
    ];
    
    // Duplicate for continuous scroll effect
    setNotifications([...sampleNotifications, ...sampleNotifications, ...sampleNotifications]);
  }, []);
  
  return (
    <div className="relative h-[410px] overflow-hidden rounded-lg bg-gray-50 dark:bg-zinc-900/50">
      {/* Animated scrolling container */}
      <motion.div
        animate={{ y: [0, -50] }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          },
        }}
        className="space-y-2 py-2"
      >
        {notifications.map((notification, idx) => (
          <motion.div
            key={`${notification.id}-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group mx-2 cursor-pointer overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-3 backdrop-blur-sm transition-all hover:border-gray-300 dark:hover:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800/50"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${notification.color}20` }}
              >
                <div style={{ color: notification.color }}>
                  {notification.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {notification.client}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-zinc-500">{notification.time}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-zinc-400">{notification.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient overlay at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-black to-transparent" />
      
      {/* Stats footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 p-4 backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
            <p className="text-xs text-gray-600 dark:text-zinc-400">Today</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">127</p>
          </div>
          <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
            <p className="text-xs text-gray-600 dark:text-zinc-400">This Week</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">1.2k</p>
          </div>
          <div className="rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3">
            <p className="text-xs text-gray-600 dark:text-zinc-400">Response Rate</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">98%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// AI Chat Interface Component
function AIChatInterface() {
  const [messages, setMessages] = useState([
    { type: 'user', content: 'How many appointments did we book this week?', format: 'text' },
    { type: 'ai', content: 'You booked 42 appointments this week - a 23% increase from last week!', format: 'text' },
    { type: 'user', content: 'voice', format: 'voice', duration: '0:03' },
    { type: 'ai', content: 'Ashley Johnson paid invoice #INV-078 yesterday for $2,400. All current invoices are up to date!', format: 'text' },
  ]);
  const [inputMode, setInputMode] = useState('text');
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800">
      {/* Chat Messages */}
      <div className="h-64 space-y-3 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "flex",
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {msg.format === 'text' ? (
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-3 py-1.5 text-xs",
                  msg.type === 'user'
                    ? "bg-[#2975E8] text-white"
                    : "bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100"
                )}
              >
                {msg.content}
              </div>
            ) : (
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-1.5",
                  msg.type === 'user'
                    ? "bg-[#2975E8]"
                    : "bg-gray-200 dark:bg-zinc-800"
                )}
              >
                <Play className="h-4 w-4 text-white dark:text-white" />
                <div className="flex h-6 items-center gap-0.5">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 rounded-full bg-white/70"
                      animate={{ height: [3, Math.random() * 20 + 5, 3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-white/70">{msg.duration}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-zinc-800 p-4">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setInputMode(inputMode === 'text' ? 'voice' : 'text')}
            className={cn(
              "rounded-full p-2.5 transition-all",
              inputMode === 'voice'
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
            )}
          >
            {inputMode === 'text' ? <Mic className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
          </motion.button>
          
          {inputMode === 'text' ? (
            <input
              type="text"
              placeholder="Ask about your business..."
              className="flex-1 rounded-lg bg-gray-200 dark:bg-zinc-800 px-3 py-1.5 text-xs text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          ) : (
            <motion.div
              animate={isRecording ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
              className="flex flex-1 items-center justify-center rounded-lg bg-gray-200 dark:bg-zinc-800 py-1.5"
            >
              <span className="text-sm text-gray-600 dark:text-zinc-400">
                {isRecording ? "Recording... tap to stop" : "Tap to record voice note"}
              </span>
            </motion.div>
          )}
        </div>
        
        <p className="mt-2 text-center text-xs text-gray-600 dark:text-zinc-500">
          Powered by Chanlytics AI • Instant business insights
        </p>
      </div>
    </div>
  );
}
// Revenue Chart Component
function RevenueChart() {
  const data = [45, 52, 48, 65, 72, 58, 85, 92, 88, 95, 102, 127];
  const max = Math.max(...data);
  
  return (
    <div className="relative h-32">
      <svg className="h-full w-full" viewBox="0 0 300 100">
        <defs>
          <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#10b981" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 25, 50, 75].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="300"
            y2={y}
            stroke="currentColor"
            className="text-gray-200 dark:text-zinc-800"
            strokeWidth="1"
          />
        ))}
        
        {/* Chart path */}
        <motion.path
          d={`M 0,${100 - (data[0] / max) * 100} ${data
            .map((value, i) => `L ${(i / (data.length - 1)) * 300},${100 - (value / max) * 100}`)
            .join(' ')} L 300,100 L 0,100 Z`}
          fill="url(#revenueGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Chart line */}
        <motion.path
          d={`M 0,${100 - (data[0] / max) * 100} ${data
            .map((value, i) => `L ${(i / (data.length - 1)) * 300},${100 - (value / max) * 100}`)
            .join(' ')}`}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Data points */}
        {data.map((value, i) => (
          <motion.circle
            key={i}
            cx={(i / (data.length - 1)) * 300}
            cy={100 - (value / max) * 100}
            r="3"
            fill="#10b981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}

// Response Metrics Component
function ResponseMetrics() {
  const [activeMetric, setActiveMetric] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  const metrics = [
    { label: 'Instagram', value: 98, color: 'from-blue-500 to-cyan-500' },
    { label: 'WhatsApp', value: 95, color: 'from-green-500 to-emerald-500' },
    { label: 'Phone', value: 92, color: 'from-blue-500 to-cyan-500' },
    { label: 'Email', value: 88, color: 'from-orange-500 to-amber-500' },
  ];
  
  return (
    <div className="space-y-3">
      {metrics.map((metric, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-zinc-400">{metric.label}</span>
            <span className="font-medium text-gray-900 dark:text-white">{metric.value}%</span>
          </div>
          <div className="relative h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-zinc-800">
            <motion.div
              className={cn("absolute inset-y-0 left-0 rounded-full bg-gray-300 dark:bg-zinc-800")}
              initial={{ width: 0 }}
              animate={{ width: activeMetric === idx ? `${metric.value}%` : '0%' }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Platform Integration Visual
function PlatformIntegration() {
  const platforms = [
    { Icon: Instagram, position: { top: '10%', left: '20%' } },
    { Icon: MessageSquare, position: { top: '10%', right: '20%' } },
    { Icon: Phone, position: { bottom: '20%', left: '10%' } },
    { Icon: Facebook, position: { bottom: '20%', right: '10%' } },
  ];
  
  return (
    <div className="relative h-40">
      {/* Central Hub */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 opacity-20" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 opacity-40" />
        <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white dark:bg-black">
          <Bot className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
      </motion.div>
      
      {/* Platform Icons */}
      {platforms.map(({ Icon, position }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.2 }}
          className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800"
          style={position}
        >
          <Icon className="h-5 w-5 text-gray-600 dark:text-zinc-400" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-500"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
          />
        </motion.div>
      ))}
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">
        {platforms.map((_, idx) => (
          <motion.line
            key={idx}
            x1="50%"
            y1="50%"
            x2={idx % 2 === 0 ? '20%' : '80%'}
            y2={idx < 2 ? '20%' : '80%'}
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            strokeOpacity={0.3}
          />
        ))}
      </svg>
    </div>
  );
}

// Lead Flow Visualization
function LeadFlow() {
  const stages = ['New Lead', 'Qualified', 'Engaged', 'Converted'];
  const [activeStage, setActiveStage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center justify-between">
      {stages.map((stage, idx) => (
        <Fragment key={idx}>
          <div className="flex flex-col items-center">
            <motion.div
              className={cn(
                "mb-2 flex h-10 w-10 items-center justify-center rounded-full transition-all",
                activeStage >= idx
                  ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-500 dark:text-zinc-500"
              )}
              animate={{ scale: activeStage === idx ? 1.2 : 1 }}
            >
              {idx + 1}
            </motion.div>
            <span className="text-xs text-gray-600 dark:text-zinc-500">{stage}</span>
          </div>
          {idx < stages.length - 1 && (
            <div className="relative flex-1 px-2">
              <div className="h-0.5 bg-gray-200 dark:bg-zinc-800" />
              <motion.div
                className="absolute inset-y-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"
                initial={{ width: 0 }}
                animate={{ width: activeStage > idx ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

// Customer Journey Component
function CustomerJourney() {
  const steps = [
    { icon: <Users className="h-4 w-4" />, label: 'Onboard' },
    { icon: <Calendar className="h-4 w-4" />, label: 'Service' },
    { icon: <CreditCard className="h-4 w-4" />, label: 'Invoice' },
    { icon: <MessageSquare className="h-4 w-4" />, label: 'Review' },
  ];
  
  return (
    <div className="grid grid-cols-4 gap-2">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex flex-col items-center rounded-lg bg-gray-100 dark:bg-zinc-800/50 p-3 text-center"
        >
          <div className="mb-2 rounded-full bg-cyan-500/20 p-2 text-cyan-600 dark:text-cyan-400">
            {step.icon}
          </div>
          <span className="text-xs text-gray-600 dark:text-zinc-400">{step.label}</span>
        </motion.div>
      ))}
    </div>
  );
}