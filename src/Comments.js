import React, {Component} from 'react'

export default function Comment(props){
    const comments = props.comment
    
    if(!comments || !comments.length) return <h1>Not comments</h1>
    const commetList = comments.map((comment) =>{
        return <li key={comment.id}>{comment.user}</li>  
    })
          

    return (
        <ul style={{ border: '1px solid red'}}>{commetList}</ul>
    )


    
}