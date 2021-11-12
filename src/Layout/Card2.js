import React from 'react'
import BikeImg from "../images/MY22_ADH01_Red.jpg"

const Card2 = () => {
  return (
    <div className=" flex flex-col bg-clip-content transition-opacity duration-500 ease-in">
      <img src={BikeImg} alt="Time Red bike" className="  self-center h-150" />
      <div className="p-4">
        <h1>TIME ALPE D'HUEZ 01</h1>
        <p className="hidden md:flex">Time Bicycles is well known around the world for having some of the most comfortable and performative rides available. The Alpe d'Huez 01 Rim Brake Frameset is proof positive of the luxury brand's commitment to quality and performance.</p>
      </div>
    </div>
  )
}

export default Card2