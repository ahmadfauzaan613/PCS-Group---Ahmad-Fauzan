import React from 'react'
import notif from '../assets/Images/notif.png'
import back from '../assets/Images/back.png'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const location = window.location.pathname
  return (
    <React.Fragment>
      {location === '/' ? (
        <div className="px-[3.5rem] py-[20px] flex items-center justify-between">
          <p className=" text-[24px] text-[#F84532] font-bold">KerjaYuk!</p>
          <img src={notif} alt="" width={30} className="cursor-pointer" onClick={() => navigate('/notification')} />
        </div>
      ) : (
        <div className="px-[3.5rem] py-[20px] flex items-center justify-start gap-[10px]">
          <img src={back} alt="" width={25} className="cursor-pointer" onClick={() => navigate('/')} />
          <p className=" text-[24px] text-[#F84532] font-bold">Notification</p>
        </div>
      )}
    </React.Fragment>
  )
}

export default Header
