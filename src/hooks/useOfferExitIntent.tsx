import { useEffect, useRef, useState, useCallback } from "react";

interface UseOfferExitIntentOptions {
  minTimeInSection?: number; // Minimum time (ms) user must spend in section
  onExitIntent: () => void;
}

export const useOfferExitIntent = ({
  minTimeInSection = 3000,
  onExitIntent,
}: UseOfferExitIntentOptions) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTriggered = useRef(false);
  const enteredAt = useRef<number | null>(null);
  const [hasSeenOffer, setHasSeenOffer] = useState(false);

  const handleExitIntent = useCallback(() => {
    if (hasTriggered.current) return;
    
    const timeSpent = enteredAt.current ? Date.now() - enteredAt.current : 0;
    
    if (hasSeenOffer && timeSpent >= minTimeInSection) {
      hasTriggered.current = true;
      onExitIntent();
    }
  }, [hasSeenOffer, minTimeInSection, onExitIntent]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User entered the pricing section
            if (!enteredAt.current) {
              enteredAt.current = Date.now();
            }
            setHasSeenOffer(true);
          } else if (hasSeenOffer && enteredAt.current) {
            // User left the pricing section after seeing it
            handleExitIntent();
          }
        });
      },
      {
        threshold: 0.3, // 30% of section must be visible
        rootMargin: "-50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasSeenOffer, handleExitIntent]);

  // Reset function for when modal is closed
  const reset = useCallback(() => {
    hasTriggered.current = false;
    enteredAt.current = null;
    setHasSeenOffer(false);
  }, []);

  return { sectionRef, hasSeenOffer, reset };
};
