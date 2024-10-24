import React, { useEffect, useState } from "react"
import Card from "./Card"
import CardsWave from "./CardsWave"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import useRestaurantsList from "../utils/useRestaurantsList"

function Body() {
  useRestaurantsList()
  const restaurantsList = useSelector((store) => store.restaurants.list[0])
  const [searchRestaurants, setsearchRestaurants] = useState([])
  useEffect(() => {
    setsearchRestaurants(restaurantsList)
  }, [restaurantsList])
  if (searchRestaurants == undefined) return <CardsWave />

  return (
    <>
      <div className="m-2 md:mt-16 lg:mt-20 flex justify-center gap-20">
        <div className="bg-gray-500 border-2 rounded-full">
          <input
            className="pl-3 md:p-5 h-8 outline-none rounded-full"
            type="text"
            placeholder="Fooding..."
            onChange={(e) => {
              if (e.target.value.trim() == "") {
                return setsearchRestaurants(restaurantsList)
              }
              const searchFood = restaurantsList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.trim().toLowerCase())
              )
              setsearchRestaurants(searchFood)
            }}
          />
        </div>
      </div>
      <div className="w-9/12 mx-auto flex flex-wrap justify-center gap-1">
        {searchRestaurants.map((ele) => (
          <Link
            key={ele.info.id}
            to={"/restaurant/" + ele.info.name + "/" + ele.info.id}
          >
            <Card
              id={ele.info.id}
              image={ele.info.cloudinaryImageId}
              name={ele.info.name}
              rating={ele.info.avgRating}
              cuisines={ele.info.cuisines}
              delivery={ele.info.sla.slaString}
              cost={ele.info.costForTwo}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Body
