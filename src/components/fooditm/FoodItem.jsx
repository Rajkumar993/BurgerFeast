import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const FoodItem = ({item,qty,cart,setCart,data}) => {

  const FoodAdded=(id)=>{
    const newItem=data.find(item=>item.id==id)
    const itemExist=cart.find(i=>i.newItem.id==id)
    const items={newItem,qty}
    if(!itemExist){
      setCart([...cart,items])
  
       
    }
    toast.success(`${newItem.title} Added To Cart`, {
      position: "top-center",
      autoClose: 1000,
      theme: "light",
     
      transition:Bounce
      });
      
  }
 
  return (
    <div  className='border border-1 mb-10   border-[#868686]   rounded-lg w-52 py-4 overflow-hidden  px-2'>
     <div className='w-full overflow-hidden '>
     <img className='hover:scale-110 transition-transform hover:rotate-3' src={item.image} alt="" />
     </div>
     <div className='mt-2'>
      <div className='flex justify-between items-center'>
     <div className='flex cursor-pointer'> 
        <p><FaStar /></p>
        <p><FaStar /></p>
        <p><FaStar /></p>
        <p><FaRegStar /></p>
        <p><FaRegStar /></p>
        </div>
        <CiHeart className='cursor-pointer'/>
      </div>
      <div className='flex flex-col  items-start justify-center gap-2'>
        <h1 className='font-bold'>{item.title}</h1>
        <p className='text-smm'>{item.paragraph}</p>
       <div className='flex w-full justify-between'>
       <p>${item.price}</p>
       <button  onClick={()=>FoodAdded(item.id)} className='btn rounded-full' >Add to cart</button>
     
</div>
      </div>
     </div>
    </div>
  )
}
