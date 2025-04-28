import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutSection from "./Components/MainPage/AboutSection"
import ChooseQuality from "./Components/MainPage/ChooseQuality"
import RentAndBuy from "./Components/MainPage/RentAndBuy"
import Testimonials from "./Components/MainPage/Testimonials"
import Navbar from "./Components/Navbar/Navbar"
import FullSection from "./Components/ServicePage/FullSection"
import SecondSection from "./Components/TopSectionPage/SecondSection"
import FourthSection from "./Components/MainPage/FourthSection"
import LastSection from "./Components/MainPage/LastSection"
import Footer from "./Components/Footer/Footer"
import HomePage from "./Pages/HomePage"


function App() {
  

  return (
    <>
     
   
    <BrowserRouter>
      
      <Navbar />
      <Routes >
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
      
   
     
    </>
  )
}

export default App
