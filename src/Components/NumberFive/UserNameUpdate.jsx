import React, { useEffect, useState } from 'react'

function UserNameUpdate() {
    const[name,setName]=useState('Guest')
    const[btnId,setBtnId]=useState(0)
      
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
       
        <p>----------------------------------</p>
        <h1>Welcome {name}!</h1>
    </div>
  )
}

export default UserNameUpdate