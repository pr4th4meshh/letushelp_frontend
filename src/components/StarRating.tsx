import React from "react"

export interface StarIconProps {
  size?: number
  SVGstrokeColor?: string
  SVGstorkeWidth?: string | number
  SVGclassName?: string
  SVGstyle?: React.CSSProperties
  rating: number
}

export function StarIcon({
  size = 25,
  SVGstrokeColor = "#DFDB5D",
  SVGstorkeWidth = 2,
  SVGclassName = "star-svg",
  SVGstyle,
  rating,
}: StarIconProps) {
  const fillColor =
    rating >= 1 ? "#DFDB5D" : rating > 0 ? "url(#half-star)" : "none" 

  return (
    <svg
      className={SVGclassName}
      style={SVGstyle}
      stroke={SVGstrokeColor}
      fill={fillColor}
      strokeWidth={SVGstorkeWidth}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half-star" x1="0" x2="1" y1="0" y2="0">
          <stop offset="50%" stopColor="#DFDB5D" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

const StarRating = ({ rating }: { rating: number }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    const starRating = Math.max(0, Math.min(1, rating - i)) // Ensure the rating is between 0 and 1
    stars.push(
      <StarIcon
        key={i}
        rating={starRating}
        size={30}
        SVGstrokeColor="#DFDB5D"
      />
    )
  }

  return <div className="flex space-x-1">{stars}</div>
}

export default StarRating
