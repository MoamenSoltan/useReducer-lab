import React, { useContext } from 'react'
import Component4 from './Component4'
import { MainContext } from '../../Contexts/MainContext'

function Component3() {
    const value=useContext(MainContext)
  return (
    <div>
    <h3>Component3 , the value from context : {value}</h3>
    <Component4/>
</div>
  )
}

export default Component3