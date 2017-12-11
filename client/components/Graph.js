import React, {Component} from 'react';
import { connect } from 'react-redux';
import createCharts from '../coffee-data'

class Graph extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="charts-container">
          <div className="charts-panel">
            <canvas id={this.props.id}></canvas></div></div>
    )
  }

  componentDidMount() {
    var wrapper = (my_graphID) => {
      return function(){ createCharts(my_graphID)}
    } 
    window.addEventListener('load', wrapper(this.props.id));
  }
}

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Graph);