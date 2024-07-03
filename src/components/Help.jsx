import React, { useState } from "react"
import { Questions } from "../utils/Questions"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"

function Help() {
  const [ans, setans] = useState(-1)
  const handleClick = (index) => {
    if (ans == index) setans(-1)
    else setans(index)
  }
  return (
    <div className="w-screen md:w-3/4 lg:w-3/5 mx-auto pt-4 md:pt-24">
      <div className="mb-8 ml-2 md:mb-12 text-xl ">
        We’re here to <span className="text-2xl font-bold">help</span> you,
        every step of the way.
      </div>
      <div>
        {Questions.map((ele, index) => (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              className="mt-3 p-2 mb-5 w-11/12 h-12 mx-auto md:mx-0 text-lg bg-gray-100 cursor-pointer rounded-lg flex justify-between items-center hover:text-violet-500"
            >
              {ele.Q}
              {index == ans ?<SlArrowUp />:<SlArrowDown />}
            </div>
            {index == ans && (
              <div className="w-11/12 pl-14 font-light font">{ele.A}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Help
