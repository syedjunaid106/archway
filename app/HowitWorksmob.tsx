import React from 'react'
import Howitworksmob from '../app/data/howitworksmob.json'
import Image from 'next/image'
const HowitWorksmob = () => {
  return ( 
    <div className="mx-auto pt-16 pb-20 px-9 flex flex-col gap-[50px]  ">
    {Howitworksmob.map((data,index)=>(
                <div key={data.id} className="">
                <div className="flex flex-row-reverse gap-4 items-center justify-center">
                  <div>
                    <Image className=" " height={data.height} width={data.w1} src={data.address} alt="" />
                  </div>
                  <div>
                    <Image className=" " height={data.height} width={data.w2} src={data.address1} alt="" />
                  </div>
                </div>
                <div className="  pt-5 text-center flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-white ">{data.h}</h3>
                  <p className="text-[#D3D3D3] font-normal lg:w-[75%] md:w-[100%] w-[100%]">
                    {data.data}
                  </p>
                </div>
              </div>
                ))}

    </div>
  )
}

export default HowitWorksmob
