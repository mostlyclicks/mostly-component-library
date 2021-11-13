import React from 'react'
import Logo from '../Brand/Logo'
import MainNav from '../Navs/MainNav'
import MobileNav from '../Navs/MobileNav'

const Header = (props) => {

  const links = props.links

  const handleOpenMobileNav = () => {
    console.log('open the NAV')
  }

  return (
    <header className="container mx-auto flex justify-between">
      <Logo brand="Bike Site" classes="flex"/>
      <MainNav links={links} classes="hidden sm:flex" />
      <MobileNav onOpenMobileNav={handleOpenMobileNav} classes="flex sm:hidden" />
    </header>
  )
}
export default Header
