import React from 'react'

const Logo = (props) => {

  const brand = props.brand

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{brand}</h1>
    </div>
  )
}

export default Logo
