import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function useScrollFunction() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return { heroRef, translateY };
}
