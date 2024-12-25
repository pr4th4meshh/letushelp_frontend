import React from "react"
import InfiniteCarousel from "@/components/InfiniteCarousel"
import Image from "next/image"
import { LTR_IMAGES, RTL_IMAGES } from "@/utils/constants"

const ImagesCarousel: React.FC = () => {
  return (
    <div className="mt-[74px] mb-[100px] space-y-[10px] sm:space-y-[18px] md:space-y-[32px]">
      <InfiniteCarousel direction="rtl" speed={200}>
        {RTL_IMAGES.concat(RTL_IMAGES).map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-0 sm:px-[18px] md:px-[24px]  mx-[-10px] md:mx-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-[24px] h-[200px] w-[300px] sm:h-[300px] sm:w-[400px]"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteCarousel>

      <InfiniteCarousel direction="ltr" speed={200}>
        {LTR_IMAGES.concat(LTR_IMAGES).map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-0 sm:px-[18px] md:px-[24px]  mx-[-10px] md:mx-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-[24px] h-[200px] w-[300px] sm:h-[300px] sm:w-[400px]"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  )
}

export default ImagesCarousel
