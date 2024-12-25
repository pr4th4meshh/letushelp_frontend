import React, { useState, useEffect } from "react"
import SearchIcon from "../../../../../public/search-icon.svg"
import Image from "next/image"

const SEARCH_TERMS = [
  "Mentoring",
  "Food Donation",
  "Medical Checkups",
  "Beach Cleanups",
]

const SearchOpportunity = () => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0)

  // Cycle through search terms every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTermIndex((prevIndex) => (prevIndex + 1) % SEARCH_TERMS.length)
    }, 1000) // 2 seconds interval

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center mb-[120px] sm:px-0 px-2">
      <h1 className="text-primary text-[32px] md:text-[40px] lg:text-[50px] text-center font-[600] tracking-[0.5px] leading-normal font-clashBold">
        Find Your Perfect <br className="md:block hidden" />
        Volunteering Opportunity in Seconds!
      </h1>

      <p className="text-primary text-[20px] text-center sm:text-[24px] font-[600] tracking-[0.5px]">
        Type in your passion, cause, or location and start making an impact
        today!
      </p>

      <div className="relative flex items-center">
        {/* Search Input */}
        <form action="POST">
          <input
            type="text"
            className="mt-[60px] w-[350px] sm:w-[600px] md:w-[800px] bg-[#CEE0FE] rounded-[30px] py-[10px] pl-[20px] pr-[20px] placeholder:text-primary/50 text-[16px] font-[500]"
            placeholder={`Search for "${SEARCH_TERMS[currentTermIndex]}"`}
          />
        </form>

        {/* Search Icon inside the input box */}
        {/* Position top = 60px + 10px */}
        <button
          type="submit"
          className="absolute right-[20px] top-[70px] cursor-pointer"
        >
          <Image
            src={SearchIcon}
            alt="Search Icon"
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>
    </div>
  )
}

export default SearchOpportunity
