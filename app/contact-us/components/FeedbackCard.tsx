import React from 'react'
import feedback from '../../data/feedbackslider.json'
import Image from 'next/image'
const FeedbackCard = () => {
  return (
   <div className='grid grid-cols-12 w-[90%] mx-auto gap-5 mt-20'>
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

    </div>
  )
}

export default FeedbackCard
