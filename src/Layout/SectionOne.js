import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const SectionOne = () => {
  return (
    <div className="flex flex-row">
      <div className="h-96 w-2/3 bg-gradient-to-r from-gray-700 via-white to-white border-2 border-red-500">
        <h1>Section One</h1>

      </div>
      <img src={BikeImg} alt="bike" className="w-1/3 h-1/2 self-center -ml-24" />
      
    </div>
    
  )
}

export default SectionOne
