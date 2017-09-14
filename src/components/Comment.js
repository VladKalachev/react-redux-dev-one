import React, {Component} from 'react'
import PropTypes from 'prop-types'


function Comment({comment}){
   
    return (
        <div>
            <p>{comment.text}<br />{comment.user}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment