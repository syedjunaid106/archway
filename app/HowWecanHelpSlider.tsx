import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Howwecanhelp from "./data/HowWeCanHelp.json";
import Image from "next/image";
const HowWecanHelpSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={21}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        pagination={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
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
        <div>
          <div className=" containers mx-auto grid grid-cols-12 gap-5 lg:pt-16 md:pt-16 pt-0   lg:pb-20 md:pb-20  pb-0 ">
            {Howwecanhelp.map((data, index) => (
              <div key={data.id}>
                <SwiperSlide>
                  <div className="lg:col-span-4 md:col-span-6 col-span-12 rounded-3xl border-[0.5px] backdrop-blur-lg border-[#F5618C]   bg-[#1B1B1B]">
                    <div>
                      <div className="flex justify-center">
                        <Image
                          className="py-10  "
                          height={200}
                          width={data.w}
                          src={data.address}
                          alt=""
                        />
                      </div>
                      <div className="m-5 rounded-3xl bg-[#222222]">
                        <div className="p-8 flex flex-col gap-3">
                          <div className="flex ">
                            <p className=" lg:text-sm md:text-sm text-[13px]  items-center  px-5 py-3 rounded-full lg:gap-16 md:gap-16 gap-5 font-medium text-white  bg-gradient-to-r from-[#F5618C] 0.13%  to-[#F8A959] 99.68%">
                              {data.pill}{" "}
                            </p>
                          </div>
                          <div>
                            <h3 className="text-white font-medium lg:text-3xl md:text-3xl m-mob:text-3xl s-mob:text-3xl text-2xl">
                              {data.heading}
                            </h3>
                          </div>
                          <div className="">
                            <p className="text-[#D3D3D3]">
                              {data.data.map((data, index) => (
                                <li key={index} className="p-1 ">
                                  {data}
                                </li>
                              ))}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HowWecanHelpSlider;
