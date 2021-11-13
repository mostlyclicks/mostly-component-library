import React from 'react'
import { NavLink } from "react-router-dom"
import Hamburger from '../UI/Hamburger'


const MobileOpen = (props) => {

  const links = props.links

  return (
    <nav className="flex sm:hidden">
      <Hamburger onOpenNav={props.onOpenMobileNav} />
    </nav>
  )
}

export default MobileOpen
