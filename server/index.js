import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import dotenv from 'dotenv' 
import multer from 'multer'


import { router as postRoutes } from './routes/post.js'
import { router as authRoutes } from './routes/auth.js'

//setup
const app = express()
app.use(express.json());
dotenv.config();

const __dirname = path.resolve(); //__dirname isnt defined in ES6 so i used this to fix it (from stackoverflow ofc)

const imagesDir = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage/images') //set the destination where to save the images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() +'-'+ file.originalname); //set the image files name
    }
})

const fileFilter = (req, file, cb) => { //accepts these types only 
    if(file.mimetype === 'image/png' || 
       file.mimetype === 'image/jpg' || 
       file.mimetype === 'image/jpeg'){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.use('/images', express.static(path.join(__dirname, './storage/images'))) //get images
app.use(multer({storage: imagesDir, fileFilter: fileFilter}).single('image')) //multer setup

app.use((req, res, next) => { //set headers
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next();
})


//route groups
app.use('/v1/posts', postRoutes)
app.use('/v1/auth', authRoutes)

//validation
app.use((error,req,res,next) => { 
    const status = error.errStatus || 500
    const message = error.message
    const data = error.data
    res.status(status).json({message : message, data: data}) //dynamic response status and json response
})

//connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(process.env.PORT, ()=>{ console.log(`Server is listening on port ${process.env.PORT}`)}))
.catch(err => console.log(err))
