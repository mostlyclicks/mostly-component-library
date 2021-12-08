import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const SectionOne = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row mb-12">
      <div className="flex sm:flex-wrap content-center p-12 sm:p-16 sm:pr-32 sm:h-96 w-full sm:w-2/3 lg:w-4/5 bg-gradient-to-r from-gray-700 to-gray-400 border-2 text-white">
        <h1>Section One</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid impedit saepe asperiores facere nulla possimus incidunt id? Perspiciatis, placeat quaerat nobis voluptates quibusdam hic necessitatibus modi exercitationem aut natus!</p>

      </div>
      <img src={BikeImg} alt="bike" className=" shadow-lg sm:w-1/2 lg:w-1/2 xl:w-1/3 self-center sm:-ml-24" />
      
    </div>
    
  )
}

export default SectionOne
