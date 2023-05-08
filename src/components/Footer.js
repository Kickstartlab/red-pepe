import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import f from '../assets/f.png';
import g from '../assets/g.png';


export default function Footer() {
  return (
    <div className="font-inter mt-16">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-inter px-5'>

        <hr className='pb-12 text-red-50'></hr>

        <div className="flex flex-col items-center justify-center gap-y-16 mx-auto">

          <h2 className='md:text-4xl text-2xl font-inter font-semibold text-red-50'>
            “STAY IN TOUCH WITH US & STAY<br></br> UPTO DATE WITH ALL THE NEWS!!”
          </h2>

          <button className='md:px-12 px-4 py-3 bg-red-50 border-2 border-red-50 hover:bg-brown-100 text-brown-100 hover:text-white-50 rounded-full font-semibold'>
            Connect
          </button>

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='/'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='/'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

          </div>

        </div>

        <div className='py-6 text-center'>
          <p className=''>RED PEPE {new Date().getFullYear()} - All rights reserved.</p>
        </div>
        <img src={f} alt="Logo" className='absolute right-0 bottom-0 lg:block hidden' />

        <img src={f} alt="Logo" className='absolute left-0 bottom-0 lg:block hidden' />
      </footer>
    </div>

  )
}
