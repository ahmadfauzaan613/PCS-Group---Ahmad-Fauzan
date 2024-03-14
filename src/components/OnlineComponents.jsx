import React from 'react'
import Online from './Online'

function OnlineComponents() {
  const dataOnline = [{ name: 'name1' }, { name: 'name2' }, { name: 'name3' }, { name: 'name4' }, { name: 'name5' }, { name: 'name6' }, { name: 'name7' }, { name: 'name8' }, { name: 'name9' }, { name: 'name10' }]
  return (
    <div>
      <p className="text-[18px] font-bold mt-[25px]">Online</p>
      <div className="mt-3">
        <div className="flex items-start justify-center">
          {dataOnline.map((item, i) => (
            <Online name={item.name} />
          ))}
          <div className="text-center cardProfile text-white rounded-full px-2 py-1">10 more</div>
        </div>
      </div>
    </div>
  )
}

export default OnlineComponents
