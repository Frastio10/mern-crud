import React, { useEffect } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

function CreatePost(){

    

    return(   
        <>     
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title.." />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
            </Form>
        </>
     )
}

export default CreatePost