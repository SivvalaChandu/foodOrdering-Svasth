import React, { useState } from "react"
import MenuCard from "./MenuCard"
import { SlArrowDown,SlArrowUp } from "react-icons/sl"

function MenuRestaurantList({ prop }) {
  const { itemCards } = prop.card?.card
  const { category } = prop.card?.card
  const [showItems, setshowItems] = useState(false)
  const handleClick=()=>{
    setshowItems(!showItems)
  }
  return (
    <div>
      <div  onClick={() => handleClick()} className="mt-3 px-8 mb-5 w-11/12 mx-auto h-12 font-medium text-sm md:text-lg bg-gray-100 cursor-pointer flex justify-between items-center rounded-lg">
        {prop?.card?.card?.title} ({itemCards.length})
        {(showItems)?<SlArrowUp className="text-violet-500"/>:<SlArrowDown className="text-violet-500" />}
      </div>
      {(itemCards || category)?.map((ele) => (
        <div className="w-4/5 mx-auto bg-gray-50" key={ele.card?.info?.id}>
          {showItems && <MenuCard props={ele.card?.info} />}
        </div>
      ))}
    </div>
  )
}

export default MenuRestaurantList
