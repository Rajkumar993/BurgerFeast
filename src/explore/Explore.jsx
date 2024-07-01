import React from 'react'
import PizzaPng from '../Food_Assets/assets/about/pizza.png'
import DeliveryBike from '../Food_Assets/assets/about/delivery-bike.png'
import Salad from '../Food_Assets/assets/about/salad.png'
export const Explore = ({ScrollTOAbt}) => {
  return (
   <>
   <div  className=' AboutPng bg-cover h-h-50 bg-center'>
      <div ref={ScrollTOAbt} className='flex  flex-col justify-center gap-8 mt-5 py-4 md:py-0 md:mt-0 md:gap-5 items-center'>
        <h1 className='md:text-3xl font-bold text-center'>The Burger Taste Better When <br/>
             You Eat It With Your Family</h1>
        <p className='w-1/2 text-center text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aspernatur vero facere neque modi perspiciatis, rem laborum distinctio obcaecati cumque.</p>
        <button className='btn'>Explore Full Menu</button>
      </div>
    </div>
   <div className='bg-[#f1cb20] w-full py-4 md:py-2 md:h-56 md:flex px-10  ' >
      <div className='md:w-1/3 flex flex-col justify-center items-center gap-2'>
       <img className='w-1/6' src={PizzaPng} alt="" />
       <h2 className='font-bold md:text-xl'>Original</h2>
       <p className='text-smm text-center md:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus distinctio sed nobis libero dolor esse, earum quos, eligendi reprehenderit, modi eius. Magnam, molestiae cupiditate.</p>
      </div>
      <div className='md:w-1/3 flex flex-col justify-center items-center gap-2'>
      <img className='w-1/6' src={DeliveryBike} alt="" />
      <h2 className='font-bold md:text-xl'>Fastest Delivery</h2>
      <p className='text-smm md:w-96 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus distinctio sed nobis libero dolor esse, earum quos, eligendi reprehenderit, modi eius. Magnam, molestiae cupiditate.</p>
      </div>
      <div className='md:w-1/3 flex flex-col justify-center items-center gap-2 '>
      <img className='w-1/6' src={Salad} alt="" />
      <h2 className='font-bold md:text-xl'>Quality Foods</h2>
      <p className='text-smm md:w-96 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus distinctio sed nobis libero dolor esse, earum quos, eligendi reprehenderit, modi eius. Magnam, molestiae cupiditate.</p>
      </div>
    </div> 
    </>

  )
}
