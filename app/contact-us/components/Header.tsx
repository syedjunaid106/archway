import React from 'react'

const Header = () => {
  return (
    <div className='text-center lg:pt-20 lg:pb-14 pt-10 pb-7 flex flex-col leading-[30px]'>
      <div className='text-white pb-4 text-xl lg:font-bold md:font-bold font-medium'>
        <p>100% Risk-Free . 3-Days Turnaround</p>
      </div>
      <div className='text-white pb-5 lg:leading-[94px] md:leading-[94px] leading-[54px] lg:text-7xl md:text-7xl text-5xl  uppercase font-bold'>
        <p>Try Audit Free</p>
      </div>
      <div className='lg:w-[55%] md:w-[80%] mx-auto text-[#D3D3D3] lg:text-2xl md:text-2xl text-xl leading-[40px] font-medium'>
    <p>Select a page on your site and our team will redesign a key cross-section to be conversion optimized, and provide the rationale behind the changes FREE!</p>
      </div>
    </div>
  )
}

export default Header
