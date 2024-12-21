import Image from "next/image"
import React from "react"
import Logo from "../../public/LetUsHelpLogo.png"
import FooterFlowersImage from "../../public/FlowersIllustration.svg"
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from "@/utils/constants"

const Footer = () => {
  return (
    <footer className="bg-[#8890C233] h-[464px] py-[49px] relative self-stretch">
      <div className="mx-[80px]">
        <div className="flex flex-row">
          <div className="flex flex-1">
            {/* Logo Section */}
            <div className="flex items-center absolute top-[48px]">
              <div className="text-primary uppercase font-[600] text-[40px] leading-[40px] flex font-clash items-center">
                <Image
                  src={Logo}
                  height={70}
                  width={70}
                  alt="LetUsHelp Logo"
                  className="mr-[16px]"
                />
                letushelp
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {FOOTER_LINKS.map((section) => (
                <div key={section.title} className="">
                  <h3 className="text-[20px] font-[600] text-primary mb-[26px]">
                    {section.title}
                  </h3>
                  <ul className="space-y-[24px]">
                    {section.links.map((link) => (
                      <li key={link.name} className="">
                        <a
                          href={link.href}
                          className="text-primary text-[16px]"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Media and Copyright */}
            <div className="flex items-center mt-32 gap-[300px]">
              <p className="text-primary leading-[14px] font-[400] text-[14px]">
                ©2024 LetUSHelp. All rights reserved
              </p>
              <div className="flex space-x-[24px] items-center">
                {FOOTER_SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-primary hover:text-gray-900"
                  >
                    <Image
                      src={link.image}
                      alt={link.name}
                      height={24}
                      width={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flowers Illustration */}
      <Image
        src={FooterFlowersImage}
        alt="Footer Flowers Image"
        className="absolute bottom-0 left-0 h-[286px] w-[442px]"
      />
    </footer>
  )
}

export default Footer
