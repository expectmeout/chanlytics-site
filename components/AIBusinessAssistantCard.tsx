"use client";

import { motion } from "framer-motion";
import { AIChatMockup } from "./ai-chat-mockup";
import { ShineBorder } from "@/components/magicui/shine-border";

export const AIBusinessAssistantCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="group relative col-span-1 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black p-8 transition-all"
    >
      <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-blue-500/10 to-blue-500/10 blur-3xl" />
      <div className="relative z-10">
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

        <div className="relative rounded-xl bg-white/5 p-4">
          <AIChatMockup />
        </div>
      </div>
      <ShineBorder
        className="absolute inset-0"
        shineColor={["#0070F3", "#38bdf8"]}
        borderWidth={2}
      />
    </motion.div>
  );
};