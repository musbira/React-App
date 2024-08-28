import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Carousels from '../../components/carousel/Carousels'
import Menu from '../../components/menu/Menu'
import Services from '../../components/services/Services'
import Welcome from '../../components/welcome/Welcome'
import Skewdevider from '../../components/skewdevider/Skewdivider'
import Testimonials from '../../components/testimonials/Testimonials'
import Contact from '../../components/contact/Contact'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousels/>
      <Welcome/>
      <Menu/>
      <Skewdevider/>
      <Services/>
      <Testimonials/>
      <Contact/>

        
    </div>
  )
}

export default Home