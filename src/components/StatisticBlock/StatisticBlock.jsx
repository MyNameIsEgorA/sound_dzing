import React from 'react'

const StatisticBlock = (props) => {
  return (
    <div className='mx-auto text-center'>
        <div className='flex justify-center'>
            {props.img}
        </div>
        <div className=''>
            <h3 className='text-3xl'>{props.heading}</h3>
            <h5 className='text-xl'>{props.description}</h5>
        </div>
    </div>
  )
}

export default StatisticBlock