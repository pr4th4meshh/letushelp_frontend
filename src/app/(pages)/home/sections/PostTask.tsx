import React from "react"
import PostTaskCoverImage from "../../../../../public/PostTaskImage.svg"
import Image from "next/image"
import PrimaryButton from "@/components/PrimaryButton"

const STEPS = [
  { title: "Choose a cause you care about", number: 1 },
  { title: "Set your availability", number: 2 },
  { title: "Connect and start making an impact", number: 3 },
]

const PostTask = () => {
  return (
    <div className="mx-[20px] md:mx-[76px] mb-[120px]">
      <div className="flex flex-col md:flex-row justify-center gap-x-[32px]">
        {/* Post Task Cover Image */}
        <Image
          src={PostTaskCoverImage}
          alt="Post Task Cover Image"
          className="object-cover rounded-[302px]"
        />

        {/* Post Task Text Content */}
        <div className="flex flex-col justify-center ml-0 md:ml-[32px] md:mt-0 mt-12">
          <h1 className="font-clashBold text-primary text-[42px] md:text-[50px] font-[600] leading-[50px]">
            Find Your Perfect{" "}
            <span className="text-[#3A88FF] font-clashBold underline underline-offset-[10px]">
              Volunteering <br className="md:block hidden" /> Opportunity{" "}
            </span>
            in Minutes.
          </h1>

          <p className="text-primary mt-[18px] text-[24px] leading-[32px]">
            Discover meaningful ways to give back to your community, <br />{" "}
            tailored to your time, skills, and passions.
          </p>
          <ul className="mt-[45px] space-y-[24px] text-[18px] text-primary">
            {STEPS.map((step, index) => (
              <div key={index}>
                <div className="flex items-center text-primary text-[18px] leading-[18px] font-[500]">
                  <span className="p-[10px] h-[50px] w-[50px] text-[#2C65FC] leading-[16px] text-[24px] font-[500] bg-[#CEE0FE] rounded-full mr-[12px] shrink-0 flex items-center justify-center">
                    {step.number}
                  </span>
                  {step.title}
                </div>
              </div>
            ))}
          </ul>
          <PrimaryButton
            title="Post a Volunteering Task"
            className="py-[23px] px-[32px] gap-[12px] md:w-min mt-[48px] hover:bg-[#2169a0] text-white transition-all duration-300 transform hover:translate-y-[-4px]"
          />
        </div>
      </div>
    </div>
  )
}

export default PostTask
