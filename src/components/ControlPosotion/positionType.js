import React from 'react'
import './positionType.css'
export default function PositionType({type,setPosition}) {
  return (
      <div className='flex-div flex-H-center-V'>
          <input type="radio" name='position' className='position-selector' onClick={()=>setPosition(type)}/>
          <p>{type}</p>
    </div>
  )
}
