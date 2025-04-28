import React from 'react'
import SecondSection from '../Components/TopSectionPage/SecondSection'
import FullSection from '../Components/ServicePage/FullSection'
import RentAndBuy from '../Components/MainPage/RentAndBuy'
import AboutSection from '../Components/MainPage/AboutSection'
import FourthSection from '../Components/MainPage/FourthSection'
import Testimonials from '../Components/MainPage/Testimonials'
import ChooseQuality from '../Components/MainPage/ChooseQuality'
import LastSection from '../Components/MainPage/LastSection'

function HomePage() {
  return (
   
    <>
    <div>
        <SecondSection />
        <FullSection />
        <RentAndBuy />
        <AboutSection />
        <FourthSection />
        <Testimonials />
        <ChooseQuality />
        <LastSection />
    </div>

   
      
    </>
  )
}

export default HomePage
