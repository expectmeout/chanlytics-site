"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ text, image, name, role }: Testimonial) => (
  <div className="bg-muted/50 dark:bg-muted/20 border rounded-lg p-6 space-y-4 break-inside-avoid">
    <p className="text-muted-foreground">{text}</p>
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsColumn = ({
  testimonials,
  className,
  duration = 15,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}) => {
  const columnRef = useRef<HTMLDivElement>(null);
  const [clonedTestimonials, setClonedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setClonedTestimonials([...testimonials, ...testimonials]);
  }, [testimonials]);

  return (
    <div
      ref={columnRef}
      className={cn("flex flex-col gap-6 pb-6 animate-marquee-vertical", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      {clonedTestimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};
