"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words = "",
  className = "",
  filter = true,
  duration = 0.5,
}) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
      transition: { duration: duration || 1, delay: i * 0.2 },
    }));
  }, [controls, filter, duration]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            custom={idx}
            initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
            animate={controls}
            className="dark:text-white text-black"
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
