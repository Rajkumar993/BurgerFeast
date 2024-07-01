import React from 'react'
import { Footer } from '../footer/Footer'

export const FastDelivery = ({ScrollTOContact}) => {
  return (
 <>
    <div className='md:h-[60vh] py-4 flex flex-col gap-4 justify-center items-center backgroundImage3'>
      <h2 className='md:text-2xl text-xl font-bold'>We Gaurantee</h2>
      <h1 className='md:text-4xl text-2xl'>30 Minutes Delivery </h1>
      <p className='text-center  text-smm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate architecto alias suscipit illo. Quisquam autem itaque impedit quas .</p>
      <p className='bg-red-600 px-4 py-1 text-white'>Call : 999-888-777</p>
    </div>
    <div>
      <Footer ScrollTOContact={ScrollTOContact}/>
    </div>
 </>
  )
}
