import '../CSS/Achievements.css';
import ayaprofile from "../images/aya-profile-crop.webp";
import aya1 from "../images/aya1.webp"
import aya2 from "../images/aya2.webp"
import aya3 from "../images/aya3.webp"
import ayaGC from "../images/aya_GC.jpg"
import aya5 from "../images/aya5.jpg"


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

export default function Achievements(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className='w-3/5 flex flex-row mt-6 pictext fadeInPage'>
        <div className='max-h-max ml-3 mr-3 flex items-center justify-center'>
          <img className='rounded-full AyaProfile' src={ayaprofile}></img>
        </div>
        <div className="ml-3 mr-3">
          <p className='font-bold text-2xl'>Aya (GCH Sunojo's Kaika Suru Ayame)</p>
          <p className='mt-4 text-lg'>Our lovely girl comes from a long line of Shiba Inu's that were imported from Japan. The co-owner of this beautiful girl, Susan Norris-Jones from Sunojo kennels, has been breeding Shiba's since 1985. We are extremely fortunate to have Susan as our mentor in this remarkable breed.</p>
          <p className='mt-4 text-lg'><span className='font-bold'>Group 4th</span> | Campbell River Dog Fanciers Society | July 30 - August 1, 2021</p>
          <p className='mt-4 text-lg'><span className='font-bold'>Group 4th</span> | Glacier View | August 2 - August 4, 2021</p>
          <p className='mt-4 text-lg'><span className='font-bold'>Group 2nd</span> | Nanaimo Kennel Club | August 12 - August 15, 2021</p>
        </div>
      </div>

      <div className='mt-5 AchPicSwiper fadeInPage'>
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
            <img src={ayaGC} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya5} />
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
            <img src={ayaGC} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={aya2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}