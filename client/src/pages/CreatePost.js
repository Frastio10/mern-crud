import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

function CreatePost(){

    const [data, setData] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const getData = (e) =>{ 
        e.preventDefault()
    }

    const updateTitle = e =>{
        setTitle(e.target.value)
    }

    // const savePost = () => {
    //     const config = {
    //         headers: { 'content-type': 'multipart/form-data' }
    //     }

    //     axios({
    //         method: 'POST',
    //         url: 'localhost:4000/v1/posts/create',
    //         data: {
    //           title: title,
    //           content: comtent,
    //           image: 
    //         }
    //       });
    // }

    return(   
        <>     
            <Form onSubmit="">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title.." />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
     )
}

export default CreatePost