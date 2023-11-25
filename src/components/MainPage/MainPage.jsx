import React from 'react'

import Header from '../Header/Header'
import BottomMain from '../BottomMain/BottomMain'

const MainPage = () => {
  return (
    <section className='px-8 xl:px-auto xl:mx-auto bg-hero xl:bg-contain bg-center pt-4 relative bg-cover min-h-[812px] flex flex-col justify-between xl:min-h-screen'>
        <div className="self-start w-full max-w-[1200px] mx-auto">
            <Header />
        </div>
        <div className="self-end w-full max-w-[1200px] mx-auto">
            <BottomMain />
        </div>
    </section>
  )
}

export default MainPage