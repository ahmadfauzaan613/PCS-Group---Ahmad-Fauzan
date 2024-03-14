import React from 'react'
import Avatar from 'react-avatar'

function CardProfile() {
  return (
    <div className="mt-3 cardProfile w-full h-full rounded-lg p-4">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-[10px]">
            <Avatar githubHandle="sitebase" size="60" round={true} />
            <div>
              <p className="font-bold text-white">Tabay</p>
              <p className="font-light text-white">UI/UX Designer</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-light text-white text-[14px]">Member Since</p>
            <p className="font-bold text-white ">01 Juni 2021</p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="pt-3">
            <p className="font-light text-white">Location</p>
            <p className="font-bold text-white">Kantor Sahid</p>
          </div>
          <p className="italic font-light text-white text-[14px]">ICO</p>
        </div>
      </div>
    </div>
  )
}

export default CardProfile
