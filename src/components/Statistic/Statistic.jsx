import React from 'react'
import Student from '../../images/student.png'
import Player from '../../images/video.png'
import StatisticBlock from '../StatisticBlock/StatisticBlock'
import Angle from '../Angle/Angle'

const Statistic = () => {
  
    return (
    <div className='relative bg-almost_black text-white py-[90px] container'>
        <div className='absolute top-[60px] left-[32px]'>
            <Angle/>
        </div>
        <div className='space-y-[80px]'>
            <StatisticBlock heading='23.000+' description='Students' img={<img src={Student}/>}/> 
            <StatisticBlock heading='26 HRS' description='Video Content' img={<img src={Player}/>}/> 
        </div>
    </div>
  )
}

export default Statistic