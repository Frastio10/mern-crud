import path from 'path'
import fs from 'fs'

import { validationResult } from 'express-validator'
import PostSchema from '../models/post.js'

const __dirname = path.resolve(); //__dirname isnt defined in ES6 so i used this to fix it (from stackoverflow ofc)

//handle post requests
const createPost = (req, res, next) => {
    //get errors result from express-validator
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Invalid request')
        err.errStatus = 400
        err.data = errors.array()
        throw err
    }
    
    if(!req.file){ //check if the file exists or uploaded
        const err = new Error('Please, upload the image')
        err.errStatus = 422
        throw err
    }
    
    const title = req.body.title
    const content = req.body.content
    const image = req.file.path
    const Posts = new PostSchema({
        title: title,
        content: content,
        image: image,
        author: {
            _id: 1,
            name: 'fratio '
        }
    })
    
    Posts.save() //saves data to db
    .then(result =>{
        res.status(201).json({
            description: "successfully created",
            data : result,
        })
        next()
    })
    .catch(err =>console.log(err))
}

//handle get all posts
const getPosts = (req, res, next) => {
    PostSchema.find()
        .then(result => {
            res.status(200).json({
                description : "Showing all posts",
                data :  result
            })
        })
        .catch( err => next(err))
}

//get single post by id
const getPostById = (req, res, next)=>{
    PostSchema.findById(req.params.postId)
    .then(result =>{
        if(!result){//checks if the result exists  or the id is valid
            const err = new Error('Post not found')
            err.errorStatus = 404
            throw err 
        }
        res.status(200).json(result)
    })
    .catch( err => next(err))
}

//edit existsing post
const updatePost = (req, res, next)=>{
    //get errors result from express-validator
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Invalid request')
        err.errStatus = 400
        err.data = errors.array()
        throw err
    }
    
    if(!req.file){ //checks if the file exists or uploaded
        const err = new Error('Please, upload the image')
        err.errStatus = 422
        throw err
    }
    
    const title = req.body.title
    const content = req.body.content
    const image = req.file.path
    PostSchema.findById(req.params.postId)
    .then(post => {
        if(!post){ //checks if the post exists
            const err = new Error('Post not found')
            err.errorStatus = 404
            throw err
        }

        post.title = title
        post.content = content
        post.image = image

        return post.save()
    })
    .then(result=>{
        res.status(200).json({
            description: 'Post has been successfully updated',
            data: result
        })
    })
    .catch( err => next(err))
}

//delete image
const deleteImage = (filePath) => {
    filePath = path.join(__dirname,  filePath)
    fs.unlink(filePath, err => console.log(err))
}

//delete post from the database
const deletePost = (req, res, next)=>{
   PostSchema.findById(req.params.postId)
   .then(post => {
       if(!post){
           const err = new Error('Post not found')
           err.errorStatus = 404
           throw err
       } 
       deleteImage(post.image)
       return PostSchema.findByIdAndRemove(req.params.postId)
   })
   .then(result=>
    res.status(200).json({
            description: "Data has been successfully deleted",
            data: result
        })
    )
   .catch( err => next(err))
}

export {
    createPost,
    deletePost,
    getPosts,
    updatePost,
    getPostById
}