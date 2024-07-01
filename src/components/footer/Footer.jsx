import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Footer = ({ScrollTOContact}) => {
  return (
    <div ref={ScrollTOContact} className='flex py-4 md:py-0 items-center justify-center'>
    <div className='md:flex md:flex-row  flex flex-col gap-3 w-full ' >
    <div className='md:w-1/4 flex justify-center items-center'>
      <ul className='flex text-center md:gap-2 flex-col'>
        <li className='font-bold'>Location</li>
        <li>ABCD City</li>
        <li>Xyz Street</li>
        <li>Tamil Nadu</li>
      </ul>
    </div>
    <div  className='md:w-1/4 flex justify-center items-center'>
    <ul className='flex text-center   gap-2 flex-col'>
        <li className='font-bold'>Working Hours</li>
        <li>Mon-Fri: 9:00AM - 10:00PM</li>
        <li>Saturday: 10:00AM - 8:30PM</li>
        <li>Sunday: 12:00PM - 5:00PM</li>
      </ul>
    </div>
    <div  className='md:w-1/4 flex justify-center items-center'>
    <ul className='flex text-center   gap-2 flex-col'>
        <li className='font-bold'>Order Now</li>
        <li>For Enquiries</li>
        <li>Call: 999-888-7777</li>
       
      </ul>
    </div>
    <div  className='md:w-1/4 flex justify-center items-center'>
    <ul className='flex text-center   gap-2 flex-col'>
        <li className='font-bold'>Follow Us</li>
        <li className='flex gap-4'><FaFacebook /> <FaSquareXTwitter /> <FaInstagram /> <FaYoutube /></li>
      </ul>
    </div>
    </div>
    </div>
  )
}
