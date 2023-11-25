import React, { useState } from 'react'
import { ReactComponent as BurgerLogo } from '../../images/BurgerMenu.svg'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = () => {

  let [modal, setModal] = useState(false)

  return (
    <header className='w-100 bg-black h-[60px] xl:w-[1200px] flex px-6 xl:px-auto items-center place-content-between rounded-b-lg'>
        <div className='whitespace-nowrap'>
          <g className='text-white'>Sound</g><g className='text-brightRed'>Dzign</g>
        </div>
        <button className='z-30 xl:hidden' onClick={() => {setModal(!modal)}}>
          {!modal && <BurgerLogo/>}
          {modal && <MobileMenu modal={modal} setModal={setModal} />}
        </button>
        <div className='hidden xl:table'>
          <ul className='text-white xl:flex space-x-[50px]'>
            <li className="text-white font-bold">About</li>
            <li className="text-white font-bold">Course Details</li>
            <li className="text-white font-bold">Blog</li>
            <li className="text-white font-bold">Testimonials</li>
          </ul>
        </div>
    </header>
  )
}

export default Header