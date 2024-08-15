import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-70' />
        </div> */}

        <div className='flex flex-col items-center text-center'>
            <h1 className='heading lg:max-w-[45vw]'>
            
  Let&apos;s Create Something Unique <span className='text-cyan-300'>Together</span>
</h1>
<p className='mt-4 mb-4'>
  Passionate about tech, fitness, and creativity, I&apos;m always pushing the boundaries of what&apos;s possible. <br />
  If you think my skills align with something you&apos;re working on, don&apos;t hesitate to reach out!
</p>
            <a href="mailto:rajani.jass@gmail.com">
                <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light text-gray-400 opacity-60'>Copyright © 2024 Jayesh</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop:blur-lg saturate-180 bg-opacity-75 bg-black-200'>
                        <img src={profile.img} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
