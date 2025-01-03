import Image from "next/image"
import React from "react"
import StarRating from "./StarRating"

interface ITestimonialCard {
  personImage: string
  personName: string
  personTitle: string
  personRating: number
  personFeedback: string
}

const TestimonialCard = ({
  personImage,
  personName,
  personTitle,
  personRating,
  personFeedback,
}: ITestimonialCard) => {
  return (
    <div className="flex h-auto w-auto flex-row items-center relative ml-2 md:ml-10 pb-4">
      <div className="mr-[16px] md:mr-[32px]">
        {/* Background / absolute image */}
        <Image
          src={personImage}
          alt="Testimonial person image"
          width={300}
          height={400}
          loading="lazy"
          className="h-[300px] md:h-[400px] w-[180px] md:w-[300px] absolute rounded-[24px]"
        />
        {/* Overlay / Relative image */}
        <Image
          src={personImage}
          alt="Testimonial person image"
          width={300}
          height={400}
          className="h-[300px] md:h-[400px] w-[180px] md:w-[300px] relative -rotate-[8deg] rounded-[24px]"
          loading="lazy"
        />
      </div>

      {/* Testimonial Card Content */}
      <div className="bg-[#F2F4F6] border-[3px] border-white py-[20px] px-[12px] md:px-[24px] rounded-[24px] gap-[24px] max-w-[200px] md:max-w-[348px] shadow-[0px_2px_4px_0px_rgba(136,_144,_194,_0.2),_0px_5px_15px_0px_rgba(37,_44,_97,_0.15)]">
        {/* Testimonial Card Person Name */}
        <h3 className="text-[24px] font-[600] tracking-[0.5px] leading-normal text-start text-primary">
          {personName}
        </h3>
        {/* Testimonial Card Person Title */}
        <div className="flex px-[10px] py-[5px] text-[12px] text-gray-700 bg-[#F2F4F6] border-[3px] border-white rounded-[100px] w-fit shadow-[0px_0px_10px_0px_#00000040] mb-[14px] md:mb-[28px]">
          {personTitle}
        </div>
        {/* Testimonial Card Rating */}
        <div className="flex justify-start mb-3">
          <StarRating rating={personRating} />
        </div>
        {/* Testimonial Card Feedback */}
        <p className="text-primary/50 text-[12px] md:text-[16px] leading-tight tracking-[0.5px] font-[400] ">
          {personFeedback}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
