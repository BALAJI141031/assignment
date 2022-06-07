import React from 'react'
import './positionType.css'
export default function PositionType({ type, setPosition, pageOneChanges,setpageOneChanges,position,setToFoat }) {
  
  const handlePageOne = () => {
    setToFoat(false)
    setPosition(type)
    setpageOneChanges(false)
  }
  return (
      <div className='flex-div flex-H-center-V'>
      <input type="radio" name='position' className='position-selector' onClick={ handlePageOne} checked={(type === "center" && pageOneChanges) || type===position} />      
      <p>{type}</p>
    </div>
  )
}
