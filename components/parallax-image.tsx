"use client"

import { useRef, useEffect, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"

interface ParallaxImageProps {
  src: string | StaticImageData
  alt: string
  priority?: boolean
}

export default function ParallaxImage({ src, alt, priority = false }: ParallaxImageProps) {
  const ref = useRef(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const { scrollY } = useScroll()

  // Update element position on mount and resize
  useEffect(() => {
    const element = ref.current
    const onResize = () => {
      if (element) {
        const rect = element.getBoundingClientRect()
        setElementTop(rect.top + window.scrollY)
        setClientHeight(window.innerHeight)
      }
    }

    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], ["0%", "30%"])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="h-[80%] w-full absolute top-0">
        <Image src={src || "/placeholder.svg"} alt={alt} fill priority={priority} className="object-cover" />
      </motion.div>
    </div>
  )
}
