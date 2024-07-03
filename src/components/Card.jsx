import React from "react"
import { CardImgUrl } from "../utils/Urls"
import { IoIosStar } from "react-icons/io"
function Card({ image, name, rating, cuisines, delivery, cost }) {
  return (
    <>
      <div className="m-4 w-72 md:w-64 bg-gray-100 rounded-xl transition duration-150 hover:scale-105 hover:shadow-2xl flex md:flex-col overflow-hidden">
        <div className="w-[50%] md:w-full h-28 md:h-40 overflow-hidden rounded-xl">
          <img className="object-cover w-full h-28 md:h-40" src={CardImgUrl + image} alt="" />
        </div>
        <div className="pl-3 md:h-40 mt-1 w-[50%] md:w-full">
          <h2 className="text-sm md:text-lg font-semibold">{name}</h2>
          <p className="text-xs md:text-sm font-light hidden md:block">{cuisines.join(", ").substring(0,35)}...</p>
          <p className={`md:mt-2 text-center text-xs md:text-base font-medium text-white w-9 md:w-12  ${
                rating >= 4
                  ? "bg-green-700"
                  : rating >= 3.5
                  ? "bg-green-500"
                  : "bg-red-500"
              } rounded-md`}>
            
            {rating}
            <IoIosStar
              className={`mb-1 h-3 w-3 inline text-white`}
            />{" "}
          </p>
          <p className=" text-sm md:text-md font-light">{delivery}</p>
          <p className="text-sm md:text-basefont-normal">{cost}</p>
        </div>
      </div>
    </>
  )
}
export default Card
