import React, { useState } from 'react'

import PostsData from './PostsData'
import PostsItem from '../PostsItem/PostsItem';

const Posts = () => {

    let PostsList = []
  
    PostsData.slice(0,3).forEach(el => PostsList.push(<PostsItem img={el.img} text={el.text} short={el.shortName}/>))

    return (
        <div className="py-[60px] bg-brightRed container px-[32px]">
            <h2>Latest Posts</h2>
            <div className='ml-32px space-y-8'>{PostsList}</div>
        </div>
    )
}

export default Posts