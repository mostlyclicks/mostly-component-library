import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const Card2 = () => {
  return (
    <div className="md:w-1/2 rounded-md border border-gray-300 border-2 flex flex-row bg-clip-content">
      <img src={BikeImg} alt="Time Red bike" className=" w-1/2 rounded-tl-md rounded-bl-md self-center h-150" />
      <div className="p-4">
        <h1>TIME ALPE D'HUEZ 01</h1>
        <p>Time Bicycles is well known around the world for having some of the most comfortable and performative rides available. The Alpe d'Huez 01 Rim Brake Frameset is proof positive of the luxury brand's commitment to quality and performance.</p>
      </div>
    </div>
  )
}

export default Card2