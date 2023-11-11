import React from 'react'
import Underline from '../Underline/Underline'

const BottomMain = () => {
  return (
    <div className='flex flex-col absolute bottom-0 bg-cover bg-phone-hero bg-no-repeat text-white px-8 py-6 left-5 right-5'>
        <h2 className=''>Sound Design Masterclass</h2>
        <Underline color="bg-brightRed" />
        <h1 className='text-3xl mt-[28px] mb-8'>{"Learn the Art of Sound Design"}</h1>
        <a href="123" className='bg-brightRed px-6 py-2 rounded-full w-fit'>Demo Lesson</a>
    </div>
  )
}

export default BottomMain