import React from 'react'


const Footer = (props) => {

  const mainNav = props.primaryLinks
  const secondaryNav = props.secondaryLinks

  return (
    <div className=" bg-gray-200">
    <footer className="container mx-auto p-4">
      <div>
        <ul>
          {mainNav.map((link) => {

            return (
              <li><a href={link.url}>{link.linkText}</a></li>
            )
          })}
        </ul>
      </div>
      <div>
        <ul>
          {secondaryNav.map((link) => {

            return (
              <li><a href={link.url}>{link.linkText}</a></li>
            )
          })}
        </ul>
      </div>

      
    </footer>
    </div>
  )
}

export default Footer
