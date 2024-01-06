import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../src/app/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  
    const onAutoplayTimeLeft = ( time) => {
 
    };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="/images/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/1.jpg" alt="" /></SwiperSlide>
       <div>



       </div>
        
      </Swiper>
    </>
  );
}
