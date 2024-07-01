import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../Food_Assets/assets/logo/logo.png'
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

export const Navbar = React.memo(({cart,setCart,ScrollAbout,ScrollContact,ScrollBlog,ScrolltoTop,ScrollShop}) => {
const [nav,setNav]=useState(false)
const[showMenu,setShowMenu] =useState(false)
const ShowRef =useRef(null)
  const SideBar=useRef(null)
      useEffect(()=>{
      const handleScroll = ()=>{
      if(window.scrollY>40){
      setNav(true)
      } 
      else {
      setNav(false)
      }
      }
      window.addEventListener('scroll',handleScroll)

      },[])
      const ShowSideBar =()=>{
      SideBar.current.style.transform='translateX(0px)'
      }
      const CloseSideBar=()=>{
      SideBar.current.style.transform='translateX(900px)'
      }
     
   const AddQty=(id)=>{
  const newQty=cart.map(item=>{
    if(item.newItem.id==id){
      if(item.qty<5){
        item.qty++
      }
      
    }
    return item
   })
  setCart(newQty)

   }
   const decQty=(id)=>{
    const newQty=cart.map(item=>{
      if(item.newItem.id==id){
        if(item.qty>1){
          item.qty--
        }
      }
      return item
     })
    setCart(newQty)
     }
     const removeItem=(id)=>{
      const newCart=cart.filter(i=>i.newItem.id != id)
      setCart(newCart)
     }
     const handleSubmit =() =>{
      if(cart.length){
        toast.success('Your order has been placed successfully',{
          position:'top-center',
          autoClose:2000
         })
         setCart([])
      } else {
       toast.error('Your cart is empty',{
        position:'top-center',
        autoClose:4000
       })
      }
     }
     const handleShowMenu =()=>{
       setShowMenu(!showMenu)
   

     }
    return (
            <>
        <div className='flex  py-2 relative items-center text-white justify-between px-4 md:px-32 '>
            <div className="logo w-32 cursor-pointer ">
            <img  src={Logo} alt="" />
            </div>
        <div className="navi">
            <ul className='flex gap-3  items-center cursor-pointer'>
            <li className='hidden md:block' onClick={ScrolltoTop}>Home</li> 
          <li className='hidden md:block' onClick={ScrollAbout}>About</li>
            <li className='hidden md:block'  onClick={ScrollShop}>Shop</li>
            <li className='hidden md:block' onClick={ScrollBlog}>Blog</li>
            <li className='hidden md:block' onClick={ScrollContact}>Contact</li>
            <li className=' relative' onClick={ShowSideBar} >
            <TiShoppingCart  className='text-4xl ' />
            <p className=' absolute top-0 right-0 bg-red-600 font-bold text-sm  flex justify-center items-center w-5 h-5 line rounded-full'>{cart.length}</p>
            </li>
            <li onClick={handleShowMenu} className='text-3xl md:hidden '><MdOutlineRestaurantMenu /></li>
            </ul>
            <div>
        
        </div>
        </div>
        
        <div ref={SideBar} className='fixed transition-all overflow-hidden duration-500 text-black md:overflow-auto z-50 bg-white w-full translate-x-[900px]  md:w-96 flex flex-col md:translate-x-96 right-0 top-0 bottom-0'>
        <div className='md:flex md:justify-end md:px-3 py-2'> 
           <p onClick={CloseSideBar} className='text-center text-4xl cursor-pointer'><IoIosCloseCircleOutline className='text-black' /></p>
        </div>
        <div className='md:text-center md:border py-2 md:border-yellow-400'>
        <h1 className='md:text-2xl ml-28 md:ml-0 text-xl'>{cart.length?"Your Food Items":"Your Cart Is Empty"}</h1>
        </div>
        <div className='flex gap-2 p-4 flex-col'>
         {cart.map(item=>(<div key={item.newItem.id} className='flex relative gap-6 md:justify-between items-center border-b-2 py-1 '>
          <div className='w-20 flex flex-col gap-1'>
          <img src={item.newItem.image} alt="" />
          <div className='w-32'>
            <p className='text-smm md:text-md'>{item.newItem.title}</p>
          </div>
          </div>
          <div>
            <p>$ {(item.newItem.price*item.qty).toFixed(2)} </p>
          </div>
          <div className='flex items-center gap-2 justify-center'>
            <p>Qty :</p>
           <div className='flex border border-black'> 
            <button onClick={()=>AddQty(item.newItem.id)} className='px-2'>+</button>
           <input  type="text" value={item.qty} readOnly className='border-l text-center border-black border-r w-10' />
           <button onClick={()=>decQty(item.newItem.id)} className='px-2'>-</button>
           </div>

          </div>
          <p onClick={()=>removeItem(item.newItem.id)} className='absolute left-64 top-0 md:left-80 cursor-pointer text-[red]'><FaTrashAlt /></p>
         </div>
        ))}
      <div>
      <div className='flex gap-16 md:justify-between md:px-4'>
          <p className=''>Total</p>
          <p>$ {cart.reduce((a,b)=> a += b.newItem.price*b.qty,0).toFixed(2)}</p>
        </div>
        <div className='flex md:justify-center mt-5'>
        <button onClick={handleSubmit} className='btn'>Place Your Order</button>
        </div>
      </div>
        </div>
        </div>
        </div>
       {showMenu &&  <ul  className='bg-white py-4 transition-all duration-700 flex justify-around md:hidden '>
        <li onClick={ScrolltoTop}>Home</li> 
          <li onClick={ScrollAbout}>About</li>
            <li onClick={ScrollShop}>Shop</li>
            <li onClick={ScrollBlog}>Blog</li>
            <li  onClick={ScrollContact}>Contact</li>
            </ul>}
        { nav &&  <div className='flex z-40 py-2 items-center md:justify-between overflow-hidden   text-white fixed bg-[#f1cb20] top-0 left-0 right-0    md:px-32 '>
        <div className="logo cursor-pointer mr-3 md:mr-0 ">
        <img className=' w-[100px] md:w-32'  src={Logo} alt="" />
        </div>
        <div className="navi">
        <ul className='flex md:gap-3 gap-1  items-center cursor-pointer'>
         <li className='text-sm' onClick={ScrolltoTop}>Home</li>
        <li className='text-sm' onClick={ScrollAbout}>About</li> 

        <li className='text-sm' onClick={ScrollShop}>Shop</li>
        <li className='text-sm' onClick={ScrollBlog}>Blog</li>
        <li className='text-sm' onClick={ScrollContact}>Contact</li>
        <li className='text-sm relative' onClick={ShowSideBar} >
        <TiShoppingCart  className='md:text-4xl text-2xl ' />
        <p className='absolute top-0 right-0 bg-red-600 md:font-bold w-4 h-4 md:text-sm text-smm flex justify-center items-center md:w-5 md:h-5 line rounded-full'>{cart.length}</p>
        </li>
        
        </ul>
        </div>
        </div>}
            </>
            )
            })
