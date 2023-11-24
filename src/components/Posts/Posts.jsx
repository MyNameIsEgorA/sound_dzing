import React, { useState } from 'react'

import PostsData from './PostsData'
import PostsItem from '../PostsItem/PostsItem'
import Underline from '../Underline/Underline'

const Posts = () => {

    let PostsList = []

    const [isClicked, setIsClicked] = useState(false)

    const handleButtonClick = () => {
        setIsClicked(!isClicked)
    }
    
    if (isClicked) {
        PostsData.forEach(el => PostsList.push(<PostsItem img={el.img} text={el.text} short={el.shortName}/>))
    } else {
        PostsData.slice(0,3).forEach(el => PostsList.push(<PostsItem img={el.img} text={el.text} short={el.shortName}/>))
    }

    return (
        <div className="py-[60px] bg-brightRed container mx-auto">
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl text-white'>Latest Posts</h2>
                <Underline color="bg-yellow"/>
            </div>
            <div className='space-y-8 mt-10'>{PostsList}</div>
            <div className='flex justify-center'>
                <button className='py-1 px-8 bg-white rounded-xl mt-6' onClick={handleButtonClick}>
                {isClicked ? 'Hide post' : 'Show all posts'}
                </button>
            </div>
        </div>
    )
}

export default Posts