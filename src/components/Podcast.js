import React from 'react'
import Image from 'next/image'
import Card from '@/components/Card'

function Podcast({item}) {
  return (
    <div className='block px-5 lg:px-10 xl:px-15 bg-gray-500 bg-gradient-to-tl from-gray-300 to-gray-100 rounded-2xl py-10'>
      <div className='lg:flex lg:flex-row justify-between items-center px-5 lg:py-20'>
        <div className='mb-20 mt-40 font-sans mx-auto lg:mx-0 max-w-md lg:max-w-lg'>
          <div className='text-3xl mb-2 lg:mb-7 lg:text-5xl'>Podcast</div>
          <div className='capitalize lg:mb-10 lg:text-2xl'>bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu yüzden en iyi şekilde .</div>
          <div className='text-xs lg:text-base text-gray-400 mt-3 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
          <div className='text-gray-400 mt-20 lg:mt-40 lg:text-base'>SPOTİFAY</div>
        </div>
        <div className='grid grid-cols-4 grid-rows-3 gap-2 lg:ml-10' style={{minWidth:'40vw', minHeight:'40vw', maxHeight:'40vw'}}>
          <div className='bg-black'>
            <Image
                  src={item[6]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black row-span-2'>
            <Image
                  src={item[7]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black col-span-2'>
            <Image
                  src={item[9]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black row-span-2'>
            <Image
                  src={item[3]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black'>
            <Image
                  src={item[8]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black'>
            <Image
                  src={item[8]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black'>
            <Image
                  src={item[6]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
          <div className='bg-black col-span-2'>
            <Image
                  src={item[4]}
                  alt=""
                  width={1640}
                  height={820}
                  className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-around flex-wrap mx-auto'>
        <Card item={item[2]} />
        <Card item={item[1]} />
        <Card item={item[0]} />
        <Card item={item[0]} />
      </div>
    </div>
  )
}

export default Podcast