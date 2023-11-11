import React from 'react'

const PostsItem = (props) => {
  return (
    <div className='mx-auto bg-white rounded-xl relative'>
        <img src={props.img} alt=""/>
        <div className='py-6 px-4 text-lg font-bold'>How To Use Drum Machine in Logic Pro X</div>
        <div className='absolute top-2 right-2 px-4 bg-white rounded-3xl font-bold'>{props.short}</div>
    </div>
  )
}

export default PostsItem