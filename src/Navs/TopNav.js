import React from 'react'

const TopNav = (props) => {

  const links = props.links
  console.log(links)

  return (
    <div>
      <ul>
        {links.map((link) => {

          return (
            <li><a href={link.url}>{link.linkText}</a></li>
          )
        })}
        
      </ul>
    </div>
  )
}

export default TopNav
