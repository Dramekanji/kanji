import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useSectionAnimation = (options = { once: true, margin: "-10%" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, options);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useSectionAnimation;

