import React,{Component} from "react";
import { connect } from "react-redux";
import { getKeywords } from "../actions";
import KeywordItem from "../components/keyword_item";

import Home from '../components/Home.js';

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

class HomeContainer extends Component {
  componentDidMount(){
    console.log("hello");
    console.log(this.props);
    this.props.dispatch(getKeywords());
  }


  render() {
    // const myData = data.list ? data.list.map((item) => (<div>{item}</div>)) : null;
    return (
      <div>
        <Home />
        {JSON.stringify(this.props.data, null, 4)}
      </div>
    )
  }
}



export default connect(mapStateToProps)(HomeContainer);
