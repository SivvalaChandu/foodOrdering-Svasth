import React,{useState} from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BsFillCartFill } from "react-icons/bs"
import { showsignpage } from "../utils/store/signSlice"
import { CiMenuFries } from "react-icons/ci"
import MenuButtons from "./MenuButtons"
function Header() {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const [menu,setmenu] = useState(false)
  const handleSign = () => {
    dispatch(showsignpage())
  }
  return(
    <div className="w-screen h-10 md:h-14 lg:h-16  md:px-16 lg:px-48 z-10 md:fixed top-0 flex justify-between bg-gradient-to-r from-violet-500 to-violet-50 shadow-md shadow-gray-100 items-center overflow-hidden">
      <Link to={"/"} className="w-20 md:w-28 lg:w-40 transition duration-100 md:hover:scale-105">
        <img src="./src/assets/logo.png" alt="" />
      </Link>
      
      <div className="h-10 flex items-center gap-10 invisible md:visible ">
        <div className="flex gap-8 md:text-base text-lg tracking-tighter">
          <Link to={"/"}>Home</Link>
          <Link to={"/help"} className="mr-[-9px] active">
            Help
          </Link>
          <Link to={"/cart"} className="w-12 mr-[-9px] flex justify-center">
            C
            {cartItems.length > 0 ? (
              <div className="flex">
                <BsFillCartFill className=" md:w-5 md:h-5 w-6 h-6 mt-[3px] text-violet-500" />
                <div className="absolute md:ml-[2px] ml-[2px] md:mt-[4px] mt-[4px] md:text-xs text-sm text-center text-white md:w-4 w-5 h-3">
                  {cartItems.length}
                </div>
                rt
              </div>
            ) : (
              "art"
            )}
          </Link>
        </div>
        <button
          onClick={handleSign}
          className="md:w-20 w-24 md:h-8 h-10 bg-violet-600 text-white text-center md:font-medium font-semibold rounded-full tracking-tight"
        >
          SignUp
        </button>
      </div>
      <div className="absolute md:hidden ml-[83%] flex gap-4">
      <Link to={"/cart"} className="mb-2 "><BsFillCartFill className=" md:w-5 md:h-5 w-6 h-6 mt-[3px] text-violet-500" />
                <div className="absolute -mt-[21px] ml-[3px] h-3 w-5 text-white text-xs text-center">
                  {cartItems.length}
                </div>
                </Link>
      <CiMenuFries onClick={()=>{setmenu(()=>!menu)}} className="mt-1 mr-4 text-2xl cursor-pointer md:invisible"/>
      </div>
      {menu && <MenuButtons menushow={()=>setmenu(false)} />}
    </div>
  )
}

export default Header
