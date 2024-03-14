import React from 'react'
import Time from '../assets/Images/time.png'
import TimeHours from '../assets/Images/working-hours.png'
import Working from '../assets/Images/working.png'
function Activity() {
  return (
    <div>
      <p className="text-[18px] font-bold mt-[20px] px-[17px]">Today's activity</p>
      <div className="mt-6 flex items-center justify-between px-[2rem]">
        <div>
          <div className="flex justify-center ">
            <img src={Time} alt="" width={30} />
          </div>
          <p className="text-center text-[17px] font-bold pt-3">08:30</p>
          <p className="text-center text-[14px]">check In</p>
        </div>
        <div>
          <div className="flex justify-center ">
            <img src={TimeHours} alt="" width={30} />
          </div>
          <p className="text-center text-[19px] text-[#F84532] font-bold pt-3">03:00:00</p>
          <p className="text-center text-[14px]">Working Hours</p>
        </div>
        <div>
          <div className="flex justify-center ">
            <img src={Working} alt="" width={30} />
          </div>
          <p className="text-center text-[17px] pt-3 font-bold">--:--</p>
          <p className="text-center text-[14px]">check Out</p>
        </div>
      </div>
    </div>
  )
}

export default Activity
