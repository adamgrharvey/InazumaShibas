import '../CSS/Dogs.css';
import ayaprofile from "../images/aya-profile-crop.webp";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Dogs(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className='w-3/5 flex flex-row mt-6'>
        <div className='max-h-max ml-3 mr-3 flex items-center'>
          <img className='rounded-full AyaProfile' src={ayaprofile}></img>
        </div>
        <div className="ml-3 mr-3">
          <p className='font-bold'>Aya (GCH Sunojo's Kaika Suru Ayame)</p>
          <p className='mt-4'>Our lovely girl comes from a long line of Shiba Inu's that were imported from Japan. The co-owner of this beautiful girl, Susan Norris-Jones from Sunojo kennels, has been breeding Shiba's since 1985. We are extremely fortunate to have Susan as our mentor in this remarkable breed.</p>
          <p className="mt-4">Aya is a very elegant and spunky girl. She loves learning new tricks and is eager to impress, however her greatest joy in life is to argue back and to make sure her opinion is heard. She is our foundation bitch and we can't wait to see what she holds for us in the future.</p>
          <p className="mt-4">Aya finished her Championship in only one month of showing with group placings. She went on to attain Grand Champion status at 18 months old.</p>
        </div>
      </div>
      <div className='AyaPicSwiper'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={'auto'}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/231020437_10162461944164616_393692553189869963.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/230969451_10162461943944616_5679006132831-0001.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/232040672_10162461943244616_586775496065909540.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/IMG_6643.jpg/:/rs=w:1280,h:854" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/IMG_6630.jpg/:/rs=w:1280,h:854" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/IMG_6615.jpg/:/rs=w:1280,h:1921" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/116080281_10161246883479616_374632999273232078.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/115892600_10161246907424616_498738289950457989.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/116156717_10161246883489616_315456234594415175.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/108995073_10161246907004616_971498797336438251.jpg/:/rs=w:719,h:959" />
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
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/231020437_10162461944164616_393692553189869963.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/230969451_10162461943944616_5679006132831-0001.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/232040672_10162461943244616_586775496065909540.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/IMG_6643.jpg/:/rs=w:1280,h:854" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/IMG_6630.jpg/:/rs=w:1280,h:854" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/IMG_6615.jpg/:/rs=w:1280,h:1921" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/116080281_10161246883479616_374632999273232078.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/115892600_10161246907424616_498738289950457989.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/116156717_10161246883489616_315456234594415175.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:959" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/108995073_10161246907004616_971498797336438251.jpg/:/rs=w:719,h:959" />
          </SwiperSlide>
        </Swiper>
      </div>



    </>
  )
}