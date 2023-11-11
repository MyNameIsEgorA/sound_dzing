import React from 'react'

import Header from '../Header/Header'
import BottomMain from '../BottomMain/BottomMain'

const MainPage = () => {
  return (
    <section className='container mx-auto px-8 bg-mobile-hero pt-4 relative bg-cover min-h-[812px]'>
        <Header/>
        <BottomMain/>
    </section>
  )
}

export default MainPage