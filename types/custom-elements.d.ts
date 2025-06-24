// Global JSX typings for custom web components used in the project.
// This makes TypeScript aware of the <elevenlabs-convai> element so that it
// no longer complains that the tag does not exist in JSX.IntrinsicElements.

import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          'agent-id'?: string;
          // Add other custom attributes here if needed
        },
        HTMLElement
      >;
    }
  }
}

export {}; // This file needs to be a module
