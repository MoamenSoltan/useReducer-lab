import React, { useReducer } from 'react'
import { reducer } from './RegisterReducer'
import Details from './Details'
import './style.css'
function Login({toggleHasAccount}) {
  const initialState = {
    user:'',
    password:'',
    submit:false,
    time:null
  }

  const [state,dispatch]=useReducer(reducer,initialState)
  const handleSubmit=(e)=>{
    e.preventDefault()

    dispatch({type:'toggleSubmit'})
    // console.log(state)
    dispatch({type:'setTime'})
  }
  if(state.submit) 
    return <Details user={state.user} password={state.password} time={state.time}/>
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

          <button type='submit'>Submit</button>
          <button className='toggleBtn' onClick={toggleHasAccount}>Don't have an account?</button>
        </form>

      

    </div>
  )
}

export default Login