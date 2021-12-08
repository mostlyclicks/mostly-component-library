import React from 'react'
import Overlay from './Overlay'

const Popup = (props) => {

  return (
    <div>
      <div className="flex justify-center absolute z-20 w-screen h-screen" onClick={props.closeModal}>
        <div className="flex bg-white w-4/5 sm:w-1/2 md:w-1/3 h-1/3 z-200 relative rounded-md self-center">
          <h1>{props.title}</h1>
          <button onClick={props.closeModal}>Close modal</button>
        </div>  
      </div>
      <Overlay />
    </div>
  )
}

export default Popup
