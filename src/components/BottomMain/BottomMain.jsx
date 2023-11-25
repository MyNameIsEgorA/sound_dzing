import React from 'react'
import Underline from '../Underline/Underline'

const BottomMain = () => {
  return (
      <div className='max-w-[453px] xl:min-h-[350px] bg-cover bg-phone-hero bg-no-repeat text-white px-8 py-6 flex-col flex'>
        <h2 className='xl:mt-12 font-extrabold text-2xl'>Sound Design Masterclass</h2>
        <Underline color="bg-brightRed" />
        <h1 className='text-3xl mt-[28px] mb-8 xl:mt-8'>{"Learn the Art of Sound Design"}</h1>
        <a href="123" className='bg-brightRed px-6 py-2 rounded-full w-fit xl:py-4'>Demo Lesson</a>
      </div>
  )
}

export default BottomMain