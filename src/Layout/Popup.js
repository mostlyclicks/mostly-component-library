import React from 'react'
import Overlay from './Overlay'

const Popup = (props) => {

  return (
    <div>
      <div className="flex justify-center absolute z-20 w-screen h-screen">
        <div className="flex bg-white w-1/3 h-1/3 z-200 relative rounded-md self-center">
          <p>Hello, this is a modal.</p>
          <button onClick={props.closeModal}>Close modal</button>
        </div>  
      </div>
      <Overlay />
    </div>
  )
}

export default Popup
