import { validationResult } from "express-validator"

const register = (req,res,next) =>{
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error("Invalid Request")
        err.errorStatus = 400
        err.data = errors.array();
        throw err;
    }

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const result = {
        description: "registered successfully",
        data:{
            _id:1,
            name: name,
            email: email,
            password: password
        }
    }

    res.status(201).json(result) 
    next()
}

export { register } 