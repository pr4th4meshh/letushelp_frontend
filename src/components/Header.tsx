import React, { useState } from "react"
import PrimaryButton from "./PrimaryButton"
import Image from "next/image"
import Logo from "../../public/LetUsHelpLogo.png"
import { NAV_ITEMS } from "@/utils/constants"
import Link from "next/link"

const Header = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 z-[999] flex justify-center bg-transparent mt-4 sm:mt-8 md:mt-12 lg:mt-[50px] px-4">
      <div className="container flex items-center justify-between p-2 sm:p-3 md:p-4 lg:p-[10px] lg:pl-[15px] h-16 sm:h-20 md:h-24 lg:h-[92px] bg-[#061257] text-white rounded-full max-w-screen-xl mx-auto">
        {/* Logo div  */}
        <div className="flex items-center">
          <Image
            src={Logo}
            height={40}
            width={40}
            alt="LetUsHelp Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-[70px] lg:w-[70px]"
          />
          <h1 className="text-[18px] sm:text-lg md:text-xl lg:text-2xl ml-2 sm:ml-3 md:ml-4 lg:ml-[12px] leading-tight tracking-wider font-clashBold">
            Let Us Help
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none pr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation for Desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-[32px]">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setSelectedNavItem(index)}
              className={`text-sm xl:text-base font-bold leading-normal px-3 py-2 xl:px-[32px] xl:py-[15px] rounded-full transition-all duration-300 ${
                selectedNavItem === index
                  ? "bg-white text-black hover:text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Sign Up Button for Desktop */}
        <div className="hidden lg:block">
          <Link href={"/login"}>
            <PrimaryButton
              title="Sign In"
              className="text-[18px] px-[40px] h-full bg-[#3A88FF]"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute transition-all duration-300 top-full left-0 right-0 bg-[#061257] mt-2 rounded-b-2xl shadow-lg">
          <nav className="flex flex-col p-4">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setSelectedNavItem(index)
                  setIsMenuOpen(false)
                }}
                className={`text-base font-bold py-3 px-4 rounded-full transition-all duration-300 ${
                  selectedNavItem === index
                    ? "bg-white text-black"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.name}
              </a>
            ))}
            <PrimaryButton
              title="Sign In"
              className="text-[18px] px-[40px] bg-[#3A88FF]"
              onClick={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
