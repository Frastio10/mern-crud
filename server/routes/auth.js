import express from 'express' 
import { body } from 'express-validator'
import {register} from '../controllers/auth.js'
const router = express.Router()

router.post('/register',
    [
        body('name').isLength({min:3, max: 15}).withMessage('Username must be at least 3 characters long'),
        body('email').isEmail().withMessage('email invalid'),
        body('password').isLength({min: 5}).withMessage('Password must be atleast 5 characters long')
    ] , register)

export { router }