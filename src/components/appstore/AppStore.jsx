import React from 'react'
import ShopPng from '../../Food_Assets/assets/shop/e-shop.png'
import ApplePng from '../../Food_Assets/assets/shop/appstore.png'
import GPayPng from '../../Food_Assets/assets/shop/googleplay.png'
export const AppStore = () => {
  return (
    <div className='md:flex pt-9 bg-[#f1cb20] '>
     <div className='md:w-1/2 md:flex  flex-col items-center justify-center text-start'>
     <div className=' flex flex-col  gap-1 md:gap-2 text-center  md:justify-center '>
     <p className='md:text-2xl font-semibold'>Download Mobile App And</p>
      <p className='md:text-3xl font-extrabold'>Save up to 20%</p>
          <p className='text-smm md:w-96'> 
            Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
         </p>
     </div>

<div className='flex md:ml-52  ml-20 mt-3  gap-3 '>
        <img className='md:w-1/5 w-24 ' src={ApplePng} alt="" />
        <img  className='md:w-1/5 w-24' src={ GPayPng } alt="" />
      </div>
     </div>
     <div className='md:w-1/2 mt-10   flex items-end justify-center'>
     <div className='w-1/2'>
      <img src={ShopPng} alt="" />
     </div>
     </div>
    </div>
  )
}
