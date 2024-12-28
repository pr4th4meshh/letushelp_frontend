import React from "react"
import { motion } from "framer-motion"

interface CarouselProps {
  children: React.ReactNode
  direction: "ltr" | "rtl" // left to right or right to left
  speed?: number
}

const InfiniteCarousel: React.FC<CarouselProps> = ({ children, direction }) => {
  const carouselVariants = {
    ltr: {
      x: ["0%", "-50%"], // Move from 0% to -50% (LTR)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
    rtl: {
      x: ["-50%", "0%"], // Move from -50% to 0% (RTL)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div
      className="w-screen overflow-hidden"
      style={{ width: "100%", overflow: "hidden" }}
    >
      <motion.div
        className="carousel-track"
        style={{ display: "flex", width: "max-content" }}
        variants={carouselVariants}
        animate={direction} // Directs to either 'ltr' or 'rtl'
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export default InfiniteCarousel
