import React from 'react'
import './style.css'

function Details({user,password,email,time}) {
  return (
   <div className="finish">
     <div className='details'>
        <h1>{email?'the user from Sign Up page is : ':'the user From Login Page is : ' } {user}</h1>
        <h1>{email &&'email is :'}{email}</h1>
        <h1>{email ?'the time of signUp is : ':'the time of Login is : '}{time}</h1>
    </div>
   </div>
  )
}

export default Details