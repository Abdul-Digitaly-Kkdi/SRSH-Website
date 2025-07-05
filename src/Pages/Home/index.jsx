import React from 'react'
import LandingCarousel from './Components/LandingPage'
import FeatureCards from './Components/FeatureCards'
import HospitalDetails from './Components/HospitalDetails'
import SurgeryStats from './Components/Counter'
import SpecialitiesGrid from './Components/SpecialitiesGrid'
import Review from './Components/Reviews'
import OurDocter from './Components/OurDocter'

const Home = () => {
    return (
        <div className=''>
            <LandingCarousel />
            <FeatureCards />
            <HospitalDetails />
            <SurgeryStats />
            <SpecialitiesGrid />
            <Review />
            <OurDocter />
        </div>
    )
}

export default Home
