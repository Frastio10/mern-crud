import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import axios from 'axios'

import NavMenu from './components/NavMenu'
import Post from './components/Post'

import Login from './pages/Login'
import PostDetail from './pages/PostDetail'


function App() {

  const [data, setData] = useState([])
  
  useEffect( () => {
    const fetchData = async () => {
      const res = await axios('http://localhost:4000/v1/posts')
      setData(res.data.data)
      console.log(res.data.data)
    }

    fetchData()
  },[])

  return (
    <div className="App">
      <NavMenu/>
      <Container>
        <Switch>
            <Route path="/login" component={Login}>
            
            </Route>
            <Route path="/register">
              <PostDetail/>
            </Route>
            <Route path="/post/:postId">
              <PostDetail/>
            </Route>
            <Route exact path="/">
              {
                data.map(item => (
                  <Post key={ item._id } title={ item.title } content={ item.content } linkDetail = {"/post/" + item._id } />
                ))
              }
            </Route>
          </Switch>
      </Container>

    </div>
  );
}

export default App;
