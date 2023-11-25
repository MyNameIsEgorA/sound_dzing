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
        <div className='bg-almost_black'>
            <div className='mx-auto py-[60px] bg-almost_black text-white xl:w-[1200px]'>
                <h2 className=' text-2xl'>What our students say?</h2>
                <Underline color="bg-brightRed"/>
                <div className="mt-10 space-y-[60px] xl:flex xl:space-y-0 xl:justify-between">
                    {CommentsItems}
                </div>
            </div>
        </div>
    )
}

export default Comments