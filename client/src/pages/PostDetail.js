import React,{ useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function PostDetail(){

    let { postId } = useParams();
    
    const [data, setData] = useState([])
  
    useEffect( () => {
      const fetchData = async () => {
        const res = await axios(`http://localhost:4000/v1/posts/${postId}`)
        setData(res.data)
        
        console.log(res.data)
      }
  
      fetchData()
    },[])

    return (
        <Container className="my-5">
            <h1>{ data.title }</h1>
            <img className="w-100" src={ "http://localhost:4000/"+ data.image.replace('storage/','')}/>
            <p>{ data.content }</p>
        </Container>
    )
}

export default PostDetail