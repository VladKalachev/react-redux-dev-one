import React, {Component} from 'react'

function Comment({comment}){
   
    return (
        <p>{comment.text}<br />{comment.user}</p>
    )
}

export default Comment