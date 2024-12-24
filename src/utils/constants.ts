import carouselImage0 from "../../public/CarouselImage0.svg"
import carouselImage1 from "../../public/CarouselImage1.svg"
import carouselImage2 from "../../public/CarouselImage2.svg"
// import carouselImage3 from "../../public/CarouselImage3.svg"
import carouselImage4 from "../../public/CarouselImage4.svg"
import carouselImage5 from "../../public/CarouselImage5.svg"
import carouselImage6 from "../../public/CarouselImage6.svg"

// Nav items data
export const NAV_ITEMS = [
  { name: "Explore Opportunity", href: "#" },
  { name: "Post Opportunity", href: "#" },
  { name: "The Path", href: "#" },
  { name: "Fundraisers", href: "#" },
]

// Footer links data
export const FOOTER_LINKS = [
  {
    title: "Important links",
    links: [
      { name: "Opportunity page", href: "#" },
      { name: "How it works", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Popular Listing", href: "#" },
    ],
  },
  {
    title: "Pages",
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Post an Opportunity", href: "#" },
      { name: "Food Donations", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Grievance", href: "#" },
    ],
  },
]

export const FOOTER_SOCIAL_LINKS = [
  { name: "Facebook", image: "/facebook.svg", href: "#" },
  { name: "Twitter", image: "/twitter.svg", href: "#" },
  { name: "Youtube", image: "/youtube.svg", href: "#" },
  { name: "Linkedin", image: "/linkedin.svg", href: "#" },
]

// Infinite images carousel data
export const RTL_IMAGES = [
  { src: carouselImage0, alt: "Carousel Image 0" },
  { src: carouselImage1, alt: "Carousel Image 1" },
  { src: carouselImage2, alt: "Carousel Image 2" },
  // { src: carouselImage3, alt: "Carousel Image 3" },
]

export const LTR_IMAGES = [
  { src: carouselImage4, alt: "Carousel Image 4" },
  { src: carouselImage5, alt: "Carousel Image 5" },
  { src: carouselImage6, alt: "Carousel Image 6" },
]

// Statistics component data
export const STATISTICS_DATA = [
  { id: 1, title: "Food Donations", value: "256k+" },
  { id: 2, title: "Funds Raised", value: "20M+" },
  { id: 3, title: "Opportunities", value: "300k+" },
  { id: 4, title: "Hours Volunteered", value: "1450k+" },
]

// STEPS data
export const STEPS = [
  {
    number: "1",
    title: "Connect",
    description:
      "Build bridges and discover opportunities to unite for a cause.",
    align: "right",
  },
  {
    number: "2",
    title: "Volunteer",
    description: "Lend a helping hand and make a real difference today.",
    align: "left",
  },
  {
    number: "3",
    title: "Impact",
    description: "Transform lives and leave a lasting legacy of kindness.",
    align: "right",
  },
]
