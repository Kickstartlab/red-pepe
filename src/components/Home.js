import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import token_1 from '../assets/token_1.png';
import token_2 from '../assets/token_2.png';
import token_3 from '../assets/token_3.png';
import about from '../assets/about.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import p_5 from '../assets/p_5.png';
import p_6 from '../assets/p_6.png';
import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.png';
import e from '../assets/e.png';
import h from '../assets/h.png';
import audit from '../assets/audit.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import team_3 from '../assets/team_3.png';
import team_4 from '../assets/team_4.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';



export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-brown-100 font-inter overflow-hidden text-white-50">

            {/* top section */}

            <img src={a} alt="Logo" className='absolute left-1/3 lg:block hidden animate-pulse' />

            <img src={b} alt="Logo" className='absolute left-0 lg:block hidden top-1/3 animate-pulse' />

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-12 lg:py-20 pt-12">
                        <div className="text-center lg:w-10/12">

                            <p className='py-5 text-lg text-red-50 font-semibold'>
                                RED PEPE 🔥
                            </p>

                            <h2 data-aos='fade-up' className='md:text-5xl text-3xl font-junkdog text-white-50'>
                                The community brought fame to Pepe, now it'stime for Red Pepe to bring the community fortunes!
                            </h2>

                            <p data-aos='fade-down' className='pt-8 pb-6 lg:text-xl leading-loose text-white-50 font-light'>
                                Red is a popular colour in Chinese culture, symbolising luck, joy and prosperity! Red is a popular colour in Chinese culture, symbolising luck, joy and prosperity!
                            </p>

                            <div className="flex items-center justify-center lg:gap-12 gap-6 mx-auto mt-6">
                                <a href="https://red-pepe-bsc-fl.gitbook.io/redpepe-whitepaper/">
                                    <button data-aos='slide-right' className="text-white-50 bg-red-50 py-3 lg:text-lg md:px-10 px-3 text-center rounded-xl font-medium flex items-center justify-center gap-x-6 border-2 border-red-50 hover:bg-brown-100 hover:text-red-50">
                                        Whitepaper

                                        <svg className='lg:block hidden' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.84753 3.55811L16.6672 6.33399L14.1614 16.226" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.55807 13.6743L16.5684 6.16281" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </a>

                                <a href="/">
                                    <button data-aos='slide-left' className="text-red-50 font-medium lg:text-lg py-3 md:px-8 px-3 border-2 border-red-50 rounded-xl flex items-center justify-center gap-x-6 hover:bg-red-50 hover:text-white-50">
                                        Buy RED PEPE

                                        <svg className='lg:block hidden' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.84753 3.55811L16.6672 6.33399L14.1614 16.226" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.55807 13.6743L16.5684 6.16281" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <img src={c} alt="Logo" className='absolute right-0 lg:block hidden -mt-32 animate-pulse' />

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <p className='pb-4 text-red-50 font-medium'>
                                RED PEPE
                            </p>

                            <h2 className='md:text-5xl text-3xl font-junkdog text-white-50'>
                                What is Red Pepe?
                            </h2>

                            <p className='py-5 text-lg'>
                                Crypto’s favourite meme is currently taking the memecoin market by storm!
                            </p>

                            <p className='text-lg'>
                                The iconic meme is bringing huge success to every project it touches and what better way to utilise that, than to pair it with the other thing that every crypto investor loves? 0% TAX!
                            </p>

                            <p className='pt-5 text-lg'>
                                Red is a popular colour in Chinese culture, symbolising luck, joy and prosperity! All of which, Red Pepe plans to bring to every single one of our Red Pepe holders!
                            </p>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className=" md:mt-0 mt-12">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <img src={d} alt="Logo" className='absolute left-0 lg:block hidden -mt-12 animate-pulse' />

            <img src={a} alt="Logo" className='absolute left-1/4 lg:block hidden mt-28 animate-pulse' />

            <div id='tokenomics' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <p className='pb-5 text-red-50 font-medium text-center'>
                        RED PEPE
                    </p>

                    <h2 data-aos='slide-up' className='md:text-5xl text-3xl font-junkdog text-white-50 text-center'>
                        TOKENOMICS
                    </h2>

                    <div className="lg:flex block justify-center items-center gap-x-16 py-16 space-y-6">

                        <div data-aos='slide-right' className="text-white-50 bg-red-50 py-6 text-5xl md:px-10 px-3 text-center rounded-xl font-bold border-2 border-red-50 lg:w-3/12">
                            TAX 0%
                        </div>

                        <div data-aos='slide-left' className="text-red-50 font-semibold py-3 md:px-8 px-3 border-2 border-red-50 rounded-xl text-3xl lg:w-3/12">
                            Supply
                            420,690,000,000
                        </div>

                    </div>

                    <div data-aos='zoom-in' className="flex items-center justify-center lg:gap-12 gap-6 mx-auto">
                        <a href="/">
                            <button className="text-red-50 font-medium lg:text-lg text-sm py-3 md:px-8 px-3 border-2 border-red-50 rounded-xl flex items-center justify-center gap-x-6 hover:bg-red-50 hover:text-white-50">
                                View Contract

                                <svg className='lg:block hidden' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.84753 3.55811L16.6672 6.33399L14.1614 16.226" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.55807 13.6743L16.5684 6.16281" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </a>

                        <a href="/">
                            <button className="text-white-50 bg-red-50 py-3 lg:text-lg text-sm md:px-10 px-3 text-center rounded-xl font-medium flex items-center justify-center gap-x-6 border-2 border-red-50 hover:bg-brown-100 hover:text-red-50">
                                Buy $RED PEPE

                                <svg className='lg:block hidden' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.84753 3.55811L16.6672 6.33399L14.1614 16.226" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.55807 13.6743L16.5684 6.16281" stroke="#FEF5E7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </a>
                    </div>

                    <div data-aos='zoom-in' className="flex items-center justify-center flex-wrap lg:gap-12 gap-6 mx-auto mt-12">
                        <img src={token_1} alt="Logo" className='' />
                        <img src={token_2} alt="Logo" className='' />
                        <img src={token_3} alt="Logo" className='' />
                    </div>
                </div>
            </div>

            {/* roadmap */}

            <img src={e} alt="Logo" className='absolute right-0 lg:block hidden mt-32 animate-pulse' />

            <div
                id="roadmap"
                className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto z-20">

                <p className='pb-5 text-red-50 font-medium text-center'>
                    RED PEPE
                </p>
                <h3 data-aos='slide-up' className="md:text-5xl font-junkdog text-2xl text-center">
                    ROADMAP
                </h3>

                <div className="lg:mt-12 mt-6">

                    <div className="h-1 w-full bg-brown-50">

                    </div>

                    <div className='h-1 w-full line -translate-y-1'>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className="flex items-start">

                            <div
                                data-aos="fade-down"
                                className="-mt-1 lg:block hidden"
                            >

                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.588196" width="16.9935" height="16.9935" fill="#C21414" />
                                </svg>

                                <svg className='ml-2' width="3" height="146" viewBox="0 0 3 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5106" y="0.993469" width="144.444" height="1.69935" transform="rotate(90 2.5106 0.993469)" fill="#C21414" />
                                </svg>

                                <div className='flex items-center'>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.588196" width="16.9935" height="16.9935" fill="#C21414" />
                                    </svg>
                                    <svg width="45" height="2" viewBox="0 0 45 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.581665" y="0.0849609" width="44.183" height="1.69935" fill="#C21414" />
                                    </svg>

                                </div>

                            </div>

                            <div
                                data-aos="flip-left"
                                className="border border-brown-50 hover:border-red-50 text-white-50 p-5 lg:w-72 lg:mt-12 mt-8"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE - I</h5>

                                <ul className="space-y-2 list-disc p-5 text-red-100 text-sm">
                                    <li>Gather Team</li>
                                    <li>Social media creation</li>
                                    <li>Release Website</li>
                                    <li>Release WhitePaper</li>
                                    <li>CA Creation (Pinksale SAFU)</li>
                                    <li>Audit CA (Pinksale SAFU)</li>
                                    <li>Pinksale KYC</li>
                                    <li>Create Pinksale Fairlaunch Pool</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start">

                            <div
                                data-aos="fade-down"
                                className="-mt-1 lg:block hidden"
                            >

                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.588196" width="16.9935" height="16.9935" fill="#C21414" />
                                </svg>

                                <svg className='ml-2' width="3" height="146" viewBox="0 0 3 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5106" y="0.993469" width="144.444" height="1.69935" transform="rotate(90 2.5106 0.993469)" fill="#C21414" />
                                </svg>

                                <div className='flex items-center'>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.588196" width="16.9935" height="16.9935" fill="#C21414" />
                                    </svg>
                                    <svg width="45" height="2" viewBox="0 0 45 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.581665" y="0.0849609" width="44.183" height="1.69935" fill="#C21414" />
                                    </svg>

                                </div>

                            </div>

                            <div
                                data-aos="flip-left"
                                className="border border-brown-50 hover:border-red-50 text-white-50 p-5 lg:mt-12 lg:w-72"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE - II</h5>

                                <ul className="space-y-2 list-disc p-5 text-red-100 text-sm">
                                    <li>Burn Initial X% Tokens</li>
                                    <li>Launch RedPepe</li>
                                    <li>Huge Post Launch Marketing Push</li>
                                    <li>CMC Listing</li>
                                    <li>CG Listing</li>
                                    <li>Avedex Listing</li>
                                    <li>First 1000 Holders!🎉</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start">

                            <div
                                data-aos="fade-down"
                                className="-mt-1 lg:block hidden"
                            >

                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.588196" width="16.9935" height="16.9935" fill="#C21414" />
                                </svg>

                                <svg className='ml-2' width="3" height="146" viewBox="0 0 3 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.5106" y="0.993469" width="144.444" height="1.69935" transform="rotate(90 2.5106 0.993469)" fill="#C21414" />
                                </svg>

                                <div className='flex items-center'>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.588196" width="16.9935" height="16.9935" fill="#C21414" />
                                    </svg>
                                    <svg width="45" height="2" viewBox="0 0 45 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.581665" y="0.0849609" width="44.183" height="1.69935" fill="#C21414" />
                                    </svg>

                                </div>

                            </div>

                            <div
                                data-aos="flip-left"
                                className="border border-brown-50 hover:border-red-50 text-white-50 p-5 lg:mt-12 lg:w-72"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE - III</h5>

                                <ul className="space-y-2 text-red-100 text-sm list-disc p-5">
                                    <li>Further Marketing Push</li>
                                    <li>Release Youtube Videos</li>
                                    <li>Release TikTok Videos with renowned Influencers</li>
                                    <li>Partnerships (Top Secret until further notice🤫)</li>
                                    <li>Tier 2 CEX listings</li>
                                    <li>Tier 1 CEX listings</li>
                                    <li>First 5000 Holders🥳</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* one love section */}

            <div
                id="team"
                className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                <div className='lg:flex block justify-center items-center gap-x-20 pt-12 space-y-8'>

                    <div data-aos='slide-right' className='w-80'>
                        <p>one love ❤️💚$PEPE</p>
                        <TwitterTweetEmbed tweetId="1655023833563160578" />
                    </div>

                    <div data-aos='slide-left'>
                        <p className='pb-5 text-red-50 font-medium'>
                            RED PEPE
                        </p>
                        <h3 className="md:text-7xl font-junkdog font-bold text-2xl uppercase mb-12">
                            one love
                        </h3>

                        <div className='space-y-6'>
                            <h3 className="md:text-5xl font-junkdog font-bold text-2xl uppercase">
                                Audit Report
                            </h3>

                            <div>
                                <a href='https://github.com/Audit-Ace/Audits-Smart-Contracts/blob/main/Red%20Pepe%20Audit%20Report.pdf'>
                                    <img src={audit} alt=''></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <img src={h} alt="Logo" className='absolute right-0 lg:block hidden -mt-32' />

            {/* team section */}

            <div
                id="team"
                className="lg:pb-20 py-5 lg:px-20 px-5 container mx-auto">

                <p className='pb-5 text-red-50 font-medium text-center'>
                    RED PEPE
                </p>
                <h3 data-aos='slide-up' className="md:text-5xl font-junkdog text-2xl text-center">
                    Teams
                </h3>

                <div className='lg:flex block justify-center items-end gap-x-20 pt-12 space-y-8'>

                    <div className='flex flex-col items-center gap-y-8'>
                        <img data-aos='zoom-in' src={team_1} alt="Logo" className='w-10/12 border-4 border-red-50 rounded-full' />

                        <h3 data-aos='fade-down' className="md:text-4xl font-junkdog text-2xl text-center uppercase">
                            dev
                        </h3>
                    </div>

                    <div className='flex flex-col items-center gap-y-8'>
                        <img data-aos='zoom-in' src={team_2} alt="Logo" className='w-10/12 border-4 border-red-50 rounded-full' />

                        <h3 data-aos='fade-down' className="md:text-4xl font-junkdog text-2xl text-center uppercase">
                            marketer
                        </h3>
                    </div>

                    <div className='flex flex-col items-center gap-y-8'>
                        <img data-aos='zoom-in' src={team_3} alt="Logo" className='w-10/12 border-4 border-red-50 rounded-full' />

                        <h3 data-aos='fade-down' className="md:text-4xl font-junkdog text-2xl text-center uppercase">
                            marketer
                        </h3>
                    </div>

                    <div className='flex flex-col items-center gap-y-8'>
                        <img data-aos='zoom-in' src={team_4} alt="Logo" className='w-8/12 border-4 border-red-50 rounded-full' />

                        <h3 data-aos='fade-down' className="md:text-4xl font-junkdog text-2xl text-center uppercase">
                            Community manager
                        </h3>
                    </div>

                </div>

            </div>

            {/* partners section */}

            <div
                id="partners"
                className="lg:pb-20 py-5 container mx-auto">

                <p className='pb-5 text-red-50 font-medium text-center'>
                    RED PEPE
                </p>
                <h3 data-aos='slide-up' className="md:text-5xl font-junkdog text-2xl text-center">
                    PARTNERS
                </h3>
            </div>

            <div className='bg-brown-50 lg:px-20 px-5'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap justify-center items-end gap-x-20 lg:py-10 py-6 lg:space-y-0 space-y-8'>
                        <img data-aos='slide-right' src={p_1} alt="Logo" className='w-24' />
                        <img data-aos='slide-right' src={p_2} alt="Logo" className='w-24' />
                        <img data-aos='zoom-out' src={p_3} alt="Logo" className='w-24' />
                        <img data-aos='zoom-out' src={p_4} alt="Logo" className='w-24' />
                        <img data-aos='slide-left' src={p_5} alt="Logo" className='w-24' />
                        <img data-aos='slide-left' src={p_6} alt="Logo" className='w-24' />
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
