import React, {  useEffect,   useState } from 'react'

import Image1 from '../../Food_Assets/assets/menu/burger-11.jpg'
import Image2 from '../../Food_Assets/assets/menu/burger-12.jpg'
import Image3 from '../../Food_Assets/assets/menu/burger-13.jpg'
import Image4 from '../../Food_Assets/assets/menu/burger-14.jpg'
import Image5 from '../../Food_Assets/assets/menu/burger-15.jpg'
import Image6 from '../../Food_Assets/assets/menu/burger-16.jpg'
import Image7 from '../../Food_Assets/assets/menu/burger-17.jpg'
import Image8 from '../../Food_Assets/assets/menu/burger-18.jpg'
import { FoodItem } from '../fooditm/FoodItem'
import { FaArrowUp } from "react-icons/fa";
import { ToastContainer } from 'react-toastify'

export const Crazy = ({ScrolltoTop ,qty,setQty,cart,setCart,ScrollTOShop}) => {

  const [arrow,setArrow]=useState(false)
  useEffect(()=>{
    const ShowArrow = ()=>{
      if(window.scrollY>500){
       setArrow(true)
      }else {
      setArrow(false)
      }
    }
    window.addEventListener('scroll',ShowArrow)
  },[])
  const [data,setData]=useState([ {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
    qty:0
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
    qty:0
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
    qty:0
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
    qty:0
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
    qty:0
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
    qty:0
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
    qty:0
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    qty:0
  },
  // Add more mock data objects as needed
])
  return (
    <div ref={ScrollTOShop} className='flex flex-col items-center mt-10 relative gap-4'>
    <div className='flex flex-col items-center  w-1/2 gap-2 '>
      <h1 className='text-[red] text-4xl text-center font-bold'>Our Crazy Burgers</h1>
      <p className=' text-center text-[#707070] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque consequuntur quisquam eius. Harum eaque, neque quod culpa.</p>
    </div>
    <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5'>
      {data.map(item=>{
        return <FoodItem data={data}  cart={cart} setCart={setCart} qty={qty} setQty={setQty} item={item} key={item.id} />
      })}
    </div>
   {arrow && <button onClick={ScrolltoTop} value={arrow} className='bg-[red] transition-all  duration-500 text-white p-4 z-50 fixed left-12 bottom-10 rounded-full'><FaArrowUp /></button>} 
   <ToastContainer position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}
