import React, { useState } from "react"
import { CardImgUrl } from "../utils/Urls"
import { useDispatch } from "react-redux"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { addItem,removeItem } from "../utils/store/CartSlice"
import { IoIosStar } from "react-icons/io"

function MenuCard({ props }) {
  const { id, name, price, defaultPrice, description, imageId ,quantity} = props
  var { rating } = props.ratings?.aggregatedRating
  const [quantitys, setquantitys] = useState((quantity!=undefined)?quantity:0) 
  console.log(id)
  rating = rating?rating:4.1
  const dispatch = useDispatch()
  const handleAdditems = () => {
    setquantitys(quantitys + 1)
    dispatch(addItem({...props,quantity:quantity==undefined?1:quantity+1}))
  }
  const handleRemoveitems = () => {
    dispatch(removeItem(id))
    setquantitys(quantitys - 1)
  }
  return (
    <div className="p-1 pl-2 md:h-36 lg:h-44 bg-gray-50 flex items-center justify-between border-b-2 overflow-hidden">
      <div className="w-3/4">
        <div className="font-medium md:text-sm text-sm md:text-lg">{name}</div>
        <div className="mt-1 text-sm md:text-base inline"><MdOutlineCurrencyRupee className='mb-1 inline'/>{price / 100 || defaultPrice / 100}</div>
        { rating && <div className={`mt-1 ml-3 text-center text-sm md:text-base inline-block ${
          rating >= 4
            ? "bg-green-700"
            : rating >= 3.5
            ? "bg-green-500"
            : "bg-red-500"
        } text-white rounded-md w-9 md:w-10`}> {rating}<IoIosStar
        className="mb-1 h-3 w-3 inline"
      /></div>}
        <div className="w-4/5 tracking-tight font-extralight text-xs md:text-sm">

          {description?.substring(0,75) || description}...
        </div>
      </div>
      <div className="w-1/5 h-32 relative rounded-lg lg:overflow-hidden mx-auto">
      <img className="md:scale-125 mt-3 md:mt-5" src={CardImgUrl + imageId} alt="" />
        {(quantitys==0 || quantitys==undefined)? (
          <button
            onClick={() => {handleAdditems()}}
            className="absolute inset-0 w-14 md:w-16 lg:w-2/3 h-7 md:h-9 mt-16 mx-auto text-sm md:text-base rounded-2xl bg-gray-300 font-semibold  text-blue-500"
          >
            Add+
          </button>
        ) : (
          <div className="absolute w-14 lg:w-2/3 md:w-16 h-7 md:h-9 mt-16 inset-0 mx-auto text-sm md:text-lg rounded-2xl bg-gray-300 font-semibold text-blue-500">
            <button onClick={() => {handleRemoveitems()}} className="w-1/3">-</button>
            <button className="w-1/3 mt-1">{quantitys}</button>
            <button onClick={() =>{handleAdditems()}} className="w-1/3">+</button>
          </div>
        )}

        {/* <img className="md:scale-125 md:mt-5" src={CardImgUrl + imageId} alt="" /> */}
      </div>
    </div>
  )
}

export default MenuCard
