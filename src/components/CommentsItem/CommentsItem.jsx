import React from 'react'

const CommentsItem = (props) => {
  return (
    <div className='flex flex-col items-center mx-auto'>
        <img className="" src={props.img} alt="" />
        <h4 className='mt-4 font-bold text-xl'>{props.name}</h4>
        <div className='text-center mt-2'>{props.description}</div>
    </div>
  )
}

export default CommentsItem