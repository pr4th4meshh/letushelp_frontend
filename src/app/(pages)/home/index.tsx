"use client"
import React from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/app/(pages)/home/sections/Hero"
import ImagesCarousel from "@/app/(pages)/home/sections/Images"
import QuotesComponent from "@/app/(pages)/home/sections/Quotes"
import Statistics from "@/app/(pages)/home/sections/Statistics"
import PostTask from "@/app/(pages)/home/sections/PostTask"
import ThePath from "@/app/(pages)/home/sections/ThePath"
import SearchOpportunity from "@/app/(pages)/home/sections/SearchOpportunity"
import Popular from "@/app/(pages)/home/sections/Popular"
import Testimonials from "../../../components/Testimonials"

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F6]">
      <Header />
      <Hero />
      <ImagesCarousel />
      <QuotesComponent />
      <Statistics />
      <PostTask />
      <ThePath />
      <SearchOpportunity />
      <Popular />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage
