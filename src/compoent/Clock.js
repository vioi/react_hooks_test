import React from "react"
class Clock extends React.Component{
    constructor(props){
    super(props);
    this.state ={
      date:new Date(),
      status:false
    }
    }
    doTick(){
      this.timeId = setInterval(() => {
        this.setState({"date":new Date()})
      }, 1000);
    }
    changeStatus(){
      this.state.status?this.doTick():clearInterval(this.timeId);
      this.setState({status:!this.state.status})
    };
    componentDidMount(){
      this.doTick.bind(this)
    }
    render(){
    const timeTxt = 
          <div>
              <h3>{this.state.date.toLocaleTimeString()}</h3>
              <button onClick={this.changeStatus.bind(this)}>{this.state.status?"开启":"关闭"}</button>
          </div>
      return (timeTxt);
    }
}
export default Clock;
