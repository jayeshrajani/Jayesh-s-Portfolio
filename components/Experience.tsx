import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <div className='py-10' id="experience">
      <h1 className='heading'>
        My
        <span className='text-red-400'> work experience</span>
      </h1>
      <div className='w-full mt-10 grid lg:grid-cols-4 sm:grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <Button key={card.id} 
          duration={Math.floor(Math.random()*10000)+10000}>
            <div>
              <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-22 md:w-20 w-16' />
            </div>
            <div className='lg:ms-5'>
            <h1 className='text-start text-xl md:text-2xl font-bold'>
                {card.title}
            </h1>
            <p className='text-start text-white-100 mt-3 font-semibold'>
                {card.desc}
            </p>
            </div>
            
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
