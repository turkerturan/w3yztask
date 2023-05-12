import React from 'react'
import Image from 'next/image'
import LeftVector from './svg/leftVector.svg'
import Vector from './svg/vector.svg'
import WPoint from './svg/wPoint.svg'
import BPoint from './svg/bPoint.svg'

function Carousel() {
  return (
    <div className='flex flex-row gap-1 md:gap-2 lg-gap:5'>
        <div className='bg-white p-2 rounded-full w-auto'>
            <Image src={LeftVector} width={4} height={5}/>
        </div>
        <div className='flex flex-row'>
            <Image src={WPoint} />
            <Image src={BPoint} />
            <Image src={BPoint} />
            <Image src={BPoint} />
            <Image src={BPoint} />
            <Image src={BPoint} />
            <Image src={BPoint} />
        </div>
        <div className='bg-white p-2 rounded-full w-auto'>
            <Image src={Vector} width={4} height={5} />
        </div>
    </div>
  )
}

export default Carousel