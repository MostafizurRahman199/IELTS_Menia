import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import SpecialFeatures from '../components/SpecialFeatures/SpecialFeatures'
import SomePopularCourses from '../components/SomePopularCourses/SomePopularCourses'
import ProvideYou from '../components/ProvideYou/ProvideYou'

const LandingPage = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <SpecialFeatures></SpecialFeatures>
        <SomePopularCourses></SomePopularCourses>
        <ProvideYou></ProvideYou>
    </div>
  )
}

export default LandingPage