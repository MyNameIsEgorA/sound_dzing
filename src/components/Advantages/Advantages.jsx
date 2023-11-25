import React from 'react'
import Underline from '../Underline/Underline'
import AdvantageItem from '../AdvantageItem/AdvantageItem'
import ImageComponent from '../AdvantagesImg/AdvantagesImg'

const Advantages = () => {
  return (
    <div className='w-full bg-black'>
      <div className='px-8 xl:px-0 xl:max-w-[1200px] py-[60px] xl:py-[80px] text-white xl:mx-auto'>
          <h2 className='text-2xl'>What will you learn?</h2>
          <Underline color="bg-brightRed"/>
          <div className='xl:flex xl:justify-between'>
            <ul className='space-y-6 mt-8 xl:px-5'>
                <AdvantageItem>What are frequencies?</AdvantageItem>
                <AdvantageItem>Using DAW</AdvantageItem>
                <AdvantageItem>Vocals Processing</AdvantageItem>
                <AdvantageItem>Mixing</AdvantageItem>
                <AdvantageItem>Mixing Console</AdvantageItem>
                <AdvantageItem>Mastering</AdvantageItem>
            </ul>
            <div className='hidden xl:table'>
              <ImageComponent/>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Advantages