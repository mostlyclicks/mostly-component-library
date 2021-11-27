import React from 'react'

const TopNav = (props) => {

  const links = props.links
  console.log(links)

  return (
    <div>
      <ul className="flex flex-row justify-around md:justify-end py-2 px-4 md:gap-6 bg-gray-200 text-xs">
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
