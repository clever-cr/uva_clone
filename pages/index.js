import React from 'react'
import NavBar from '../components/layout/NavBar'
import Current from '../components/sections/Current'
import Hero from '../components/sections/Hero'
import Go from '../components/sections/Go'
import Footer from '../components/layout/Footer'

import News from '../components/sections/News'
const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Current />
      <News />
      <Go />
      <Footer />
    </div>
  )
}

export default index