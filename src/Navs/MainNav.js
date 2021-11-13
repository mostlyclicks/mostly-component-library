import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Logo from '../Brand/Logo'

const MainNav = (props) => {

  const links = props.links

  return (
    <nav className="flex flex-row justify-between pt-8">
      <Logo brand="Bike Site"/>
      <ul className="hidden sm:flex sm:flex-row gap-6 items-center">
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
