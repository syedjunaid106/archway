import React from 'react'
import Image from 'next/image'
import sec4 from '../../public/sec4.png'
function FreeAuditCard() {
  return (
    <section>
    {/* section 4 starts here try audit free */}
    <div className="containers mx-auto py-28">
      <div className="lg:h-[274px] md:h-[274px] m-mob:h-[625px] s-mob:h-[625px] h-[520px] rounded-3xl lg:py-16 lg:px-20 md:px-20 md:py-16 px-5 py-14 bg-[#1B1B1B] flex lg:flex-row md:flex-row flex-col relative items-center border-[1.05px] transform hover:scale-105 transition-transform duration-300 ease-in-out   border-[#F5618C]">
        <div className=" ">
          <p className="lg:text-6xl md:text-6xl m-mob:text-6xl s-mob:text-6xl text-4xl font-bold text-white">
            Try Audit Free
          </p>
          <p className="text-[#D3D3D3] lg:w-[47%] md:w-[47%] w-[100%] pt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s
          </p>
        </div>
        <div>
          <Image
            className=" flex absolute lg:right-0 md:right-0 right-0  lg:top-0 md:top-0 m-mob:top-[350px] s-mob:top-[350px] top-[270px] "
            height={409}
            width={329}
            src={sec4}
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default FreeAuditCard
