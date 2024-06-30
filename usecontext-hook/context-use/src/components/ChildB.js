import React from 'react'
import ChildC from './ChildC'

const ChildB = () => {
  return (
    <div>
    <p>i am in ChildB</p>
      <ChildC/>
      
    </div>
  )
}

export default ChildB
