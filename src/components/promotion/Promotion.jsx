import React from 'react'
import PromotionImg from '../../Food_Assets/assets/promotion/pro.png'

export const Promotion = ({ScrollTOBlog}) => {
  return ( 
    <>
   <div ref={ScrollTOBlog}>
   <div className='flex flex-col md:flex-row md:h-[90vh] py-4 md:py-0  bg-blue-100'>
      <div className='flex  md:w-1/2 justify-center items-center'>
        <img className='w-52 md:w-96' src={PromotionImg} alt="" />
      </div>
      <div className='flex flex-col md:w-1/2  items-start justify-center md:pr-32  '>
      <div className='w-full flex flex-col px-10 md:px-0 justify-center items-center gap-4'>
      <h1 className='md:text-3xl text-center font-bold'>Nothing brings people together like a good burger</h1>
       <p className='text-smm md:text-sm'>Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida
        </p>
        <ul className='flex flex-col list-disc text-smm md:text-sm  gap-2'>
          <li>Fringilla risus, luctus mauris orci auctor purus euismod
          pretium purus pretium ligula rutrum tempor sapien</li>
          <li>Quaerat sodales sapien euismod purus blandit</li>
          <li>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
          sodales sapien undo pretium a purus mauris
          </li>
        </ul>
      </div>
      </div>
     </div>
     <div className='md:flex md:h-[90vh] md:backgroundImage'>
     </div>
    </div>
    
     </>
  )
}
