import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'


function SearchForPosts() {
    const [post,setPost] = useState({})//object -- refer to url --a post is a single object not an array of objects
    const [comments,setComments]=useState([]) //array of objects because there are multiple comments for each post
    const [id,setId]=useState(0)
    const [buttonId,setButtonId]=useState(0)//عشان اخلي السيرش يشتغل لما ادوس على الزرار
    //use effect dependency : buttonId . to apply logic only upon change on button id ,and not the label text 
    //because if done on label text , if i type 61 , use effect is going to be called (triggered) twice 
    //because it tracks each input

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)//dynamically fetch each post
        .then((response)=>{
            //=>{} because this is a promise
            setPost(response.data)
        })
        .catch((error)=>(console.log(error)))

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response)=>{
            setComments(response.data)
        })
        .catch((error)=>{
            console.log('an error occurred',error);
            
        })
    },[buttonId])//track button id not id because id will be changed on every input while button id is changed onClick only

  return (
    <div>
        <div className="search">
            <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <button className='toggleBtn BTN' onClick={()=>{setButtonId(id)}}>Search</button>{/**set the button id with the typed number so use effect knows if its a different id than before , it'll fetch the new post */}
            {
                buttonId!==0?(
                    <>
                    {/** * for conditional rendering in this example , dont forget ()?():() , and wrap in a fragment <></> , also !== not !=
 */}
                    
                        <h1>post Id : {post.id}</h1>
            <div className='cards'>
                <div key={post.id} className="card">
                    <h3>title: {post.title}</h3>
                    <h4>body :{post.body}</h4>
                </div>
            </div>

            <h1>Comments :</h1>
            <div className="cards">
                {
                    comments.map((value)=>(
                        <div key={value.id} className='card'>{/**value.id not comment.id */}
                            <h3>name:{value.name}</h3>
                            <h3>Email:{value.email}</h3>
                            <h4>comment:{value.body}</h4>
                        </div>
                    ))
                }
            </div>
                    </>
                ):(<p>enter a valid id and press search</p>)
            }

        </div>
    </div>
  )
}

export default SearchForPosts