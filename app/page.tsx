"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import logo from "../public/Logo.jpg";
import clients from "../public/clients.png";
import iconarr from "../public/iconarr.png";
import msg from "../public/msg.png";
import stars5 from "../public/stars5.png";
import footer1 from "../public/footer1.png";
import footer2 from "../public/footer2.png";
import footer22 from "../public/footer22.png";
import footer5 from "../public/footer5.png";
import hand from "../public/handimg.png";
import btn from "../public/btn.svg";
import navbar from "./data/navbar.json";
import ScrollTo from "../app/Hooks/ScroolTo";
import TopSlider from "./WorkSlider";
import HowWeCanHelp from "./HowWecanHelp";
import FeedbackCards from "./FeedbackCards";
import FeedbackSlidermob1 from "./FeedbackSlidermob1";
import HowitWorks from "./HowitWorks";
import HowitWorksmob from "./HowitWorksmob";
export default function Home() {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [ham, setHam] = useState("hidden");
  let triggerMobileNav = (e: any) => {
    e.preventDefault();
    if (ham === "hidden") {
      setHam("inline");
    } else {
      setHam("hidden");
    }
  };

  const handleToggleVisibility = (index: number) => {
    setVisibleIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="bg-black">
        <section>
          {/* header section   */}
          <div
            className={` flex lg:bg-[url(/bglines.png)]  md:bg-[url(/Background.png)] ${
              ham === "hidden" ? "bg-[url(/Backgroundmobile.png)]" : "bg-black"
            } lg:h-auto lg:bg-120% md:h-auto   bg-cover lg:bg-center tab-720:bg-center bg-center   md:bg-center `}
          >
            <div className="containers mx-auto ">
              {/* navbar section */}
              <div className=" flex justify-between items-center  py-5">
                <div className="lg:w-[179px] md:w-[100px] ">
                  <Image
                    className=" "
                    height={100}
                    width={100}
                    src={logo}
                    alt="Logo"
                  />
                </div>
                <div className=" text-[#D3D3D3] text-base hidden lg:flex md:flex  gap-6 ">
                  {navbar.map((data, index) => (
                    <div key={index} className="hover:underline cursor-pointer">
                      <p onClick={() => ScrollTo(`${data.id}`, -30)}>
                        {data.data}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="#">
                  <button className="lg:inline md:hidden hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="rounded-full font-bold text-white flex items-center py-5 px-7 gap-2 bg-gradient-to-r from-[#D60000] via-[#FF3C3C] to-[#B0B0B0]">
                      <div>
                        <p>Book a call today</p>
                      </div>
                    </div>
                  </button>
                </Link>
                <button
                  onClick={triggerMobileNav}
                  className={`lg:hidden md:hidden ${
                    ham === "inline" ? "hidden" : "inline"
                  }`}
                >
                  <div>
                    <FontAwesomeIcon
                      style={{ color: "white", height: "17px", width: "22px" }}
                      icon={faBars}
                    />
                  </div>
                </button>
                <button
                  onClick={triggerMobileNav}
                  className={`lg:hidden md:hidden ${ham}`}
                >
                  <div>
                    <FontAwesomeIcon
                      style={{ color: "white", height: "24px", width: "24px" }}
                      icon={faMultiply}
                    />
                  </div>
                </button>
                {/* navbar ends here */}
              </div>
              <div
                className={` text-white text-[28px] font-medium flex text-center py-28 flex-col lg:hidden md:hidden ${ham}  gap-7`}
              >
                {navbar.map((data, index) => (
                  <div key={index} className="hover:underline cursor-pointer">
                    <p onClick={() => ScrollTo(`${data.id}`, -30)}>
                      {data.data}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link href="#">
                  <button className={`lg:hidden md:hidden ${ham}`}>
                    <div className="rounded-full font-bold text-[#ffff] flex items-center py-4 px-6 gap-2 bg-gradient-to-r from-[#D60000] via-[#FF3C3C] to-[#B0B0B0]">
                      <div>
                        <p>Book a call today</p>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="pt-3 lg:pb-28 md:pb-24 pb-20">
                <div className="flex flex-col justify-center text-center items-center gap-2">
                  <div>
                    <Image className="w-[108px] " src={clients} alt="" />
                  </div>
                  <div className="bg-gradient-to-r from-[#D60000] via-[#FF3C3C] to-[#B0B0B0] text-transparent bg-clip-text text-lg font-bold">
                    <p className="leading-4 lg:w-[60%] md:w-[60%] w-[80%] lg:text-base md:text-base text-sm  mx-auto text-center">
                      Trusted by Hundreds for Reliable Electrical Solutions that
                      Power Results.
                    </p>
                    <div className="flex items-center justify-center">
                      {/* <div>
                        <p className="leading-4">Clients</p>
                      </div> */}
                      <div className="">
                        <Image
                          className=""
                          height={60}
                          width={100}
                          src={stars5}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className=" absolute left-0 pt-20  lg:inline hidden">
                    <Image
                      className=""
                      height={202}
                      width={282}
                      alt="hand image"
                      src={hand}
                    ></Image>
                  </div>
                  <div>
                    <div className="py-5 lg:w-[100%] md:w-[100%]  mx-auto text-[white] text-center lg:text-[88.2px] md:text-[68.2px] s-mob:text-[48px]  m-mob:text-[54px] text-[44px] uppercase font-bold lg:leading-[97px] md:leading-[97px] leading-[60px] tracking-[-3.5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-yellow-400 animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0L1 10h6v10l10-10h-6L11 0z" />
                      </svg>
                      <p>Bright Ideas. Wired Right.</p>
                    </div>
                    <div className="text-[#D3D3D3] lg:text-xl md:text-xl m-mob:text-xl s-mob:text-lg text-base text-center font-normal leading-[33.6px]">
                      <h2>Powering Homes and Businesses with Precision.</h2>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <Link href="#">
                      <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="flex items-center lg:px-[120px]  md:py-5 px-14 py-3 rounded-full lg:gap-6 md:gap-6 m-mob:gap-6 s-mob:gap-4  gap-4 font-bold text-white lg:text-xl md:text-xl m-mob:text-xl s-mob:text-lg  bg-gradient-to-r from-[#D60000] via-[#FF3C3C] to-[#B0B0B0]">
                          <div className="">
                            <p>Talk to an Electrician</p>
                          </div>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* header section ends here */}
        <section>
          {/* slider section */}
          {/* <div id="work">
            <TopSlider />
          </div> */}
        </section>
        {/* slider section ends here */}
        <section>
          {/* section 1 how can we help */}
          <div className="containers mx-auto lg:pt-36 md:pt-24 pt-20 pb-28">
            <div className="lg:pb-0 md:pb-0 pb-14">
              <div
                id="services"
                className="uppercase text-white text-center lg:text-[88.2px] md:text-[68.2px] m-mob:text-[54px] s-mob:text-[54px] text-[40px] font-bold "
              >
                <p className="w-[80%] lg:w-[100%] md:w-[100%] lg:mx-0 md:mx-0 mx-auto lg:leading-[94px] md:leading-[84px] m-mob:leading-[60px] s-mob:leading-[60px] leading-[50px]">
                  How we can help
                </p>
              </div>
            </div>
            <div id="services" className="">
              <HowWeCanHelp />
            </div>
            <div className="flex justify-center lg:pt-0 md:pt-0 pt-14">
              <Link href="#">
                <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex items-center lg:px-32  md:py-5 px-14 py-3 rounded-full lg:gap-6 md:gap-6 m-mob:gap-6 s-mob:gap-4  gap-4 font-bold text-white lg:text-xl md:text-xl m-mob:text-xl s-mob:text-lg bg-gradient-to-r from-[#D60000] via-[#FF3C3C] to-[#B0B0B0]">
                    <div className="">
                      <p>Book a call</p>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* section 1 ends here */}
        <section>
          {/* section 2 what people are syaing */}
          <div
            id="testimonials"
            className="containers mx-auto lg:pb-20 md:pb-20 pb-10"
          >
            <div className="grid grid-cols-12 gap-5">
              <div className="lg:col-span-5 md:col-span-12 col-span-12">
                <div className=" flex flex-col gap-5">
                  <div className="uppercase text-white lg:text-7xl md:text-7xl  m-mob:text-[48px] s-mob:text-[40px] text-[40px] lg:leading-[94px] md:leading-[94px] leading-[48px] font-bold">
                    <p>What People are saying</p>
                  </div>
                </div>
                <div className=" flex lg:float-start  justify-center  px-8 lg:py-24 md:py-7 py-4">
                  <Image
                    className=" "
                    height={200}
                    width={470}
                    src={msg}
                    alt=""
                  />
                </div>
              </div>
              <div className="lg:col-span-7 md:col-span-4 lg:inline-block md:inline-block hidden">
                <div className="flex flex-row  gap-5">
                  <FeedbackCards />
                </div>
              </div>
            </div>
          </div>
          <span className="lg:hidden md:hidden inline ">
            <FeedbackSlidermob1 />
          </span>
        </section>
        {/* section 2 ends here */}
        <section id="how-it-works">
          {/* section 3 how it works starts here */}
          <div className="lg:inline   hidden">
            <div className="containers mx-auto lg:pt-0 md:pt-0 pt-20 py-10">
              <div className="">
                <p className="lg:text-[88.2px] md:text-[68.2px] m-mob:text-5xl   text-white font-bold text-center uppercase">
                  How it works
                </p>
              </div>
              <HowitWorks />
              {/* <div className="flex justify-center">
                <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="flex relative items-center ps-24 pe-3 py-3 rounded-full lg:gap-14 md:gap-20 m-mob:gap-6 s-mob:gap-4  gap-4 font-bold text-white lg:text-3xl md:text-2xl m-mob:text-xl s-mob:text-lg bg-gradient-to-r from-[#F5618C] 0.13%  to-[#F8A959] 99.68%">
                    <div className="">
                      <p>Get Started</p>
                    </div>
                    <div className="">
                      <Image width={60} alt="btn-image" src={btn}></Image>
                    </div>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
          <div className="lg:hidden  inline">
            <div className="containers mx-auto lg:pt-0 md:pt-0  pt-20 py-6">
              <div className="">
                <p className="lg:text-[88.2px] md:text-[88.2px] m-mob:text-5xl text-4xl  text-white font-bold text-center uppercase">
                  How it works
                </p>
              </div>
              <HowitWorksmob />

              {/* <div className="flex justify-center">
                <button>
                  <div className="flex items-center  md:ps-28 ps-16  pe-3 py-3 rounded-full lg:gap-16 md:gap-16 m-mob:gap-16 s-mob:gap-8 gap-4 font-bold text-white lg:text-xl md:text-xl m-mob:text-xl s-mob:text-xl text-lg bg-gradient-to-r from-[#F5618C] 0.13%  to-[#F8A959] 99.68% transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="">
                      <p>Get Started</p>
                    </div>
                    <div>
                      <Image className=" " src={iconarr} alt="" />
                    </div>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
        </section>
        {/* sections 3 ends here */}
        {/* <FreeAuditCard  /> */}
        {/* section 4 ends here */}
        <section>
          {/* section 5 starts here accordions */}

          {/* <div className="containers mx-auto lg:pb-28 md:pb-28 pb-10">
            <div className="text-white lg:text-[88.2px] md:text-[88.2px] m-mob:text-5xl text-4xl text-center font-bold uppercase">
              <p className="w-[80%] mx-auto">Frequently asked questions</p>
            </div>
            <div className="lg:pt-16 md:pt-16 pt-10 flex flex-col gap-5">
              {Card.map((data, index) => (
                <div
                  key={index}
                  className="lg:w-[67%] md:w-[67%] w-[100%] lg:px-0 md:px-0 px-3 mx-auto  cursor-pointer"
                >
                  <div onClick={() => handleToggleVisibility(index)} className={`bg-[#1B1B1B] rounded-xl px-8 py-4 `}>
                    <div className="flex gap-4 justify-between items-center ">
                      <div className=" ">
                        <p className="text-white text-lg font-semibold select-none">{data.main}</p>
                      </div>
                      <div>
                        <button>
                          <FontAwesomeIcon
                            className={`transition-transform duration-500 ${
                              visibleIndex === index ? 'hidden' : 'inline'
                            }`}
                            icon={faPlus}
                            style={{ color: 'white', height: '16px', width: '20px' }}
                          />
                        </button>
                        <button>
                          <FontAwesomeIcon
                            className={`transition-transform duration-500 ${
                              visibleIndex === index ? 'inline' : 'hidden'
                            }`}
                            icon={faMinus}
                            style={{ color: 'white', height: '16px', width: '20px' }}
                          />
                        </button>
                      </div>
                    </div>
                    <p
                      className={`pt-4 text-[#D3D3D3] w-[95%] transition-transform duration-500 ${
                        visibleIndex === index ? '' : 'hidden'
                      }`}
                    >
                      {data.data}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>
        {/* section 5 ends here */}
        <section>
          {/* section 6 starts here footer */}
          <div className="containers flex lg:flex-row md:flex-col flex-col gap-10 mx-auto pt-10 pb-28">
            <Link
              href="#"
              className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div
                className={`flex lg:flex-row md:flex-row flex-col items-center   rounded-3xl overflow-hidden bg-[#1B1B1B] justify-between `}
              >
                <div className="lg:py-16 md:py-16  p-10 mx-auto">
                  <p className="lg:text-6xl md:text-6xl text-5xl text-white font-Baloo text-start font-bold">
                    Electrical Inspection
                  </p>
                </div>
                <div>
                  <Image
                    className="lg:inline md:inline hidden lg:w-[297px] md:w-[297px] w-[273px] "
                    src={footer1}
                    alt=""
                  />
                  <Image
                    className="lg:hidden md:hidden inline lg:w-[297px] md:w-[297px] w-[373px]  "
                    src={footer5}
                    alt=""
                  />
                </div>
              </div>
            </Link>
            <Link href="#">
              <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex lg:flex-row md:flex-row flex-col   items-center rounded-3xl bg-[#1B1B1B] justify-between">
                  <div className="lg:py-16 md:py-16  p-10  mx-auto">
                    <p className="lg:text-6xl md:text-6xl text-5xl text-white text-start  font-bold">
                      Call Electrician
                    </p>
                  </div>
                  <div className="flex ">
                    <Image
                      className=" lg:inline md:inline hidden lg:w-[412px] md:w-[407px] w-[259px]"
                      src={footer2}
                      alt=""
                    />
                    <Image
                      className="lg:hidden md:hidden inline lg:w-[407px] md:w-[407px] w-[369px]"
                      src={footer22}
                      alt=""
                    />
                  </div>
                </div>
              </button>
            </Link>
          </div>
          <div>
            <div className=" flex justify-center   bg-[#000000]   mx-auto">
              <button>
                <div className="flex gap-3 md:py-10 py-8  justify-center items-center">
                  <div>
                    <Image
                      className=" "
                      height={120}
                      width={120}
                      src={logo}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-white text-xl font-bold">
                      Developed by Syed junaid
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
