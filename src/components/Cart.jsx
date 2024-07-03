import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MenuCard from "./MenuCard"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { clearCart } from "../utils/store/CartSlice"
import { Link } from "react-router-dom"
// import {cartempty} from "./assets/cart"

function Cart() {
  const item = useSelector((appStore) => appStore.cart.items)
  const dispatch = useDispatch()
  const slogens = useSelector((appStore) => appStore.cart.slogens)
  var slogen  = Math.floor(Math.random() * slogens.length)
  

  
  var total = 0
  function totalCost(price, quantity) {
    total += quantity * price
  }
  
  if(item.length==0) return <div className="h-screen w-screen flex justify-center items-center"><img className="w-32 md:w-60 lg:w-96 md:h-60 lg:h-96 shrink" src="./src/assets/cart.png" alt="" />
  <div className="w-24 md:w-40 lg:w-52 text-sm md:text-lg lg:text-2xl inline tracking-tighter">You look hungry. Let's order some food and eat together</div>
</div>
  return (
    <div>
      <div className="md:w-10/12 lg:w-9/12 mt-2 md:mt-20 md:mt-28 mx-auto">
        <div className="text-center text-violet-700 font-bold text-sm md:text-lg lg:text-2xl">{slogens[slogen]}</div>
        <div className="w-full md:w-[45%]">
          {item.map((ele) => (
            <MenuCard key={ele.id} props={ele} />
          ))}
        </div>

        <div className="w-screen md:w-2/5 lg:w-2/6 p-2  md:ml-[42%] md:mt-40 md:absolute top-0 rounded-md md:text-sm md:font-normal font-medium shadow-md">
          <div className="mt-3 border-b-2">
            {item.map((ele) => (
              <div key={ele.id} className="mb-5 flex justify-between">
                <div className="text-sm md:text-basew-[70%]">{ele.name}</div>
                <div
                  onChange={totalCost(
                    ele.price / 100 || ele.defaultPrice / 100,
                    ele.quantity
                  )}
                  className=" text-xs md:text-[12px]"
                >
                  {"Qty - "}
                  {ele.quantity} x
                  <MdOutlineCurrencyRupee className="mb-1 inline" />
                  {ele.price / 100 || ele.defaultPrice / 100}
                </div>
              </div>
            ))}
          </div>
          {item != 0 && (
            <>
              <div className="mt-2 font-medium flex justify-between">
                <div className="">Total</div>
                <div>
                  <MdOutlineCurrencyRupee className="mb-1 inline" />
                  {total}
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => dispatch(clearCart())} className="md:w-2/5 w-5/12 h-12 bg-violet-300 rounded-lg">
                  Clear
                </button>
                <Link to={"/order"} className="md:w-2/5 w-1/2 w-5/12 h-12 bg-violet-400 rounded-lg text-center pt-3">Checkout</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart