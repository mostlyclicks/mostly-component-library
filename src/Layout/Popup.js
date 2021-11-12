import React from 'react'

const Popup = () => {
  return (
    <div>
      <div className="flex justify-center absolute z-20 w-screen h-screen">
        <div className="flex bg-white w-1/3 h-1/3 z-200 relative rounded-md self-center">
          Hello
        </div>  
      </div>
      <div className="bg-black opacity-80 w-screen h-screen z-10 absolute">
        
      </div>
      

    </div>
  )
}

export default Popup
