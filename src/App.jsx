
import './App.css'
import { Home } from './components/home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { useRef ,useState } from 'react'
function App() {
  const[qty,setQty]=useState(1)
  const[cart,setCart]=useState([])
  const ScrollRef=useRef(null)
  const ScrollTOAbt=useRef(null)
  const ScrollTOShop=useRef(null)
  const ScrollTOBlog=useRef(null)
  const ScrollTOContact=useRef(null)
  const ScrolltoTop= ()=>{
    ScrollRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const ScrollAbout=()=>{
    ScrollTOAbt.current.scrollIntoView({behavior: 'smooth'})
  }
  const ScrollShop=()=>{
    ScrollTOShop.current.scrollIntoView({behavior: 'smooth'})
  }

  const ScrollBlog=()=>{
    ScrollTOBlog.current.scrollIntoView({behavior: 'smooth'})
  }
  const ScrollContact=()=>{
    ScrollTOContact.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <> 
    <div ref={ScrollRef} className="app backgroundImage4 bg-no-repeat  h-screen  ">
     <BrowserRouter>
     <Navbar ScrollContact={ScrollContact} cart={cart} ScrollBlog={ScrollBlog} ScrollAbout={ScrollAbout} ScrollShop={ScrollShop} ScrolltoTop={ScrolltoTop}  setCart={setCart}/>
     <Routes>
      <Route path='/' element={<Home ScrollTOContact={ScrollTOContact} ScrollTOBlog={ScrollTOBlog}  ScrollTOShop={ScrollTOShop} ScrollTOAbt={ScrollTOAbt} cart={cart} setCart={setCart} qty={qty} setQty={setQty} ScrolltoTop={ScrolltoTop}/>}/>
     </Routes >
     </BrowserRouter>
    </div>
    </>
  )
}

export default App 
