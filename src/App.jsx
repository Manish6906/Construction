import { BrowserRouter, Routes } from "react-router-dom"
import AboutSection from "./Components/MainPage/AboutSection"
import ChooseQuality from "./Components/MainPage/ChooseQuality"
import RentAndBuy from "./Components/MainPage/RentAndBuy"
import Testimonials from "./Components/MainPage/Testimonials"
import Navbar from "./Components/Navbar/Navbar"
import FullSection from "./Components/ServicePage/FullSection"
import FirstSection from "./Components/TopSectionPage/FirstSection"
import SecondSection from "./Components/TopSectionPage/SecondSection"
import FourthSection from "./Components/MainPage/FourthSection"


function App() {
  

  return (
    <>
<<<<<<< HEAD
      {/* <Navbar />
<SecondSection />
    <FullSection />
    <RentAndBuy />
    <AboutSection /> */}
    <ChooseQuality />
=======
    <BrowserRouter>
      
      <Navbar />
<SecondSection />
    <FullSection />
    <RentAndBuy />
    <AboutSection />
      <FourthSection />
    </BrowserRouter>
      
>>>>>>> e9b0bb47341585b7cf57781065ca401724da3036
   
     
    </>
  )
}

export default App
