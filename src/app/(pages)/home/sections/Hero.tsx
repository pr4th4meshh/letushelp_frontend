import React from "react"
import VolunteeringOpportunities from "../sections/VolunteeringOpportunities"
import VolunteeringOpportunitiesAvatar1 from "../../../../../public/3d_avatar_0.svg"
import VolunteeringOpportunitiesAvatar2 from "../../../../../public/3d_avatar_1.svg"
import VolunteeringOpportunitiesAvatar3 from "../../../../../public/3d_avatar_2.svg"
import VectorLines from "../../../../../public/hero-vector-lines.svg"
import Image from "next/image"
import SecondaryButton from "@/components/SecondaryButton"
import HeroTestimoniaCard from "./HeroTestimoniaCard"
import { HERO_TESTIMONIALS } from "@/utils/constants"

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden h-auto relative z-0 mb-[74px] md:px-0 px-[10px]">
      {/* Volunteering Opportunities Card */}
      <VolunteeringOpportunities
        images={[
          VolunteeringOpportunitiesAvatar1,
          VolunteeringOpportunitiesAvatar2,
          VolunteeringOpportunitiesAvatar3,
        ]}
      />

      {/* Title */}
      <h1 className="text-primary text-center font-clashBold text-[45px] md:text-[100px] font-[600] leading-[50px] md:leading-[90px]">
        Make a Difference, <br />
        One Hour at a Time.
      </h1>

      <div className="lg:block hidden">
        {/* Left Testimonial Cards */}
        <div className="absolute left-[-10%] top-[28%] z-50 space-y-10">
          {HERO_TESTIMONIALS.slice(0, 2).map((testimonial) => (
            <HeroTestimoniaCard
              key={testimonial.id}
              index={testimonial.id}
              feedback={testimonial.feedback}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        {/* Right Testimonial Cards */}
        <div className="absolute right-[-10%] top-[28%] z-50 space-y-10">
          {HERO_TESTIMONIALS.slice(2).map((testimonial) => (
            <HeroTestimoniaCard
              key={testimonial.id}
              index={testimonial.id}
              feedback={testimonial.feedback}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>

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
      <div className="flex flex-row justify-center z-50 gap-[21px] pt-[32px] pb-[80px]">
        <SecondaryButton
          title="Find Opportunities"
          className="text-[14px] font-[600] leading-[100%] shadow-[0px_2px_4px_0px_rgba(136,_144,_194,_0.2),_0px_5px_15px_0px_rgba(37,_44,_97,_0.15)] bg-[#0984E3] hover:bg-[#2169a0] text-white transition-all duration-300 transform hover:translate-y-[-4px]"
        />
        <SecondaryButton
          title="List Opportunities"
          className="text-[14px] font-[600] leading-[100%] shadow-[0px_2px_4px_0px_rgba(136,_144,_194,_0.2),_0px_5px_15px_0px_rgba(37,_44,_97,_0.15)] transition-all duration-300 transform hover:translate-y-[-4px] hover:bg-[#2169a0] hover:text-white"
        />
      </div>
    </div>
  )
}

export default Hero
