import React, { useReducer } from 'react'
import { reducer } from './RegisterReducer'
import Details from './Details'
import './style.css'


function Signup({toggleHasAccount}) {
  const initialState = {
    user:'',
    password:'',
    email:'',
    submit:false,
    time:null
  }

  const [state,dispatch]=useReducer(reducer,initialState)//reducer function is external 
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:'toggleSubmit'})
    dispatch({type:'setTime'})
  }
  if(state.submit)
    return <Details  user={state.user} password={state.password} email={state.email} time={state.time}/>
    else
  return (
    <div className='register'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">User name</label>
            <input type="text" value={state.user} onChange={(e)=>{dispatch({type:'setUser',payload:e.target.value})}} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" value={state.password} onChange={(e)=>{dispatch({type:'setPassword',payload:e.target.value})}} />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" value={state.email} onChange={(e)=>{dispatch({type:'setEmail',payload:e.target.value})}} />
          </div>

          <button type='submit'>Submit</button>
          <button className='toggleBtn' onClick={toggleHasAccount}>Already have an account?</button>
        </form>

       

    </div>
  )
}

export default Signup