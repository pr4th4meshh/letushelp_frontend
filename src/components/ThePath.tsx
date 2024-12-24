import Image from "next/image"
import React from "react"
import FloralIllustration from "../../public/FlowersIllustration.svg"
import { STEPS } from "@/utils/constants"
import { splitDescription } from "@/utils/helpers"

const ThePath = () => {
  return (
    <section className="relative mx-0 mb-[180px] sm:mb-[250px] md:px-0 px-4">
      {/* Left Floral Decoration */}
      <Image
        src={FloralIllustration}
        alt="Left Floral Decoration"
        className="rotate-90 absolute left-[-56px] top-[70px] md:block hidden"
      />

      {/* Right Floral Decoration */}
      <Image
        src={FloralIllustration}
        alt="Right Floral Decoration"
        className="rotate-[270deg] absolute right-[-56px] top-[600px] md:block hidden"
      />

      {/* Title */}
      <h2 className="text-center font-clashBold text-[36px] sm:text-[50px] text-primary leading-[50px] font-[600] mb-[60px]">
        The Path
      </h2>

      {/*  STEPS */}
      <div className="flex flex-col justify-center items-center">
        {/* STEPS data coming from constants.ts */}
        {STEPS.map((step, index) => {
          const { firstHalf, secondHalf } = splitDescription(step.description)
          return (
            <div
              className="flex flex-col justify-center items-center w-full max-w-screen-xl"
              key={index}
            >
              <div className="relative flex justify-center items-center w-full">
                {/* Number Circle - Always Centered */}
                <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-[#CEE0FE] border-[2px] border-white rounded-full flex items-center justify-center text-primary text-[24px] sm:text-[80px] font-[600] tracking-[0.5px] font-clashBold z-10">
                  {step.number}
                </div>

                {/* Text Content - Positioned Left or Right based on index */}
                <div
                  className={`absolute md:px-0 px-2 ${
                    index === 1
                      ? "right-[57%] text-right"
                      : "left-[57%] text-left"
                  } top-1/2 -translate-y-1/2 w-[45%]`}
                >
                  {/* Step title  */}
                  <h3 className="font-clashBold text-primary text-[20px] leading-normal tracking-[0.5px] sm:text-[50px]">
                    {step.title}
                  </h3>
                  <p className="text-primary text-[16px] md:block hidden sm:text-[24px] tracking-[0.5px] leading-normal">
                    {/* Splitting the quote / description into two halves for desktop view */}
                    {firstHalf}
                    <br />
                    {secondHalf}
                  </p>
                  <p className="text-primary text-[14px] md:hidden block sm:text-[24px] tracking-[0.5px] leading-normal">
                    {/* Non splitted quote / description for mobile view */}
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Line Separator / Vertical lines below each step */}
              <div
                className={`h-[100px] bg-[#B1BBDF] w-[2px] gap-[30px] ${
                  index === STEPS.length - 1 ? "hidden" : ""
                } my-[25px]`}
              ></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ThePath
