import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import f from '../assets/f.png';
import youtube from '../assets/youtube.png';
import whitepaper from '../assets/whitepaper.png';



export default function Footer() {
  return (
    <div className="font-inter mt-16">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-inter px-5'>

        <hr className='pb-12 text-red-50'></hr>

        <div className="flex flex-col items-center justify-center gap-y-16 mx-auto">

          <h2 className='md:text-4xl text-2xl font-inter font-semibold text-red-50'>
            “STAY IN TOUCH WITH US & STAY<br></br> UPTO DATE WITH ALL THE NEWS!!”
          </h2>

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='https://twitter.com/RedPEPEx'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='https://t.me/RedPepePortal'>
              <img src={telegram} alt="Telegram" className='' />
            </a>

            <a href='https://www.youtube.com/channel/UC0b0oioV9jAWM5uIyzi7eBA'>
              <img src={youtube} alt="Youtube" className='' />
            </a>

            <a href='https://red-pepe-bsc-fl.gitbook.io/redpepe-whitepaper/'>
              <img src={whitepaper} alt="whitepaper" className='' />
            </a>

          </div>

        </div>

        <div className='py-6 text-center'>
          <p className=''>RED PEPE {new Date().getFullYear()} - All rights reserved.</p>
        </div>
        <img src={f} alt="Logo" className='absolute right-0 bottom-0 lg:block hidden animate-pulse' />

        <img src={f} alt="Logo" className='absolute left-0 bottom-0 lg:block hidden animate-pulse' />
      </footer>
    </div>

  )
}
