import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Podcast from '@/components/Podcast'
import VisitSelection from '@/components/VisitSelection'
import { getData } from '@/service/getData'
import { useEffect, useState } from 'react'



export default function Home() {

  const [images, setImages] = useState([])

  useEffect(() => {
    getData().then(urlList => setImages(urlList))
  }, [])

  console.log(images)

  return (
    <main
      className={`bg-white`}
    >
      <Header />
      <Banner />
      <div className='px-10 my-40 capitalize md:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-5xl md:ml-auto md:mr-auto'>
        <h1 className='text-center font-light pb-5 text-2xl lg:text-6xl '>Happy Galeri’ye Hoşgeldiniz</h1>
        <p className='text-xs lg:text-2xl mt-5 font-light text-center'>bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden planlayın. Temaya dayalı bir turu takip etmek için neden ziyaretçi parkurlarımızdan birini seçmiyorsunuz? Molaya ihtiyacınız olduğunda, müzenin dinlendirici bahçelerinden daha iyi neresi var?</p>
      </div>
      <Gallery />
      <div className='block md:px-10 mt-10 md:mt-15 lg:mt-20'>
        <Podcast item={images} />
      </div>
      <div className='my-20'>
        <VisitSelection />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
