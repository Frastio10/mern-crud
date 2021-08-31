import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import axios from 'axios'

import store from './config/store'

import NavMenu from './components/NavMenu'
import Post from './components/Post'

import Login from './pages/Login'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'


function App() {

  const [data, setData] = useState([])

  const globalState = useSelector(state=> state)
  
  console.log(globalState)

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
            <Route path="/login" component={ Login }/>
            
            <Route path="/register" component= { PostDetail }/>

            <Route path="/create" component= { CreatePost }/>

            <Route path="/post/:postId" component= { PostDetail }/>
          
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
