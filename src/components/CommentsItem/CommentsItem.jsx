import React from 'react'

const CommentsItem = (props) => {
  return (
    <div className='flex flex-col items-center xl:items-start mx-auto xl:mx-0'>
        <img className="" src={props.img} alt="" />
        <h4 className='mt-4 xl:mt-0 font-bold text-xl'>{props.name}</h4>
        <div className='text-center xl:text-left mt-2 max-w-[300px]'>{props.description}</div>
    </div>
  )
}

export default CommentsItem