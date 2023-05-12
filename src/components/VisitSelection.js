import React from 'react'
import VisitItem from './VisitItem'
import Family from './svg/family.svg'
import Group from './svg/group.svg'
import Search from './svg/search.svg'
import Handicapped from './svg/handicapped.svg'
import Corporate from './svg/corporate.svg'
import Sponsor from './svg/sponsor.svg'

export default function VisitSelection() {
  return (
    <div className='flex flex-col md:flex-row items-center w-full px-10 md:px-15 lg:px20 justify-around'>
      <div className='mb-10 font-sans'>
        <div className='capitalize text-3xl mb-3 font-light lg:text-4xl'>Ziyaret biçimini seç</div>
        <div className='capitalize font-light lg:text-2xl'>bu muhteşem müzeyi nasıl keşfetmek istersin?</div>
      </div>
      <div className='lg:grid grid-cols-2 gap-5 gap-x-10 font-["Roboto"]'>
        <VisitItem text={"Aile ile ziyaret"} svg={Family} />
        <VisitItem text={"Engelinize göre ziyaret"} svg={Handicapped} />
        <VisitItem text={"Grup Olarak ziyaret"} svg={Group} />
        <VisitItem text={"Kurumsal eğitim için ziyaret"} svg={Corporate} />
        <VisitItem text={"Araştırma için ziyaret"} svg={Search} />
        <VisitItem text={"Sponsor olmak için ziyaret"} svg={Sponsor} />
      </div>
    </div>
  )
}
