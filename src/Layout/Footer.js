import React from 'react'


const Footer = (props) => {

  const mainNav = props.primaryLinks
  const secondaryNav = props.secondaryLinks

  return (
    <div className=" bg-gray-200">
    <footer className="container mx-auto p-4 flex flex-row gap-8">
      <div>
        <ul>
          {mainNav.map((link) => {

            return (
              <li><a href={link.url}>{link.linkText}</a></li>
            )
          })}
        </ul>
      </div>
      <div className="flex-grow" >
        <ul>
          {secondaryNav.map((link) => {

            return (
              <li><a href={link.url}>{link.linkText}</a></li>
            )
          })}
        </ul>
      </div>
      <div className="">
          555 Main St.<br/>
          Park City, UT 84098<br/>
          555-555-5555
      </div>

      
    </footer>
    </div>
  )
}

export default Footer
