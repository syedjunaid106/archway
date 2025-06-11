import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import FeedbackSlider from './data/feedbackslider.json'
import Image from 'next/image';
const FeedbackSlidermob1 = () => {
  return (
    <div>
    <Swiper
              spaceBetween={100}
              slidesPerView={1}
              // loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
      
      {FeedbackSlider.map((data,index)=>(
        
          <SwiperSlide key={data.id}>
          <div className="w-[34px] containers mx-auto py-6 px-8 rounded-3xl text-center bg-[#191919] hover:bg-[#262626] ">
                  <div className="flex justify-center">
                    <Image className="rounded-full " height={111} width={84} src={data.address} alt="" />
                  </div>
                  <p className="text-white font-bold pt-8">{data.h1}</p>
                  <p className="text-[#D3D3D3] text-sm font-bold">{data.h2}</p>
                  <p className="text-[#D3D3D3] text-xs py-5  leading-5">
                    {data.data}
                  </p>
                  <div className="flex justify-center">
                    <Image className=" "width={111} height={17} src={data.address2} alt="" />
                  </div>
                </div>
                </SwiperSlide>
                
        ))}     
    </Swiper>
  </div>
  )
}

export default FeedbackSlidermob1
