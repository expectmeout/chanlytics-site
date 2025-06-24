'use client';

import { useEffect, useRef } from 'react';

interface ElevenLabsConvaiProps {
  'agent-id': string;
  className?: string;
  [key: string]: any;
}

export function ElevenLabsConvai({ 'agent-id': agentId, className, ...props }: ElevenLabsConvaiProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the custom element programmatically
    const element = document.createElement('elevenlabs-convai');
    element.setAttribute('agent-id', agentId);
    
    // Add any additional props as attributes
    Object.entries(props).forEach(([key, value]) => {
      if (value !== undefined) {
        element.setAttribute(key, String(value));
      }
    });

    // Add the element to the DOM
    if (ref.current) {
      ref.current.appendChild(element);
    }

    // Cleanup
    return () => {
      if (ref.current && ref.current.contains(element)) {
        ref.current.removeChild(element);
      }
    };
  }, [agentId, props]);

  return <div ref={ref} className={className} />;
}
