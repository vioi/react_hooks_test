import React, { useState, createContext, useContext } from "react";

//父子传值，兄弟共享

function OneChild(props){
    const {Context}= props;//获取父组件通过props方式传的数据
    const params = useContext(Context);//获取父组件通过createContext方式传递的数据
    return (<button>{params.oneParam}</button>);
}

function TwoChild(props){
    const {Context}= props;//获取父组件通过props方式传的数据
    const params = useContext(Context);//获取父组件通过createContext方式传递的数据
    return (<button>{params.twoParam}</button>);
}

function ThreeChild(props){
    const {Context}= props;//获取父组件通过props方式传的数据
    const params = useContext(Context);//获取父组件通过createContext方式传递的数据
    return (
        <div>
            {params.threeParam.map((item,i)=>{return <li key={i}>{item}</li>})}
        </div>
    );
}

function Persion(){
    const Context = createContext(null);
    //父亲创建三个状态oneParam和twoParam
    const [oneParam, setOneParam] = useState(0); 
    const [twoParam, setTwoParam] = useState(10);
    const [threeParam, setthreeParam] = useState([0]);

    //setOneParam(oneParam+1);//错误的
    //setTwoParam(twoParam+1);//错误的
    //不能在函数组件主体内部立即调用状态设置器,这迫使React使用相同
    //的道具再次重新调用函数,最终导致再次调用状态设置器,从而触发做出反应以再次调用您的函数…等等.
    const updateParams = ()=>{
        setOneParam(oneParam+1);
        setTwoParam(twoParam+1);
        setthreeParam(threeParam=>[...threeParam,oneParam+1])//如果状态类型为数组，更新该状态的需要这样写
    }
    return (
        <div>
          <button onClick={updateParams}>点击</button>
          <Context.Provider value={{oneParam, twoParam,threeParam}}>
            <OneChild Context={Context}></OneChild>
            <TwoChild Context={Context}></TwoChild>  
            <ThreeChild Context={Context}></ThreeChild>         
          </Context.Provider>
          
        </div>
      )
}

export default Persion;