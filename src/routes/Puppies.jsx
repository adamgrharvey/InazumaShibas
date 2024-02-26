import '../CSS/Puppies.css';
import AyaProfilePuppies from "../images/aya-profile-crop.webp";

import React, { useRef, useState, useEffect } from "react";
import { ContactUs } from '../components/ContactUs';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LightningBolt from '../components/LightningBolt';

// import required modules
import { Autoplay, FreeMode, Pagination, Zoom, Navigation, Thumbs } from "swiper";
export default function Puppies(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../images/puppies', false, /\.(png|jpe?g|svg)$/));

  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {
      setCount(0);
      // Wait for two second
      const timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 45)

      await new Promise((r) => setTimeout(r, 2200));
      // Toggle loading state
      setIsLoading(false);
      clearInterval(timer);
    };

    loadData();
  }, [])

  if (isLoading) {
    return (
      <LightningBolt />
    )
  } else {

    return (
      <>
        <div className='w-3/5 flex flex-row mt-6 pictext fadeInPage'>
          <div className='max-h-max ml-3 mr-3 flex items-center justify-center'>
            <img className='rounded-full AyaProfilePuppies' src={AyaProfilePuppies}></img>
          </div>
          <div className="ml-3 mr-3">
            <p className='font-bold text-2xl'>Aya (GCh Sunojo's Kaika Suru Ayame)</p>
            <p className="mt-4 pl-12 pr-12 text-lg">We are expecting a litter in May 2024.</p>
            <p className="mt-4 pl-12 pr-12 text-lg">Please contact us via the form below, or email us at <a href="mailto:inazumashibas@gmail.com"><b>inazumashibas@gmail.com</b></a> </p>

          </div>
        </div>
        <div className='mt-3 PuppyPicSwiper fadeInPage'>
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
            <SwiperSlide>
              <img src={images[17]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[18]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[19]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[20]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[21]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[22]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[23]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[24]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[25]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[26]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[27]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[28]} />
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
            {images.map((image) => {

            })}
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
            <SwiperSlide>
              <img src={images[17]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[18]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[19]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[20]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[21]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[22]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[23]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[24]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[25]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[26]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[27]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[28]} />
            </SwiperSlide>
          </Swiper>
        </div>
        <ContactUs />

      </>
    )
  }
}
