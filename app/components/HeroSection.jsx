'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className=''>
        <div className='flex flex-col-reverse md:grid md:grid-cols-12'>
            <div className='col-span-7 text-center place-self-center md:text-left'>
         <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
           <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m </span>
           <br />
           <TypeAnimation
      sequence={[
        'Tugba',
        1000,
        'Frontend Developer',
        1000,
        'Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
         </h1>  
         <p className='text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6'>I&apos;m passionate about creating user-friendly websites that blend elegant design with powerful functionality.</p>       
            <div>
                <button className='w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-200'>Hire Me</button>
                <button className='w-full px-1 py-1 mt-3 mr-4 text-white rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit hover:bg-slate-800'>
                   <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span> 
                    </button>
            </div>
            </div>
            <div className='relative col-span-5 mt-4 place-self-center lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]'>   
                <Image
                src="/images/profile.png"
                alt='profile image'
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={300}
                height={500}
                />
                </div> 
            </div>
        </div>
    </section>
  )
}

export default HeroSection