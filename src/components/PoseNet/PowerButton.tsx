import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const tickVariants = {
  pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 }
};

const boxVariants = {
  hover: { scale: 1.05, strokeWidth: 2.5 },
  pressed: { scale: 2.95, strokeWidth: 2.5 },
  checked: {
    stroke: "#FF008C"
  },
  unchecked: { stroke: "#FF008C", strokeWidth: 2.5 }
};

export const PowerButtonComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.svg
      width="86%"
      height="86%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF008C"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      initial={true}
      animate={isChecked ? "checked" : "unchecked"}
      onClick={() => setIsChecked(!isChecked)}
    >
      <motion.path
        d="M 18.36 6.64a9 9 0 1 1-12.73 0"
        fill="none"
        strokeWidth="2.5"
        stroke="#FF008C"
        variants={boxVariants}
      />
      <motion.line x1="12" y1="2" x2="12" y2="12" />
      <motion.path
        d="M 18.36 6.64a9 9 0 1 1-12.73 0"
        fill="none"
        strokeWidth="95"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
    </motion.svg>
  );
};
