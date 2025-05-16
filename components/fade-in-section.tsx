"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function FadeInSection({ children, delay = 0, direction = "up", className = "" }: FadeInSectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }
      case "down":
        return { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } }
      case "left":
        return { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }
      case "right":
        return { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
      default:
        return { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }
    }
  }

  const variants = {
    hidden: getDirectionVariants().hidden,
    visible: {
      ...getDirectionVariants().visible,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
