import React from 'react'
import Logo from '../Brand/Logo'
import MainNav from '../Navs/MainNav'
import MobileNav from '../Navs/MobileNav'

const Header = (props) => {

  const links = props.links

  return (
    <header className="container mx-auto flex flex-row">
      <Logo brand="Bike Site" classes="flex"/>
      <MainNav links={links} classes="hidden sm:flex" />
      <MobileNav classes="flex sm:hidden" />
    </header>
  )
}

export default Header
