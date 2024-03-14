import React from 'react'
import Avatar from 'react-avatar'

function CardCarousel() {
  return (
    <div className="mt-3 bg-white shadow-carousel w-full h-full rounded-lg p-4">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-[10px]">
            <Avatar githubHandle="sitebase" size="60" round={true} />
            <div>
              <p className="font-bold text-black">Tabay</p>
              <p className="font-light text-black">UI/UX Designer</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-light text-black text-[14px]">Senin</p>
            <p className="font-bold text-black ">30 Mei 2022</p>
          </div>
        </div>
        <div className="mt-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam</p>
        </div>
      </div>
    </div>
  )
}

export default CardCarousel
