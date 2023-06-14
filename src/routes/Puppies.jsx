import '../CSS/Puppies.css';
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
export default function Puppies(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../images/puppies', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <div className='w-3/5 flex flex-row mt-6'>
        <div className='max-h-max ml-3 mr-3 flex items-center'>
          <img className='rounded-full AyaProfile' src={ayaprofile}></img>
        </div>
        <div className="ml-3 mr-3">
          <p className='font-bold text-2xl'>Aya</p>
          <p className='mt-10 text-lg'>Aya gave birth to her 2nd litter on May 7th, 2023. Two puppies; a girl and a boy. </p>
          <p className="mt-10 text-lg">We are currently accepting applications for this litter. Please email us, and we </p>

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
          lazy={true}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={images[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[7]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[8]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[9]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[10]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[11]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[12]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[13]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[14]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[15]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[16]} />
          </SwiperSlide>


        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          lazy={true}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={images[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[7]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[8]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[9]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[10]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[11]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[12]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[13]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[14]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[15]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[16]} />
          </SwiperSlide>

        </Swiper>
      </div>

    </>
  )
}