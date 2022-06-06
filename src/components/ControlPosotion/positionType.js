import React from 'react'

export default function PositionType({type}) {
  return (
      <div className='flex-div flex-H-center-V'>
          <input type="radio" name='position' />
          <p>{type}</p>
    </div>
  )
}
