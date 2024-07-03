import React from "react"
import CardsWave from "./CardsWave"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuRestaurantList from "./MenuRestaurantList"
import { IoIosStar } from "react-icons/io"
import { CardImgUrl } from "../utils/Urls"
import { useSelector } from "react-redux"

function RestaurantMenu() {
  const { id } = useParams()
  useRestaurantMenu(id)
  const menu = useSelector(store=>store.menu.menuItems[id])
  // console.log(menu)

  if (!menu) return <div className="w-9/12 mx-auto"><CardsWave /></div>
  const {
    avgRating,
    name,
    cuisines,
    costForTwoMessage, 
    totalRatingsString,
    cloudinaryImageId,
  } = menu
  const itemCards = menu.cards
  // console.log(itemCards)
  return (
    <div className="w-screen md:w-3/4 lg:w-2/4 md:mt-28 p-2 my-8 mx-auto">
      <div className="h-36 rounded-2xl shadow-2xl mx-auto flex justify-between overflow-hidden">
        <div className="md:p-5 lg:p-9 py-6 ">
          <div className="font-bold text-md md:text-lg lg:text-xl tracking-tight">{name}</div>
          <div className="text-xs md:text-base pl-5">{cuisines.join(", ")}</div>
          <div className="mt-2 pl-5 text-sm md:text-md tracking-tighter flex gap-1">
            
            <div className={`w-10 text-white text-center ${
                avgRating >= 4
                  ? "bg-green-700"
                  : avgRating >= 3.5
                  ? "bg-green-500"
                  : "bg-red-500"
              } rounded-md `}>{avgRating}<IoIosStar
              className="mb-1 h-3 w-3 inline"
            />
            </div> ( {totalRatingsString} )
          </div>
          <div className="pl-6 font-medium tracking-tighter invisible lg:visible  ">
            {costForTwoMessage}
          </div>
        </div>
        <div className="w-48 md:w-56 overflow-hidden">
          <img src={CardImgUrl + cloudinaryImageId} alt="logo" />
        </div>
      </div>
      <div className="mt-10 md:mt-20 pl-3 md:pl-12 font-semibold text-xl">Menu</div>
      <div className="mt-4 md:mt-10">
        {itemCards.map((category, index) =>
          category.card?.card?.title != null ? (
            <div key={category.card?.card?.title}>
              {category.card?.card?.itemCards ? (
                <MenuRestaurantList
                  prop={category}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  )
}

export default RestaurantMenu
