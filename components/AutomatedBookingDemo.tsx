import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Bot, Calendar, CheckCircle, Clock, MapPin, User, Sparkles } from 'lucide-react';

const AutomatedBookingDemo = () => {
  const [stage, setStage] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

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

  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Auto-advance through stages when in view
  useEffect(() => {
    if (!isInView) return;

    // Clear any existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
    
    if (stage === 0) {
      // Initial delay before showing client message
      const timer = setTimeout(() => setStage(1), 1500);
      timersRef.current.push(timer);
    } else if (stage === 1) {
      // Show AI response after client message
      const timer = setTimeout(() => setStage(2), 2500);
      timersRef.current.push(timer);
    } else if (stage === 2) {
      // Show confirmation after AI response
      const timer = setTimeout(() => {
        setShowConfirmation(true);
        setStage(3);
      }, 2500);
      timersRef.current.push(timer);
    } else if (stage === 3) {
      // Reset cycle after showing confirmation
      const timer = setTimeout(() => {
        setShowConfirmation(false);
        setStage(0);
      }, 5000); // Longer display time for confirmation
      timersRef.current.push(timer);
    }

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, [stage, isInView]);

  return (
    <div ref={containerRef} className="relative h-[600px] w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/girl-on-the-phone.png"
          alt="Customer calling"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Chat Messages Overlay */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <AnimatePresence mode="wait">
          {/* Conversation Stage */}
          {stage < 3 && (
            <motion.div
              key="conversation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 mb-20"
            >
              {/* Client Message */}
              <AnimatePresence>
                {stage >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25,
                      duration: 0.6
                    }}
                    className="ml-auto max-w-[70%]"
                  >
                    <div className="rounded-2xl px-4 py-2.5 bg-gray-900/90 backdrop-blur-sm text-white shadow-lg border border-white/10">
                      <p className="text-sm">Can I make an appointment for Friday at 9am?</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* AI Response */}
              <AnimatePresence>
                {stage >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25, 
                      delay: 0.2,
                      duration: 0.6
                    }}
                    className="mr-auto max-w-[70%]"
                  >
                    <div className="rounded-2xl px-4 py-2.5 bg-gradient-to-r from-[#0070F3]/90 to-[#38bdf8]/90 backdrop-blur-sm text-white shadow-lg border border-white/20">
                      <div className="flex items-start gap-2">
                        <Bot className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                        <p className="text-sm">Absolutely! Booking an appointment for Friday at 9am EST</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Typing Indicator */}
              {stage === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="mr-auto"
                >
                  <div className="flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg max-w-fit">
                    <Sparkles className="h-4 w-4 text-[#0070F3]" />
                    <span className="text-xs text-gray-700">AI is typing...</span>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0070F3] to-[#38bdf8]"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confirmation Overlay */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -50, opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 20,
                  duration: 0.6
                }}
                className="w-full max-w-sm"
              >
                {/* Success Card */}
                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20">
                  {/* Header with gradient */}
                  <div className="relative h-24 bg-gradient-to-br from-blue-500/30 via-sky-500/30 to-cyan-400/30 dark:from-blue-600/30 dark:via-sky-600/30 dark:to-cyan-600/30 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/80 to-sky-500/80 flex items-center justify-center backdrop-blur-sm">
                          <User className="h-8 w-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.3, 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 20,
                        duration: 0.5
                      }}
                      className="flex items-center justify-center gap-2 mb-4"
                    >
                      <CheckCircle className="h-6 w-6 text-blue-400 drop-shadow-lg" />
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">You are scheduled</h3>
                    </motion.div>

                    <p className="text-white/80 mb-6 drop-shadow">
                      You are scheduled with Lora's Beauty Salon
                    </p>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-2 mx-auto text-blue-300 hover:text-blue-200 transition-colors drop-shadow"
                    >
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Add to your calendar</span>
                    </motion.button>

                    <div className="mt-6 space-y-3 text-left">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0070F3]/30 to-[#38bdf8]/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <CheckCircle className="h-5 w-5 text-white drop-shadow" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm drop-shadow">Hair Styling & Blowout Appointment</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex items-center gap-3 text-white/80 text-sm drop-shadow"
                      >
                        <Clock className="h-4 w-4" />
                        <span>9:00am - 10:00am Friday</span>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="flex items-center gap-3 text-white/80 text-sm drop-shadow"
                      >
                        <MapPin className="h-4 w-4" />
                        <span>Eastern Time - US & Canada</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </div>
  );
};

export default AutomatedBookingDemo;