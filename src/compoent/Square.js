import React from "react"
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value:props.value,
        };
      }

    render() {
      return (
        <button className="square"  onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }
  
export default Square;