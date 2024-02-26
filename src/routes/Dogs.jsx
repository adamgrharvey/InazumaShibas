import '../CSS/Dogs.css';
import ayaprofile from "../images/aya-profile-crop.webp";
import kukiprofile from "../images/kuki/kukiprofile.jpg"
import aya1 from "../images/aya1.webp"
import aya2 from "../images/aya2.webp"
import aya3 from "../images/aya3.webp"
import aya4 from "../images/aya4.webp"
import a1 from "../images/aya/1.webp"
import a2 from "../images/aya/2.webp"
import a3 from "../images/aya/3.webp"
import a4 from "../images/aya/4.webp"
import a5 from "../images/aya/5.webp"
import a6 from "../images/aya/6.webp"
import LightningBolt from '../components/LightningBolt';
import React, { useRef, useState, useEffect } from "react";
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

  function importAll(r) {
    return r.keys().map(r);
  }

  const kukiImages = importAll(require.context('../images/kuki', false, /\.(png|jpe?g|svg)$/));

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
        <div className='flex flex-row mt-6 pictext fadeInPage'>
          <div className='max-h-max ml-3 mr-3 flex items-center justify-center'>
            <img className='rounded-full AyaProfile' src={ayaprofile}></img>
          </div>
          <div className="ml-3 mr-3">
            <p className='font-bold text-2xl'>Aya (GCh Sunojo's Kaika Suru Ayame)</p>
            <p className="mt-4 text-lg">Aya is a very elegant and spunky girl. She loves learning new tricks and is eager to impress, however her greatest joy in life is to argue back and to make sure her opinion is heard. She is our foundation bitch and we can't wait to see what she holds for us in the future.</p>
            <p className="mt-4 text-lg">Aya finished her Championship in only one month of showing with group placings. She went on to attain Grand Champion status at 18 months old.</p>
            <p className='mt-4 text-lg'>The co-owner of this beautiful girl, Susan Norris-Jones from Sunojo kennels, has been breeding Shiba's since 1985. We are extremely fortunate to have Susan as our mentor in this remarkable breed.</p>
            <p className='mt-4 text-lg underline font-bold'>Health Testing</p>
            <p className='text-lg'>Hips: B / Good</p>
            <p className='text-lg'>Patella: Grade 0</p>
            <p className='text-lg'>Eyes: Clear</p>
          </div>
        </div>
        <div className='mt-5 AyaPicSwiper fadeInPage'>
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
              <img src={a1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/116080281_10161246883479616_374632999273232078.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:959" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a6} />
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
              <img src={a1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://img1.wsimg.com/isteam/ip/44dbcf5e-8c9c-4211-84cb-7a2f02434cac/116080281_10161246883479616_374632999273232078.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:959" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a6} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='flex flex-row mt-6 pictext fadeInPage'>
          <div className='max-h-max ml-3 mr-3 flex items-center justify-center'>
            <img className='rounded-full AyaProfile' src={kukiprofile}></img>
          </div>
          <div className="ml-3 mr-3">
            <p className='font-bold text-2xl'>Kuki (Sunojo's Muscle Bunny Kuki)</p>
            <p className='mt-4 text-lg'>Our youngest going to her first dog shows this year. She's energetic and mischievous. Looking forward to our future escapades with her!</p>
          </div>
        </div>
        <div className='mt-5 AyaPicSwiper fadeInPage'>
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
              <img src={kukiImages[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[6]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[7]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[8]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[9]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[10]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[11]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[12]} />
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
              <img src={kukiImages[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[4]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[5]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[6]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[7]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[8]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[9]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[10]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[11]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kukiImages[12]} />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    )
  }
}
