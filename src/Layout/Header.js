import React, { useState } from 'react'
import Logo from '../Brand/Logo'
import MainNav from '../Navs/MainNav'
import MobileOpen from '../Navs/MobileOpen'
import MobileNav from '../Navs/MobileNav'

const Header = (props) => {

  const links = props.links

  const [navActive, setNavActive] = useState(false)

  const handleOpenMobileNav = () => {
    console.log('open the NAV')
    setNavActive(true)
  }

  const handleCloseNav = () => {
    setNavActive(false)
  }

  return (
    <header className="container mx-auto flex justify-between">
      <Logo brand="Bike Site" classes="flex"/>
      <MainNav links={links} classes="hidden sm:flex" />
      <MobileOpen onOpenMobileNav={handleOpenMobileNav} classes="flex sm:hidden" />
      { navActive ? <MobileNav links={links} onCloseNav={handleCloseNav}/> : "" }
    </header>
  )
}
export default Header
