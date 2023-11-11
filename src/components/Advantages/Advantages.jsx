import React from 'react'
import Underline from '../Underline/Underline'
import AdvantageItem from '../AdvantageItem/AdvantageItem'

const Advantages = () => {
  return (
    <div className='container px-8 relative py-[60px] bg-black text-white'>
        <h2 className='text-2xl'>What will you learn?</h2>
        <Underline color="bg-brightRed"/>
        <ul className='space-y-6 mt-8 px-5'>
            <AdvantageItem>What are frequencies?</AdvantageItem>
            <AdvantageItem>Using DAW</AdvantageItem>
            <AdvantageItem>Vocals Processing</AdvantageItem>
            <AdvantageItem>Mixing</AdvantageItem>
            <AdvantageItem>Mixing Console</AdvantageItem>
            <AdvantageItem>Mastering</AdvantageItem>
        </ul>
    </div>
  )
}

export default Advantages