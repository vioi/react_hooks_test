import React from "react"
function One (){
    return (
      <div>thsi is one</div>
    )
}
function Two (props){
  return (
    <div>thsi is two</div>
  )
}
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.one}
      {props.two}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder one={<One/>} two={<Two/>} color="blue">
    </FancyBorder>
  );
}
export default WelcomeDialog;