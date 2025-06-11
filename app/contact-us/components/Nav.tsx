import React from 'react'
import logo1 from '../../../public/Logo.png'
import logo2 from '../../../public/Developios.svg'
import Image from 'next/image'
const Nav = () => {
  return (
    <>
      <div className='containers mx-auto flex gap-4 py-5 items-center justify-center'>
    <div>
    <Image width={55} alt='Developios logo' src={logo1}></Image>
    </div>
    <div>
    <Image width={334} alt='Developios logo' src={logo2}></Image>
    </div>
    </div>  
    </>
  )
}

export default Nav
