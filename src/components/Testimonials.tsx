import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel"
import TestimonialCard from "@/components/TestimonialCard"
import { TESTIMONIALS_DATA } from "@/utils/constants"

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-[130px]">
      <div className="px-2 md:px-0">
        <h1 className="text-[32px] md:text-[42px] lg:text-[50px] text-center text-primary font-[500] tracking-[0.5px] leading-normal self-stretch font-clashBold mb-[12px]">
          Voices of Impact, <br className="block md:hidden" /> Stories That
          Inspire!
        </h1>
        <p className="text-center text-primary text-[18px] md:text-[24px] tracking-[0.5px] font-[600] mb-[60px]">
          Hear from volunteers who turned compassion into action and made a
          difference in the world.
        </p>
      </div>

      <Carousel className="w-full pl-[10px] md:pl-[100px] justify-center items-center">
        <CarouselContent className="flex items-center">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className={`basis-${TESTIMONIALS_DATA.length}/${TESTIMONIALS_DATA.length} px-4 flex flex-col items-center`}
            >
              <TestimonialCard
                personImage={testimonial.image}
                personName={testimonial.name}
                personTitle={testimonial.title}
                personRating={testimonial.rating}
                personFeedback={testimonial.feedback}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className=" flex justify-center">
          <CarouselPrevious className="absolute left-[33%] md:left-[45%] top-[115%] bg-blue-200 text-primary text-[24px] p-[32px] rounded-full mr-[32px] border-[3px] border-white">
            &lt;
          </CarouselPrevious>
          <CarouselNext className="absolute left-[52%] md:left-[50%] top-[115%] bg-blue-200 text-primary text-[24px] p-[32px] rounded-full border-[3px] border-white">
            &gt;
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonials
