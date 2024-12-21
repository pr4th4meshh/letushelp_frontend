import React, { useState } from "react"
import PrimaryButton from "./PrimaryButton"
import Image from "next/image"
import Logo from "../../public/LetUsHelpLogo.png"
import { NAV_ITEMS } from "@/utils/constants"

const Header = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(0)
  return (
    <header className="w-full fixed top-0 z-[999] flex justify-center bg-transparent mt-[50px]">
      <div className="container flex items-center justify-between pl-[15px] p-[10px] h-[92px] bg-[#061257] text-white rounded-[100px] max-w-screen-xl mx-[137px]">
        {/* Logo div  */}
        <div className="flex items-center">
          <Image src={Logo} height={70} width={70} alt="LetUsHelp Logo" />
          <h1 className="text-[24px] ml-[12px] leading-[30px] tracking-wider font-clashBold">
            LetUsHelp
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-[32px]">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setSelectedNavItem(index)}
              className={`text-[16px] font-[700] leading-normal transition-all duration-300 ${
                selectedNavItem === index
                  ? "bg-white text-black hover:text-black rounded-[60px] py-[15px] px-[32px]"
                  : "text-white hover:text-white/80 py-[15px] px-[32px]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Sign Up Button */}
        <div>
          <PrimaryButton
            title="Sign In"
            className="text-[18px] px-[40px] h-full bg-[#3A88FF]"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
