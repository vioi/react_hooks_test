import React, { Component } from 'react'

const Comment = (props,ref)=>{
    const {comment} = props;
    return (
        <div className='comment'>
          <div className='comment-user'>
            <span>{comment.username} </span>：
          </div>
          <p>{comment.content}</p>
        </div>
      )
}

export default Comment