import React from 'react'
import { NavLink } from "react-router-dom"
import Hamburger from '../UI/Hamburger'


const MobileNav = (props) => {

  const links = props.links

  const openNavHandler = () => {
    console.log('clicked hamburger')
    // props.onOpenMobileNav
  }

  return (
    <nav className="flex sm:hidden">
      <Hamburger onOpenNav={props.onOpenMobileNav} />
    </nav>
  )
}

export default MobileNav
