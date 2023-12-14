"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorComponent = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const springOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const springMouse = {
    x: useSpring(mouse.x),
    y: useSpring(mouse.y),
  };
  const cursorSize = 20;
  useEffect(() => {
    window.addEventListener(
      "mousemove",
      (e) => {
        mouse.x.set(e.clientX - cursorSize / 2);
        mouse.y.set(e.clientY - cursorSize / 2);
      },
      []
    );
    return () => window.removeEventListener("mousemove", (e) => {});
  });
  return (
    <motion.div
      style={{
        left: springMouse.x,
        top: springMouse.y,
      }}
      className="absolute z-10 w-5 h-5 rounded-full opacity-50 bg-orange-400"
    ></motion.div>
  );
};

export default CursorComponent;
