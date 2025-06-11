import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import WhatYouGet from './components/WhatYouGet'
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying'
import Footer from './components/Footer'
const page = () => {
  return( <>
  <div className='bg-[#111111]'>
    <div className='lg:bg-[url(/bgcontact.png)] md:bg-[url(/bgcontact.png)] bg-[url(/bgcontactm.png)] bg-no-repeat lg:bg-cover md:bg-cover '>
    <div className='containers mx-auto'>
  <div className=''>
  <Nav/>
  <Header/>
  <ContactForm/>
    </div>
    </div>
    </div>
      <WhatYouGet/>
      <WhatPeopleAreSaying/>
      <Footer/>
    </div>
    </>
  )
}

export default page
