

export const reducer = (state,action)=>{
    switch(action.type) {
        case 'setUser' :
            return {...state,user:action.payload} // we return a state , whether as an object or else
        case 'setEmail' :
            return {...state,email:action.payload}
        case 'setPassword' :
            return {...state,password:action.payload}
        case 'toggleSubmit' :
            return {...state,submit:true}
        
        case 'setTime' :
            return {...state,time:new Date().toLocaleString()} //dont forget the () .tolocalestring()  
        
            default :
                return state 
    }
}