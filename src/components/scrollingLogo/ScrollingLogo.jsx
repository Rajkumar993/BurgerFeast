import React, { useMemo, useRef, useState } from 'react'
import Brand1Img from '../../Food_Assets/assets/brands/brand-11.png'
import Brand2Img from '../../Food_Assets/assets/brands/brand-12.png'
import Brand3Img from '../../Food_Assets/assets/brands/brand-13.png'
import Brand4Img from '../../Food_Assets/assets/brands/brand-14.png'
import Brand5Img from '../../Food_Assets/assets/brands/brand-15.png'
import Brand6Img from '../../Food_Assets/assets/brands/brand-16.png'
export const ScrollingLogo = React.memo(() => {
 console.log('rendering')
const Ref=useRef() ;
let value = 0 ;
  setInterval(()=>{
     if(value >=300){
      value = 0
     if(Ref.current){
       Ref.current.style.transorm=`translate(${value}vw)`
     }
     }else{
       value += 100
      if(Ref.current){
         Ref.current.style.transform=`translate(-${value}vw)`
      }
     }
  },5000)
 
  return (
    <>
    <div ref={Ref} className='w-[400vw] overflowY-hidden  items-center bg-[white]] py-14 hidden transform transition-all duration-500  md:flex'>
      <div className='flex justify-center gap-2  w-[100vw]'>
        <img className='md:w-32 w-14 ' src={Brand1Img} alt="" />
        <img className='md:w-32 w-14' src={Brand2Img} alt="" />
        <img className='md:w-32 w-14' src={Brand3Img} alt="" />
        <img className='md:w-32 w-14' src={Brand4Img} alt="" />
        <img className='md:w-32 w-14' src={Brand5Img}alt="" />
        <img className='md:w-32 w-14'  src={Brand6Img}alt="" />
      </div> 
      <div className='flex justify-center  w-[100vw] '>
        <img className='md:w-32 w-14' src={Brand2Img} alt="" />
        <img className='md:w-32 w-14' src={Brand3Img} alt="" />
        <img className='md:w-32 w-14' src={Brand1Img} alt="" />
        <img className='md:w-32 w-14' src={Brand4Img} alt="" />
        <img className='md:w-32 w-14' src={Brand5Img}alt="" />
        <img className='md:w-32 w-14'  src={Brand6Img}alt="" />
      </div> 
      <div className='flex justify-center  w-[100vw] '>
        <img className='md:w-32 w-14' src={Brand1Img} alt="" />
        <img className='md:w-32 w-14' src={Brand2Img} alt="" />
        <img className='md:w-32 w-14' src={Brand3Img} alt="" />
        <img className='md:w-32 w-14' src={Brand4Img} alt="" />
        <img className='md:w-32 w-14' src={Brand5Img}alt="" />
        <img className='md:w-32 w-14'  src={Brand6Img}alt="" />
      </div> 
      <div className='flex justify-center  w-[100vw]'>
      <img className='md:w-32 w-14' src={Brand5Img}alt="" />
      <img className='md:w-32 w-14'  src={Brand6Img}alt="" />
      <img className='md:w-32 w-14' src={Brand3Img} alt="" />
        <img className='md:w-32 w-14' src={Brand4Img} alt="" />
        <img className='md:w-32 w-14' src={Brand1Img} alt="" />
        <img className='md:w-32 w-14' src={Brand2Img} alt="" />
      </div> 
    </div>
  
    </>
  )
})
