import React from 'react'
import FeedbackCard from './FeedbackCard'
import FeedbackSlider from '../../data/feedbackslider.json'

const WhatPeopleAreSaying = () => {
  return (
    <div className='lg:pt-14 md:pt-14 pt-10  lg:pb-24 md:pb-24 pb-10'>
    <div className=' flex gap-20 flex-col  containers mx-auto'>
      <div className='lg:text-[54px] md:text-[54px] text-[48px] text-center text-white uppercase font-bold leading-[60px]'>
        <p>What People are saying</p>
      </div>
    </div>
    <div className='lg:inline md:inline hidden'>
    <FeedbackCard/>
    </div>
    <div className='md:hidden inline'>
     {/* <FeedbackSlider/> */}
    </div>
    </div>
  )
}

export default WhatPeopleAreSaying
