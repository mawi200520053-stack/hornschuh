"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  title: string;
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function ImageSlideshow({ images, title }: Props) {
  const [[index, direction], setSlide] = useState([0, 0]);

  function go(next: number) {
    const dir = next > index ? 1 : -1;
    const clamped = (next + images.length) % images.length;
    setSlide([clamped, dir]);
  }

  const single = images.length <= 1;

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${title} — Bild ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {!single && (
        <>
          <button
            onClick={() => go(index - 1)}
            aria-label="Vorheriges Bild"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200"
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.55)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Nächstes Bild"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors duration-200"
            style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.55)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Bild ${i + 1}`}
                className="w-2 h-2 rounded-full cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: i === index ? "#ffffff" : "rgba(255,255,255,0.4)",
                  transform: i === index ? "scale(1.25)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            className="absolute top-4 right-4 z-10 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#ffffff" }}
          >
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
