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
import Location from "../../Pages/Contact/Location"
import Appoinment from '../Contact/Appoinment'


const Home = () => {
    return (
        <div className='mb-5'>
            <LandingCarousel />
            <FeatureCards />
            <HospitalDetails />
            <SurgeryStats />
            <SpecialitiesGrid />
            <Review />
            <TestimonialPage />
            <OurDoctor />
            <Insurance />
            <Appoinment />
            <Location />

        </div>
    )
}

export default Home
