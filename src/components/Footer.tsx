import Image from "next/image"
import React from "react"
import Logo from "../../public/LetUsHelpLogo.png"
import FooterFlowersImage from "../../public/FlowersIllustration.svg"
import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from "@/utils/constants"

const Footer = () => {
  return (
    <footer className="bg-[#8890C233] min-h-[464px] py-8 md:py-12 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="text-primary uppercase font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight flex items-center font-clash">
              <Image
                src={Logo}
                height={70}
                width={70}
                alt="LetUsHelp Logo"
                className="mr-3 h-10 w-10 sm:h-12 sm:w-12 md:h-[70px] md:w-[70px]"
              />
              letushelp
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-grow md:ml-8 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {FOOTER_LINKS.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-primary mb-4 text-center md:text-left">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-center md:text-left">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-primary text-sm hover:underline"
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
            <div className="flex flex-col items-center md:flex-row md:justify-between mt-8 space-y-4 md:space-y-0">
              <p className="text-primary text-xs text-center md:text-left">
                ©2024 LetUSHelp. All rights reserved
              </p>
              <div className="flex space-x-4 items-center">
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
                      className="h-6 w-6"
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
        className="absolute bottom-0 left-0 h-auto w-full max-w-[300px] md:max-w-[442px] pointer-events-none"
      />
    </footer>
  )
}

export default Footer