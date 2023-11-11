import React from 'react'

const AdvantageItem = ({ children }) => {
  return (
    <div className='flex items-center'>
        <div className='h-3 w-3 rounded-full bg-brightRed'></div>
        <div className='text-white ml-3'>{children}</div>
    </div>
  )
}

export default AdvantageItem