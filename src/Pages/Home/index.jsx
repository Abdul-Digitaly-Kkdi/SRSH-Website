import React from 'react'
import LandingCarousel from './Components/LandingPage'
import FeatureCards from './Components/FeatureCards'
import HospitalDetails from './Components/HospitalDetails'
import SurgeryStats from './Components/Counter'
import SpecialitiesGrid from './Components/SpecialitiesGrid'
import Review from './Components/Reviews'
import OurDoctor from './Components/OurDocter'
import Insurance from './Components/Insurance'
import TestimonialPage from './Components/Testimoniel'

const Home = () => {
    return (
        <div className=''>
            <LandingCarousel />
            <FeatureCards />
            <HospitalDetails />
            <SurgeryStats />
            <SpecialitiesGrid />
            <Review />
            <TestimonialPage />
            <OurDoctor />
            <Insurance />

        </div>
    )
}

export default Home
