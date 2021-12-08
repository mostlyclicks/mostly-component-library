import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const SectionOne = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-wrap content-center p-16 pr-32 h-96 w-2/3 bg-gradient-to-r from-gray-700 via-white to-white border-2 border-red-500">
        <h1>Section One</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid impedit saepe asperiores facere nulla possimus incidunt id? Perspiciatis, placeat quaerat nobis voluptates quibusdam hic necessitatibus modi exercitationem aut natus!</p>

      </div>
      <img src={BikeImg} alt="bike" className="w-1/3 h-1/2 self-center -ml-24" />
      
    </div>
    
  )
}

export default SectionOne
