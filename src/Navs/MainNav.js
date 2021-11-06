import React from 'react'
import Logo from '../Brand/Logo'

const MainNav = (props) => {

  const links = props.links

  return (
    <nav className="flex flex-row justify-between">
      <Logo brand="ACME LLC"/>
      <ul className="flex flex-row gap-6 items-center">
        {links.map((link) => {
          return (
            <li><a href={link.url}>{link.linkText}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
