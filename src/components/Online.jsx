import React from 'react'
import Avatar from 'react-avatar'

function Online(props) {
  return (
    <div>
      <div className="flex justify-center">
        <Avatar githubHandle="sitebase" size="48" round={true} />
      </div>
      <p className="text-center pt-2 font-bold text-[14px]">{props.name}</p>
      <p className="text-center text-[12px]">{props.name}</p>
    </div>
  )
}

export default Online
