import Image from 'next/image'
import React from 'react'
import Vector from './svg/vector.svg'

function VisitItem({svg, text}) {
  return (
    <div className='flex flex-row w-60 justify-between my-2'>
        <Image src={svg} width={40} height={40} className='w-7'/>
        <div className='w-40 text-xs my-auto'>{text}</div>
        <Image src={Vector} width={8} height={15}/>
    </div>
  )
}

export default VisitItem