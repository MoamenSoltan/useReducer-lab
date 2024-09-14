import React, { useEffect, useState } from 'react'

function IntervalEx() {
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
       const interval= setInterval(()=>setCounter(prev=>prev+1),1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])//note : setInterval is attached (like an event listener) , we need to apply it only once on mount , and use a clean up function to 'clearInterval'
    //The setInterval() method continues calling the function until clearInterval() is called
    //set interval must be stored in a value , if we wish to use clearInterval() later
  return (
    <div>
        <h1>Counter : {counter}</h1>
    </div>
  )
}

export default IntervalEx