import '../CSS/Achievements.css'
import ayaprofile from '../images/aya-profile-crop.webp'
import kukiprofile from '../images/kuki/kukiprofile.jpg'
import aya1 from '../images/aya1.webp'
import aya2 from '../images/aya2.webp'
import aya3 from '../images/aya3.webp'
import ayaGC from '../images/aya_GC.jpg'
import aya5 from '../images/aya5.jpg'
import kuki1 from '../images/kuki/kuki1.png'
import kuki2 from '../images/kuki/kuki2-edit.png'
import kuki3 from '../images/kuki/kuki3.png'
import kuki4 from '../images/kuki/kuki4.png'
import kuki6 from '../images/kuki/kuki6.png'

import React, { useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import LightningBolt from '../components/LightningBolt'

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation, Thumbs } from 'swiper'

export default function Achievements() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2200)
  }, [])

  if (isLoading) {
    return <LightningBolt />
  } else {
    return (
      <>
        <div className="w-3/5 flex flex-row mt-6 pictext fadeInPage">
          <div className="max-h-max ml-3 mr-3 flex items-center justify-center">
            <img className="rounded-full AyaProfile" alt="ayaprofile" src={ayaprofile}></img>
          </div>
          <div className="ml-3 mr-3 AchievementText">
            <p className="font-bold text-2xl">Aya (GCh Sunojo's Kaika Suru Ayame)</p>
            <p className="mt-4 text-lg">
              Aya is a very elegant and spunky girl. She loves learning new tricks and is eager to
              impress, however her greatest joy in life is to argue back and to make sure her
              opinion is heard. She is our foundation bitch and we can't wait to see what she holds
              for us in the future.
            </p>
            <p className="mt-4 text-lg">
              <span className="font-bold">Group 4th</span> | Campbell River Dog Fanciers Society |
              July 30 - August 1, 2021
            </p>
            <p className="mt-4 text-lg">
              <span className="font-bold">Group 4th</span> | Glacier View | August 2 - August 4,
              2021
            </p>
            <p className="mt-4 text-lg">
              <span className="font-bold">Group 2nd</span> | Nanaimo Kennel Club | August 12 -
              August 15, 2021
            </p>
            <p className="mt-4 text-lg">
              Aya finished her Championship in only one month of showing with group placings. She
              went on to attain Grand Champion status at 18 months old.
            </p>
          </div>
        </div>

        <div className="mt-5 AchPicSwiper fadeInPage">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img alt={'ayaGC'} src={ayaGC} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya1'} src={aya1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya3'} src={aya3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya5'} src={aya5} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya2'} src={aya2} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img alt={'ayaGC'} src={ayaGC} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya1'} src={aya1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya3'} src={aya3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya5'} src={aya5} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'aya2'} src={aya2} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-3/5 flex flex-row mt-6 pictext fadeInPage">
          <div className="max-h-max ml-3 mr-3 flex items-center justify-center">
            <img className="rounded-full AyaProfile" alt="ayaprofile" src={kukiprofile}></img>
          </div>
          <div className="ml-3 mr-3 AchievementText">
            <p className="font-bold text-2xl">Kuki (Sunojo's Muscle Bunny Kuki)</p>
            <p className="mt-4 text-lg">
              Our youngest going to her first dog shows this year. She's energetic and mischievous.
              Looking forward to our future escapades with her!
            </p>

          </div>
        </div>

        <div className="mt-5 AchPicSwiper fadeInPage">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img alt={'kuki1'} src={kuki1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki2'} src={kuki2} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki3'} src={kuki3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki4'} src={kuki4} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki6'} src={kuki6} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img alt={'kuki1'} src={kuki1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki2'} src={kuki2} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki3'} src={kuki3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki4'} src={kuki4} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt={'kuki6'} src={kuki6} />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    )
  }
}
