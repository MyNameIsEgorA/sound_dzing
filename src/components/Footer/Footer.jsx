import React from 'react'
import FacebookLogo from '../../images/Facebook Logo.png'
import TwitterLogo from '../../images/Twitter Logo.png'
import InstagramLogo from '../../images/Instagram Logo.png'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='pl-8 pt-[50px] text-white xl:flex xl:w-[1200px] xl:mx-auto xl:justify-between'>
            <div>
                <g className='text-white'>Sound</g><g className='text-brightRed'>Dzign</g>
                <div className='flex space-x-4 xl:space-x-0 mt-2'>
                    <img src={FacebookLogo} alt="" />
                    <img src={TwitterLogo} alt="" />
                    <img src={InstagramLogo} alt="" />
                </div>
            </div>
            <div className='mt-10 xl:mt-0'>
                <h3 className='text-red text-xl'>Quick Links</h3>
                <div>
                    <div className='mt-2 pl-4'>Blog</div>
                    <div className='mt-1 pl-4'>Privacy Policy</div>
                </div>
            </div>
            <div className='mt-10 xl:mt-0'>
                <h3 className='text-red text-xl'>Contact ME</h3>
                <div>
                    <div className='mt-2 pl-4'>8 (921) 590-19-73</div>
                    <div className='mt-1 pl-4'>eanahin8v@mail.ru</div>
                </div>
            </div>
        </div>
        <div className='mt-20 pb-12 text-white text-center'>This website is created by Egor Anakhin</div>
    </div>
  )
}

export default Footer