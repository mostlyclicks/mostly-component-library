import React from 'react'
import { NavLink } from "react-router-dom"
import Hamburger from '../UI/Hamburger'


const MobileNav = (props) => {

  const links = props.links

  return (
    <nav className="flex sm:hidden">
      <Hamburger />
    </nav>
  )
}

export default MobileNav
