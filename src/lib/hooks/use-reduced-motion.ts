'use client';

import { useEffect, useState } from 'react';

/**
 * Mirrors prefers-reduced-motion for non–Framer Motion use cases.
 * Framer Motion also respects `MotionConfig reducedMotion="user"` when wrapped in AppMotion.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
