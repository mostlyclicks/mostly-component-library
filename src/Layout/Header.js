import React from 'react'
import MainNav from '../Navs/MainNav'
import MobileNav from '../Navs/MobileNav'

const Header = (props) => {

  const links = props.links

  return (
    <header className="container mx-auto">
      <MainNav links={links} />
      <MobileNav />
    </header>
  )
}

export default Header
