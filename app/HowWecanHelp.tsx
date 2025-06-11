import React from "react";
import Howwecanhelp from "../app/data/HowWeCanHelp.json";
import Image from "next/image";
const HowWecanHelp = () => {
  return (
    <div>
      <div className=" containers mx-auto grid grid-cols-12 gap-5 lg:pt-16 md:pt-16 pt-0   lg:pb-20 md:pb-20  pb-0 ">
        {Howwecanhelp.map((data, index) => (
          <div
            key={data.id}
            className="lg:col-span-4 md:col-span-6 col-span-12 rounded-3xl border-[.5px] backdrop-blur-lg border-[#ff353592]  bg-[#1B1B1B]"
          >
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
              <div className="m-5 rounded-3xl border-opacity-50 shadow-lg bg-[#222222] h-full">
                <div className="lg:p-6 md:p-6 p-4  flex flex-col gap-3">
                  <div>
                    {/* <p className=" lg:text-sm md:text-sm text-[13px]  items-center  px-5 py-3 rounded-full lg:gap-16 md:gap-16 gap-5 font-medium text-white  bg-gradient-to-r from-[#F5618C] 0.13%  to-[#F8A959] 99.68%">
                      {data.pill}{" "}
                    </p> */}
                    <p className=" lg:text-sm md:text-sm text-[13px]  items-center pb-1 rounded-full lg:gap-16 md:gap-16 gap-5 font-medium    text-[#F8A959]">
                      {data.pill}{" "}
                    </p>
                    <h3 className="text-white font-medium lg:text-3xl md:text-3xl m-mob:text-3xl s-mob:text-3xl text-2xl">
                      {data.heading}
                    </h3>
                  </div>
                  <div className="">
                    <div className="text-[#D3D3D3]">
                      {data.data.map((data, index) => (
                        <li
                          key={index}
                          className="p-1 lg:text-base md:text-base text-sm "
                        >
                          {data}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWecanHelp;
