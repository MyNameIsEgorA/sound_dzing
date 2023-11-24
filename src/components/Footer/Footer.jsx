import React from 'react'
import FacebookLogo from '../../images/Facebook Logo.png'
import TwitterLogo from '../../images/Twitter Logo.png'
import InstagramLogo from '../../images/Instagram Logo.png'

const Footer = () => {
  return (
    <div className='container pl-8 pt-[50px] bg-black text-white'>
        <g className='text-white'>Sound</g><g className='text-brightRed'>Dzign</g>
        <div className='flex space-x-4 mt-8'>
            <img src={FacebookLogo} alt="" />
            <img src={TwitterLogo} alt="" />
            <img src={InstagramLogo} alt="" />
        </div>
        <div className='mt-10'>
            <h3 className='text-red text-xl'>Quick Links</h3>
            <div>
                <div className='mt-2 pl-4'>Blog</div>
                <div className='mt-1 pl-4'>Privacy Policy</div>
            </div>
        </div>
        <div className='mt-10'>
            <h3 className='text-red text-xl'>Contact ME</h3>
            <div>
                <div className='mt-2 pl-4'>8 (921) 590-19-73</div>
                <div className='mt-1 pl-4'>eanahin8v@mail.ru</div>
            </div>
        </div>
        <div className='mt-10 pb-12'>This website is created by Egor Anakhin</div>
    </div>
  )
}

export default Footer