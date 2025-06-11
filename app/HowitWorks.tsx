import React from "react";
import Howitworks from "../app/data/howitworks.json";
import Image from "next/image";
const HowitWorks = () => {
  return (
    <div className=" pt-16 pb-20  grid  grid-cols-12 lg:gap-[110px] tab-720:gap-[112px] bg-[url(/pinklinebg.svg)]  bg-no-repeat bg-[length:901px_858px] bg-[center_top_-10rem] ">
      {Howitworks.map((data, index) => (
        <div key={data.id} className="lg:col-span-4 ">
          <div>
            <Image
              className=" "
              height={data.height}
              width={data.w1}
              src={data.address}
              alt=""
            />
          </div>
          <div className="flex gap-5 pt-5">
            <div>
              <Image
                className=" "
                height={data.height}
                width={data.w2}
                src={data.address1}
                alt=""
              />
            </div>
            <div className="">
              <h3 className="text-2xl font-bold text-white ">{data.h}</h3>
              <p className="text-[#D3D3D3] font-normal pt-2 ">{data.data}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowitWorks;
