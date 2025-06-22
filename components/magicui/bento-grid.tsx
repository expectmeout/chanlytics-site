import { ReactNode, ComponentPropsWithoutRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends HTMLMotionProps<'div'> {
  className?: string;
  background: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ className, background, ...props }: BentoCardProps) => {
  // motion values for tilt effect
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  // convert pointer delta (-0.5 ➜ 0.5) to rotation degrees
  const rotateX = useTransform(mvY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mvX, [-0.5, 0.5], [-8, 8]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.04 }}
      style={{ rotateX, rotateY }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className={cn(
        "group relative col-span-3 overflow-hidden rounded-2xl border border-white/10 bg-white/70 shadow-md backdrop-blur-sm transition-shadow dark:bg-zinc-900/60 dark:border-zinc-800",
        className,
      )}
      {...props}
    >
      {/* Glow gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_60%)]" />
      </div>
      {background}
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
