import StarRating from "@/components/StarRating"
import Image from "next/image"
import React from "react"

interface HeroTestimoniaCardProps {
  feedback: string
  name: string
  title: string
  rating: number
  index: number
  avatar: string
}

const HeroTestimoniaCard = ({
  feedback,
  name,
  title,
  rating,
  index,
  avatar
}: HeroTestimoniaCardProps) => {
  return (
    <div
      className={`bg-[#F0F1F5] border-[5px] border-white shadow-lg p-[12px] space-y-[12px] rounded-[12px] max-w-[400px] transform ${
        index === 1
          ? "rotate-[-10deg]"
          : index === 2
          ? "rotate-[10deg]"
          : index === 3
          ? "rotate-[10deg]"
          : index === 4
          ? "rotate-[0deg]"
          : ""
      }`}
    >
      <div className="flex flex-row items-center">
        <Image
          src={avatar}
          alt="Testimonial person image"
          width={32}
          height={32}
        />
        <p className="text-[#252525] font-[500] text-[16px] leading-normal ml-[12px]">
          {name}
        </p>
      </div>
      <p className="text-xs text-[#737f6f] text-[16px] font-[400] leading-normal">
        {title}
      </p>
      <div className="flex text-xs mt-1">
        <StarRating rating={rating} />
      </div>
      <p className="text-[12px] font-[400] leading-normal text-[#737f6f] ">
        {feedback}
      </p>
    </div>
  )
}

export default HeroTestimoniaCard
