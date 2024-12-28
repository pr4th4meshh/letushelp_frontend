"use client"

import Image from "next/image"
import React from "react"
import StatisticsCoverImage from "../../../../../public/StatisticsImage.svg"
import StatisticCard from "@/app/(pages)/home/sections/StatisticCard"
import { STATISTICS_DATA } from "@/utils/constants"

const Statistics = () => {
  return (
    <section className="relative mx-4 sm:mx-10 md:mx-[100px] mb-[250px] md:mb-[180px] lg:mb-[190px]">
      <div className="relative flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="w-full md:w-[1185px] h-[280px] sm:h-[400px] md:h-[559px] overflow-hidden">
          <Image
            src={StatisticsCoverImage}
            alt="Volunteers"
            className="w-full h-full object-cover rounded-[24px]"
            priority
          />
        </div>

        {/* Statistics Overlay */}
        <div className="absolute bottom-[-150px] sm:bottom-[-60px] md:bottom-[-70px] left-0 right-0 flex justify-center px-2 md:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-[28px]">
            {STATISTICS_DATA.map((data, index) => (
              <StatisticCard
                key={index}
                title={data.title}
                value={data.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
