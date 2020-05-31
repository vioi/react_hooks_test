import React,{useRef, useState,createContext, useEffect} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
function CommentApp(){
    const inputComp = useRef();
    const [params,setParams] = useState([]);
    const Context = createContext(null);
      function setUserContent(){
        setParams(params=>[...params,{username:inputComp.current.username,content:inputComp.current.content}])
        console.warn(params);
        
      }
    return(
        <div className = 'wrapper'>
            <CommentInput ref={inputComp}/>
            <div className='comment-field-button'>
            <button onClick={()=>setUserContent()}>
              发布
            </button>
          </div>
          {/* <CommentList params={params}/> 第一种父传子的方式*/}
          <Context.Provider  value={params}> {/*第二种通过createContext父传子*/}
          <CommentList Context={Context}/>
          </Context.Provider>
        </div>

    )
}

export default CommentApp;