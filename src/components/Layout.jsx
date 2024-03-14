import React from 'react'
import Header from './Header'
import Menu from './Menu'

function Layout(props) {
  const location = window.location.pathname
  return (
    <div className={`flex justify-center items-center h-full   py-4 my-4`}>
      <div className="bg-white border-[2px] border-red-500  w-[640px]">
        <Header />
        <div className={`  ${location === '/' && ' px-[3.5rem] my-4'}`}>{props.children}</div>
        {location === '/' && <Menu />}
      </div>
    </div>
  )
}

export default Layout
