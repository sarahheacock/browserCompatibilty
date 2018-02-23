import React,{Component} from "react";
import {connect} from "react-redux";
import getKeywords from "../actions"

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

class HomeContainer extends Component {
  componentDidMount(){
    console.log("hello");
    console.log(this.props.data);
    // this.props.dispatch(getKeywords());
  }
  
  // showData = (data) => {
  //   return 
  // }
  // 
  render() {
    const myData = data.list ? data.list.map((item) => (<div>{item}</div>)) : null;
    return (
      <div>
        {myData}
      </div>
    )
  }
}



export default connect(mapStateToProps)(HomeContainer);
