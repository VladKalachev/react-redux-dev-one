import React, {Component} from 'react'

export default function Comment(props){
    const comments = props.comment
    //console.log(comments)
    const commetList = comments.map((comment) =>
        <li key={comment.id}>{comment.user}</li>
    )
    if(comments == undefined){
        return(
            null
        )
    } else{
        return (
            <ul style={{ border: '1px solid red'}}>{commetList}</ul>
        )
    } 

    
}