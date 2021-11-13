import React from 'react'

const MobileNav = (props) => {
  return (
    <div className="flex w-full h-48">
      <button onClick={props.onCloseNav}>Close</button>
    </div>
  )
}

export default MobileNav
