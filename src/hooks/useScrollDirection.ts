import { useEffect, useState } from "react";

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

const useScrollDirection = (initialDirection = "down", thresholdPixels = 0) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrollDir, setScrollDir] = useState<string>(initialDirection);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < thresholdPixels) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      setScrolledToTop(scrollY < 20);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollDir, scrolledToTop };
};

export default useScrollDirection;
