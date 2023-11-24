import React from 'react'
import Underline from '../Underline/Underline'
import CommentsItem from '../CommentsItem/CommentsItem';

import { CommentsData } from './CommetsData';

const Comments = () => {

    let CommentsItems = [];

    CommentsData.forEach(el => CommentsItems.push(
        <CommentsItem img={el.img} name={el.name} description={el.description}/>
    ))

    return (
        <div className='conrainer px-8 py-[60px] bg-almost_black text-white'>
            <h2 className=' text-2xl text-center'>What our students say?</h2>
            <Underline color="bg-brightRed mx-auto"/>
            <div className="mt-10 space-y-[60px]">
                {CommentsItems}
            </div>
        </div>
    )
}

export default Comments