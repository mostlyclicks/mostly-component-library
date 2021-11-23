import React from 'react'


const Footer = (props) => {

  const mainNav = props.primaryLinks
  const secondaryNav = props.secondaryLinks

  return (
    <footer className="container mx-auto">
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
  )
}

export default Footer
