'use client';

import { useEffect, useRef } from 'react';

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    // Prevent double tracking (React 18 Strict Mode)
    if (tracked.current) return;

    // Check if already tracked in this session
    const sessionKey = `blog_view_${slug}`;
    const hasTracked = sessionStorage.getItem(sessionKey);

    if (hasTracked) {
      console.log('[ViewTracker] Already tracked in this session:', slug);
      return;
    }

    // Track view function
    const trackView = async () => {
      // Mark as tracked immediately to prevent race conditions
      tracked.current = true;

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/${slug}/increment-view`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          // Mark as tracked in session
          sessionStorage.setItem(sessionKey, 'true');
          console.log('[ViewTracker] View tracked successfully:', slug);
        } else {
          console.error('[ViewTracker] Failed to track view:', response.status);
          // Reset tracked flag if failed
          tracked.current = false;
        }
      } catch (error) {
        console.error('[ViewTracker] Error tracking view:', error);
        // Reset tracked flag if failed
        tracked.current = false;
        // Fail silently - don't break user experience
      }
    };

    // Calculate scroll depth percentage
    const calculateScrollDepth = (): number => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate how much of the page is visible + scrolled
      const scrollDepth = ((scrollTop + windowHeight) / documentHeight) * 100;

      return scrollDepth;
    };

    // Scroll event handler
    const handleScroll = () => {
      // Skip if already tracked
      if (tracked.current) return;

      const scrollDepth = calculateScrollDepth();

      // Track when user scrolls past 50%
      if (scrollDepth >= 50) {
        console.log('[ViewTracker] 50% scroll depth reached, tracking view...');
        trackView();

        // Remove scroll listener after tracking
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also check immediately in case page is short or user is at 50% already
    const initialScrollDepth = calculateScrollDepth();
    if (initialScrollDepth >= 50) {
      console.log('[ViewTracker] Already at 50% on page load, tracking view...');
      trackView();
      window.removeEventListener('scroll', handleScroll);
    }

    // Cleanup: remove scroll listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [slug]);

  return null; // No UI
}
