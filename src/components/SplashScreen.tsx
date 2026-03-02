'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    // Initial reveal transition on mount
    const revealTransition = () => {
      return new Promise<void>((resolve) => {
        // Set initial state: overlay covers screen (scaleY: 1, starts from top)
        gsap.set('.transition-overlay', { scaleY: 1, transformOrigin: 'top' });
        
        // Animate overlay to scaleY: 0 (disappears) over 0.6s with stagger
        gsap.to('.transition-overlay', {
          scaleY: 0,
          duration: 0.6,
          stagger: -0.1, // Negative stagger for overlapping animations
          ease: 'power2.inOut',
          onComplete: () => {
            resolve();
            if (onComplete) {
              onComplete();
            }
          },
        });
      });
    };

    revealTransition();
  }, [onComplete]);

  return (
    <div className="transition">
      <div className="transition-overlay overlay-1"></div>
      <div className="transition-overlay overlay-2"></div>
      <div className="transition-overlay overlay-3"></div>
      <div className="transition-overlay overlay-4"></div>
      <div className="transition-overlay overlay-5"></div>
    </div>
  );
};
