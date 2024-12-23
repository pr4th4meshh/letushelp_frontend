"use client"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import ImagesCarousel from "./ImagesCarousel"
import QuotesComponent from "./Quotes"

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <ImagesCarousel />
      <QuotesComponent />
      <Footer />
    </div>
  )
}

export default LandingPage
