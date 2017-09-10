import React, {Component} from 'react'
import PropTypes from 'prop-types'

function Comment({comment}){
   
    return (
        <p>{comment.text}<br />{comment.user}</p>
    )
}

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment