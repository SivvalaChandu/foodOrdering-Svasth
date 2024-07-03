import React from "react"

function CardWave() {
  return (
    <div className="m-4 w-72  bg-gray-200 rounded-xl">
      <div className="w-full h-48 animate-pulse bg-slate-300 rounded-xl"></div>
      <div className=" h-20 pl-2 animate-pulse mt-1 w-full">
        <div className="mt-1 w-36 h-5 animate-pulse bg-gray-400 rounded-md"></div>
        <div className="mt-1 w-56 h-3 animate-pulse bg-gray-300 rounded-md"></div>
        <div className="mt-1 w-24 h-4 animate-pulse bg-gray-400 rounded-md"></div>
        <div className="mt-1 w-28 h-3 animate-pulse bg-gray-300 rounded-md"></div>
      </div>
    </div>
  )
}

export default CardWave
