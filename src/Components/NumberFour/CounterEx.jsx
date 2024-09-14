import React, { useEffect, useState } from 'react'

function CounterEx() {
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log('Counter incremented');
        
    },[counter])
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={()=>setCounter(prevCount=>prevCount+1)}>Increment</button>
    </div>
  )
}

export default CounterEx