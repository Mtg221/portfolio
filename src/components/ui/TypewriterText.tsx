"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export function TypewriterText({
  words,
  speed = 75,
  deleteSpeed = 38,
  pauseMs = 2200,
  className = "",
}: TypewriterTextProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        isDeleting ? deleteSpeed : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, deleteSpeed, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span
        className="inline-block w-0.5 h-[1em] ml-0.5 align-middle rounded-full"
        style={{
          background: "var(--violet)",
          animation: "cursor-blink 1s step-end infinite",
        }}
      />
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
