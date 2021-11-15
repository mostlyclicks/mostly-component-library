import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => {

  const brand = props.brand

  return (
    <div>
      <h1 className={`text-2xl font-bold text-white ${props.classes}`}>
        <Link to="/">{brand}</Link>
      </h1>
    </div>
  )
}

export default Logo

