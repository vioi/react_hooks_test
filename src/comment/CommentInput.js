import React, { Component, useState,useImperativeHandle,forwardRef} from 'react'

const CommentInput = forwardRef((props,ref)=>{
    const [username,setUserName] = useState();
    const [content,setContent] = useState();
    useImperativeHandle(ref,()=>({
      "username":username,
      "content":content
    }))
    return (
        <div className='comment-input'>
          <div className='comment-field'>
            <span className='comment-field-name'>用户名：</span>
            <div className='comment-field-input'>
              <input value={username} onChange={e=>setUserName(e.target.value)} />
            </div>
          </div>
          <div className='comment-field'>
            <span className='comment-field-name'>评论内容：</span>
            <div className='comment-field-input'>
              <textarea  value={content} onChange={e=>setContent(e.target.value)} />
            </div>
          </div>
          
        </div>
      )
  
})


export default CommentInput;