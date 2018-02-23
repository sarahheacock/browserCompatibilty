import React,{Component} from "react";
import { connect } from "react-redux";
import { getKeywords } from "../actions";
import KeywordItem from "../components/keyword_item"

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
  
  showData = (data) => (
    data.list ?
      data.list.map( item => (
        // console.log(item)
        <KeywordItem {...item} key={item._id}/>
      ))
    :null
  )
  

  render() {
    // const myData = data.list ? data.list.map((item) => (<div>{item}</div>)) : null;
    return (
      <div>
        {/* {myData} */}
        {this.showData(this.props.data)}
      </div>
    )
  }
}



export default connect(mapStateToProps)(HomeContainer);
