import React from 'react'
import Home from '../assets/Images/home.png'
import Logout from '../assets/Images/logout.png'
import Check from '../assets/Images/check.png'
import Form from '../assets/Images/form.png'
import Setting from '../assets/Images/settings.png'

function MenuItem(props) {
  return (
    <div>
      <div className="flex justify-center">
        <img src={props.img} alt="" width={32} />
      </div>
      <p className={`${props.name !== 'Home' ? 'text-[#ABABAB] font-semibold' : 'text-[#F84532] font-bold'} text-center mt-1`}>{props.name}</p>
    </div>
  )
}

function Menu() {
  const Menu = [
    { img: Home, name: 'Home' },
    { img: Check, name: 'Attendance' },
    { img: Logout, name: 'Check Out' },
    { img: Form, name: 'Form' },
    { img: Setting, name: 'Setting' },
  ]

  return (
    <React.Fragment>
      <div className="py-4">
        <div className="bg-white">
          <div className="flex items-end justify-evenly">
            {Menu.map((item, i) => (
              <div key={i} className="cursor-pointer">
                {item.name !== 'Check Out' ? (
                  <MenuItem img={item.img} name={item.name} />
                ) : (
                  <div className="text-center">
                    <div className="bg-[#F84532] relative rounded-full w-[70px] h-[70px]">
                      <img src={item.img} alt="" width={34} className="absolute top-[20px] left-[20px]" />
                    </div>
                    <p className="mt-1 text-[#F84532] font-bold">{item.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Menu
