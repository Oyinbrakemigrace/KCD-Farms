import React from 'react'
import HeroSection from '../components/Home Components/HeroSection'
import WhyChooseUs from '../components/Home Components/WhyChooseUs'
import Experience from '../components/Home Components/Experience'
import Explore from '../components/Home Components/Explore'
import Community from '../components/Home Components/Community'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <div className='my-14 px-6'>
        <Experience />
      </div>
      <div className='my-14 px-6 py-12 bg-farm-green/20'>
        <WhyChooseUs />
      </div>
      <div className='my-14 px-6'>
        <Explore />
      </div>
      <div className='mt-14 px-6 py-12 bg-farm-green/20'>
        <Community />
      </div>
    </div>
  )
}

export default HomePage
