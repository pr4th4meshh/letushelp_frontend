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
      "Build bridges and discover\n opportunities to unite for a cause.",
    align: "right",
  },
  {
    number: "2",
    title: "Volunteer",
    description: "Lend a helping hand and\n make a real difference today.",
    align: "left",
  },
  {
    number: "3",
    title: "Impact",
    description: "Transform lives and leave a\n lasting legacy of kindness.",
    align: "right",
  },
]

// Popular events data
export const POPULAR_EVENTS_CARD_DATA = [
  {
    id: 1,
    src: "/popular-image-1.svg",
    category: "Food Donation",
    categoryIcon: "/search-icon.svg",
    viewers: 100,
    location: "Manhattan",
    title: "Food Donation Event",
    description:
      "Spend 2 hours a week mentoring underprivileged children and help them achieve their dreams.",
  },
  {
    id: 2,
    src: "/popular-image-1.svg",
    category: "Food Donation",
    categoryIcon: "/search-icon.svg",
    viewers: 100,
    location: "Manhattan",
    title: "Food Donation Event",
    description:
      "Spend 2 hours a week mentoring underprivileged children and help them achieve their dreams.",
  },
  {
    id: 3,
    src: "/popular-image-1.svg",
    category: "Food Donation",
    categoryIcon: "/search-icon.svg",
    viewers: 100,
    location: "Manhattan",
    title: "Food Donation Event",
    description:
      "Spend 2 hours a week mentoring underprivileged children and help them achieve their dreams.",
  },
  {
    id: 4,
    src: "/popular-image-1.svg",
    category: "Food Donation",
    categoryIcon: "/search-icon.svg",
    viewers: 100,
    location: "Manhattan",
    title: "Food Donation Event",
    description:
      "Spend 2 hours a week mentoring underprivileged children and help them achieve their dreams.",
  },
]

// TESTIMONIALS_DATA
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    image: "/testimonial-image-1.svg",
    name: "Rachel Smith",
    title: "Environmental Activist",
    rating: 5,
    feedback:
      "From tree plantation drives to community cleanups, I’ve been part of multiple projects, and each one taught me something new. It feels great to know that I’m contributing to a sustainable future.",
  },
  {
    id: 2,
    image: "/testimonial-image-2.svg",
    name: "Chris Adams",
    title: "Environmental Activist",
    rating: 3.5,
    feedback:
      "I joined the Clean Beaches Initiative, and it was amazing to see how a small group of people could make such a huge difference. I’ve learned so much about environmental conservation and met some incredible, like-minded people.",
  },
  {
    id: 3,
    image: "/testimonial-image-1.svg",
    name: "Michelle Reed",
    title: "Volunteer",
    rating: 5,
    feedback:
      "Volunteering has been an incredibly rewarding experience. Working together as a team to make a real difference in our community is inspiring.",
  },
  {
    id: 4,
    image: "/testimonial-image-2.svg",
    name: "Junaid Shaikh",
    title: "Volunteer",
    rating: 5,
    feedback:
      "Volunteering has been an incredibly rewarding experience. Working together as a team to make a real difference in our community is inspiring.",
  },
]

// Hero Testimonials Data
export const HERO_TESTIMONIALS = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Volunteer",
    feedback:
      "Distributing food to families in need not only changed their lives but also changed mine. It was humbling to be part of a community that truly cares about helping others.",
    rating: 5,
    avatar: "/hero-testi-avatar-0.svg",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Environmental Advocate",
    feedback:
      "Spending time at the animal shelter, caring for and rescuing stray dogs, has brought so much joy into my life. The process was well-organized, and I can’t wait to continue making a difference.",
    rating: 5,
    avatar: "/hero-testi-avatar-1.svg",
  },
  {
    id: 3,
    name: "Ayesha K.",
    title: "Environmental Enthusiast",
    feedback:
      "I joined the Clean Beaches Initiative, and it was amazing to see how a small group of people could make such a huge difference. I’ve learned so much about environmental conservation and met some incredible, like-minded people.",
    rating: 4.5,
    avatar: "/hero-testi-avatar-0.svg",
  },
  {
    id: 4,
    name: "John Davis",
    title: "Volunteer for Education Initiatives",
    feedback:
      "Volunteering as a tutor has been one of the most fulfilling experiences of my life. Seeing the kids' faces light up when they understand a concept is priceless. This platform made it so easy to get involved and make an impact.",
    rating: 4.5,
    avatar: "/hero-testi-avatar-1.svg",
  },
]
