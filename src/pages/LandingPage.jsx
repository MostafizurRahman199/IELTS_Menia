import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import SpecialFeatures from '../components/SpecialFeatures/SpecialFeatures'
import SomePopularCourses from '../components/SomePopularCourses/SomePopularCourses'

const LandingPage = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <SpecialFeatures></SpecialFeatures>
        <SomePopularCourses></SomePopularCourses>
    </div>
  )
}

export default LandingPage