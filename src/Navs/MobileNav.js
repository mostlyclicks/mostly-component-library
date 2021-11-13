import React from 'react'
import { NavLink } from "react-router-dom"
import Hamburger from '../UI/Hamburger'


const MobileNav = (props) => {

  const links = props.links

  const openNavHandler = () => {
    console.log('clicked hamburger')
  }

  return (
    <nav className="flex sm:hidden">
      <Hamburger onOpenNav={openNavHandler} />
    </nav>
  )
}

export default MobileNav
