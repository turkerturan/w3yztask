import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative md:mx-10 lg:mx-20  rounded-b-xl bg-white'>
        <Image
                  src="/firstFoto.svg"
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-auto rounded-b-xl"
        />
        <div className='absolute inset-0 bg-gradient-to-l from-transparent to-red-950 opacity-80 rounded-b-xl'></div>
        <div className='absolute text-white text-xs md:text-xl top-14 md:top-20 lg:text-3xl lg:mt-5 xl:text-5xl xl:mt-20 xl:ml-10 max-w-xs lg:max-w-lg xl:max-w-2xl 2xl:top-60 2xl:left-10 md:ml-8'>
          <h1 className='font-bold mt-10 mb-5 ml-3'>Çocuklar İçin Sanat Eğitimi</h1>
          <p className='text-xs md:text-sm lg:text-base xl:text-xl 2xl:mt-20 font-thin ml-3 '>Ücretsiz aile etkinliklerimizde bir sanat dünyası  oyunu oynayın, çocuklarınızla yaratın ve keşfedin</p>
        </div>
    </div>
  )
}

export default Banner