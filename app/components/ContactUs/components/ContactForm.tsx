import React from 'react'
import formdata from '../../../data/ContactuUs.json'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import btn from '../../../../public/btn.svg'
const ContactUs = () => {
  return (
    
    <div className='lg:py-14 py-10'>
      <div className='lg:w-[60%] mx-auto p-10 rounded-3xl flex flex-col gap-5 bg-[#1B1B1B]'>
            {formdata.map(( data, index)=>(
            <div key={data.id} className=''>
            <div className='text-white lg:text-lg md:text-lg font-semibold leadin-[25px]'>
            <p>{data.h1}</p>
            </div>
            <div className='text-[#D3D3D3] rounded-xl bg-[#262626] px-8 py-3 mx-auto mt-4'>
            <input className='bg-[#262626] lg:text-base md:text-base text-sm w-full' placeholder={`${data.p1}`} type="text" />
            </div>
            <p className='text-[#D3D3D3] text-sm italic'>{data.p2}</p>
            </div>
            ))}  
              <div className='pt-10 flex justify-center'>
                    <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                      <div className="flex items-center lg:ps-28 ps-3 pe-3 py-3 rounded-full lg:gap-20 md:gap-10 m-mob:gap-6 s-mob:gap-4  gap-4 font-bold text-white lg:text-xl md:text-xl m-mob:text-xl s-mob:text-lg bg-gradient-to-r from-[#F5618C] 0.13%  to-[#F8A959] 99.68%">
                        <div className="">
                          <p>Get My Free Audit</p>
                        </div>
                        <div >
                        <Image alt='btn-image' src={btn}></Image>
                        </div>
                      </div>
                    </button>
                 </div> 
                 <div className='text-center text-white text-sm font-bold underline'>
                 <p>No Credit Card Required . 100% Risk Free</p>
                 </div>    
      </div>
    </div>
  )
}

export default ContactUs
