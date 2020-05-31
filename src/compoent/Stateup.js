import React from "react"
function BoilingVerdict(props){
    return props.celsius>=100
    ? <p>水可以沸腾</p>
    :<p>水不能沸腾</p>
  }
  class Calculator extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        temperature:'100'
      }
    }
    inputTemp(e){
      this.setState({temperature:e.target.value})
    }
  
    render(){
      return (
        <div>
          <BoilingVerdict celsius={this.state.temperature} /> 
        {/* <input type="text" value = {this.state.temperature} onChange={(e)=>this.inputTemp(e)}></input> */}
       {/* 或者 */}<input type="text" value = {this.state.temperature} onChange={this.inputTemp.bind(this)}></input>
        </div>
        
      )
    }
  }
  export default BoilingVerdict;
  