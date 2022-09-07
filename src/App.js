import React  from 'react'
import Navbare from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Header from "./Components/Home/Header/Header"
import Services from './Components/Home/Services/Services'
import Features from './Components/Home/Features/Features'
import Portfolio from './Components/Home/portfoli/Portfolio'
import Pricing from './Components/Home/pricing/Pricing'
import People from './Components/Home/people/People'
import Work from './Components/Home/work/Work'
import Team from './Components/Home/team/Team'
import Profile from './Components/Home/profile/Profile'
import Blog from './Components/Home/blog/Blog'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import {BrowserRouter , Route ,Routes } from 'react-router-dom'
function App (){

  return(
    
    <BrowserRouter>
    <Navbare />
    <Header  />
    <Services />
    <Features />
    <Portfolio />
    <Pricing />
    <People />
    <Work />
    <Team />
    <Profile />
    <Blog />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home/>} /> */}
        {/* <Route path="/contact" element={<Contact />}/> */}
      {/* </Routes> */}
      <Contact />
        <Footer />
    </BrowserRouter>
  
  )
}

export default App