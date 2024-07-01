import React from 'react'
import HeroPng from '../../Food_Assets/assets/hero/hero-2.png'


export const Hero = () => {
  return (
    <div className=' mt-4  md:flex   md:h-screen md:justify-center md:items-center '>
      <div className=' h-1/2 flex justify-center  md:w-1/2 md:flex md:justify-center md:items-center  '> 
      <div className=' w-52 md:w-w-50'>
      <img src={HeroPng} alt="" />
      </div>
      </div>
      <div className= ' h-1/2 md:w-1/2 gap-2 py-3 flex flex-col  md:gap-4 text-white md:items-center md:justify-center'>
       <div className='md:text-7xl font-bold text-xl text-center '>NEW <br/> BURGER</div>
       <div className='md:text-3xl text-md text-center'> WITH ONION</div>
       <div className='md:text-sm text-smm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, consequuntur.<br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, adipisci.</div>
       <div className='text-center'>
        <button className='bg-orange-500 px-2 py-1 text-smm   rounded-full md:font-bold hover:shadow-xl active:bg-red-600'>Order Now</button>
       </div>
      </div>
    </div>
  )
}
