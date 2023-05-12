import React from 'react'
import Image from 'next/image'
import Carousel from './Carousel'

function Gallery() {
  return (
    <div className='py-12 lg:py-24 px-2' style={{backgroundImage: `url('/secondFoto.svg')`}}>
        
        <div className='capitalize  text-white text-center top-10 mx-auto my-auto inset-0 max-w-xs text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:top-20 2xl:text-6xl 2xl:max-w-xl 2xl:top-30 font-extralight'>Yeni gelen sanat eserlerini inceleyin</div>
        <div className=' w-full px-5 mt-10 top-20 md:mt-20 md:px-10 lg:mt-40 lg:px-20 xl:mt-60 2xl:mt-80 flex flex-row text-white font-extralight justify-between'>
            <div className='md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Özel Galerimiz</div>
            <div>
              <Carousel />
            </div>
        </div>
    </div>
  )
}

export default Gallery