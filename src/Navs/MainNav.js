import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"


const MainNav = (props) => {

  const links = props.links

  return (
    <nav className={`flex pt-8 ${props.classes}`}>
      
      <ul className="flex flex-row gap-6 items-center">
        {links.map((link) => {
          return (
            <li>
            <NavLink to={link.url} className="text-white"
              style={
                ({ isActive }) => {
                  return (
                    {
                      textDecoration: isActive ? "underline" : ""
                    }
                  )
                }
              }
            >{link.linkText}</NavLink></li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
