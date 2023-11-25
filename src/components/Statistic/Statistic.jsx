import React from 'react'
import Student from '../../images/student.png'
import Player from '../../images/video.png'
import StatisticBlock from '../StatisticBlock/StatisticBlock'
import Angle from '../Angle/Angle'

const Statistic = () => {
  
    return (
    <div className='bg-almost_black mx-auto text-center'>
        <div className='relative text-white py-[90px] max-w-[1200px] mx-auto'>
            <div className='xl:table absolute top-10 left-10 xl:top-auto xl:left-auto'>
                <Angle/>
            </div>
            <div className='space-y-[80px] xl:flex xl:space-y-0'>
                <StatisticBlock heading='23.000+' description='Students' img={<img src={Student}/>}/> 
                <StatisticBlock heading='26 HRS' description='Video Content' img={<img src={Player}/>}/> 
            </div>
        </div>
    </div>
  )
}

export default Statistic