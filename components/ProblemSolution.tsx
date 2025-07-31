
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
    PhoneOff, MailWarning, FileWarning, MessageSquareWarning, // Problems
    CalendarCheck, Bot, DollarSign, Star, BarChart3, // Solutions
    XCircle, CheckCircle2, Workflow, Target, Sparkles, Clock, Phone, MessageSquare
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// --- DATA --- //

const oldWayNotifications = [
    { icon: <PhoneOff className="h-5 w-5 text-red-600" />, title: "Missed Call: (555) 123-4567", description: "Potential new client, called after hours." },
    { icon: <MailWarning className="h-5 w-5 text-yellow-600" />, title: "Unread Inquiry: 2 days old", description: "From: john.doe@example.com" },
    { icon: <FileWarning className="h-5 w-5 text-orange-600" />, title: "Overdue Invoice #1024", description: "Client: Alex Green, 30 days past due.", },
    { icon: <MessageSquareWarning className="h-5 w-5 text-blue-600" />, title: "Unanswered Instagram DM", description: "From: @janedoe - 'Are you open?'" },
];

const chanlyticsNotifications = [
    { icon: <CalendarCheck className="h-5 w-5 text-green-600" />, title: "New Appointment Booked!", description: "Sarah Johnson - tomorrow at 2 PM." },
    { icon: <Bot className="h-5 w-5 text-blue-600" />, title: "New Lead from Instagram", description: "AI Agent is engaging Mike Chen." },
    { icon: <DollarSign className="h-5 w-5 text-emerald-600" />, title: "Payment Received", description: "$120 from Alex Green for Invoice #1024." },
    { icon: <Star className="h-5 w-5 text-amber-500" />, title: "New 5-Star Review!", description: "'The booking process was so easy!'" },
];

const problemFeatures = [
    { icon: <Phone className="h-5 w-5 text-red-600 dark:text-red-500" />, title: "Missed calls mean lost revenue" },
    { icon: <MessageSquare className="h-5 w-5 text-red-600 dark:text-red-500" />, title: "Manual follow-up is slow" },
    { icon: <BarChart3 className="h-5 w-5 text-red-600 dark:text-red-500" />, title: "No visibility into what works" },
    { icon: <Clock className="h-5 w-5 text-red-600 dark:text-red-500" />, title: "Repetitive questions waste time" },
];

const solutionFeatures = [
    { icon: <Bot className="h-5 w-5 text-blue-600 dark:text-blue-500" />, title: "24/7 AI agents capture every lead" },
    { icon: <Workflow className="h-5 w-5 text-blue-600 dark:text-blue-500" />, title: "Automated, smart follow-ups" },
    { icon: <Target className="h-5 w-5 text-blue-600 dark:text-blue-500" />, title: "Real-time ROI on every channel" },
    { icon: <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-500" />, title: "AI handles FAQs instantly" },
];

// --- COMPONENTS --- //

const NotificationCard = ({ item, isProblem = false }: { item: any, isProblem?: boolean }) => (
    <div className={cn(
        'p-4 rounded-2xl shadow-lg border flex items-start gap-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm',
        isProblem ? 'border-gray-200 dark:border-zinc-800' : 'border-blue-200 dark:border-blue-900/50'
    )}>
        <div className={cn('w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1', isProblem ? 'bg-red-100/0' : 'bg-blue-100/0')}>
            {item.icon}
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
            <p className="text-gray-600 dark:text-zinc-400 text-sm">{item.description}</p>
        </div>
    </div>
);

const OldWayVisual = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardVariants = {
        stacked: (i: number) => ({
            y: 175 + (i * 15),
            rotate: (i % 2 === 0 ? -1 : 1) * (4 - i * 0.5),
            scale: 1 - (i * 0.05),
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        }),
        hover: (i: number) => ({
            y: (i * 95) + 10,
            rotate: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }),
    };

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative h-[480px] w-full max-w-sm mx-auto cursor-pointer bg-gray-100/50 dark:bg-zinc-900/50 rounded-3xl border border-gray-200 dark:border-zinc-800 p-4"
        >
            {oldWayNotifications.map((item, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="stacked"
                    animate={isHovered ? "hover" : "stacked"}
                    variants={cardVariants}
                    style={{ zIndex: oldWayNotifications.length - i, transformOrigin: 'bottom center' }}
                    className="absolute inset-x-4"
                >
                    <NotificationCard item={item} isProblem />
                </motion.div>
            ))}
        </motion.div>
    );
};

const ChanlyticsWayVisual = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardVariants = {
        stacked: (i: number) => ({
            y: 190 + (i * 12),
            scale: 1 - (i * 0.05),
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        }),
        hover: (i: number) => ({
            y: (i * 95) + 10, // Adjusted spacing for hover
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }),
    };

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative h-[480px] w-full max-w-sm mx-auto cursor-pointer bg-gray-100/50 dark:bg-zinc-900/50 rounded-3xl border border-gray-200 dark:border-zinc-800 p-4"
        >
            {chanlyticsNotifications.map((item, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="stacked"
                    animate={isHovered ? "hover" : "stacked"}
                    variants={cardVariants}
                    style={{ zIndex: chanlyticsNotifications.length - i, transformOrigin: 'bottom center' }}
                    className="absolute inset-x-4"
                >
                    <NotificationCard item={item} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default function ProblemSolution() {
  return (
    <section className="bg-gray-50 dark:bg-black py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium py-1 px-3 rounded-full border-gray-300 dark:border-gray-700">
            The Old Way vs. The Smart Way
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
            Your business is broadcasting signals. Are you listening?
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every missed call, unread email, and unanswered DM is a lost opportunity. Chanlytics turns these signals into automated actions, ensuring you never miss a chance to grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-y-20 lg:gap-x-12 items-start">
          {/* The Old Way Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <XCircle className="h-8 w-8 text-red-500 dark:text-red-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Old Way: Chaos & Missed Cues</h3>
            </div>
            <OldWayVisual />
            <div className="mt-12 w-full max-w-sm space-y-4">
                {problemFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                            {item.icon}
                        </div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">{item.title}</p>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* The Chanlytics Way Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Chanlytics Way: Clarity & Action</h3>
            </div>
            <ChanlyticsWayVisual />
            <div className="mt-12 w-full max-w-sm space-y-4">
                {solutionFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            {item.icon}
                        </div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">{item.title}</p>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
