import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = (props) => {

  const links = props.links

  return (
    <div className="flex w-full h-48">
      <ul>
        {links.map((link) => {

          return (
            <li><Link to={link.url}>{link.linkText}</Link></li>
          )
        })}
      </ul>
      <button onClick={props.onCloseNav}>Close</button>
    </div>
  )
}

export default MobileNav
