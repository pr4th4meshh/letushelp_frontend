"use client"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import ImagesCarousel from "./ImagesCarousel"
import QuotesComponent from "./Quotes"
import Statistics from "./Statistics"
import PostTask from "./PostTask"
import ThePath from "./ThePath"
import SearchOpportunity from "./SearchOpportunity"

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <ImagesCarousel />
      <QuotesComponent />
      <Statistics />
      <PostTask />
      <ThePath />
      <SearchOpportunity />
      <Footer />
    </div>
  )
}

export default LandingPage
