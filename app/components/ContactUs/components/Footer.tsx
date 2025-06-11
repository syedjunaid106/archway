import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/Logo.png'
const Footer = () => {
  return (
    <div className='py-10'>
    <div className="containers flex lg:flex-row md:flex-row flex-col lg:gap-0 md:gap-0 gap-8 justify-between  items-center mx-auto">
      <button>
        <div className="flex gap-3 items-center">
          <div>
            <Image className=" " height={40} width={35} src={logo} alt="" />
          </div>
          <div>
            <p className="text-white text-xl font-bold">DEVELOPIOS</p>
          </div>
        </div>
      </button>
      <div className="flex gap-3 items-center">
        <button>
          <div>
            <p className="text-white hover:underline">Terms & Conditions</p>
          </div>
        </button>
        <div>
          <p className="text-white">|</p>
        </div>
        <button>
          <div className="text-white hover:underline">Privacy Policy</div>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Footer
