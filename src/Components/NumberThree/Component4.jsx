import React, { useContext } from 'react'
import { MainContext } from '../../Contexts/MainContext'

function Component4() {
  const value=useContext(MainContext)
  return (
    <div>
    <h4>Component4, value from context : {value}</h4>
    
</div>
  )
}

export default Component4