import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import SpecialFeatures from '../components/SpecialFeatures/SpecialFeatures'
import SomePopularCourses from '../components/SomePopularCourses/SomePopularCourses'
import ProvideYou from '../components/ProvideYou/ProvideYou'
import OwnPackage from '../components/OwnPackage/OwnPackage'



const LandingPage = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <SpecialFeatures></SpecialFeatures>
        <SomePopularCourses></SomePopularCourses>
        <ProvideYou></ProvideYou>
       <OwnPackage></OwnPackage>
    </div>
  )
}

export default LandingPage