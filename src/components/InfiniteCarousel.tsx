import React, { useEffect, useRef, useState } from "react"

interface CarouselProps {
  children: React.ReactNode
  direction: "ltr" | "rtl" // left to right or right to left
  speed?: number
}

const InfiniteCarousel: React.FC<CarouselProps> = ({
  children,
  direction,
  speed = 20,
}) => {
  const [trackWidth, setTrackWidth] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2)
    }
  }, [children])

  const animationStyle = {
    animationDuration: `${trackWidth / speed}s`,
  }

  return (
    <div className="carousel-container overflow-hidden">
      <div
        ref={trackRef}
        className={`carousel-track flex ${
          direction === "ltr" ? "animate-scroll-ltr" : "animate-scroll-rtl"
        }`}
        style={animationStyle}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

export default InfiniteCarousel
