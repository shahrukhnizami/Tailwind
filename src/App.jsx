import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/Header'

import Footer from './componenets/Footer'
import Testimonial from './componenets/Testimonial'
import Hero_section from './componenets/Hero_section'

export default function App() {
  const user={Login:true,}
  return (
    <>
    <Header user={user}/>
   <Hero_section/>
   <Testimonial/>
   <Footer/>
   
    </>
     
    
  )
}
