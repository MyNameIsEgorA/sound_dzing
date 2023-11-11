import React, { useState } from 'react'
import { ReactComponent as BurgerLogo } from '../../images/BurgerMenu.svg'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = () => {

  let [modal, setModal] = useState(false)

  return (
    <header className='w-100 bg-black h-[60px] flex px-6 items-center place-content-between rounded-b-lg'>
        <div className='whitespace-nowrap'>
          <g className='text-white'>Sound</g><g className='text-brightRed'>Dzign</g>
        </div>
        <button className='z-30' onClick={() => {setModal(!modal)}}>
          {!modal && <BurgerLogo/>}
          {modal && <MobileMenu modal={modal} setModal={setModal} />}
        </button>
    </header>
  )
}

export default Header