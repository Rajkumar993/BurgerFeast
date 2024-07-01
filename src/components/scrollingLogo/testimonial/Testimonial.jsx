import React, { useState } from 'react'
import Reviewer1 from '../../../Food_Assets/assets/blog/review-author-1.jpg'
import Reviewer2 from '../../../Food_Assets/assets/blog/review-author-2.jpg'
import Reviewer3 from '../../../Food_Assets/assets/blog/review-author-3.jpg'
import Reviewer4 from '../../../Food_Assets/assets/blog/review-author-5.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
export const Testimonial = () => {
  const [data,setData]=useState([
    {
      id:1,
      image:Reviewer1,
      des:"Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egesta magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      author :'BY AMELIE NEWLOVE'
    },
    {
      id:2,
      image:Reviewer2,
      des:"Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egesta magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      author :'BY EMILLIA'
    },
    {
      id:3,
      image:Reviewer3,
      des:"Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egesta magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      author :'BY AMELIE NEWLOVE'
    },
    {
      id:4,
      image:Reviewer4,
      des:"Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egesta magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      author :'BY AMELIE NEWLOVE'
    },
  ])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="md:backgroundImage2 bg-black py-10 md:py-0   flex  items-center justify-center  text-white md:h-[50vh]  ">
      <div  className='w-[500px] '>
      <Slider {...settings}>
      {data.map(item=>(<div className='flex  justify-center mb-10  items-center' key={item.id}>
      <div  className='mb-4 flex  justify-center  '>
      <img  className='rounded-full object-contain object-center   w-20' src={item.image}alt="" />
      </div>
      <div className='md:ml-10 w-1/2 mx-auto md:w-full md:mx-0 md:mr-10'>
        <p className='text-smm  md:text-xl md:pr-10'>{item.des}</p>
        <p className='text-end text-smm  md:text-md md:pr-10 mt-3'>-{item.author}</p>
      </div>
      </div>))}
    </Slider>
      </div>
    
  </div>
    
  )
}
