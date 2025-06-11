import React, { useRef, useState } from 'react';
// Import Swiper React components
import feedback from '../.././app/data/feedbackslider.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
const FeedbackSlider = () => {
  return (
    <span className="lg:hidden md:hidden inline-blockS ">
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      // loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        {feedback.map((data,index)=>(
        <div key={index} className='lg:col-span-3 md:col-span-6 col-span-12  mx-auto flex flex-col gap-8 px-8 py-10 rounded-3xl bg-[#191919]'>
        <div className=' flex justify-center'>
          <Image className='rounded-full' alt='feedback1 img' width={82} height={82} src={data.address}></Image>
        </div>
        <div className='flex flex-col gap-5 justify-center text-center'>
          <div className='flex flex-col gap-3'>
          <p className='text-white font-bold'>{data.h1}</p>
          <p className='text-[#D3D3D3] text-sm'>{data.h2}</p>
          </div>
          <div>
          <p className='text-[#D3D3D3] text-sm leading-[24px]'>{data.data}</p>
          </div>
          <div className='flex justify-center'>
          <Image alt='feedback star' width={104} height={82} src={data.address2}></Image>
          </div>
        </div>
      </div> 
        ))}

      </SwiperSlide>
    </Swiper>
  </span>
  )
}

export default FeedbackSlider
