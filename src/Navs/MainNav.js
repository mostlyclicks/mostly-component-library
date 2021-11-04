import React from 'react'

const MainNav = (props) => {

  const links = props.links

  return (
    <nav>
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
