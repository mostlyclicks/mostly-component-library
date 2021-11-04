import React from 'react'
import MainNav from '../Navs/MainNav'

const Header = (props) => {

  const links = props.links

  return (
    <header>
      <MainNav links={links} />
    </header>
  )
}

export default Header
