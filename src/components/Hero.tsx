import React from "react"
import VolunteeringOpportunities from "./VolunteeringOpportunities"
import VolunteeringOpportunitiesAvatar1 from "../../public/3d_avatar_0.svg"
import VolunteeringOpportunitiesAvatar2 from "../../public/3d_avatar_1.svg"
import VolunteeringOpportunitiesAvatar3 from "../../public/3d_avatar_2.svg"
import VectorLines from "../../public/hero-vector-lines.svg"
import Image from "next/image"
import SecondaryButton from "./SecondaryButton"

const Hero = () => {
  return (
    <div className="flex flex-col h-screen relative z-0">
      {/* Volunteering Opportunities Card */}
      <VolunteeringOpportunities
        images={[
          VolunteeringOpportunitiesAvatar1,
          VolunteeringOpportunitiesAvatar2,
          VolunteeringOpportunitiesAvatar3,
        ]}
      />

      {/* Title */}
      <h1 className="text-primary text-center font-clashBold text-[100px] font-[600] leading-[90px]">
        Make a Difference, <br />
        One Hour at a Time.
      </h1>

      {/* Background Vector Lines */}
      <div className=" flex justify-center">
        <Image
          src={VectorLines}
          alt="Vector Lines"
          className="object-cover h-auto w-full absolute z-0 "
        />
      </div>

      {/* Description */}
      <p className="text-primary text-center text-[16px] leading-normal font-[400] relative z-50 pt-[24px]">
        Whether you have just an hour to spare or an entire day, your time can
        create lasting change. From mentoring <br /> a child to cleaning up a
        local park, there’s a volunteering opportunity that fits your schedule
        and passion.
      </p>

      {/* Action buttons */}
      <div className="flex flex-row justify-center z-50 gap-[21px] pt-[32px]">
        <SecondaryButton
          title="Find Opportunities"
          className="text-[14px] font-[600] leading-[100%]"
        />
        <SecondaryButton
          title="List Opportunities"
          className="text-[14px] font-[600] leading-[100%] bg-[#0984E3] hover:bg-[#0984E3] text-white"
        />
      </div>
    </div>
  )
}

export default Hero
