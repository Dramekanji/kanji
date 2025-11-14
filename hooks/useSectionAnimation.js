import { useAnimation, useInView } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const useSectionAnimation = (options = { once: true, margin: "-10%" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, options);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const ua = window.navigator.userAgent || "";
    const isIOSDevice = /iP(ad|hone|od)/.test(ua);
    if (isIOSDevice) {
      controls.set("visible");
      setShouldAnimate(false);
    } else {
      controls.set("hidden");
      setShouldAnimate(true);
    }
  }, [controls]);

  useEffect(() => {
    if (!shouldAnimate) return;
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, shouldAnimate]);

  return { ref, controls, shouldAnimate };
};

export default useSectionAnimation;
