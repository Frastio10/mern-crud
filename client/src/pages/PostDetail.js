import React,{ useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'

function PostDetail(){

    let { postId } = useParams();
    
    const [data, setData] = useState([])
    const history = useHistory();
    useEffect( () => {
      const fetchData = async () => {
        const res = await axios(`http://localhost:4000/v1/posts/${postId}`)
        setData(res.data)
        
        console.log(res.data)
      }
  
      fetchData()
    },[])

    // const deleteData = (postId) => {
    //   axios.delete('localhost:4000/v1/posts/' + postId)
    //   .then(
    //     history.push("/")
    //   );
    // }

    return (
        <Container className="my-5">
            <h1>{ data.title }</h1>
            <img className="w-100" src={ "http://localhost:4000/"+ data.image }/>
            <p>{ data.content }</p>
            {/* <button onClick={deleteData(postId)}>Delete</button> */}
        </Container>
    )
}

export default PostDetail