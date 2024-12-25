import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"
import PrimaryButton from "../../../../components/PrimaryButton"
import EyeIcon from "../../../../../public/eye-icon.svg"
import LocationIcon from "../../../../../public/location-icon.svg"

interface IPopularEventsCard {
  imageSrc: string
  category: string
  categoryIcon: string
  viewers: number
  location: string
  title: string
  description: string
  className?: string
}

const CategoryCard = ({
  categoryIcon,
  category,
}: {
  categoryIcon: string
  category: string
}) => {
  return (
    <div className="px-[10px] py-[5px] flex justify-center items-center gap-[10px] rounded-[60px] border-[3px] border-white popular-events-card-shadow">
      <Image
        src={categoryIcon}
        alt="Category Icon"
        className="w-[14px] h-[14px]"
        width={14}
        height={14}
      />
      <span className="text-primary text-[12px] font-[500] tracking-[0.5px]">
        {category}
      </span>
    </div>
  )
}

const PopularEventsCard = ({
  imageSrc,
  category,
  categoryIcon,
  viewers,
  location,
  title,
  description,
  className,
}: IPopularEventsCard) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-[316px] h-auto px-[8px] pt-[8px] pb-[18px] rounded-[24px] bg-[#F2F4F6] border-2px border-white popular-events-card-shadow gap-[24px] mb-3",
        className
      )}
    >
      {/* Card Image  */}
      <Image
        alt="Popular Events Image"
        src={imageSrc}
        className="w-[300px] h-[250px] rounded-[16px]"
        loading="lazy"
        width={300}
        height={250}
      />

      {/* Category and Viewers div*/}
      <div className="flex flex-row space-x-[18px]">
        <CategoryCard categoryIcon={categoryIcon} category={category} />

        <div className="flex flex-row justify-center items-center">
          <Image
            src={EyeIcon}
            alt="Category Icon"
            className="w-[14px] h-[14px] mr-[6px]"
            width={14}
            height={14}
          />

          <span className="text-[#666D97] text-[10px]">
            {viewers} People viewing this
          </span>
        </div>
      </div>

      {/* Location div */}
      <div className="flex flex-row self-start ml-[16px] items-center">
        <Image
          src={LocationIcon}
          alt="Category Icon"
          className="w-[14px] h-[14px]"
          width={14}
          height={14}
        />

        <span className="text-[#666D97] text-[13px] ml-[12px]">{location}</span>
      </div>

      <div className="mx-[8px]">
        <h1 className="text-primary self-stretch text-[16px] font-[600] tracking-[0.5px] pb-[8px] leading-normal">
          {title}
        </h1>

        <span className="text-[#666D97] text-[11px] tracking-[0.5px] font-normal leading-tight">
          {description}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row justify-around gap-[10px]">
        <PrimaryButton
          title="Sign Up"
          className="py-[10px] rounded-[12px] hero-button-shadow"
        />
        <PrimaryButton
          title="Learn More"
          className="py-[10px] rounded-[12px] hero-button-shadow"
        />
      </div>
    </div>
  )
}

export default PopularEventsCard
