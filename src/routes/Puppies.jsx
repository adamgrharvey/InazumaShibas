import '../CSS/Puppies.css'
import AyaProfilePuppies from '../images/aya-profile-crop.webp'

import React, { useState, useEffect } from 'react'
import { ContactUs } from '../components/ContactUs'
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
export default function Puppies(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  function importAll(r) {
    return r.keys().map(r)
  }

  const images = importAll(require.context('../images/puppies', false, /\.(png|jpe?g|svg)$/))

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
            <img alt='aya-profile' className="rounded-full AyaProfilePuppies" src={AyaProfilePuppies}></img>
          </div>
          <div className="ml-3 mr-3">
            <p className="font-bold text-2xl">Aya (GCh Sunojo's Kaika Suru Ayame)</p>
            <p className="mt-4 pl-12 pr-12 text-lg">We are planning a litter for Winter 2024.</p>
            <p className="mt-4 pl-12 pr-12 text-lg">
              Please contact us via the form below, or email us at{' '}
              <a href="mailto:inazumashibas@gmail.com">
                <b>inazumashibas@gmail.com</b>
              </a>{' '}
            </p>
          </div>
        </div>
        <div className="mt-3 PuppyPicSwiper fadeInPage">
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
              <img alt='aya-puppies-slide1' src={images[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide2' src={images[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide3' src={images[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide4' src={images[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide5' src={images[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide6' src={images[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide7' src={images[6]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide8' src={images[7]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide9' src={images[8]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide10' src={images[9]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide11' src={images[10]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide12' src={images[11]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide13' src={images[12]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide14' src={images[13]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide15' src={images[14]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide16' src={images[15]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide17' src={images[16]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide18' src={images[17]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide19' src={images[18]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide20' src={images[19]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide21' src={images[20]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide22' src={images[21]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide23' src={images[22]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide24' src={images[23]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide25' src={images[24]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide26' src={images[25]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide27' src={images[26]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide28' src={images[27]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='aya-puppies-slide29' src={images[28]} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide1' src={images[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide2' src={images[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide3' src={images[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide4' src={images[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide5' src={images[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide6' src={images[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide7' src={images[6]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide8' src={images[7]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide9' src={images[8]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide10' src={images[9]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide11' src={images[10]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide12' src={images[11]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide13' src={images[12]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-mini-aya-puppies-slide14' src={images[13]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide15' src={images[14]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide16' src={images[15]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide17' src={images[16]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide18' src={images[17]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide19' src={images[18]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide20' src={images[19]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide21' src={images[20]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide22' src={images[21]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide23' src={images[22]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide24' src={images[23]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide25' src={images[24]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide26' src={images[25]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide27' src={images[26]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide28' src={images[27]} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt='mini-aya-puppies-slide29' src={images[28]} />
            </SwiperSlide>
          </Swiper>
        </div>
        <ContactUs />
      </>
    )
  }
}
