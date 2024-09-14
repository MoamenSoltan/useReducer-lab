import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Register() {

    const [hasAccount,setHasAccount]=useState(true)

    const toggleHasAccount =()=>{
        setHasAccount(prev=>!prev)
    }

  return (
    hasAccount?<Login toggleHasAccount={toggleHasAccount}/>:<Signup toggleHasAccount={toggleHasAccount} />
  )
}

export default Register