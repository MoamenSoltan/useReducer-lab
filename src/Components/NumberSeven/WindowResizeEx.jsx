import React, { useEffect, useState } from 'react'
//notes :
//prev state syntax : setState((prev)=>({...prev,prev.buttonClicks+1})) , (prev)=>()
function WindowResizeEx() {
    
    const [state,setState]=useState({
        windowWidth:window.innerWidth,
        mousePosition:{x:0,y:0},
        buttonClicks:0
    })

    const handleResize =(e)=>{
       const width=window.innerWidth
        setState({...state,windowWidth:width})
    }
    const handleMouseMove = (e) => {
        const setX = e.clientX;
        const setY = e.clientY;
        setState((prevState) => ({ //using prevState with an object state , (prevState)=>({...prevState,etc})
          ...prevState,
          mousePosition: { x: setX, y: setY },
        }));
      };

    useEffect(()=>{
        // handleResize() , or can be fixed by making the initial state.windowWidth:window.innerWidth
        //called before the listeners to make the value with the current width , otherwise it would be 0 , because the numbers change on mount only
        //call to handleResize() inside the useEffect to ensure the window width is set when the component first renders.
        
        window.addEventListener('resize',handleResize)
        window.addEventListener('mousemove',handleMouseMove)

        return()=>{
            window.removeEventListener('resize',handleResize)
            window.removeEventListener('mousemove',handleMouseMove)
        }
    },[])
    
  return (
    <div>
        <h1>Window Width: {state.windowWidth}</h1>
        <h1>mouse Position , x:{state.mousePosition.x} y:{state.mousePosition.y}</h1>
        <h1>Button Clicks : {state.buttonClicks}</h1>
        <button onClick={()=>{
            setState((prevState)=>({...prevState,buttonClicks:prevState.buttonClicks+1}))
        }}>Increment</button>
    </div>
  )
}
/**The initial 0 is set because React uses the default value from useState.
Event listeners don’t trigger until the corresponding event (like resize) happens.
Adding an immediate call to handleResize() ensures the state is updated with the correct window width right after the component mounts. */
export default WindowResizeEx