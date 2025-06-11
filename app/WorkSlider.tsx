import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider from './data/slider.json';
import Image from 'next/image';
const WorkSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={21}
        slidesPerView={3}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        pagination={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="workSwiper"
        breakpoints={{
          358: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <Swiper>
  {slider.map((data, index) => (
    <SwiperSlide key={index}>
      <div className="flex gap-5">
        <Image height={100} width={483} src={data.address} alt="slider image"></Image>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </Swiper>
    </div>
  );
};

export default WorkSlider;
