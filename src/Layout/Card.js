import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const Card = () => {
  return (
    <div className="md:w-1/3 rounded-md border border-gray-300 border-2 flex-row">
      <img src={BikeImg} alt="Time Red bike" className="w-100 rounded-tl-md rounded-tr-md" />
      <div className="p-3">
        <h1 className="mb-3 font-bold">TIME ALPE D'HUEZ 01</h1>
        <p className="mb-3">Time Bicycles is well known around the world for having some of the most comfortable and performative rides available. The Alpe d'Huez 01 Rim Brake Frameset is proof positive of the luxury brand's commitment to quality and performance.</p>

        <p>Buy the Time Alpe D'Huez 01 Rim Brake Frameset and let Contender Bicycles' Pro Build team help you create the ultimate bike for your dream rides.</p>
      </div>
    </div>
  )
}

export default Card
