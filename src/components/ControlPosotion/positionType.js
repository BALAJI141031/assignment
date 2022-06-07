import React from 'react'
import './positionType.css'
export default function PositionType({ type, setPosition, pageOneChanges,setpageOneChanges }) {
  console.log("should render while coming from page 2 ", type, pageOneChanges)
  
  const handlePageOne = () => {
    setPosition(type)
    setpageOneChanges(false)
  }
  return (
      <div className='flex-div flex-H-center-V'>
      <input type="radio" name='position' className='position-selector' onClick={ handlePageOne} checked={(type === "center" && pageOneChanges)} />      
      <p>{type}</p>
    </div>
  )
}
