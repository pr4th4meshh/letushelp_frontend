import React from "react"
import TopRightArrow from "../../public/top-right-arrow.svg"
import Image from "next/image"

const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px] mb-[60px] relative">
      {/* Newsletter Heading */}
      <h1 className="text-primary text-center font-clashBold text-[36px] sm:text-[50px] font-[600] leading-normal tracking-[0.5px]">
        Subscribe to our newsletter
      </h1>

      {/* Input field */}
      <div className="relative mt-[14px]">
        <form action="POST">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="border-b-[2px] text-primary/50 bg-transparent py-[8px] pl-[16px] pr-[48px] rounded-md"
          />
        </form>
        <button
          type="submit"
          className="absolute top-0 right-0 bottom-0  text-black rounded-r-md"
        >
          <Image
            src={TopRightArrow}
            alt="Top Right Arrow"
            className="w-[24px] h-[24px]"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
