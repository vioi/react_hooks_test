import React from "react"

function UserGreeting(props) {
    return <h1>Welcome back!!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {//这种，组件会根据props中的isLoggedIn值变化而重新渲染
    console.warn(props);
    return props.isLoggedIn
        ? <UserGreeting />
        :<GuestGreeting />    
  }
  
  // class Greeting extends React.Component{  //这种，组件不会根据props中的isLoggedIn值变化而重新渲染
  //   constructor(props){
  //     console.warn(props);
  //     super(props);
  //     this.state={
  //       isLoggedIn:this.props.isLoggedIn
  //     };
  //   }
  //   render(){
  //     if (this.state.isLoggedIn) {
  //       return <UserGreeting />;
  //     }
  //       return <GuestGreeting />;
  //   }
  // }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  
  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      return (
        <div>
          <Greeting isLoggedIn={this.state.isLoggedIn} />
          {
              isLoggedIn
              ?<LogoutButton onClick={()=>this.handleLogoutClick()} />
              :<LoginButton onClick={()=>this.handleLoginClick()} />
          }
        </div>
      );
    }
  }

  export default LoginControl;