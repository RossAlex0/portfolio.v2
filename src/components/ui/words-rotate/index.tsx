"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { WordRotateProps } from "./type";
import "./wordsRotate.css";

export default function WordsRotate({
  words,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
}: WordRotateProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <AnimatePresence mode="wait">
      <motion.span key={words[index]} className="words" {...motionProps}>
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
