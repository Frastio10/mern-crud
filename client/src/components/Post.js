import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Post(props){
    
    const {
        linkDetail,
        title,
        content,
    } = props


    return (
        <div className="post w-100 border-bottom py-3">
            <h5 className="mb-1">{ title }</h5>
            <p>{ content }</p>
            <Link to={{ pathname: linkDetail} }>Read more..</Link>
        </div>
    )
}

export default Post