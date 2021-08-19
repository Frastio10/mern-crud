import mongoose from 'mongoose'

const Schema = mongoose.Schema
const PostSchema = new Schema({
    title: {
        type : String,
        required : true,
    },
    content: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    },
    author: {
        type: Object,
        required: true
    }
},{
    timestamps: true
})

export default  mongoose.model("PostSchema", PostSchema) 