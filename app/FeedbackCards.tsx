import React from 'react'
import FeedbackCard1 from '../app/data/feedback.json'
import FeedbackCard2 from '../app/data/feedback1.json'
import Image from 'next/image'

const FeedbackCards = () => {
  return (
    <>
    <div className='flex flex-col gap-5'>
    <div className='flex gap-5'>
        {FeedbackCard1.map((data,index)=>(
      <div  key={data.id} className="py-6 px-8 lg:w-[338px] w-[310px] rounded-3xl text-center  bg-[#191919] hover:bg-[#262626] ">
      <div className="flex justify-center">
        <Image className="rounded-full " height={200} width={84} src={data.address} alt="" />
      </div>
      <p className="text-white font-bold pt-8">{data.h1}</p>
      <p className="text-[#D3D3D3] text-sm font-bold">{data.h2}</p>
      <p className="text-[#D3D3D3] text-xs py-5  leading-5">
            {data.data}
       </p>                    
       <div className="flex justify-center">
        <Image className=" " width={111} height={17} src={data.address2} alt="" />
      </div>
    </div>
        ))}

    </div>
    <div className='flex gap-5'>
    {FeedbackCard2.map((data,index)=>(
  <div  key={data.id} className="py-6 px-8 lg:w-[338px] w-[310px] rounded-3xl text-center  bg-[#191919] hover:bg-[#262626] ">
  <div className="flex justify-center">
    <Image className="rounded-full " height={200} width={84} src={data.address} alt="" />
  </div>
  <p className="text-white font-bold pt-8">{data.h1}</p>
  <p className="text-[#D3D3D3] text-sm ">{data.h2}</p>
  <p className="text-[#D3D3D3] text-xs py-5  leading-5">
        {data.data}
   </p>                    
   <div className="flex justify-center">
    <Image className=" " width={111} height={17} src={data.address2} alt="" />
  </div>
</div>
    ))}

</div>
</div>
</> 
  )
}

export default FeedbackCards
