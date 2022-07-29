import React from 'react'
import Header from './Components/Header'
import Showcase from './Components/Showcase'
import FeatureSection from './Components/FeatureSection'
import Banner from './Components/Banner'
import Clients from './Components/Clients'
import LowerBanner from './Components/LowerBanner'
import Footer from './Components/Footer'


const App = () => {
  return (
     <>
      <Header/>
      <Showcase/>
      <FeatureSection/>
      <Banner/>
      <Clients/>
      <LowerBanner/>
      <Footer/>
     </>
  )
}

export default App