import React from 'react'

const PostsItem = (props) => {
  return (
    <div className='mx-auto bg-white rounded-xl relative w-[311px]'>
        <img className='' src={props.img} alt=""/>
        <div className='py-6 px-4 text-lg font-bold'>{props.text}</div>
        <div className='absolute top-2 right-2 px-4 bg-white rounded-3xl font-bold'>{props.short}</div>
    </div>
  )
}

export default PostsItem