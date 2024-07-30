import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { showsignpage } from "../utils/store/signSlice"
import { RxCross2 } from "react-icons/rx"
export default function MenuButtons({menushow}) {
    const dispatch = useDispatch()
    const handleSign = () => {
        menushow()
        dispatch(showsignpage())
      }

    const handleClick = () => {
      console.log("1");
        menushow()
      }
  return (
    <div className={`w-screen h-screen md:invisible bg-gradient-to-b z-20 fixed top-0`}>
        <RxCross2 onClick={handleClick} className='w-screen cursor-pointer mt-5 text-3xl ml-[44%]'/>
        <div className="w-full mt-24 ml-10 text-sm md:text-base text-lg tracking-tighter">
          <Link to={"/"} onClick={handleClick} className='text-2xl block'>Home</Link>
          <Link to={"/help"} onClick={handleClick} className='mt-5 text-2xl block'>
            Help
          </Link>
          <div
          onClick={handleSign}
          className='mt-5 text-2xl cursor-pointer block'
        >
          SignUp
        </div>
        </div>
        
      </div>
  )
}
