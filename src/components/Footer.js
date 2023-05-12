import React from 'react'
import Social from './Social'
import Facebook from './svg/facebook.svg'
import Instagram from './svg/instagram.svg'
import Twitter from './svg/twitter.svg'
import Youtube from './svg/youtube.svg'
import Pinterest from './svg/pinterest.svg'
import Linkedin from './svg/linkedin.svg'

function Footer() {
    return (
        <div style={{ backgroundImage: `url('/secondFoto.svg')` }} className='h-auto w-full text-white py-10 px-5 md:grid grid-cols-2 font-["Roboto"]'>
            <div className='flex gap-5 justify-around border-b border-slate-700 py-5 md:border-b-0 md:border-right lg:border-r lg:border-slate-700 '>
                <div>
                    <div className='font-extralight pb-5 tracking-widest text-sm'>HAKKIMIZDA</div>
                    <ul className='text-xs flex flex-col gap-3'>
                        <li>Galeri hakkında</li>
                        <li>Ziyaret Kuralları</li>
                        <li>Bizi desteklemek isteyenler için</li>
                    </ul>
                </div>
                <div>
                    <div className='font-extralight pb-5 tracking-widest text-sm'>WEBSİTEMİZ</div>
                    <ul className='text-xs flex flex-col gap-3'>
                        <li>Online bilet al</li>
                        <li>Mağaza</li>
                        <li>Koleksiyonlar</li>
                    </ul>
                </div>
                <div>
                    <div className='font-extralight pb-5 tracking-widest text-sm'>CONTACT</div>
                    <ul className='text-xs flex flex-col gap-3'>
                        <li>Sıkça sorulan sorular</li>
                        <li>İletişime geç</li>
                        <li>Bize fikir verin</li>
                        <li>Kariyer</li>
                    </ul>
                </div>
            </div>
            <div className='my-5'>
                <div className='font-sans uppercase text-xs font-extralight tracking-widest text-center '>
                    Bizi takip et
                </div>
                <div className='flex gap-4 my-5 justify-around border-b border-slate-700 py-5 md:border-none md:justify-center md:gap-10 md:px-10'>
                    <Social svg={Facebook} />
                    <Social svg={Instagram} />
                    <Social svg={Twitter} />
                    <Social svg={Youtube} />
                    <Social svg={Pinterest} />
                    <Social svg={Linkedin} />
                </div>
            </div>

            <div className='text-xs font-extralight py-5 col-span-2'>
                <ul className='flex flex-row justify-around md:justify-center gap-10 xl:gap-20 md:border-t border-slate-700 md:py-10'>
                    <li>Legal Notice</li>
                    <li>Privacy Notice</li>
                    <li>Cookies</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer