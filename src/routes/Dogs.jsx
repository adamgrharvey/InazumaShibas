import '../CSS/Dogs.css';
import ayaprofile from "../images/aya-profile-crop.webp";
import aya1 from "../images/aya1.webp"
import aya2 from "../images/aya2.webp"
import aya3 from "../images/aya3.webp"
import aya4 from "../images/aya4.webp"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination, Zoom, Navigation, Thumbs } from "swiper";

export default function Dogs(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className='w-3/5 flex flex-row mt-6'>
        <div className='max-h-max ml-3 mr-3 flex items-center'>
          <img className='rounded-full AyaProfile' src={ayaprofile}></img>
        </div>
        <div className="ml-3 mr-3">
          <p className='font-bold text-2xl'>Aya (GCH Sunojo's Kaika Suru Ayame)</p>
          <p className='mt-4 text-lg'>Our lovely girl comes from a long line of Shiba Inu's that were imported from Japan. The co-owner of this beautiful girl, Susan Norris-Jones from Sunojo kennels, has been breeding Shiba's since 1985. We are extremely fortunate to have Susan as our mentor in this remarkable breed.</p>
          <p className="mt-4 text-lg">Aya is a very elegant and spunky girl. She loves learning new tricks and is eager to impress, however her greatest joy in life is to argue back and to make sure her opinion is heard. She is our foundation bitch and we can't wait to see what she holds for us in the future.</p>
          <p className="mt-4 text-lg">Aya finished her Championship in only one month of showing with group placings. She went on to attain Grand Champion status at 18 months old.</p>
        </div>
      </div>
      <div className='mt-5 AyaPicSwiper'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
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
            <img src={aya1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya2} />
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
            <img src={aya1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya2} />
          </SwiperSlide>
        </Swiper>
      </div>



    </>
  )
}