import Image from "next/image"
import React from "react"

interface IVolunteeringOpportunities {
  images: string[]
}

const VolunteeringOpportunities = ({ images }: IVolunteeringOpportunities) => {
  return (
    <div className="flex flex-row w-auto justify-center items-center mt-[220px] mb-[60px] py-[10px] px-[20px] rounded-[100px] gap-[12px] volunteering-opportunities-box-shadow max-w-screen-xl mx-auto">
      {/* Avatar images coming as props from hero component */}
      {images.map((image, index) => (
        <div key={index} className="">
          <Image
            src={image}
            alt="Volunteering Opportunity Avatar Image"
            className={`shrink-0 border-[2px] border-white rounded-full h-[50px] w-[50px] ${
              index === 1
                ? "relative left-[-30px]"
                : index === 2
                ? "relative left-[-60px]"
                : ""
            }`}
            height={50}
            width={50}
          />
        </div>
      ))}

      {/* Number of opportunities */}
      <span className="text-[#252525] text-[14px] md:text-[18px] font-[500] leading-normal ml-[-60px]">
        3,500+ Volunteering Opportunitites
      </span>
    </div>
  )
}

export default VolunteeringOpportunities