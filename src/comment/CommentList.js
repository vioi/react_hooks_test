import React, { Component, useContext,useState,useImperativeHandle,forwardRef} from 'react'
import Comment from './CommentItem'
 
let CommentList =(props,ref)=>{
  //const {params} = props; 第一种接受父传的数据
  const {Context} = props;
  const params = useContext(Context);
  return (
    <div>
      {params.map((comment, i) =>
        <Comment comment={comment} key={i} />
      )}
    </div>
  )
}
export default CommentList