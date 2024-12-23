"use client"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import ImagesCarousel from "./ImagesCarousel"

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <ImagesCarousel />
      <Footer />
    </div>
  )
}

export default LandingPage
