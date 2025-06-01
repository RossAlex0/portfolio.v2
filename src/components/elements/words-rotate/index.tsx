"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { WordRotateProps } from "./type";
import "./wordsRotate.css";

export default function WordsRotate({
  words,
  duration = 3000,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.p key={words[index]} className="words" {...motionProps}>
        {words[index]}
      </motion.p>
    </AnimatePresence>
  );
}
