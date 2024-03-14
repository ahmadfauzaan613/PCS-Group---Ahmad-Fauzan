import React from 'react'
import Money from '../assets/Images/money-bag.png'
import Pil from '../assets/Images/pill.png'
import Watch from '../assets/Images/chronometer.png'

function NotifCard() {
  const imageMap = {
    Reimbursement: Money,
    Sickness: Pil,
    Overtime: Watch,
  }

  const dataNotif = [
    { title: 'Reimbursement', date: 'today', color: 'blue', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Reimbursement', date: 'yesterday', color: 'white', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Reimbursement', date: '2022-10-06', color: 'blue', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Sickness', date: '2022-10-05', color: 'blue', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Sickness', date: '2022-10-05', color: 'white', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Sickness', date: '2022-10-05', color: 'white', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Overtime', date: '2022-10-05', color: 'blue', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Overtime', date: '2022-10-05', color: 'white', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
    { title: 'Overtime', date: '2022-10-05', color: 'white', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex earum tempora, dolore qui commodi vitae natus, quam voluptatibus saepe maiores ad numquam aut, rem cumque a eos beatae. Quidem?' },
  ]
  return (
    <React.Fragment>
      <div className="overflow-y-scroll h-[85vh]">
        {dataNotif.map((item, i) => (
          <div key={i} className={`grid grid-cols-12 gap-[20px] ${item.color === 'blue' && 'bg-blue-300'}  px-[3.5rem] py-4`}>
            <div className="col-span-2 cardProfile p-3 w-full h-fit rounded-lg">
              <img src={imageMap[item.title]} alt={item.title} width={60} />
            </div>
            <div className="col-span-10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[18px] font-bold">{item.title}</p>
                <p className="text-[14px] font-bold text-gray-400">{item.date}</p>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default NotifCard
