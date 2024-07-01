import React from 'react'
import { Hero } from '../heroSide/Hero'
import { Explore } from '../../explore/Explore'
import { Crazy } from '../crazy/Crazy'
import { Promotion } from '../promotion/Promotion'
import { AppStore } from '../appstore/AppStore'
import { ScrollingLogo } from '../scrollingLogo/ScrollingLogo'
import { Testimonial } from '../scrollingLogo/testimonial/Testimonial'
import { FastDelivery } from '../fastestdelivery/FastDelivery'

export const Home = React.memo(({ScrolltoTop,ScrollTOBlog,ScrollTOContact ,qty,setQty,cart,setCart,ScrollTOAbt,ScrollTOShop}) => {

  return (
    <div >
      <Hero/>
      <Explore ScrollTOAbt={ScrollTOAbt}/>
      <Crazy qty={qty} ScrollTOShop={ScrollTOShop} cart={cart} setCart={setCart} setQty={setQty} ScrolltoTop={ScrolltoTop} />
      <Promotion ScrollTOBlog={ScrollTOBlog}/>
      <AppStore/>
      <ScrollingLogo/>
      <Testimonial/>
      <FastDelivery ScrollTOContact={ScrollTOContact}/>
    </div>
  )
})

