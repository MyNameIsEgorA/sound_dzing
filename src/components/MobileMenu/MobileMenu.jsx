import React from 'react'
import { ReactComponent as CloseLogo } from '../../images/CloseMenu.svg'

const MobileMenu = (props) => {
  return (
    <div className='xl:hidden z-20 absolute top-0 left-0 right-0 bg-black text-white flex'>
        <div className='ml-5 flex flex-col my-10 text-left space-y-5 text-2xl underline underline-offset-4'>
            <a href="123">About</a>
            <a href="123">Course Details</a>
            <a href='123'>Blog</a>
            <a href="123">Tesimonials</a>
            </div>
        <button className='absolute top-5 right-5' onClick={() => {props.setModal(!props.modal)}}>
          <CloseLogo/>
        </button>
    </div>
  )
}

export default MobileMenu