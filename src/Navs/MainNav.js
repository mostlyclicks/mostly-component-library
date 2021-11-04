import React from 'react'
import Logo from '../Brand/Logo'

const MainNav = (props) => {

  const links = props.links

  return (
    <nav>
      <Logo brand="ACME LLC"/>
      <ul>
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
