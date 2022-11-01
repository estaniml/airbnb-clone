import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
        <Image 
            src="https://links.papareact.com/0fm"
            alt='Airbnd banner'
            fill
            className='object-cover object-center'
            priority
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>

            <button className='text-violet-300 bg-gray-800 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'> I&apos;m Flexible </button>
        </div>
    </div>
  )
}

export default Banner