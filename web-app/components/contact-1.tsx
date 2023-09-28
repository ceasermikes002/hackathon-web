import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
    <Image
    src={'/sata-gra.png'}
    width={15}
    height={15}
    alt='img'
    />
    <h3 className='text-3xl font-bold text-purple-600'>Get in touch</h3>
    <p>Contact <br /> Information</p>
    <br />
    <p>27,Alara Street <br /> 
    Yaba 100012 <br />
     Lagos State</p>
     <br />
     <p>Call Us : 07067981819</p>
     <br />
     <p>we are open from Monday-Friday <br />
      08:00am - 05:00pm</p>
      <br />
      <p className='text-purple-600 font-bold text-lg'>Share on</p>
      <br />
      <div className='flex flex-row gap-3'>
      <FaInstagram/>
      <FaFacebookF/>
      <FaLinkedinIn/>
      <FaTwitter/>
      </div>
      
      <div></div>
  </div>
  )
}

export default Contact