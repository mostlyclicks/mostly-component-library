import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const SectionOne = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="flex sm:flex-wrap content-center p-12 sm:p-16 sm:pr-32 sm:h-96 w-full sm:w-2/3 bg-gradient-to-r from-gray-700 via-white to-white border-2 border-red-500">
        <h1>Section One</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid impedit saepe asperiores facere nulla possimus incidunt id? Perspiciatis, placeat quaerat nobis voluptates quibusdam hic necessitatibus modi exercitationem aut natus!</p>

      </div>
      <img src={BikeImg} alt="bike" className="sm:w-1/3 sm:3/5 self-center sm:-ml-24" />
      
    </div>
    
  )
}

export default SectionOne
