import React from 'react'
import CardCarousel from './CardCarousel'

function Carousel() {
  return (
    <div>
      <p className="text-[18px] font-bold mt-[25px]">PCS News</p>
      <CardCarousel />
      <div className="flex justify-center mt-4 gap-3">
        <div className="w-[15px] h-[15px] rounded-full bg-[#ABABAB]"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-[#F84532]"></div>
        <div className="w-[15px] h-[15px] rounded-full bg-[#ABABAB]"></div>
      </div>
    </div>
  )
}

export default Carousel
