import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, Facebook, MessageCircle, Slack, Mail, Store,
  User, Calendar, DollarSign, TrendingUp, Phone, MapPin,
  X, Activity, BarChart3, Clock, CheckCircle
} from 'lucide-react';

// Type definitions
interface ProfileData {
  email: string;
  phone: string;
  totalSpent: string;
  appointments: number;
  lastVisit: string;
  preferredService: string;
}

interface Notification {
  id: number;
  name: string;
  action: string;
  platform: string;
  icon: any;
  color: string;
  profileData: ProfileData;
}

const AnalyticsDashboardDemo = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedClient, setSelectedClient] = useState<Notification | null>(null);
  const [stats, setStats] = useState({
    leads: 342,
    conversion: 92,
    responseTime: 2.3
  });
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<{
    main?: NodeJS.Timeout;
    profile?: NodeJS.Timeout;
    reset?: NodeJS.Timeout;
    resetNotifications?: NodeJS.Timeout;
  }>({});

  // Notification templates
  const notificationTemplates = [
    {
      name: "James Wilson",
      action: "Replied to message",
      platform: "Facebook",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      profileData: {
        email: "james.wilson@email.com",
        phone: "+1 (555) 123-4567",
        totalSpent: "$2,450",
        appointments: 8,
        lastVisit: "3 days ago",
        preferredService: "Deep Tissue Massage"
      }
    },
    {
      name: "Alex Thompson",
      action: "Scheduled demo call",
      platform: "WhatsApp",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      profileData: {
        email: "alex.t@techcorp.com",
        phone: "+1 (555) 234-5678",
        totalSpent: "$5,200",
        appointments: 15,
        lastVisit: "1 week ago",
        preferredService: "Hair Styling & Color"
      }
    },
    {
      name: "TechStart LLC",
      action: "Replied to DM",
      platform: "Instagram",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      profileData: {
        email: "contact@techstart.com",
        phone: "+1 (555) 345-6789",
        totalSpent: "$12,000",
        appointments: 42,
        lastVisit: "Yesterday",
        preferredService: "Corporate Wellness Package"
      }
    },
    {
      name: "Sarah Martinez",
      action: "Booked appointment",
      platform: "Website",
      icon: Store,
      color: "from-blue-500 to-cyan-500",
      profileData: {
        email: "sarah.m@gmail.com",
        phone: "+1 (555) 456-7890",
        totalSpent: "$890",
        appointments: 3,
        lastVisit: "2 weeks ago",
        preferredService: "Facial Treatment"
      }
    },
    {
      name: "Digital Pro Agency",
      action: "Submitted contact form",
      platform: "Email",
      icon: Mail,
      color: "from-gray-600 to-gray-700",
      profileData: {
        email: "info@digitalpro.com",
        phone: "+1 (555) 567-8901",
        totalSpent: "$18,500",
        appointments: 68,
        lastVisit: "5 days ago",
        preferredService: "Premium Business Package"
      }
    }
  ];

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setIsInView(true);
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasStarted]);

  // Initialize with 2 notifications when in view
  useEffect(() => {
    if (isInView && notifications.length === 0) {
      const initialNotifications = [
        {
          ...notificationTemplates[1],
          id: 2,
        },
        {
          ...notificationTemplates[0],
          id: 1,
        }
      ];
      setNotifications(initialNotifications);
      setNotificationCount(2);
      setCurrentNotificationIndex(2);
    }
  }, [isInView]);

  // Clear all timers on unmount or when animation stops
  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  // Auto-cycle through notifications
  useEffect(() => {
    if (!isInView || notificationCount === 0) return;
    
    // Clear any existing timers
    Object.values(timersRef.current).forEach(timer => {
      if (timer) clearTimeout(timer);
    });

    if (!showProfileModal) {
      // Wait before adding new notification
      timersRef.current.main = setTimeout(() => {
        const newNotification = {
          ...notificationTemplates[currentNotificationIndex % notificationTemplates.length],
          id: Date.now(),
        };
        
        setNotifications(prev => [newNotification, ...prev].slice(0, 3));
        setStats(prev => ({
          leads: Math.min(999, prev.leads + Math.floor(Math.random() * 3) + 1),
          conversion: Math.min(99, prev.conversion + (Math.random() * 0.5)),
          responseTime: Math.max(1, Math.min(5, prev.responseTime + (Math.random() * 0.2 - 0.1)))
        }));

        // Advance index so next cycle uses next profile
        setCurrentNotificationIndex(prev => (prev + 1) % notificationTemplates.length);
        
        // Show profile modal after notification appears
        timersRef.current.profile = setTimeout(() => {
          setSelectedClient(newNotification);
          setShowProfileModal(true);
        }, 1500); // Increased delay for better visibility
      }, 3000); // Slower initial delay
    } else {
      // Profile modal is showing, wait then reset
      timersRef.current.reset = setTimeout(() => {
        setShowProfileModal(false);
        setSelectedClient(null);

        // Small delay before resetting notifications
        timersRef.current.resetNotifications = setTimeout(() => {
          const nextIndex = currentNotificationIndex % notificationTemplates.length;
          setNotifications([
            {
              ...notificationTemplates[(nextIndex + 1) % notificationTemplates.length],
              id: Date.now() + 2,
            },
            {
              ...notificationTemplates[nextIndex],
              id: Date.now() + 1,
            }
          ]);
          setNotificationCount(2);
        }, 800); // Increased delay to prevent flicker
      }, 4000); // Longer display time for profile
    }

    return () => {
      // Cleanup function
      Object.values(timersRef.current).forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [currentNotificationIndex, showProfileModal, isInView, notificationCount]);

  return (
    <div ref={containerRef} className="relative h-[600px] w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/girl-working.png"
          alt="Business owner working"
          className="w-full h-full object-cover"
        />
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg drop-shadow-lg flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Live Activity Feed
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-white/80">Live</span>
          </div>
        </div>

        {/* Centered Notification Area */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 space-y-3">
          <AnimatePresence mode="popLayout">
            {notifications.slice(0, 3).map((notification, index) => {
               const IconComponent = notification.icon;
               return (
                 <motion.div
                   key={notification.id}
                   layout
                   initial={{ opacity: 0, x: 80, scale: 0.85 }}
                   animate={{
                     opacity: index === 0 ? 1 : 0.8,
                     x: 0,
                     scale: index === 0 ? 1 : 0.95,
                   }}
                   transition={{ 
                     type: "spring", 
                     stiffness: 300, 
                     damping: 25,
                     duration: 0.5
                   }}
                   exit={{ 
                     opacity: 0, 
                     x: -60, 
                     scale: 0.8, 
                     transition: { duration: 0.3 } 
                   }}
                   className={`flex items-center gap-3 p-3 rounded-lg bg-white/30 backdrop-blur-md border border-white/20 transition-all ${
                     index === 0 ? "shadow-lg" : ""
                   }`}
                 >
                   <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${notification.color} flex items-center justify-center text-white shadow-lg`}>
                     <IconComponent className="h-5 w-5" />
                   </div>
                   <div className="flex-1 min-w-0">
                     <p className="text-sm font-medium text-white truncate">{notification.name}</p>
                     <p className="text-xs text-white/70 truncate">{notification.action} via {notification.platform}</p>
                   </div>
                   <div className="text-xs text-white/60 whitespace-nowrap">
                     {["just now", "2 min ago", "5 min ago"][index]}
                   </div>
                 </motion.div>
               );
            })}
          </AnimatePresence>
        </div>

        {/* Stats - positioned at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <p className="text-xs text-white/70 mb-1">Today's Leads</p>
            <p className="text-2xl font-bold text-white">
              <motion.span
                key={Math.floor(stats.leads)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Math.floor(stats.leads)}
              </motion.span>
            </p>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <p className="text-xs text-white/70 mb-1">Conversion</p>
            <p className="text-2xl font-bold text-white">
              <motion.span
                key={Math.floor(stats.conversion)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Math.floor(stats.conversion)}%
              </motion.span>
            </p>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <p className="text-xs text-white/70 mb-1">Response</p>
            <p className="text-2xl font-bold text-white">
              <motion.span
                key={stats.responseTime.toFixed(1)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {stats.responseTime.toFixed(1)}s
              </motion.span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Client Profile Modal */}
      <AnimatePresence>
        {showProfileModal && selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                duration: 0.4
              }}
              className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden"
            >
              {/* Profile Header */}
              <div className="relative h-32 bg-gradient-to-br from-[#0070F3]/30 to-[#38bdf8]/30 p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0070F3] to-[#38bdf8] flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedClient.name}</h3>
                    <p className="text-sm text-white/70">{selectedClient.profileData.email}</p>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center gap-2 text-white/70 text-xs mb-1">
                      <DollarSign className="h-3 w-3" />
                      Total Spent
                    </div>
                    <p className="text-white font-bold">{selectedClient.profileData.totalSpent}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="flex items-center gap-2 text-white/70 text-xs mb-1">
                      <Calendar className="h-3 w-3" />
                      Appointments
                    </div>
                    <p className="text-white font-bold">{selectedClient.profileData.appointments}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Phone className="h-4 w-4 text-white/60" />
                    <span>{selectedClient.profileData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <Clock className="h-4 w-4 text-white/60" />
                    <span>Last visit: {selectedClient.profileData.lastVisit}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="h-4 w-4 text-white/60" />
                    <span>Preferred: {selectedClient.profileData.preferredService}</span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0070F3] to-[#38bdf8] text-white font-medium hover:opacity-90 transition-opacity">
                  View Full Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default AnalyticsDashboardDemo;