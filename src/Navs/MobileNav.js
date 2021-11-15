import React from 'react'
import { Link } from 'react-router-dom'

const MobileNav = (props) => {

  const links = props.links

  return (
    <div className="z-300 fixed top-8 left-0 flex flex-col w-full h-screen bg-black opacity-90">
      <button onClick={props.onCloseNav} className="text-white text-4xl self-end -mt-2 pr-5">–</button>
      <ul className="m-0 p-8">
        {links.map((link) => {

          return (
            <li className="flex w-full border-b-2 p-4">
              <Link 
                to={link.url}
                onClick={props.onCloseNav}
                className="text-white"
              >
                {link.linkText}
              </Link>
            </li>
          )
        })}
      </ul>
      <button onClick={props.onCloseNav} className="text-white">Close</button>
    </div>
  )
}

export default MobileNav
